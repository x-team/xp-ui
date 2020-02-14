// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'
import faker from 'faker'

import PreviousJobApplications from './PreviousJobApplications'

export const previousJobApplicationsJobsSample = [
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

export const previousJobApplicationsMessageSample = 'Previous applications older than 3 months are archived'

const randomJobs = (amount = 4) => Array(amount)
  .fill('')
  .map((item, i) => ({
    name: faker.name.jobTitle(),
    info: faker.lorem.sentence()
  }))

const randomMessage = faker.lorem.sentence()

storiesOf('UI Components|PreviousJobApplications', module)
  .add('basic usage', () => (
    <PreviousJobApplications
      applications={previousJobApplicationsJobsSample}
      message={previousJobApplicationsMessageSample}
    />
  ))

storiesOf('UI Components|PreviousJobApplications/Debug', module)
  .add('with random data', () => (
    <PreviousJobApplications
      applications={object('Jobs', randomJobs())}
      message={text('Message', randomMessage)}
    />
  ))
  .add('without message', () => (
    <PreviousJobApplications applications={randomJobs(5)} />
  ))
  .add('without applications', () => (
    <PreviousJobApplications message={previousJobApplicationsMessageSample} />
  ))
  .add(`an application with missing name isn't rendered`, () => (
    <PreviousJobApplications applications={[
      { info: 'this is valid' },
      { name: 'Angular Black Ninja', info: 'Closed on March 1st, 2019, applied on March 28th, 2019' }
    ]} />
  ))
  .add('broken data', () => (
    <PreviousJobApplications applications={[{
      invalidDataStructure: 'for testing purposes',
      info: 'this is valid'
    }]} />
  ))
  .add('missing props', () => (
    <PreviousJobApplications />
  ))
