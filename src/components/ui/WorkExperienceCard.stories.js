// @flow
/* globals alert */

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceCard from './WorkExperienceCard'

const parentFunction = (cardProps) => {
  alert(`
    Parent function required to retrieve the clicked card's data.

    - Card's data:
    ${JSON.stringify(cardProps)}
  `)
}

storiesOf('Core Components|WorkExperienceCard Component', module)
  .add('basic usage', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2019-10-23')}
      onEditCard={parentFunction}
    />
  ))

storiesOf('Core Components|WorkExperienceCard Component/Debug', module)
  .add('without role', () => (
    <WorkExperienceCard
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('without company', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      startDate={new Date('2017-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('without startDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      endDate={new Date('2017-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('without endDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('with endDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2018-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('with long role and company name', () => (
    <WorkExperienceCard
      role='Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer'
      company='Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc.'
      startDate={new Date('2017-03-23')}
      onEditCard={parentFunction}
    />
  ))
  .add('many components placed below the other ', () => (
    <div>
      <WorkExperienceCard
        role={'Senior Frontend Developer 1'}
        company={'Google Inc.'}
        startDate={new Date('2017-03-23')}
        onEditCard={parentFunction}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 2'}
        company={'Google Inc.'}
        startDate={new Date('2013-05-27')}
        endDate={new Date('2026-09-10')}
        onEditCard={parentFunction}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 3'}
        company={'Google Inc.'}
        startDate={new Date('2012-10-30')}
        onEditCard={parentFunction}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 4'}
        company={'Google Inc.'}
        startDate={new Date('2011-01-15')}
        endDate={new Date('2020-03-23')}
        onEditCard={parentFunction}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 5'}
        company={'Google Inc.'}
        startDate={new Date('2019-03-23')}
        onEditCard={parentFunction}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 6'}
        company={'Google Inc.'}
        startDate={new Date('2017-11-23')}
        onEditCard={parentFunction}
      />
    </div>
  ))
  .add('missing props', () => (
    <WorkExperienceCard />
  ))
