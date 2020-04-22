// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import SelectorOption from './SelectorOption'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; padding: 30px 50px; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|Form Components/SelectorOption', module)
  .add('basic usage', () => (
    <Body>
      <SelectorOption label='JavaScript' />
    </Body>
  ))

storiesOf('Core Components|Form Components/SelectorOption/Debug', module)
  .add('many options stacked', () => (
    <Body>
      <SelectorOption label='JavaScript' />
      <SelectorOption label='JavaScript' />
      <SelectorOption label='JavaScript' />
      <SelectorOption label='JavaScript' />
    </Body>
  ))
  .add('missing props', () => (
    <SelectorOption />
  ))
