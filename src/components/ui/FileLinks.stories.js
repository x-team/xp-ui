// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import FileLinks from './FileLinks'

storiesOf('UI Components|File Links/FileLinks', module)
  .add('basic usage', () => (
    <FileLinks files={[
      {
        id: 357,
        path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
      },
      {
        id: 357,
        path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
      }
    ]} />
  ))

storiesOf('UI Components|File Links/FileLinks/Debug', module)
  .add('missing props (does component explode?)', () => <FileLinks />)
