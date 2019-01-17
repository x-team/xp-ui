import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLog from './ActivityLog'

storiesOf('UI Components/ActivityLogsDisplay/ActivityLog', module)
  .add('single activity with value and label', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={faker.random.words(2)}
    />
  ))
  .add('single activity with only value', () => (
    <ActivityLog
      value={faker.random.words(2)}
    />
  ))
  .add('single activity with only label', () => (
    <ActivityLog
      label={faker.random.words(2)}
    />
  ))
  .add('grouped activities', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={Array(faker.random.number(3))
        .fill({})
        .map(() => ({
          label: faker.random.words(2),
          value: faker.random.words(2)
        }))
      }
    />
  ))
  .add('grouped activities with customised group values', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={Array(faker.random.number(3))
        .fill({})
        .map(() => ({
          label: faker.random.words(2),
          value: faker.random.words(2)
        }))
      }
      groupValues={faker.random.words(2)}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ActivityLog />
  ))
