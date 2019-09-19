import React from 'react'
import { storiesOf } from '@storybook/react'

import CopyToClipboardButton from './CopyToClipboardButton'

const Body = ({ children, background }) => (
  <div style={{ padding: '70px', background }}>
    {children}
  </div>
)

storiesOf('UI Components/CopyToClipboardButton', module)
  .add('basic usage', () => (
    <Body>
      <CopyToClipboardButton text='text to be copied' />
    </Body>
  ))

storiesOf('UI Components/CopyToClipboardButton/Colors', module)
  .add('inverted color with hover variation', () => (
    <Body background='#F63A55'>
      <CopyToClipboardButton text='text to be copied' color='inverted' hover='text' />
    </Body>
  ))
  .add('monochrome color with hover variation', () => (
    <Body>
      <CopyToClipboardButton text='text to be copied' color='monochrome' hover='default' />
    </Body>
  ))

storiesOf('UI Components/CopyToClipboardButton/Debug', module)
  .add('missing props (does component explode?)', () => (
    <CopyToClipboardButton />
  ))
