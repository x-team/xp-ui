import React from 'react'
import { storiesOf } from '@storybook/react'

import TextareaEditor from './TextareaEditor'

storiesOf('Core Components|Form Components/TextareaEditor', module)
  .add('basic usage', () => (
    <TextareaEditor
      id='textareaeditorid'
      name='textareaeditorname'
      charLimit={200}
      placeholder='A magical placeholder.'
      value='Textarea with text value.'
      linesLimit={5}
    />
  ))

storiesOf('Core Components|Form Components/TextareaEditor/Debug', module)
  .add('missing props (does component explode?)', () => <TextareaEditor />)
