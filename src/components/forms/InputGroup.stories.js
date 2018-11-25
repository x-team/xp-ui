import React from 'react'
import { storiesOf } from '@storybook/react'

import InputGroup from './InputGroup'

storiesOf('Form Components/InputGroup', module)
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
  .add('missing props (does component explode?)', () => <InputGroup />)
