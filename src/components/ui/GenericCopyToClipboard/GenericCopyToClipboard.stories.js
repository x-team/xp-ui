import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericCopyToClipboard from '.'
import Tooltip from './Tooltip'

const Body = ({ children }) => (
  <div style={{ padding: '50px 10px 0' }}>
    {children}
  </div>
)

storiesOf('UI Components/GenericCopyToClipboard', module)
  .add('basic usage', () => (
    <Body>
      <GenericCopyToClipboard text={'example@email.com'}>
        <p>Try hovering this element and click to copy</p>
      </GenericCopyToClipboard>
    </Body>
  ))

storiesOf('UI Components/GenericCopyToClipboard/Tooltip', module)
  .add('default', () => (
    <Body>
      <Tooltip />
    </Body>
  ))
  .add('copied', () => (
    <Body>
      <Tooltip copied />
    </Body>
  ))

storiesOf('UI Components/GenericCopyToClipboard/Debug', module)
  .add('missing children or props (does GenericCopyToClipboard explode?)', () => (
    <GenericCopyToClipboard />
  ))
  .add('missing props (does Tooltip explode?)', () => (
    <Tooltip />
  ))
