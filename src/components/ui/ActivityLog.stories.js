import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLog from './ActivityLog'

storiesOf('UI Components/ActivityLogsDisplay/ActivityLog', module)
  .add('single value', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={faker.random.words(2)}
    />
  ))
  .add('grouped values', () => (
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
  .add('missing props (does component explode?)', () => (
    <ActivityLog />
  ))
