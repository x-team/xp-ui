// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import Milestones from './Milestones'
import { signupScreenLevels } from './SignupScreen.stories'

const biggerAmountOfLevels = Array(6).fill({ icon: 'cog' })

storiesOf('UI Components|Milestones', module)
  .add('basic usage', () => (
    <Milestones
      level={2}
      levels={signupScreenLevels}
    />
  ))

storiesOf('UI Components|Milestones/Debug', module)
  .add('without level prop', () => (
    <Milestones
      levels={biggerAmountOfLevels}
    />
  ))
  .add('third level', () => (
    <Milestones
      level={3}
      levels={biggerAmountOfLevels}
    />
  ))
  .add('last level', () => (
    <Milestones
      level={biggerAmountOfLevels.length}
      levels={biggerAmountOfLevels}
    />
  ))
  .add('missing props', () => (
    <Milestones />
  ))
