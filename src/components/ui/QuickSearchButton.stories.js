import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QuickSearchButton from './QuickSearchButton'

const Body = ({ children }) => (
  <div style={{ width: '64px', padding: '10px 0' }}>
    {children}
  </div>
)

storiesOf('UI Components|Buttons/QuickSearchButton', module)
  .add('basic usage', () => <Body><QuickSearchButton onClick={action('onClick')} /></Body>)

storiesOf('UI Components|Buttons/QuickSearchButton/Debug', module)
  .add('missing props (does component explode?)', () => <QuickSearchButton />)
