// @flow alert
/* globals alert */

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceList from './WorkExperienceList'

const getEditingCardParentFunction = (cardData) => {
  alert(`Editing Card: ${JSON.stringify(cardData)}`)
}

const experiencesFromApiMocked = [
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
      list={experiencesFromApiMocked}
      returnEditingCard={getEditingCardParentFunction}
    />
  ))

storiesOf('Core Components|WorkExperienceList Component/Debug', module)
  .add('without list', () => (
    <WorkExperienceList
      returnEditingCard={getEditingCardParentFunction}
    />
  ))
  .add('without onEditCard function', () => (
    <WorkExperienceList
      list={experiencesFromApiMocked}
    />
  ))
  .add('missing props', () => (
    <WorkExperienceList />
  ))
