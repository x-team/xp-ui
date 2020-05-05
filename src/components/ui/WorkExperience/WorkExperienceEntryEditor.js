// @flow

import React, { Component } from 'react'
import cmz from 'cmz'

import Button from '../Button'
import InputField from '../../forms/InputField'
import SkillsSelector from '../SkillsSelector'
import TextareaEditor from '../TextareaEditor/TextareaEditor'
import Timeframe from '../Timeframe'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

import type { Experience } from '../../../utils/types'
type State = Experience
type Props = {
  experience: Experience,
  onSave: (experience: Experience) => void
}

const cx = {
  at: cmz(
    typo.regularText,
    `
      & {
        font-weight: normal
        color: ${theme.baseGray}
      }
    `
  )
}

function optionsFromSkills (skills = []) {
  return skills.map(skill => ({ value: skill, label: skill }))
}

function skillsFromOptions (options) {
  return options.map(option => option.value.toString())
}

export default class WorkExperienceEntryEditor extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { ...props.experience }
  }

  render () {
    if (!this.props.experience) {
      return null
    }

    const {
      role,
      company,
      startDate,
      endDate,
      skills,
      highlights
    } = this.state

    return <div>
      <div>
        <InputField value={role} name='role' placeholder='Role' required onChange={role => this.setState({ role })} />
        <em className={cx.at}> at </em>
        <InputField value={company} name='company' placeholder='Company' required onChange={company => this.setState({ company })} />
      </div>
      <div>
        <Timeframe startDate={startDate} endDate={endDate} noEndDate={!endDate}
          onChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
        />
      </div>
      <SkillsSelector skills={[]} applicantSkills={optionsFromSkills(skills)}
        onChange={selectedSkills => this.setState({ skills: skillsFromOptions(selectedSkills) })} />
      <TextareaEditor text={highlights || ''} placeholder='Highlights' charLimit={1000}
        onChange={highlights => this.setState({ highlights })} />
      <Button onClick={() => this.props.onSave(this.state)}>Save</Button>
    </div>
  }
}
