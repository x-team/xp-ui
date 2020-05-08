import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from './Avatar'

storiesOf('Core Components|Avatar', module)
  .add('basic usage', () => (
    <Avatar src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png' />
  ))

storiesOf('Core Components|Avatar/Use Cases', module)
  .add('32x32 size', () => (
    <Avatar
      src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png'
      alt='I am Batman!'
      size={32}
    />
  ))
  .add('64x64 size', () => (
    <Avatar
      src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png'
      alt='I am Batman!'
      size={64}
    />
  ))
  .add('128x128 size', () => (
    <Avatar
      src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png'
      alt='I am Batman!'
      size={128}
    />
  ))
  .add('without image', () => (
    <Avatar
      alt='X P'
      size={32}
    />
  ))

storiesOf('Core Components|Avatar/Debug', module)
  .add('with not reachable image source', () => (
    <Avatar
      src='https://x-team.com/some-path-that-doesn-exists.png'
      alt='X P'
      size={32}
    />
  ))
  .add('missing props', () => (
    <Avatar />
  ))
