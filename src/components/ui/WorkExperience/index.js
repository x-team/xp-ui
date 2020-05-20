// @flow

import React, { Component } from 'react'
import cmz from 'cmz'

import Button from '../Button'
import InlineEditor from '../InlineEditor'
import PencilButton from '../PencilButton'

import type { EditorProps, PresenterProps } from '../InlineEditor'
import type { Experience, SkillOption } from '../../../utils/types'

import WorkExperienceEntryPresenter from './WorkExperienceEntryPresenter'
import WorkExperienceEntryEditor from './WorkExperienceEntryEditor'

import typo from '../../../styles/typo'

export type Props = {
  experiences: ?Array<Experience>,
  initialVisibleExperiences: number,
  skills: Array<SkillOption>,
  onSave: ({ experience: Experience, isNew: boolean }) => Promise<any>
}

type State = {
  showNewExperience: boolean,
  visibleExperiences: number
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
    margin-bottom: 1em
    padding-top: 0.4em
    padding-bottom: 0.6em
  `),

  buttons: cmz(`
    & * {
      margin-top: 0.4em
    }
  `)
}

const renderEditor = ({ value: { experience, skills }, onValueChange }: EditorProps) => (
  <WorkExperienceEntryEditor experience={experience} skills={skills}
    onValueChanged={updatedExperience => onValueChange({ experience: updatedExperience, skills })}
  />
)

const renderPresenter = ({ value: { experience }, activateEditingMode, isHover }: PresenterProps) => (
  <WorkExperienceEntryPresenter
    experience={experience}
    headerDecoration={isHover && (
      <PencilButton color='monochrome' onClick={activateEditingMode} />
    )}
  />
)

class WorkExperience extends Component<Props, State> {
  static defaultProps = {
    initialVisibleExperiences: 3
  }

  state = {
    showNewExperience: false,
    visibleExperiences: this.props.initialVisibleExperiences
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
  showAllExperience = () => this.setState({ visibleExperiences: Infinity })

  render () {
    const { experiences, skills } = this.props
    const visibleExperiences = (experiences || []).slice(0, this.state.visibleExperiences)

    return <div className={cx.root}>

      {visibleExperiences.length
        ? visibleExperiences.map((experience, index) =>
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

      {this.state.showNewExperience &&
        <div className={cx.experienceWrapper}>
          <InlineEditor
            value={{ experience: experienceStub, skills }}
            initialMode='edit'
            shouldSaveOnEnter={false}
            onSave={this.handleSaveNew}
            onCancel={() => this.setState({ showNewExperience: false })}
            presenter={renderPresenter}
            editor={renderEditor}
          />
        </div>
      }

      <div className={cx.buttons}>
        {experiences && experiences.length > visibleExperiences.length &&
          <Button wide outlined color='silver' onClick={this.showAllExperience}>View More...</Button>
        }

        {!this.state.showNewExperience &&
          <Button wide outlined color='silver' onClick={this.showNewExperience}>Add New Experience</Button>
        }
      </div>
    </div>
  }
}

export default WorkExperience
