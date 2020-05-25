// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import InputLabel from './InputLabel'

const sampleHeadline = 'Lorem ipsum dolor sit amet'
const sampleDescription = 'Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
const sampleLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla diam nec neque consectetur maximus. Sed dui metus, pretium vel justo at, malesuada viverra sapien. Quisque vulputate nibh sapien, nec ultrices purus bibendum id. Aenean dictum commodo enim et cursus. Suspendisse potenti. Aenean fermentum, tortor ac bibendum bibendum, arcu nisl aliquam nulla, eu dapibus quam orci ut mi.'

storiesOf('Core Components|Form Components/InputLabel', module)
  .add('basic usage', () => (
    <InputLabel
      headline={sampleHeadline}
      description={sampleDescription}
    />
  ))

storiesOf('Core Components|Form Components/InputLabel/States', module)
  .add('required', () => (
    <InputLabel
      headline={sampleHeadline}
      description={sampleDescription}
      isRequired
    />
  ))

storiesOf('Core Components|Form Components/InputLabel/Debug', module)
  .add('without description', () => (
    <InputLabel
      headline={sampleHeadline}
    />
  ))
  .add('without headline', () => (
    <InputLabel
      description={sampleDescription}
    />
  ))
  .add('with long headline and description', () => (
    <InputLabel
      headline={sampleLongText}
      description={sampleLongText}
    />
  ))
  .add('missing props', () => (
    <InputLabel />
  ))
