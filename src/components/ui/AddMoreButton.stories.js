// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import AddMoreButton from './AddMoreButton'

const Body = ({ children }) => (
  <div style={{ height: '100vh', padding: '50px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components|AddMoreButton', module)
  .add('basic usage', () => (
    <Body>
      <AddMoreButton
        label='Add another work experience...'
        onClick={() => console.log('clicked')}
      />
    </Body>
  ))

storiesOf('UI Components|AddMoreButton/Debug', module)
  .add('missing props', () => (
    <AddMoreButton />
  ))
