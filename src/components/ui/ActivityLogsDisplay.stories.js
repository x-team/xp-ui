import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const sampleData = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: Math.random() >= 0.7
      ? <ActivityLogsDisplay.Log label={faker.random.words()} value={faker.random.word()} />
      : <ActivityLogsDisplay.Log label={faker.random.words()} value={Array(faker.random.number(10)).fill('').map(() => faker.random.word())} />,
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
