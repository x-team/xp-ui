// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceList from './WorkExperienceList'

const handleEditExperience = cardId => {
  // do stuff experience item with this `cardid`
  console.log(`Edit Card ID: ${cardId}`)
}

const handleDeleteExperience = cardId => {
  // do stuff experience item with this `cardid`
  console.log(`Delete Card ID: ${cardId}`)
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

storiesOf('UI Components|WorkExperienceList', module)
  .add('basic usage', () => (
    <WorkExperienceList
      list={experiencesFromApiMocked}
      editEntry={handleEditExperience}
      deleteEntry={handleDeleteExperience}
    />
  ))
  .add('basic usage with just one 1 experience', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })

storiesOf('UI Components|WorkExperienceList/Debug', module)
  .add('missing props', () => (
    <WorkExperienceList />
  ))
  .add('without list prop', () => (
    <WorkExperienceList
      editEntry={handleEditExperience}
      deleteEntry={handleDeleteExperience}
    />
  ))
  .add('without editEntry prop', () => (
    <WorkExperienceList
      list={experiencesFromApiMocked}
      deleteEntry={handleDeleteExperience}
    />
  ))
  .add('without deleteEntry prop', () => (
    <WorkExperienceList
      list={experiencesFromApiMocked}
      editEntry={handleEditExperience}
    />
  ))
  .add('without editEntry and deleteEntry props', () => (
    <WorkExperienceList
      list={experiencesFromApiMocked}
    />
  ))
  .add('experience item without role', () => {
    const list = [{
      id: 5,
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item without company', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item without startDate', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut'
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item without endDate', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item with endDate', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item with long role name', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item with long company name', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('experience item with long role and company name', () => {
    const list = [{
      id: 5,
      role: 'Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff',
      company: 'Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }]

    return (
      <WorkExperienceList
        list={list}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
