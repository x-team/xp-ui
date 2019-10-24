// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import ApplicationSuccessNotification from './ApplicationSuccessNotification'

storiesOf('UI Components|ApplicationSuccessNotification', module)
  .add('default', () => (
    <ApplicationSuccessNotification display={boolean('Display', true)} />
  ))

storiesOf('UI Components|ApplicationSuccessNotification/States', module)
  .add('open', () => (
    <ApplicationSuccessNotification display />
  ))
  .add('closed', () => (
    <ApplicationSuccessNotification />
  ))

storiesOf('UI Components|ApplicationSuccessNotification/Debug', module)
  .add('missing props', () => (
    <ApplicationSuccessNotification />
  ))
