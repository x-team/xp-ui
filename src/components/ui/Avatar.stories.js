import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from './Avatar'

storiesOf('UI Components|Avatar', module)
  .add('basic usage', () => (
    <Avatar src='http://icons.iconarchive.com/icons/diversity-avatars/avatars/128/batman-icon.png' />
  ))
  .add('alt text, 32x32 size', () => (
    <Avatar
      src='https://www.gravatar.com/avatar/61a58e425da620d1f4839c6af03ce70f'
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
  .add('without image source', () => (
    <Avatar
      alt='X P'
      size={32}
    />
  ))
  .add('with not reachable image source', () => (
    <Avatar
      src='https://x-team.com/some-path-that-doesn-exists.png'
      alt='X P'
      size={32}
    />
  ))

storiesOf('UI Components|Avatar/Debug', module)
  .add('missing props (does component explode?)', () => (
    <Avatar />
  ))
