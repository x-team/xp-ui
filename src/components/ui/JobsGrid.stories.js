// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import faker from 'faker'

import JobsGrid from './JobsGrid'
import JobCard from './JobCard'
import { AppLink } from './JobCard.stories'

export const jobCards = (amount: number = 15) => Array(amount)
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
        link={AppLink}
        onApply={action('onApply')}
        onWithdraw={action('onWithdraw')}
      />
    )
  })

storiesOf('UI Components|JobsGrid', module)
  .add('basic usage', () => (
    <JobsGrid
      jobCards={jobCards()}
    />
  ))

storiesOf('UI Components|JobsGrid/Debug', module)
  .add('missing props', () => (
    <JobsGrid />
  ))
