// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ActivityBar from './ActivityBar'

storiesOf('UI Components|Activity/Bar', module)
  .add('basic usage', () => (
    <ActivityBar
      text='Added to List: Registered'
      datetime='2019-01-09 11:11:11'
    />
  ))
  .add('short activity description', () => (
    <ActivityBar
      text='ABC'
      datetime='2019-01-09 11:11:11'
    />
  ))
  .add('really long activity description', () => (
    <ActivityBar
      text='This is a really long activity description meant to test how the component looks in that case'
      datetime='2019-01-09 11:11:11'
    />
  ))

storiesOf('UI Components|Activity/Bar/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ActivityBar />
  ))
