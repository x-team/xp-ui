import React from 'react'
import { storiesOf } from '@storybook/react'

import ApplicantGrid from './ApplicantGrid'
import { StoryApplicantBadge } from './ApplicantBadge.stories'

export const getApplicantBadges = () => Array(25).fill('').map((each, index) => (
  <StoryApplicantBadge active={index === 1} />
))

storiesOf('UI Components|ApplicantGrid', module)
  .add('basic usage', () => (
    <ApplicantGrid
      items={getApplicantBadges()}
      visible={3}
      increment={2}
    />
  ))

storiesOf('UI Components|ApplicantGrid/Debug', module)
  .add('missing props (does component explode?)', () =>
    <ApplicantGrid />
  )
