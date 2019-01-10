import React from 'react'
import { storiesOf } from '@storybook/react'

import ActivityBar from './ActivityBar'

storiesOf('UI Components/ActivityBarsDisplay/ActivityBar', module)
  .add('Basic usage', () => (
    <ActivityBar
      text='Added to List: Registered'
      datetime='2019-01-09 11:11:11'
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ActivityBar />
  ))
