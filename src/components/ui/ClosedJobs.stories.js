// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'

import ClosedJobs from './ClosedJobs'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import faker from 'faker'

export const JobsLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

const jobsList = [
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
  }
]

const randomData = [
  {
    title: text('Title', faker.name.jobTitle()),
    description: text('Description', faker.lorem.sentence())
  },
  {
    title: text('Title', faker.name.jobTitle()),
    description: text('Description', faker.lorem.sentence())
  },
  {
    title: text('Title', faker.name.jobTitle()),
    description: text('Description', faker.lorem.sentence())
  }
]

storiesOf('UI Components|ClosedJobs', module)
  .add('basic usage', () => (
    <ClosedJobs jobs={jobsList} link={JobsLink} message={'Applications older than 3 months are archived'} />
  ))

storiesOf('UI Components|ClosedJobs/Debug', module)
  .add('with random data', () => (
    <ClosedJobs jobs={randomData} link={JobsLink} message={text('message', faker.lorem.sentence())} />
  ))
  .add('with jobs only', () => (
    <ClosedJobs jobs={jobsList} />
  ))
  .add('with archived message only', () => (
    <ClosedJobs message={'Applications older than 3 months are archived'} />
  ))
  .add('with link only', () => (
    <ClosedJobs link={JobsLink} />
  ))
  .add('missing props', () => (
    <ClosedJobs />
  ))
