// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ClosedJobs from './ClosedJobs'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

const jobsList = [
  {
    title: 'Web Developer with Ruby on Rails experience',
    description: 'Closed on April 17th, 2019, applied on March 28th, 2019',
  },
  {
    title: 'Senior Full Stack Engineer',
    description: 'Closed on February 17th, 2019, applied on March 28th, 2019',
  },
  {
    title: 'UX Content Writer',
    description: 'Closed on April 17th, 2019, applied on March 28th, 2019',
  }
]
const randomData = [
  {
    title: text('Title', faker.lorem.sentence()),
    description: text('Description', faker.lorem.paragraph()),
  },
  {
    title: text('Title', faker.lorem.sentence()),
    description: text('Description', faker.lorem.sentence()),
  },
  {
    title: text('Title', faker.lorem.sentence()),
    description: text('Description', faker.lorem.sentence()),
  }
]

storiesOf('UI Components|ClosedJobs', module)
  .add('basic usage', () => (
    <ClosedJobs jobs={jobsList} />
  ))

storiesOf('UI Components|ClosedJobs/Debug', module)
  .add('without data', () => (
    <ClosedJobs />
  ))
  .add('with random data', () => (
    <ClosedJobs jobs={randomData} />
  ))
