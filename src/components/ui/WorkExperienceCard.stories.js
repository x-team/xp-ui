// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceCard from './WorkExperienceCard'

storiesOf('Core Components|WorkExperienceCard Component', module)
  .add('basic usage', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
    />
  ))

storiesOf('Core Components|WorkExperienceCard Component/Debug', module)
  .add('without role', () => (
    <WorkExperienceCard
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
    />
  ))
  .add('without company', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      startDate={new Date('2017-03-23')}
    />
  ))
  .add('without startDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
    />
  ))
  .add('without endDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
    />
  ))
  .add('with endDate', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2018-03-23')}
    />
  ))
  .add('with long role and company name', () => (
    <WorkExperienceCard
      role='Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer Senior Frontend Developer'
      company='Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc. Google Inc.'
      startDate={new Date('2017-03-23')}
    />
  ))
  .add('with props.children not rendered if edit entry button is clicked because render props is not used, so, is going to show the default children', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2018-03-23')}
    >
      <h2>Custom title that is not going to be rendered</h2>
      <p>This is a paragraph that is not going to be rendered</p>
      <h3>Anoother title that is not going to be rendered</h3>
    </WorkExperienceCard>
  ))
  .add('with props.children rendered if edit entry button is clicked because is using render props correctly', () => (
    <WorkExperienceCard
      role={'Senior Frontend Developer'}
      company={'Google Inc.'}
      startDate={new Date('2017-03-23')}
      endDate={new Date('2018-03-23')}
    >
      {
        toggleEditCardStatus => (
          <div>
            <h2>Custom children title</h2>
            <p>This is a paragraph</p>
            <h3>Anoother title</h3>
            <button onClick={toggleEditCardStatus}>Custom button - Back to the card</button>
          </div>
        )
      }
    </WorkExperienceCard>
  ))
  .add('many components placed below the other ', () => (
    <div>
      <WorkExperienceCard
        role={'Senior Frontend Developer 1'}
        company={'Google Inc.'}
        startDate={new Date('2017-03-23')}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 2'}
        company={'Google Inc.'}
        startDate={new Date('2013-05-27')}
        endDate={new Date('2026-09-10')}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 3'}
        company={'Google Inc.'}
        startDate={new Date('2012-10-30')}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 4'}
        company={'Google Inc.'}
        startDate={new Date('2011-01-15')}
        endDate={new Date('2020-03-23')}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 5'}
        company={'Google Inc.'}
        startDate={new Date('2019-03-23')}
      />
      <WorkExperienceCard
        role={'Senior Frontend Developer 6'}
        company={'Google Inc.'}
        startDate={new Date('2017-11-23')}
      />
    </div>
  ))
  .add('missing props', () => (
    <WorkExperienceCard />
  ))
