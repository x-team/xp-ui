// @flow

import React from 'react'
import cmz from 'cmz'

import InputField from '../../forms/InputField'
import TextareaEditor from '../TextareaEditor/TextareaEditor'
import SkillsSelector from '../SkillsSelector'
import Timeframe from '../Timeframe'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

import type { Experience, SkillOption } from '../../../utils/types'
type Props = {
  experience: Experience,
  skills: Array<SkillOption>,
  onValueChanged: Experience => any
}

const cx = {
  root: cmz(typo.regularText),

  header: cmz(`
    & {
      display: flex
      flex-direction: row
    }
    & div {
      margin-bottom: 0.4em
      flex-grow: 2
    }
    & em {
      text-align: center
    }
  `),

  at: cmz(`
    & {
      font-weight: normal
      color: ${theme.baseGray}
      margin: auto 0.8em
    }
  `),

  highlights: cmz(`
    & {
      display: flex
      flex-direction: column
      align-items: flex-start
    }
  `)
}

function optionsFromSkills (skills = []) {
  return skills.map(skill => ({ value: skill, label: skill }))
}

function skillsFromOptions (options) {
  return options.map(option => option.value.toString())
}

function WorkExperienceEntryEditor (props: Props) {
  const { experience, onValueChanged } = props
  if (!experience) {
    return null
  }

  const valueChanged = update => onValueChanged(Object.assign({}, experience, update))
  const {
    role,
    company,
    startDate,
    endDate,
    skills,
    highlights
  } = experience

  return <div className={cx.root}>
    <div className={cx.header}>
      <div><InputField value={role} name='role' placeholder='Role' required onChange={event => valueChanged({ role: event.target.value })} /></div>
      <em className={cx.at}> at </em>
      <div><InputField value={company} name='company' placeholder='Company' required onChange={event => valueChanged({ company: event.target.value })} /></div>
    </div>
    <div>
      <Timeframe startDate={startDate} endDate={endDate} noEndDate={!endDate}
        onChange={({ startDate, endDate }) => valueChanged({ startDate, endDate })}
      />
    </div>
    <div>
      <p>Skills</p>
      <SkillsSelector options={props.skills} applicantSkills={optionsFromSkills(skills)}
        onChange={selectedSkills => valueChanged({ skills: skillsFromOptions(selectedSkills) })} />
    </div>
    <div className={cx.highlights}>
      <p>Highlights</p>
      <TextareaEditor text={highlights || ''} placeholder='Highlights' charLimit={1000}
        onChange={text => valueChanged({ highlights: text })} />
    </div>
  </div>
}

export default WorkExperienceEntryEditor
