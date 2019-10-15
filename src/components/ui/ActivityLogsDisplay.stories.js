import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import ActivityLogsDisplay from './ActivityLogsDisplay'

const sampleLogs = Array(30)
  .fill({})
  .map((item, i) => ({
    date: `${faker.random.number(31)} ${faker.date.month().substring(0, 3)} 2018`,
    activity: faker.random.number(10) <= 5 ? ({
      label: faker.random.words(2),
      value: faker.random.words(2)
    }) : ({
      label: faker.random.words(2),
      value: Array(faker.random.number(3))
        .fill({})
        .map(() => ({
          label: faker.random.words(2),
          value: faker.random.words(2),
          info: faker.random.number(10) <= 2 ? '' : faker.random.words(2)
        })),
      groupValues: faker.random.words(2)
    }),
    user: `by ${faker.random.number(10) >= 6
      ? faker.internet.email()
      : `${faker.name.firstName()} ${faker.name.lastName()}`
    }`
  }))

storiesOf('UI Components|Activity/Logs', module)
  .add('complete with random data with knobs', () => (
    <ActivityLogsDisplay
      logs={object('logs', sampleLogs)}
    />
  ))

storiesOf('UI Components|Activity/Logs/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ActivityLogsDisplay />
  ))
