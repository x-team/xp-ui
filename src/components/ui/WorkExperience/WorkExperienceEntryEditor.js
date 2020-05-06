// @flow

import React, { Component } from 'react'
import cmz from 'cmz'

import Button from '../Button'
import InputField from '../../forms/InputField'
import SkillsSelector from '../SkillsSelector'
import RichTextEditor from '../RichTextEditor'
import Timeframe from '../Timeframe'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

import type { Experience, SkillOption } from '../../../utils/types'
type State = Experience
type Props = {
  experience: Experience,
  skills: Array<SkillOption>,
  onSave: (experience: Experience) => void
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

export default class WorkExperienceEntryEditor extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { ...props.experience }
    console.log('initial exp', props.experience)
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

    return <div className={cx.root}>
      <div className={cx.header}>
        <InputField value={role} name='role' placeholder='Role' required onChange={event => this.setState({ role: event.target.value })} />
        <em className={cx.at}> at </em>
        <InputField value={company} name='company' placeholder='Company' required onChange={event => this.setState({ company: event.target.value })} />
      </div>
      <div>
        <Timeframe startDate={startDate} endDate={endDate} noEndDate={!endDate}
          onChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
        />
      </div>
      <div>
        <p>Skills</p>
        <SkillsSelector skills={this.props.skills} applicantSkills={optionsFromSkills(skills)}
          onChange={selectedSkills => this.setState({ skills: skillsFromOptions(selectedSkills) })} />
      </div>
      <div className={cx.highlights}>
        <p>Highlights</p>
        <RichTextEditor initialValue={highlights || ''} placeholder='Highlights' characterLimit={1000}
          handleChange={({ markdown }) => this.setState({ highlights: markdown })} />
      </div>
      <Button onClick={() => this.props.onSave(this.state)}>Save</Button>
    </div>
  }
}
