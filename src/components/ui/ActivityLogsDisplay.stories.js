import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const sampleLogs = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: faker.random.number(10) >= 7 ? (
      <ActivityLogsDisplay.Log
        label={faker.random.words()}
        value={faker.random.word()}
      />
    ) : (
      <ActivityLogsDisplay.Log
        label={faker.random.words()}
        value={faker.random.words()}
        details={Array(faker.random.number(3)).fill('').map(() => faker.random.words())}
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
