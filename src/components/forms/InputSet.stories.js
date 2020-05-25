// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import InputSet from './InputSet'
import InputField from './InputField'

export const SampleInputSet = (props: any) => (
  <InputSet
    headline='Lorem ipsum dolor sit amet'
    description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
    {...props}
  >
    <InputField placeholder='Input field' />
  </InputSet>
)

storiesOf('Core Components|Form Components/InputSet', module)
  .add('basic usage', () => (
    <InputSet
      headline='Lorem ipsum dolor sit amet'
      description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
    >
      <InputField placeholder='Input field' />
    </InputSet>
  ))

storiesOf('Core Components|Form Components/InputSet/States', module)
  .add('invalid field with error message', () => (
    <InputSet
      headline='Lorem ipsum dolor sit amet'
      description='Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
      errorMessage='Something went wrong.'
    >
      <InputField placeholder='Input field' isInvalid />
    </InputSet>
  ))

storiesOf('Core Components|Form Components/InputSet/Debug', module)
  .add('missing props', () => (
    <InputSet />
  ))
