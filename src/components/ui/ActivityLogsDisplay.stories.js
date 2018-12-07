import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const randomNumber = (max = 10, min = 1) =>
  Math.floor(Math.random() * Math.floor(max - min)) + min

const sampleLogs = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: (
      <ActivityLogsDisplay.Log
        label={faker.random.words(randomNumber(4, 1))}
        value={faker.random.words(randomNumber(4, 0))}
      />
    ),
    user: `by ${Math.random() >= 0.6
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
