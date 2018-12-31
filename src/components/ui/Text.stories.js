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
    <Text content={(<p>Bellow you'll find questions based on the skills you told us about in level 1. <br /> <strong>You only need to respond to questions for skills that you want to continue working </strong></p>)} />
  ))
