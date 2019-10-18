import React from 'react'
import { storiesOf } from '@storybook/react'

import InputGroup from './InputGroup'

storiesOf('Core|InputGroup', module)
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

storiesOf('Core|InputGroup/Debug', module)
  .add('missing props (does component explode?)', () => <InputGroup />)
