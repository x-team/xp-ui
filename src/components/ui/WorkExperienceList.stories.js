// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import { WorkExperienceCardProps } from './WorkExperienceCard'
import WorkExperienceList from './WorkExperienceList'

const list: Array<WorkExperienceCardProps> = [
  {
    role: 'Senior Frontend Developer',
    company: 'Google Inc.',
    startDate: new Date('2013-03-23'),
    endDate: new Date('2018-11-10')
  },
  {
    role: 'Full Stack Engineer',
    company: 'Twitter.',
    startDate: new Date('2011-01-01'),
    endDate: new Date('2020-04-08')
  }
]

storiesOf('Core Components|WorkExperienceList Component', module)
  .add('basic usage', () => (
    <WorkExperienceList
      list={list}
    />
  ))

storiesOf('Core Components|WorkExperienceList Component/Debug', module)
  .add('missing props', () => (
    <WorkExperienceList />
  ))
