import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericCopyToClipboard from '.'

storiesOf('UI Components/GenericCopyToClipboard', module)
  .add('basic usage', () => (
    <div style={{ marginTop: 50 }}>
      <GenericCopyToClipboard>
        <span>example@email.com</span>
      </GenericCopyToClipboard>
    </div>
  ))
  .add('missing children (does component explode?)', () => (
    <GenericCopyToClipboard />
  ))
