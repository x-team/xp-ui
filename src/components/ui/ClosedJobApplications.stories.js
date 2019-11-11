// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'
import faker from 'faker'

import ClosedJobApplications from './ClosedJobApplications'

export const closedJobApplicationsJobsSample = [
  {
    title: 'Web Developer with Ruby on Rails experience',
    description: 'Closed on April 17th, 2019, applied on March 28th, 2019'
  },
  {
    title: 'Senior Full Stack Engineer',
    description: 'Closed on February 17th, 2019, applied on March 28th, 2019'
  },
  {
    title: 'UX Content Writer',
    description: 'Closed on April 17th, 2019, applied on March 28th, 2019'
  },
  {
    title: 'Senior Developer (node, react, aws)',
    description: 'Closed on January 17th, 2019, applied on March 28th, 2019, 10:11pm.'
  }
]

export const closedJobApplicationsMessageSample = 'Applications older than 3 months are archived'

const randomJobs = (amount = 4) => Array(amount)
  .fill('')
  .map((item, i) => ({
    title: faker.name.jobTitle(),
    description: faker.lorem.sentence()
  }))

const randomMessage = faker.lorem.sentence()

storiesOf('UI Components|ClosedJobApplications', module)
  .add('basic usage', () => (
    <ClosedJobApplications
      applications={closedJobApplicationsJobsSample}
      message={closedJobApplicationsMessageSample}
    />
  ))

storiesOf('UI Components|ClosedJobApplications/Debug', module)
  .add('with random data', () => (
    <ClosedJobApplications
      applications={object('Jobs', randomJobs())}
      message={text('Message', randomMessage)}
    />
  ))
  .add('without message', () => (
    <ClosedJobApplications applications={randomJobs(5)} />
  ))
  .add('without applications', () => (
    <ClosedJobApplications message={closedJobApplicationsMessageSample} />
  ))
  .add('missing props', () => (
    <ClosedJobApplications />
  ))
