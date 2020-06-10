// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import AddMoreButton from './AddMoreButton'

storiesOf('UI Components|AddMoreButton', module)
  .add('basic usage', () => (
    <AddMoreButton
      label='Add another work experience...'
      onClick={() => console.log('clicked')}
    />
  ))

storiesOf('UI Components|AddMoreButton/Debug', module)
  .add('missing props', () => (
    <AddMoreButton />
  ))
