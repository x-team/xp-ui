import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QuickSearchCloseButton from './QuickSearchCloseButton'

const Body = ({ children }) => (
  <div style={{ height: '500px' }}>
    {children}
  </div>
)

storiesOf('UI Components|Buttons/QuickSearchCloseButton', module)
  .add('basic usage', () => (
    <Body>
      <QuickSearchCloseButton onClick={action('onClick')}>Example of QuickSearchCloseButton</QuickSearchCloseButton>
    </Body>
  ))
  .add('centralized usage', () => (
    <Body>
      <QuickSearchCloseButton centralized onClick={action('onClick')}>Example of QuickSearchCloseButton</QuickSearchCloseButton>
    </Body>
  ))

storiesOf('UI Components|Buttons/QuickSearchCloseButton/Debug', module)
  .add('missing props (does component explode?)', () => (
    <QuickSearchCloseButton />
  ))
