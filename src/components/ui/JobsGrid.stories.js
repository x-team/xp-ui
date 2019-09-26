// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'
import faker from 'faker'

import JobsGrid from './JobsGrid'
import JobCard from './JobCard'

const jobCards = Array(15)
  .fill('')
  .map((item, i) => {
    const applied = faker.random.boolean()
    return (
      <JobCard
        key={`jobcard-${i}`}
        applied={boolean('Applied', applied)}
        name={text('Name', faker.random.words())}
        description={text('Description', faker.lorem.paragraph())}
        message={text('Message', applied ? faker.random.words() : null)}
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
