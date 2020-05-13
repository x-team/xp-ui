// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SignupScreen from './SignupScreen'
import { SampleSignupForm } from './SignupForm.stories'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('Screens and Layouts|SignupScreen', module)
  .add('basic usage', () => (
    <Body>
      <SignupScreen
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SampleSignupForm />
      </SignupScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|SignupScreen/Debug', module)
  .add('loading state', () => (
    <Body>
      <SignupScreen
        isLoading
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SampleSignupForm />
      </SignupScreen>
    </Body>
  ))
  .add('without headings', () => (
    <Body>
      <SignupScreen>
        <SampleSignupForm />
      </SignupScreen>
    </Body>
  ))
  .add('missing props', () => (
    <SignupScreen />
  ))
