// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './Label'

const sampleHeadline = 'Lorem ipsum dolor sit amet'
const sampleDescription = 'Sed dui metus, pretium vel justo at, malesuada viverra sapien.'
const sampleLongText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla diam nec neque consectetur maximus. Sed dui metus, pretium vel justo at, malesuada viverra sapien. Quisque vulputate nibh sapien, nec ultrices purus bibendum id. Aenean dictum commodo enim et cursus. Suspendisse potenti. Aenean fermentum, tortor ac bibendum bibendum, arcu nisl aliquam nulla, eu dapibus quam orci ut mi.'

storiesOf('Core Components|Form Components/Label', module)
  .add('basic usage', () => (
    <Label
      headline={sampleHeadline}
      description={sampleDescription}
    />
  ))

storiesOf('Core Components|Form Components/Label/Debug', module)
  .add('invalid display', () => (
    <Label
      headline={sampleHeadline}
      description={sampleDescription}
      isInvalid
    />
  ))
  .add('without description', () => (
    <Label
      headline={sampleHeadline}
    />
  ))
  .add('without headline', () => (
    <Label
      description={sampleDescription}
    />
  ))
  .add('with long headline and description', () => (
    <Label
      headline={sampleLongText}
      description={sampleLongText}
    />
  ))
  .add('missing props', () => (
    <Label />
  ))
