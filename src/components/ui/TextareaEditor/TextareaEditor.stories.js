import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TextareaEditor from './TextareaEditor'

storiesOf('UI Components/TextareaEditor', module)
  .add('basic usage', () => (
    <TextareaEditor
      charLimit={30}
      placeholder='A magical placeholder.'
      onChange={action('Fired when textarea value changes')}
      onFocus={action('Fired when textarea is focused')}
      onBlur={action('Fired when textarea is blured')}
    />
  ))
  .add('basic usage, lines limit set', () => (
    <TextareaEditor
      charLimit={200}
      linesLimit={5}
      placeholder='A magical placeholder.'
      text='Magical text #1.\nMagical text #2.\nMagical text #3.\nMagical text #4.\nMagical text #5.\nMagical text #6.\nMagical text #7.\nMagical text #8.\nMagical text #9.\nMagical text #10.'
      html='<p>Magical text #1.</p><p>Magical text #2.</p><p>Magical text #3.</p><p>Magical text #4.</p><p>Magical text #5.</p><p>Magical text #6.</p><p>Magical text #7.</p><p>Magical text #8.</p><p>Magical text #9.</p><p>Magical text #10.</p>'
      onChange={action('Fired when textarea value changes')}
      onFocus={action('Fired when textarea is focused')}
      onBlur={action('Fired when textarea is blured')}
    />
  ))
  .add('two editors side by side', () => (
    <div>
      <TextareaEditor
        charLimit={50}
        id={1}
        placeholder='Placeholder 1'
        text='Text Area #1 With Formatted Text'
        html='<p>Text Area #1 <b>With Formatted Text</b></p>'
        onChange={action('Fired when textarea 1 value changes')}
        onFocus={action('Fired when textarea 1 is focused')}
        onBlur={action('Fired when textarea 1 is blured')}
      />
      <TextareaEditor
        charLimit={500}
        id={2}
        placeholder='Placeholder 2'
        onChange={action('Fired when textarea 2 value changes')}
        onFocus={action('Fired when textarea 2 is focused')}
        onBlur={action('Fired when textarea 2 is blured')}
      />
    </div>
  ))
  .add('read only mode', () => (
    <TextareaEditor
      disableEditing
      text='Text Area #1 With Formatted Text'
      html='<p>Text Area #1 <b>With Formatted Text</b></p>'
    />
  ))

storiesOf('UI Components/TextareaEditor/Debug', module)
  .add('missing props (does component explode?)', () => <TextareaEditor />)
