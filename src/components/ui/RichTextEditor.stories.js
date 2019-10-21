// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, number, text, array } from '@storybook/addon-knobs'

import RichTextEditor from './RichTextEditor'

storiesOf('Core Components|Form Components/RichTextEditor', module)
  .add('basic usage', () => (
    <RichTextEditor />
  ))

storiesOf('Core Components|Form Components/RichTextEditor/States', module)
  .add('disabled', () => (
    <RichTextEditor disabled />
  ))

storiesOf('Core Components|Form Components/RichTextEditor/Debug', module)
  .add('missing props (does component explode?)', () => (
    <RichTextEditor />
  ))
  .add('with initial value', () => (
    <RichTextEditor
      initialValue={`*Hello* <strong>world</strong>! <a href="https://www.google.com">HTML Link</a> and [Markdown Link](https://google.com)`}
      characterLimit={100}
    />
  ))
  .add('with initial value longer than character limit', () => (
    <RichTextEditor
      initialValue={`*Hello* <strong>world</strong>! <a href="https://www.google.com">HTML Link</a> and [Markdown Link](https://google.com)`}
      characterLimit={10}
    />
  ))
  .add('with custom toolbar items', () => (
    <RichTextEditor
      toolbarItems={['heading', 'bold', 'italic']}
    />
  ))
  .add('with hidden toolbar', () => (
    <RichTextEditor hideToolbar />
  ))
  .add('with knobs', () => (
    <RichTextEditor
      disabled={boolean('disabled', false)}
      initialValue={text('initialValue', undefined)}
      characterLimit={number('characterLimit', 140)}
      hideModeSwitch={boolean('hideModeSwitch', true)}
      handleChange={action('handleChange')}
      toolbarItems={array('Toolbar Items', ['heading', 'bold', 'italic'])}
    />
  ))
  .add('viewer', () => (
    <RichTextEditor
      mode='viewer'
      initialValue={`# Heading 1

## Heading 2

### Heading 3

*Hello* <strong>world</strong>! <a href="https://www.google.com">HTML Link</a> and [Markdown Link](https://google.com)

\`\`\`js
(() => {
  const person {
    name: 'John',
    age: 25,
    married: true,
    getData: function getData() {
      return \`\${this.name} \${this.age} \${this.married}\`
    }
  }

  return person
})()
\`\`\`

*Italic text*

This is **bold** text

---

~Striked text~

> This is a blockquote!
> - Albert Einstein

1. One
1. Two
1. Three

* A
* B
* C

- Monday
- Tuesday
- Wednesday
      `}
    />
  ))
