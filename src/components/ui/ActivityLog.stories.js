import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLog from './ActivityLog'

storiesOf('UI Components|ActivityLog', module)
  .add('basic usage', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={faker.random.words(2)}
      info={faker.random.words(2)}
    />
  ))

storiesOf('UI Components|ActivityLog/States', module)
  .add('label & value', () => (
    <ActivityLog
      label={faker.random.words(2)}
      value={faker.random.words(2)}
    />
  ))
  .add('value only', () => (
    <ActivityLog
      value={faker.random.words(2)}
    />
  ))
  .add('label only', () => (
    <ActivityLog
      label={faker.random.words(2)}
    />
  ))

storiesOf('UI Components|ActivityLog/Use Cases', module)
  .add('grouped activities', () => (
    <ActivityLog
      label={faker.random.words(2)}
      groupValues={faker.random.words(3)}
      value={Array(faker.random.number(3))
        .fill({})
        .map(() => ({
          label: faker.random.words(2),
          value: faker.random.words(2)
        }))
      }
    />
  ))
  .add('grouped activities with info', () => (
    <ActivityLog
      label={faker.random.words(2)}
      groupValues={faker.random.words(3)}
      value={Array(faker.random.number(3))
        .fill({})
        .map(() => ({
          label: faker.random.words(2),
          value: faker.random.words(2),
          info: faker.random.words(2)
        }))
      }
    />
  ))

storiesOf('UI Components|ActivityLog/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ActivityLog />
  ))
