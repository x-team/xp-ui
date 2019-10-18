import React from 'react'
import { storiesOf } from '@storybook/react'

import SettingsScreen from './SettingsScreen'

const content = Array(50).fill(<p>Anything goes in the content</p>)
const menu = Array(50).fill(<a href='#'>Menu link</a>)

menu.push(<p>A strangely wide menu item just to make it more difficult and breakable, also this is not a link (<a href='#'>this is a link</a>), this is just text...</p>)

storiesOf('UI Components|SettingsScreen', module)
  .add('basic usage', () => (
    <div style={{ height: '500px', overflow: 'hidden' }}>
      <SettingsScreen menu={menu}>
        <div>{content.map(each => each)}</div>
      </SettingsScreen>
    </div>
  ))

storiesOf('UI Components|SettingsScreen/Debug', module)
  .add('missing props (does component explode?)', () => <SettingsScreen />)
