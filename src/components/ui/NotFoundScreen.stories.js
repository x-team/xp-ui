// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import NotFoundScreen from './NotFoundScreen'
import ApplicantScreen from './ApplicantScreen'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('Screens and Layouts|NotFoundScreen', module)
  .add('basic usage', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <NotFoundScreen />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|NotFoundScreen/States', module)
  .add('loading', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <NotFoundScreen isLoading />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|NotFoundScreen/Debug', module)
  .add('missing props', () => (
    <NotFoundScreen />
  ))
