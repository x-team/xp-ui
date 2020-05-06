// @flow

import React from 'react'

import InlineEditor from '../InlineEditor'

import WorkExperienceEntryPresenter from './WorkExperienceEntryPresenter'

import type { EditorProps, PresenterProps } from '../InlineEditor'
import type { Experience } from '../../../utils/types'

export type Props = {
  experiences: ?Array<Experience>,
}

export default function WorkExperience (props: Props) {
  const renderEditor = ({ value: { experience }, onValueChange, activateEditingMode, isHover }: EditorProps): any => (
    <p>TODO: XP-3736 Create new WorkExperienceEntryEditor component</p>
  )

  const renderPresenter = ({ value: { experience }, activateEditingMode, isHover }: PresenterProps) => (
    <WorkExperienceEntryPresenter experience={experience} />
  )

  const handleSave = (experience?: Experience) => {
    // TODO: XP-3737 Add Work Experience to the XP Admin Interface
  }

  const { experiences } = props
  return (
    <div>
      {experiences && experiences.length
        ? experiences.map(experience =>
          <InlineEditor
            value={{ experience }}
            onSave={handleSave}
            presenter={renderPresenter}
            editor={renderEditor}
          />)
        : <em>No work experience provided</em>}
    </div>
  )
}
