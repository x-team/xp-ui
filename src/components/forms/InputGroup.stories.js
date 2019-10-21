import React from 'react'
import { storiesOf } from '@storybook/react'

import InputGroup from './InputGroup'

storiesOf('Core Components|Form Components/InputGroup', module)
  .add('basic usage', () => (
    <InputGroup
      maxLength={20}
      name='soAccount'
      className='social-so'
      addonText='stackoverflow.com/users/'
      placeholder='stackoverflow account..'
      defaultValue='so_account'
    />
  ))

storiesOf('Core Components|Form Components/InputGroup/Debug', module)
  .add('missing props (does component explode?)', () => <InputGroup />)
