import React from 'react'
import { storiesOf } from '@storybook/react'

import Tab from './Tab'
import Tabs from './Tabs'

storiesOf('Core Components|Tabs', module)
  .add('basic usage', () => (
    <Tabs>
      <Tab title='Tab 1'>Tab 1 Content</Tab>
      <Tab title='Tab 2'>Tab 2 Content</Tab>
      <Tab title='Tab 3'>Tab 3 Content</Tab>
    </Tabs>
  ))
  .add('one tab', () => (
    <Tabs>
      <Tab title='Tab 1'>Tab 1 Content</Tab>
    </Tabs>
  ))
  .add('default active last tab', () => (
    <Tabs defaultActiveTabKey={2}>
      <Tab title='Tab 1'>Tab 1 Content</Tab>
      <Tab title='Tab 2'>Tab 2 Content</Tab>
      <Tab title='Tab 3'>Tab 3 Content</Tab>
    </Tabs>
  ))

storiesOf('Core Components|Tabs/Debug', module)
  .add('missing props (does component explode?)', () => <Tabs />)
