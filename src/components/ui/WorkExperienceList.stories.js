// @flow alert
/* globals alert */

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceList from './WorkExperienceList'

const parentFunction = (cardProps) => {
  alert(`
    Parent function required to retrieve the clicked card's data.

    - Card's data:
    ${JSON.stringify(cardProps)}
  `)
}

const listFromApiMocked = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Google Inc.',
    startDate: new Date('2013-03-23'),
    endDate: new Date('2018-11-10')
  },
  {
    id: 2,
    role: 'UX Designer',
    company: 'LATAM Co.',
    startDate: new Date('2015-05-21')
  },
  {
    id: 3,
    role: 'Full Stack Engineer',
    company: 'Twitter.',
    startDate: new Date('2011-01-01'),
    endDate: new Date('2020-04-08')
  },
  {
    id: 4,
    role: 'Tech Lead',
    company: 'X-Team',
    startDate: new Date('2018-12-22'),
    endDate: new Date('2020-04-08')
  },
  {
    id: 5,
    role: 'Senior Cheff',
    company: 'Pizza Hut',
    startDate: new Date('2013-09-06'),
    endDate: new Date('2014-02-15')
  }
]

storiesOf('Core Components|WorkExperienceList Component', module)
  .add('basic usage', () => (
    <WorkExperienceList
      list={listFromApiMocked}
      onEditCard={parentFunction}
    />
  ))

storiesOf('Core Components|WorkExperienceList Component/Debug', module)
  .add('without list', () => (
    <WorkExperienceList
      onEditCard={parentFunction}
    />
  ))
  .add('without onEditCard function', () => (
    <WorkExperienceList
      list={listFromApiMocked}
    />
  ))
  .add('missing props', () => (
    <WorkExperienceList />
  ))
