// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import SignupScreen from './SignupScreen'
import SignupForm from './SignupForm'
import InputField from '../forms/InputField'
import Button from './Button'
import Label from './Label'
import Modal from './Modal'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const SampleLabel = () => (
  <Label
    headline='Lorem ipsum dolor sit amet'
    description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
  />
)

const SampleSignupForm = (props) => (
  <SignupForm.Layout {...props}>
    <SignupForm.InputGroup>
      <SampleLabel />
      <InputField placeholder='Input field' />
    </SignupForm.InputGroup>
    <SignupForm.InputGroup>
      <SampleLabel />
      <InputField placeholder='Input field' />
    </SignupForm.InputGroup>
    <SignupForm.InputGroup>
      <SampleLabel />
      <InputField placeholder='Input field' />
    </SignupForm.InputGroup>
    <SignupForm.InputGroup>
      <SampleLabel />
      <InputField placeholder='Input field' />
    </SignupForm.InputGroup>
    <SignupForm.InputGroup>
      <SampleLabel />
      <InputField placeholder='Input field' />
    </SignupForm.InputGroup>
    <Button block wide size='large'>Continue »</Button>
  </SignupForm.Layout>
)

storiesOf('UI Components|SignupForm', module)
  .add('basic usage', () => (
    <Body>
      <SampleSignupForm />
    </Body>
  ))

storiesOf('UI Components|SignupForm/Use Cases', module)
  .add('wrapped in SignupScreen', () => (
    <Body>
      <SignupScreen
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SampleSignupForm />
      </SignupScreen>
    </Body>
  ))
  .add('wrapped in Modal', () => (
    <Body>
      <State initialState={{ isOpen: true }}>
        {({ setState, state }) => (
          <Modal
            theme='white'
            onClose={() => setState({ isOpen: false })}
          >
            <SignupForm.Layout title='Work Experience' hasPadding>
              <SignupForm.InputGroup>
                <SampleLabel />
                <InputField placeholder='Input field' />
              </SignupForm.InputGroup>
              <SignupForm.InputGroup>
                <SampleLabel />
                <InputField placeholder='Input field' />
              </SignupForm.InputGroup>
              <SignupForm.InputGroup>
                <SampleLabel />
                <InputField placeholder='Input field' />
              </SignupForm.InputGroup>
              <SignupForm.InputGroup>
                <SampleLabel />
                <InputField placeholder='Input field' />
              </SignupForm.InputGroup>
              <SignupForm.InputGroup>
                <SampleLabel />
                <InputField placeholder='Input field' />
              </SignupForm.InputGroup>
              <Button block wide size='large'>Continue »</Button>
            </SignupForm.Layout>
          </Modal>
        )}
      </State>
    </Body>
  ))

storiesOf('UI Components|SignupForm/Debug', module)
  .add('with error message', () => (
    <Body>
      <SignupScreen
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SampleSignupForm errorMessage='Something went wrong.' />
      </SignupScreen>
    </Body>
  ))
  // .add('without headings', () => (
  //   <Body>
  //     <SignupScreen>
  //       <SignupForm.InputGroup>
  //         <SampleLabel />
  //         <InputField placeholder='Input field' />
  //       </SignupForm.InputGroup>
  //     </SignupScreen>
  //   </Body>
  // ))
  // .add('with error message', () => (
  //   <Body>
  //     <SignupScreen>
  //       <SignupForm.InputGroup
  //         errorMessage='This has an error'
  //       >
  //         <SampleLabel />
  //         <InputField placeholder='Input field' />
  //       </SignupForm.InputGroup>
  //       <SignupForm.InputGroup
  //         errorMessage='This has an error'
  //       >
  //         <SampleLabel />
  //         <InputField placeholder='Input field' />
  //       </SignupForm.InputGroup>
  //     </SignupScreen>
  //   </Body>
  // ))
  .add('missing props on Layout', () => (
    <SignupForm.Layout />
  ))
  .add('missing props on InputGroup', () => (
    <SignupForm.InputGroup />
  ))
