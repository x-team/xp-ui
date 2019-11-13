// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericTooltip from './GenericTooltip'

storiesOf('Core Components|GenericTooltip', module)
  .add('basic usage', () => (
    <GenericTooltip
      message='This is the tooltip message'
    >
      Hover this text to see a tooltip demonstration
    </GenericTooltip>
  ))

storiesOf('Core Components|GenericTooltip/Debug', module)
  .add('with HTML elements in the message', () => (
    <GenericTooltip
      message={<span>This<br /><u>is</u><br />the<br /><strong>tooltip</strong><br /><i>message</i>.</span>}
    >
      Hover this text to see a tooltip demonstration
    </GenericTooltip>
  ))
  .add('multiple instances', () => (
    <div>
      <GenericTooltip
        message='This is the tooltip message'
      >
        Hover this text to see a tooltip demonstration
      </GenericTooltip>
      <br /><br />
      <GenericTooltip
        message='This is the tooltip message'
        options={{
          place: 'right',
          type: 'success',
          effect: 'float'
        }}
      >
        Hover this text to see a tooltip demonstration
      </GenericTooltip>
      <br /><br />
      <GenericTooltip
        message='This is the tooltip message'
        options={{
          type: 'info',
          effect: 'float'
        }}
      >
        Hover this text to see a tooltip demonstration
      </GenericTooltip>
      <br /><br />
      <GenericTooltip
        message='This is the tooltip message'
        options={{
          place: 'top',
          type: 'error'
        }}
      >
        Hover this text to see a tooltip demonstration
      </GenericTooltip>
    </div>
  ))
  .add('missing message', () => (
    <GenericTooltip>
      Hover this text to see a tooltip demonstration
    </GenericTooltip>
  ))
  .add('missing props', () => (
    <GenericTooltip />
  ))
