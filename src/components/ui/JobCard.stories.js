// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import JobCard from './JobCard'

export const JobCardLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

const skillsSample = faker.random.words(faker.random.number(10) + 1).split(' ').join(',')
const nameSample = faker.random.words()
const summarySample = faker.lorem.paragraph()
const messageSample = faker.random.words()

storiesOf('UI Components|JobCard', module)
  .add('basic usage', () => (
    <JobCard
      name={text('Name', nameSample)}
      skills={skillsSample}
      summary={text('Summary', summarySample)}
      message={text('Message', messageSample)}
      link={JobCardLink}
    />
  ))

storiesOf('UI Components|JobCard/Debug', module)
  .add('without message', () => (
    <JobCard
      name={text('Name', nameSample)}
      skills={skillsSample}
      summary={text('Summary', summarySample)}
      link={JobCardLink}
    />
  ))
  .add('without summary', () => (
    <JobCard
      name={text('Name', nameSample)}
      skills={skillsSample}
      link={JobCardLink}
      message={text('Message', messageSample)}
    />
  ))
  .add('without link', () => (
    <JobCard
      name={text('Name', nameSample)}
      skills={skillsSample}
      summary={text('Summary', summarySample)}
      message={text('Message', messageSample)}
    />
  ))
  .add('without skills', () => (
    <JobCard
      name={text('Name', nameSample)}
      summary={text('Summary', summarySample)}
      message={text('Message', messageSample)}
    />
  ))
  .add('without link and message', () => (
    <JobCard
      name={text('Name', nameSample)}
      skills={skillsSample}
      summary={text('Summary', summarySample)}
    />
  ))
  .add('only name', () => (
    <JobCard
      name={text('Name', nameSample)}
    />
  ))
  .add('missing props', () => (
    <JobCard />
  ))
