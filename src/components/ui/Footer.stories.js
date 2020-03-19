import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './Footer'

storiesOf('UI Components|Footer', module)
  .add('basic usage', () => (
    <Footer
      copyright={`${new Date().getFullYear()} © All rights reserved. X-Company Pty Ltd.`}
    />
  ))

storiesOf('UI Components|Footer/Debug', module)
  .add('missing props', () => (
    <Footer />
  ))
