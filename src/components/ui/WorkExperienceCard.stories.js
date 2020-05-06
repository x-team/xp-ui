// @flow
/* globals alert */

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceCard from './WorkExperienceCard'

const getEditingCardIdParentFunction = (cardId) => {
  alert(`Editing Card ID: ${cardId}`)
}

storiesOf('Core Components|WorkExperienceCard Component', module)
  .add('basic usage', () => (
    <WorkExperienceCard
      id={431}
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2019-10-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))

storiesOf('Core Components|WorkExperienceCard Component/Debug', module)
  .add('without role', () => (
    <WorkExperienceCard
      id={431}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('without company', () => (
    <WorkExperienceCard
      id={431}
      role={'Senior Frontend Developer'}
      startDate={new Date('2017-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('without startDate', () => (
    <WorkExperienceCard
      id={431}
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      endDate={new Date('2017-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('without endDate', () => (
    <WorkExperienceCard
      id={431}
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('with endDate', () => (
    <WorkExperienceCard
      id={431}
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2018-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('with long role and company name', () => (
    <WorkExperienceCard
      id={431}
      role='Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer'
      company='Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc.'
      startDate={new Date('2017-03-23')}
      returnEditingCardId={getEditingCardIdParentFunction}
    />
  ))
  .add('many components placed below the other ', () => (
    <div>
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 1'}
        company={'Google Inc.'}
        startDate={new Date('2017-03-23')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 2'}
        company={'Google Inc.'}
        startDate={new Date('2013-05-27')}
        endDate={new Date('2026-09-10')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 3'}
        company={'Google Inc.'}
        startDate={new Date('2012-10-30')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 4'}
        company={'Google Inc.'}
        startDate={new Date('2011-01-15')}
        endDate={new Date('2020-03-23')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 5'}
        company={'Google Inc.'}
        startDate={new Date('2019-03-23')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
      <WorkExperienceCard
        id={431}
        role={'Senior Frontend Developer 6'}
        company={'Google Inc.'}
        startDate={new Date('2017-11-23')}
        returnEditingCardId={getEditingCardIdParentFunction}
      />
    </div>
  ))
  .add('missing props', () => (
    <WorkExperienceCard />
  ))
