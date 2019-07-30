import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QuickSearchButton from './QuickSearchButton'

const Body = ({ children }) => (
  <div style={{ width: '200px', padding: '10px 0', border: '1px solid black' }}>
    {children}
  </div>
)

storiesOf('UI Components/QuickSearchButton', module)
  .add('basic usage', () => <Body><QuickSearchButton onClick={action('onClick')} /></Body>)
  .add('missing props (does component explode?)', () => <Body><QuickSearchButton /></Body>)
