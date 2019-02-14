import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, number } from '@storybook/addon-knobs'

import TwoColumnsLayout from './TwoColumnsLayout'
import AdminScreen from './AdminScreen'

const sampleSidebar = Array(80).fill('Anything goes in the sidebar body').map((each, i) => <div key={`sidebar-${i}`}>{each}</div>)
const sampleContent = Array(80).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
const sampleModalContent = Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center' }}>
    XHeader is not available at auto-ui, this is a fake representation
  </div>
)

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const StoryTwoColumnsLayout = (props) => (
  <TwoColumnsLayout
    sidebar={props.sidebar || sampleSidebar}
    sidebarHeading={text('Sidebar Heading', props.sidebarHeading || 'Filters')}
    sidebarWidth={number('Sidebar Width', props.sidebarWidth || 385)}
    sidebarIcon={text('Sidebar Icon', props.sidebarIcon || 'filters')}
    content={props.content || sampleContent}
    contentHeading={text('Content Heading', props.contentHeading || 'Search')}
  />
)

storiesOf('UI Components/TwoColumnsLayout', module)
  .add('standalone default usage', () => (
    <Body>
      <StoryTwoColumnsLayout />
    </Body>
  ))
  .add('standalone short content', () => (
    <Body>
      <StoryTwoColumnsLayout
        sidebar={<div>bump</div>}
        content={<div>bump</div>}
      />
    </Body>
  ))
  .add('composed in AdminScreen', () => (
    <Body>
      <AdminScreen header={<FakeXHeader />}>
        <StoryTwoColumnsLayout />
      </AdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with short content', () => (
    <Body>
      <AdminScreen header={<FakeXHeader />}>
        <StoryTwoColumnsLayout
          sidebar={<div>bump</div>}
          content={<div>bump</div>}
        />
      </AdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Modal', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: sampleModalContent
        }}
      >
        <StoryTwoColumnsLayout />
      </AdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Modal with short content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: (<div>bump</div>)
        }}
      >
        <StoryTwoColumnsLayout />
      </AdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <TwoColumnsLayout />
    </Body>
  ))
