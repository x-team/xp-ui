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
  .add('with props.children is not rendering without using render props', () => (
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
  .add('with props.children using render props', () => (
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
  .add('missing props', () => (
    <WorkExperienceCard />
  ))
