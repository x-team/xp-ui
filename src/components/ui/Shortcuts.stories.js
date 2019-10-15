// @flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { size } from '../../utils/helpers'

import Shortcuts from './Shortcuts'

const Body = ({ children }) => (
  <div style={{ widht: '100%', height: '100vh', padding: '50px 150px 0 0', textAlign: 'right' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const seedCount = 7
const links = Array(seedCount).fill({}).reduce((acc, cur) => {
  const keyword = faker.random.words(2)
  return {
    ...acc,
    [keyword]: {
      label: keyword,
      value: keyword,
      external: size(acc) >= (seedCount - 2)
    }
  }
}, {})

storiesOf('UI Components/Shortcuts', module)
  .add('basic usage', () => (
    <Body>
      <Shortcuts links={links} />
    </Body>
  ))

storiesOf('UI Components/Shortcuts/Debug', module)
  .add('missing props (does component explode?)', () => (
    <Shortcuts />
  ))
