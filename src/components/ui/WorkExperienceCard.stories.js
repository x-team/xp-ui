// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceCard from './WorkExperienceCard'

const handleEditExperience = cardId => {
  // do stuff with this `cardid`
  console.log(`Edit Card ID: ${cardId}`)
}

const handleDeleteExperience = cardId => {
  // do stuff with this `cardid`
  console.log(`Delete Card ID: ${cardId}`)
}

const experience = {
  id: 5,
  role: 'Senior Cheff',
  company: 'Pizza Hut',
  startDate: new Date('2013-09-06'),
  endDate: new Date('2014-02-15')
}

storiesOf('UI Components|WorkExperienceCard', module)
  .add('basic usage', () => {
    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })

storiesOf('UI Components|WorkExperienceCard/Debug', module)
  .add('missing props', () => (
    <WorkExperienceCard />
  ))
  .add('without id, role, company, startDate and endDate', () => (
    <WorkExperienceCard
      editEntry={handleEditExperience}
      deleteEntry={handleDeleteExperience}
    />
  ))
  .add('without id', () => {
    const experience = {
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without role', () => {
    const experience = {
      id: 5,
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without company', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without role and company', () => {
    const experience = {
      id: 5,
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without startDate', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut'
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without endDate', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without startDate and endDate', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut'
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('without editEntry', () => (
    <WorkExperienceCard
      {...experience}
      deleteEntry={handleDeleteExperience}
    />
  ))
  .add('without deleteEntry', () => (
    <WorkExperienceCard
      {...experience}
      editEntry={handleEditExperience}
    />
  ))
  .add('without editEntry and deleteEntry', () => (
    <WorkExperienceCard
      {...experience}
    />
  ))
  .add('with endDate', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('with long role name', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff',
      company: 'Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('with long company name', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff',
      company: 'Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
  .add('with long role and company name', () => {
    const experience = {
      id: 5,
      role: 'Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff Senior Cheff',
      company: 'Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut',
      startDate: new Date('2013-09-06'),
      endDate: new Date('2014-02-15')
    }

    return (
      <WorkExperienceCard
        {...experience}
        editEntry={handleEditExperience}
        deleteEntry={handleDeleteExperience}
      />
    )
  })
