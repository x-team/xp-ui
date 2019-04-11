import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericCopyToClipboard from '.'
import Tooltip from './Tooltip'

storiesOf('UI Components/GenericCopyToClipboard', module)
  .add('basic usage', () => (
    <div style={{ marginTop: 50 }}>
      <GenericCopyToClipboard text={'example@email.com'}>
        <span>example@email.com</span>
      </GenericCopyToClipboard>
    </div>
  ))

storiesOf('UI Components/GenericCopyToClipboard/Debug', module)
  .add('missing children or props (does GenericCopyToClipboard explode?)', () => (
    <GenericCopyToClipboard />
  ))

storiesOf('UI Components/GenericCopyToClipboard/Tooltip', module)
  .add('basic usage', () => (
    <div style={{ marginTop: 50 }}>
      <Tooltip showTooltip />
    </div>
  ))

storiesOf('UI Components/GenericCopyToClipboard/Tooltip/Debug', module)
  .add('missing props (does Tooltip explode?)', () => (
    <Tooltip />
  ))
