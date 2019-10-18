import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorBox from './ErrorBox'

storiesOf('UI Components|ErrorBox', module)
  .add('basic usage', () => <ErrorBox errors={{ name: 'Something went wrong' }} />)

storiesOf('UI Components|ErrorBox/Debug', module)
  .add('missing props (does component explode?)', () => <ErrorBox />)
  .add('no errors', () => <ErrorBox errors={{}} />)
  .add('with failed', () => (
    <ErrorBox errors={{
      name: 'Something went wrong',
      failed: <span>The operation <b>failed</b></span>
    }} />
  ))
  .add('with HTML content', () => (
    <ErrorBox errors={{ name: <span>Something went <a href='#'>wrong</a></span> }} />
  ))
