// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LocateYourProfile from './LocateYourProfile'
import ApplicantScreen from './ApplicantScreen'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const joinClick = () => (
  console.log('join x-team clicked')
)

storiesOf('UI Components|LocateYourProfile', module)
  .add('basic usage', () => (
    <Body>
      <LocateYourProfile
        headline='Locate your profile.'
        recover={action('Recover my secret profile Link')}
        joinClick={joinClick}
      />
    </Body>
  ))

storiesOf('UI Components|LocateYourProfile/Use Cases', module)
  .add('wrapped with ApplicantScreen', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <LocateYourProfile
          headline='Locate your profile.'
          recover={action('Recover my secret profile Link')}
          joinClick={joinClick}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('UI Components|LocateYourProfile/Debug', module)
  .add('loading state', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <LocateYourProfile
          isLoading
          headline='Locate your profile.'
          recover={action('Recover my secret profile Link')}
          joinClick={joinClick}
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('missing props', () => (
    <LocateYourProfile />
  ))
