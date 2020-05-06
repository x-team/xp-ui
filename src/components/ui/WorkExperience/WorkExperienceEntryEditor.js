// @flow

import React from 'react'
import cmz from 'cmz'

import InputField from '../../forms/InputField'
import RichTextEditor from '../RichTextEditor'
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
    & div {
      display: inline-block
      margin-bottom: 0.4em
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

export default function WorkExperienceEntryEditor (props: Props) {
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
      <InputField value={role} name='role' placeholder='Role' required onChange={event => valueChanged({ role: event.target.value })} />
      <em className={cx.at}> at </em>
      <InputField value={company} name='company' placeholder='Company' required onChange={event => valueChanged({ company: event.target.value })} />
    </div>
    <div>
      <Timeframe startDate={startDate} endDate={endDate} noEndDate={!endDate}
        onChange={({ startDate, endDate }) => valueChanged({ startDate, endDate })}
      />
    </div>
    <div>
      <p>Skills</p>
      <SkillsSelector skills={props.skills} applicantSkills={optionsFromSkills(skills)}
        onChange={selectedSkills => valueChanged({ skills: skillsFromOptions(selectedSkills) })} />
    </div>
    <div className={cx.highlights}>
      <p>Highlights</p>
      <RichTextEditor initialValue={highlights || ''} placeholder='Highlights' characterLimit={1000}
        handleChange={({ markdown }) => valueChanged({ highlights: markdown })} />
    </div>
  </div>
}
