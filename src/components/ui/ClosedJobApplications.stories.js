// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'
import faker from 'faker'

import ClosedJobApplications from './ClosedJobApplications'

export const closedJobApplicationsJobsSample = [
  {
    name: 'Web Developer with Ruby on Rails experience',
    info: 'Closed on April 17th, 2019, applied on March 28th, 2019'
  },
  {
    name: 'Senior Full Stack Engineer',
    info: 'Closed on February 17th, 2019, applied on March 28th, 2019'
  },
  {
    name: 'UX Content Writer',
    info: 'Closed on April 17th, 2019, applied on March 28th, 2019'
  },
  {
    name: 'Senior Developer (node, react, aws)',
    info: 'Closed on January 17th, 2019, applied on March 28th, 2019, 10:11pm.'
  }
]

export const closedJobApplicationsMessageSample = 'Applications older than 3 months are archived'

const randomJobs = (amount = 4) => Array(amount)
  .fill('')
  .map((item, i) => ({
    name: faker.name.jobTitle(),
    info: faker.lorem.sentence()
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
  .add(`an application with missing title isn't rendered`, () => (
    <ClosedJobApplications applications={[
      { info: 'this is valid' },
      { name: 'Angular Black Ninja', info: 'Closed on March 1st, 2019, applied on March 28th, 2019' }
    ]} />
  ))
  .add('broken data', () => (
    <ClosedJobApplications applications={[{
      invalidDataStructure: 'for testing purposes',
      info: 'this is valid'
    }]} />
  ))
  .add('missing props', () => (
    <ClosedJobApplications />
  ))
