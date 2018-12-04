import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const sampleData = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: <span>{faker.random.words()}: <b>{faker.random.word()}</b></span>,
    author: `by ${faker.name.firstName()} ${faker.name.lastName()}`
  }))

storiesOf('UI Components/ActivityLogsDisplay', module)
  .add('complete', () => (
    <ActivityLogsDisplay
      logs={sampleData}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ActivityLogsDisplay />
  ))
