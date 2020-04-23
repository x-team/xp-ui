// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SignupScreen from './SignupScreen'
import InputField from '../forms/InputField'
import Button from './Button'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const TempLabel = () => (
  <div>
    <div><strong>Lorem Ipsum</strong></div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed elit elementum, ultrices justo eget, condimentum ante.</div>
  </div>
)

storiesOf('Screens and Layouts|SignupScreen', module)
  .add('basic usage', () => (
    <Body>
      <SignupScreen.Layout
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
        <Button block wide size='large'>Continue »</Button>
      </SignupScreen.Layout>
    </Body>
  ))

storiesOf('Screens and Layouts|SignupScreen/Debug', module)
  .add('without headings', () => (
    <Body>
      <SignupScreen.Layout>
        <SignupScreen.InputGroup>
          <TempLabel />
          <InputField placeholder='Input field' />
        </SignupScreen.InputGroup>
      </SignupScreen.Layout>
    </Body>
  ))
  .add('missing props for Layout', () => (
    <SignupScreen.Layout />
  ))
  .add('missing props InputGroup', () => (
    <SignupScreen.InputGroup />
  ))
