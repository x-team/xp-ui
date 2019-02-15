import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AdminScreen from './AdminScreen'

storiesOf('UI Components/AdminScreen', module)
  .add('complete', () => (
    <div style={{ height: '500px' }}>
      <AdminScreen
        header={<div>Anything goes in the header</div>}
      >
        <div>Anything goes in the content</div>
      </AdminScreen>
    </div>
  ))
  .add('with modal', () => (
    <div style={{ height: '500px' }}>
      <AdminScreen
        header={<div>Anything goes in the header</div>}
        modal={{
          onClose: action('Close modal'),
          content: <div>Anything goes in the modal</div>
        }}
      >
        <div>Anything goes in the content</div>
      </AdminScreen>
    </div>
  ))
  .add('missing props (does component explode?)', () => (
    <AdminScreen />
  ))
