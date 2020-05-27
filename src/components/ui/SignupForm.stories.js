// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import SignupScreen from './SignupScreen'
import SignupForm from './SignupForm'
import InputSection from '../forms/InputSection'
import { SampleInputSection } from '../forms/InputSection.stories'
import InputField from '../forms/InputField'
import Button from './Button'
import Modal from './Modal'
import ErrorBox from './ErrorBox'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

export const SampleSignupForm = (props: any) => (
  <SignupForm {...props}>
    <SampleInputSection />
    <SampleInputSection />
    <SampleInputSection />
    <SampleInputSection />
    <SampleInputSection />
    <Button block wide size='large'>Continue »</Button>
  </SignupForm>
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
            <SignupForm
              title='Work Experience'
              hasPadding
              errorMessage='Something went wrong.'
            >
              <SampleInputSection />
              <SampleInputSection />
              <SampleInputSection />
              <SampleInputSection />
              <SampleInputSection />
              <Button block wide size='large'>Continue »</Button>
            </SignupForm>
          </Modal>
        )}
      </State>
    </Body>
  ))

storiesOf('UI Components|SignupForm/Debug', module)
  .add('with error messages', () => (
    <Body>
      <SignupForm
        title='Work Experience'
        hasPadding
        errorMessage='Something went wrong.'
      >
        <InputSection
          headline='Lorem ipsum dolor sit amet'
          description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
          isInvalid
          errorMessage='Something went wrong.'
        >
          <InputField placeholder='Input field' isInvalid />
        </InputSection>
        <InputSection
          headline='Lorem ipsum dolor sit amet'
          description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
          isInvalid
          errorMessage='Something went wrong.'
        >
          <InputField type='textarea' placeholder='Textarea field' isInvalid />
        </InputSection>
        <ErrorBox
          errors={{
            name: 'Something went wrong.'
          }}
        />
        <Button block wide size='large'>Continue »</Button>
      </SignupForm>
    </Body>
  ))
  .add('missing props', () => (
    <SignupForm />
  ))
