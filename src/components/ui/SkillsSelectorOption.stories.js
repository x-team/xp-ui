// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SkillsSelectorOption from './SkillsSelectorOption'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; padding: 30px 50px; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|Form Components/SkillsSelectorOption', module)
  .add('basic usage', () => (
    <Body>
      <SkillsSelectorOption label='JavaScript' />
    </Body>
  ))

storiesOf('Core Components|Form Components/SkillsSelectorOption/Debug', module)
  .add('many options stacked', () => (
    <Body>
      <SkillsSelectorOption label='JavaScript' />
      <SkillsSelectorOption label='JavaScript' />
      <SkillsSelectorOption label='JavaScript' />
      <SkillsSelectorOption label='JavaScript' />
    </Body>
  ))
  .add('missing props', () => (
    <SkillsSelectorOption />
  ))
