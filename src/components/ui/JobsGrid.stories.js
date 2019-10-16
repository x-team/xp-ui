// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import faker from 'faker'

import JobsGrid from './JobsGrid'
import JobCard from './JobCard'
import { JobCardLink } from './JobCard.stories'

export const jobCards = Array(15)
  .fill('')
  .map((item, i) => {
    const applied = faker.random.boolean()
    return (
      <JobCard
        key={`jobcard-${i}`}
        applied={applied}
        name={faker.random.words()}
        summary={faker.lorem.words(30)}
        message={applied ? faker.random.words() : ''}
        link={JobCardLink}
        onApply={action('onApply')}
        onWithdraw={action('onWithdraw')}
      />
    )
  })

storiesOf('UI Components/XP-Registration/JobsGrid', module)
  .add('default', () => (
    <JobsGrid
      jobCards={jobCards}
    />
  ))

storiesOf('UI Components/XP-Registration/JobsGrid/Debug', module)
  .add('missing props (does component explode?)', () => (
    <JobsGrid />
  ))
