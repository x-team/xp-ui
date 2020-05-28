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

storiesOf('Core Components|Form Components/TextareaEditor/States', module)
  .add('disabled', () => (
    <TextareaEditor
      disabled
    />
  ))
  .add('disabled with value', () => (
    <TextareaEditor
      disabled
      value='Textarea disabled.'
    />
  ))
  .add('invalid', () => (
    <TextareaEditor
      isInvalid
    />
  ))
  .add('invalid with value', () => (
    <TextareaEditor
      isInvalid
      value='Textarea invalid.'
    />
  ))

storiesOf('Core Components|Form Components/TextareaEditor/Debug', module)
  .add('missing props', () => <TextareaEditor />)
  .add('initial value bigger than character limit', () => (
    <TextareaEditor
      charLimit={20}
      value='Textarea with initial value bigger than character limit.'
    />
  ))
