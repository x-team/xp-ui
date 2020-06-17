// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import InputError from './InputError'

storiesOf('Core Components|Form Components/InputError', module)
  .add('basic usage', () => (
    <InputError
      message='Lorem ipsum dolor sit amet'
    />
  ))

storiesOf('Core Components|Form Components/InputError/Debug', module)
  .add('long message', () => (
    <InputError
      message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla diam nec neque consectetur maximus. Sed dui metus, pretium vel justo at, malesuada viverra sapien. Quisque vulputate nibh sapien, nec ultrices purus bibendum id. Aenean dictum commodo enim et cursus. Suspendisse potenti. Aenean fermentum, tortor ac bibendum bibendum, arcu nisl aliquam nulla, eu dapibus quam orci ut mi.'
    />
  ))
  .add('missing props', () => (
    <InputError />
  ))
