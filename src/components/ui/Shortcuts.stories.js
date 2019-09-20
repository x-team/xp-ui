// @flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'

import Shortcuts from './Shortcuts'

const Body = ({ children }) => (
  <div style={{ widht: '100%', height: '100vh', padding: '20px 0 0 210px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const links = Array(5).fill({}).reduce((acc, cur) => {
  const keyword = faker.random.words(1)
  return {
    ...acc,
    [keyword]: {
      label: keyword,
      value: keyword
    }
  }
}, {})

storiesOf('UI Components/Shortcuts', module)
  .add('basic usage', () => (
    <Body>
      <Shortcuts links={links} />
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Shortcuts />
  ))
