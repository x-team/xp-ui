// @flow

import React, { Component } from 'react'
import cmz from 'cmz'

import Button from '../Button'
import InlineEditor from '../InlineEditor'
import PencilButton from '../PencilButton'
import SvgIcon from '../SvgIcon'

import type { EditorProps, PresenterProps } from '../InlineEditor'
import type { Experience, SkillOption } from '../../../utils/types'

import WorkExperienceEntryPresenter from './WorkExperienceEntryPresenter'
import WorkExperienceEntryEditor from './WorkExperienceEntryEditor'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

export type Props = {
  experiences: ?Array<Experience>,
  skills: Array<SkillOption>,
  onSave: ({ experience: Experience, isNew: boolean }) => Promise<any>
}

type State = {
  showNewExperience: boolean
}

// This stub experience is used as a property when creating new experience
// entries.
const experienceStub = {
  role: '',
  company: '',
  startDate: new Date(),
  endDate: null,
  skills: [],
  highlights: ''
}

const cx = {
  root: cmz(typo.regularText),

  experienceWrapper: cmz(`
    margin-bottom: 0.8em
    padding-top: 0.4em
    padding-bottom: 0.6em
    border-bottom: 1px solid ${theme.baseSilver}
  `),

  presenterWrapper: cmz(`
    display: flex
    flex-direction: row
  `),

  editGutter: cmz(`
    padding-top: 0.2em
    width: 2em
    overflow: hide
  `)
}

const renderEditor = ({ value: { experience, skills }, onValueChange }: EditorProps) => (
  <WorkExperienceEntryEditor experience={experience} skills={skills}
    onValueChanged={updatedExperience => onValueChange({ experience: updatedExperience, skills })}
  />
)

const renderPresenter = ({ value: { experience }, activateEditingMode, isHover }: PresenterProps) => (
  <div className={cx.presenterWrapper}>
    <div className={cx.editGutter}>
      {isHover && <PencilButton color='monochrome' onClick={activateEditingMode} />}
    </div>
    <WorkExperienceEntryPresenter experience={experience} />
  </div>
)

export default class WorkExperience extends Component<Props, State> {
  state = {
    showNewExperience: false
  }

  handleUpdate = ({ experience }: { experience: Experience }) => this.props.onSave({ experience, isNew: false })

  handleSaveNew = async ({ experience }: { experience: Experience }) => {
    try {
      await this.props.onSave({ experience, isNew: true })
    } finally {
      this.setState({ showNewExperience: false })
    }
  }

  showNewExperience = () => this.setState({ showNewExperience: true })

  render () {
    const { experiences, skills } = this.props
    return <div className={cx.root}>

      {experiences && experiences.length
        ? experiences.map((experience, index) =>
          <div className={cx.experienceWrapper} key={index}>
            <InlineEditor
              value={{ experience, skills }}
              shouldSaveOnEnter={false}
              onSave={this.handleUpdate}
              presenter={renderPresenter}
              editor={renderEditor}
            />
          </div>
        )
        : <em style={{ display: 'block' }}>No work experience provided</em>
      }

      {this.state.showNewExperience
        ? (
          <div className={cx.experienceWrapper}>
            <InlineEditor
              value={{ experience: experienceStub, skills }}
              shouldSaveOnEnter={false}
              onSave={this.handleSaveNew}
              onCancel={() => this.setState({ showNewExperience: false })}
              presenter={({ activateEditingMode }) => window.setTimeout(activateEditingMode)}
              editor={renderEditor}
            />
          </div>
        )
        : null
      }

      <Button color='silver' onClick={this.showNewExperience}><SvgIcon icon='plus' color={theme.baseDark} /> Add New Experience</Button>
    </div>
  }
}
