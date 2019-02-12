import React from 'react'
import { storiesOf } from '@storybook/react'

import SettingsScreen from './SettingsScreen'

const sampleContent = Array(50).fill('Anything goes in the content body').map((each, i) => <p key={`content-${i}`}>{each}</p>)
const sampleMenu = Array(50).fill('Menu link').map((each, i) => <a href='#' key={`menu-${i}`}>{each}</a>)
sampleMenu.push(<p key='long-menu-item'>A strangely wide menu item just to make it more difficult and breakable, also this is not a link (<a href='#'>this is a link</a>), this is just text...</p>)

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/Screens/SettingsScreen', module)
  .add('basic usage', () => (
    <Body>
      <SettingsScreen menu={sampleMenu}>
        <div>{sampleContent}</div>
      </SettingsScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <SettingsScreen />
    </Body>
  ))
