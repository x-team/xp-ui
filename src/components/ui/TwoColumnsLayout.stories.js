import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

import TwoColumnsLayout from './TwoColumnsLayout'
import { StoryAdminScreen } from './AdminScreen.stories'

const sampleSidebar = Array(80).fill('Anything goes in the sidebar body').map((each, i) => <div key={`sidebar-${i}`}>{each}</div>)
const sampleContent = Array(80).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
const sampleModalContent = Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

export const StoryTwoColumnsLayout = (props) => (
  <TwoColumnsLayout
    sidebar={props.sidebar || sampleSidebar}
    sidebarHeading={text('Sidebar Heading', props.sidebarHeading || 'Filters')}
    sidebarWidth={number('Sidebar Width', props.sidebarWidth || 385)}
    sidebarIcon={text('Sidebar Icon', props.sidebarIcon || 'filters')}
    scrollableSidebar={boolean('Scrollable Sidebar', props.scrollableSidebar !== undefined ? props.scrollableSidebar : true)}
    content={props.content || sampleContent}
    contentHeading={text('Content Heading', props.contentHeading || 'Search')}
    contentId='test'
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
  .add('standalone with very long headers and contents', () => (
    <Body>
      <StoryTwoColumnsLayout
        sidebarHeading='verylongcontenttoseewhathappenverylongcontenttoseewhathappenverylongcontenttoseewhathappen'
        sidebar={<div>verylongcontenttoforcehorizontalscrollbarstoappearverylongcontenttoforcehorizontalscrollbarstoappearverylongcontenttoforcehorizontalscrollbarstoappear</div>}
        contentHeading='verylongcontenttoseewhathappenverylongcontenttoseewhathappenverylongcontenttoseewhathappen'
        content={<div>verylongcontenttoforcehorizontalscrollbarstoappearverylongcontenttoforcehorizontalscrollbarstoappearverylongcontenttoforcehorizontalscrollbarstoappear</div>}
      />
    </Body>
  ))
  .add('composed in AdminScreen', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with short content', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebar={<div>bump</div>}
          content={<div>bump</div>}
        />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Modal', () => (
    <Body>
      <StoryAdminScreen
        modal={{
          content: sampleModalContent
        }}
      >
        <StoryTwoColumnsLayout />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Modal with short content', () => (
    <Body>
      <StoryAdminScreen
        modal={{
          content: (<div>bump</div>)
        }}
      >
        <StoryTwoColumnsLayout />
      </StoryAdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <TwoColumnsLayout />
    </Body>
  ))
