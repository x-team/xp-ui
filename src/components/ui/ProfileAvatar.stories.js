import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileAvatar from './ProfileAvatar'

storiesOf('UI Components|ProfileAvatar', module)
  .add('basic usage', () => (
    <ProfileAvatar src='https://gamespot1.cbsistatic.com/uploads/scale_landscape/1587/15875866/3660435-avatar.jpg' />
  ))

storiesOf('UI Components|ProfileAvatar/Debug', module)
  .add('without image', () => (
    <ProfileAvatar />
  ))
  .add('missing props', () => (
    <ProfileAvatar />
  ))
