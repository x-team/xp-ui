import React from 'react'
import { storiesOf } from '@storybook/react'

import LoginButton from './LoginButton'

storiesOf('UI Components/LoginButton', module)
  .add('basic usage', () => <LoginButton children='Login With Google' id='google-callback-id' />)
  .add('missing props (does component explode?)', () => {
    return (
      <LoginButton />
    )
  })
