// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './Text'

storiesOf('UI Components/Text', module)
  .add('empty text example ', () => <Text />)
  .add('heading', () => (
    <Text
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('heading with divider', () => (
    <Text
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('heading with divider and no content', () => (
    <Text heading='Your roadmap to X-Team' hasDivider />
  ))
  .add('heading with center align', () => (
    <Text
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('heading with center align and divider', () => (
    <Text
      heading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
      hasDivider
    />
  ))
  .add('sub heading', () => (
    <Text
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('sub Heading with center align', () => (
    <Text
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('sub Heading with divider', () => (
    <Text
      subHeading='Your roadmap to X-Team'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('sub Heading with level', () => (
    <Text
      subHeading='Your roadmap to X-Team'
      level='Level 7'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
    />
  ))
  .add('sub Heading with level and center align', () => (
    <Text
      subHeading='Your roadmap to X-Team'
      level='Level 7'
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
    />
  ))
  .add('without Heading and Sub Heading with divider', () => (
    <Text
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      hasDivider
    />
  ))
  .add('without Heading and Sub Heading with isCentered align', () => (
    <Text
      content='Many developers who came before you started right here and went on to do some of the best work of their career. That same opportunity begins now for you.'
      isCentered
      hasDivider
    />
  ))
  .add('pure content with no wrappers around', () => (
    <Text content='Just a sample text' isPureContent />
  ))
  .add('required', () => <Text content='Just a required text' required />)
  .add('pure content with no wrappers around and Required', () => (
    <Text content='Just a required text' isPureContent required />
  ))
  .add('content with HTML tags', () => (
    <Text content={(
      <div>
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <hr />
        <em>Emphasized text</em><br />
        <strong>Strong text</strong><br />
        <code>A piece of computer code</code><br />
        <samp>Sample output from a computer program</samp><br />
        <kbd>Keyboard Text</kbd><br />
        <var>Variable Code</var><br />
        <mark>Mark</mark> <br />
        <b>Bold Text</b> <br />
        <i>italic Text</i> <br />
        <a href='https://www.google.com' target='_blank'>Link</a>
        <p><strong>Paragraph:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque vestibulum sem id cursus. Fusce nec consequat erat. Praesent convallis aliquet augue, vel lacinia urna pretium eu. Morbi accumsan neque sit amet feugiat molestie. Aliquam erat volutpat. Cras quis dapibus risus. Proin luctus hendrerit semper. Donec finibus hendrerit ante at egestas.</p>
      </div>
    )} />
  ))
