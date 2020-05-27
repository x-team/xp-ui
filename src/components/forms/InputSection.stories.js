// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import InputSection from './InputSection'
import InputField from './InputField'

export const SampleInputSection = (props: any) => (
  <InputSection
    headline='Lorem ipsum dolor sit amet'
    description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
    {...props}
  >
    <InputField placeholder='Input field' />
  </InputSection>
)

storiesOf('Core Components|Form Components/InputSection', module)
  .add('basic usage', () => (
    <InputSection
      headline='Lorem ipsum dolor sit amet'
      description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
    >
      <InputField placeholder='Input field' />
    </InputSection>
  ))

storiesOf('Core Components|Form Components/InputSection/States', module)
  .add('invalid field with error message', () => (
    <InputSection
      headline='Lorem ipsum dolor sit amet'
      description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
      errorMessage='Something went wrong.'
    >
      <InputField placeholder='Input field' isInvalid />
    </InputSection>
  ))

storiesOf('Core Components|Form Components/InputSection/Debug', module)
  .add('missing props', () => (
    <InputSection />
  ))
