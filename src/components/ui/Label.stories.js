// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'
storiesOf('Core Components|Form Components/Label', module)
  .add('basic usage', () => (
    <Label
      headline='Lorem ipsum'
      description='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    />
  ))
storiesOf('Core Components|Form Components/Label/Debug', module)
  .add('with error', () => (
    <Label
      headline='Lorem ipsum'
      description='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
      hasError
    />
  ))
  .add('without description', () => (
    <Label
      headline='Lorem ipsum'
    />
  ))
  .add('without headline', () => (
    <Label
      description='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    />
  ))
  .add('without very long headline', () => (
    <Label
      headline='Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum '
    />
  ))
  .add('missing props', () => (
    <Label />
  ))