import React from 'react'
import { storiesOf } from '@storybook/react'
import { action, decorate } from '@storybook/addon-actions'

import AttachFiles from './AttachFiles'

const firstArg = decorate([args => args.slice(0, 1)])

storiesOf('UI Components/AttachFiles', module)
  .add('Multiple files', () => (
    <AttachFiles
      files={[
        {
          filename: 'filename-01.zip',
          path: 'string',
          progress: 100
        },
        {
          filename: 'filename-02.zip',
          path: 'string',
          progress: 100
        },
        {
          filename: 'filename-03.zip',
          path: 'string',
          progress: 30
        },
        {
          filename: 'filename-04.zip',
          path: 'string',
          progress: 90
        }
      ]}
      onFileUpload={action('upload new file')}
      onCancel={firstArg.action('cancel upload')}
      onDelete={firstArg.action('delete')}
    />
  ))
  .add('Multiple files (Preview)', () => (
    <AttachFiles
      files={[
        {
          filename: 'filename-01.zip'
        },
        {
          filename: 'filename-02.zip'
        },
        {
          filename: 'filename-03.zip'
        },
        {
          filename: 'filename-04.zip'
        }
      ]}
      onFileUpload={action('upload new file')}
      onCancel={firstArg.action('cancel upload')}
      onDelete={firstArg.action('delete')}
    />
  ))
  .add('None files (no props)', () => (
    <AttachFiles />
  ))
