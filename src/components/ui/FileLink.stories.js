import React from 'react'
import { storiesOf } from '@storybook/react'

import FileLink from './FileLink'

storiesOf('UI Components/FileLink', module)
  .add('basic usage', () => (
    <FileLink
      path='https://pbs.twimg.com/profile_images/416334680598659072/-_RxK6dH_200x200.jpeg'
    />
  ))
  .add('missing props (does component explode?)', () => <FileLink />)
