// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'

import PencilButton from './PencilButton'

const Body = ({ children, background }: { children?: React$Node, background?: string }) => (
  <div style={{ padding: '20px', background }}>
    {children}
  </div>
)

storiesOf('UI Components|Buttons/PencilButton', module)
  .add('basic usage', () => (
    <Body>
      <PencilButton />
    </Body>
  ))

storiesOf('UI Components|Buttons/PencilButton/States', module)
  .add('inverted color with hover variation', () => (
    <Body background='#F63A55'>
      <PencilButton color='inverted' hover='text' />
    </Body>
  ))
  .add('monochrome color with hover variation', () => (
    <Body>
      <PencilButton color='monochrome' hover='default' />
    </Body>
  ))

storiesOf('UI Components|Buttons/PencilButton/Debug', module)
  .add('missing props (does component explode?)', () => (
    <PencilButton />
  ))
