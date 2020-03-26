import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LocateYourProfile from './LocateYourProfile'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components|LocateYourProfile', module)
  .add('basic usage', () => (
    <Body>
      <LocateYourProfile
        headline='Locate your profile.'
        recover={action('Recover my secret profile Link')}
      />
    </Body>
  ))

storiesOf('UI Components|LocateYourProfile/Debug', module)
  .add('loading state', () => (
    <Body>
      <LocateYourProfile
        isLoading
        headline='Locate your profile.'
        recover={action('Recover my secret profile Link')}
      />
    </Body>
  ))
  .add('missing props', () => (
    <LocateYourProfile />
  ))
