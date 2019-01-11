// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'

import RichTextEditor from './RichTextEditor'

storiesOf('UI Components/RichTextEditor', module)
  .add('basic usage', () => (
    <RichTextEditor />
  ))
  .add('disabled', () => (
    <RichTextEditor disabled />
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
  .add('with knobs', () => (
    <RichTextEditor
      disabled={boolean('disabled', false)}
      initialValue={text('initialValue', undefined)}
      characterLimit={number('characterLimit', 140)}
      hideModeSwitch={boolean('hideModeSwitch', true)}
      handleChange={action('handleChange')}
    />
  ))
