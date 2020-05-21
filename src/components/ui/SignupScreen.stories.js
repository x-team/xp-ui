// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SignupScreen from './SignupScreen'
import { SampleSignupForm } from './SignupForm.stories'
import WorkExperienceCard from './WorkExperienceCard'
import AddMoreButton from './AddMoreButton'
import Button from './Button'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const WorkExperienceCardSample = () => (
  <WorkExperienceCard
    id={5}
    role='Senior Chef'
    company='Pizza Hut'
    startDate={new Date('2013-09-06')}
    endDate={new Date('2014-02-15')}
    editEntry={() => console.log('edit')}
    deleteEntry={() => console.log('delete')}
  />
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

storiesOf('Screens and Layouts|SignupScreen/Use Cases', module)
  .add('single work experience form', () => (
    <Body>
      <SignupScreen
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <SampleSignupForm />
      </SignupScreen>
    </Body>
  ))
  .add('multiple work experience cards', () => (
    <Body>
      <SignupScreen
        heading='What have you done recently?'
        subheading='Tell us a bit about your recent work experience.'
      >
        <WorkExperienceCardSample />
        <WorkExperienceCardSample />
        <WorkExperienceCardSample />
        <AddMoreButton
          label='Add another work experience...'
          onClick={() => console.log('add more')}
        />
        <Button
          block
          wide
          size='large'
          onClick={() => console.log('continue')}
        >
          Continue »
        </Button>
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
