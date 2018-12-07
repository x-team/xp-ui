import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const sampleLogs = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: (
      <ActivityLogsDisplay.Log
        label={faker.random.words(faker.random.number({ min: 1, max: 4, precision: 1 }))}
        value={faker.random.words(faker.random.number({ min: 0, max: 4, precision: 1 }))}
      />
    ),
    user: `by ${faker.random.number(10) >= 6
      ? faker.internet.email()
      : `${faker.name.firstName()} ${faker.name.lastName()}`
    }`
  }))

storiesOf('UI Components/ActivityLogsDisplay', module)
  .add('complete', () => (
    <ActivityLogsDisplay
      logs={sampleLogs}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ActivityLogsDisplay />
  ))
