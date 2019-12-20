import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import EmptyState from './EmptyState'

storiesOf('UI Components|EmptyState', module)
  .add('basic usage', () => (
    <EmptyState heading='No jobs at the moment...'>
      <span>
        Please check the Jobs Board later. In the meantime make sure your <a
          href='https://www.linkedin.com/in/'
          target='_blank'
          rel='noopener noreferrer'
        >profile is up-to-date</a>.
      </span>
    </EmptyState>
  ))

storiesOf('UI Components|EmptyState/Debug', module)
  .add('without heading', () => (
    <EmptyState>
      {faker.lorem.paragraph()}
    </EmptyState>
  ))
  .add('without children', () => (
    <EmptyState heading={faker.name.jobTitle()} />
  ))
  .add('missing props', () => (
    <EmptyState />
  ))
