// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import LoginButton from './LoginButton'

storiesOf('UI Components|LoginButton', module)
  .add('basic usage', () => (
    <LoginButton id='google-callback-id'>
      Login With Google
    </LoginButton>
  ))

storiesOf('UI Components|LoginButton/Debug', module)
  .add('missing props (does component explode?)', () => (
    <LoginButton />
  ))
