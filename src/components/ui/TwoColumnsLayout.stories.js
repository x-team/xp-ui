import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TwoColumnsLayout from './TwoColumnsLayout'
import ProfileHeaderLinks from './ProfileHeaderLinks'
import { StoryAdminScreen } from './AdminScreen.stories'
import { StoryFilters } from './Filters/Filters.stories'
import Filters from './Filters'
import { getIcons } from './SvgIcon.js'

const icons = getIcons()
const availableIcons = Object.keys(icons).reduce((acc, cur) => ({ ...acc, [cur]: cur }), {})

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
    sidebarHeadingLink={text('Sidebar Heading Link', props.sidebarHeadingLink || '')}
    sidebarWidth={number('Sidebar Width', props.sidebarWidth || 385)}
    sidebarIcon={select('Sidebar Icon', availableIcons, props.sidebarIcon || 'filters')}
    scrollableSidebar={boolean('Scrollable Sidebar', props.scrollableSidebar !== undefined ? props.scrollableSidebar : true)}
    content={props.content || sampleContent}
    contentHeading={text('Content Heading', props.contentHeading || 'Search')}
    contentId='test'
  />
)

storiesOf('UI Components/TwoColumnsLayout', module)
  .add('standalone example', () => (
    <Body>
      <StoryTwoColumnsLayout />
    </Body>
  ))

storiesOf('UI Components/TwoColumnsLayout/Use cases', module)
  .add('composed in AdminScreen', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Filters', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebarHeading={<Filters.SidebarHeading />}
          sidebar={<StoryFilters />}
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

storiesOf('UI Components/TwoColumnsLayout/Debug', module)
  .add('standalone with short content', () => (
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
  .add('with short content and composed in AdminScreen', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebar={<div>bump</div>}
          content={<div>bump</div>}
        />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen and with Modal with short content', () => (
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
  .add('composed in AdminScreen and with with link in the sidebar heading', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebarIcon='arrowleft'
          sidebarWidth={425}
          sidebarHeading='A link in the sidebar heading'
          sidebarHeadingLink={action('Sidebar heading route redirection')}
          contentHeading={(
            <ProfileHeaderLinks
              smaller
              links={[
                { label: 'Link 1', hash: '#link1' },
                { label: 'Link 2', hash: '#link2' },
                {
                  label: 'External Link',
                  url: 'http://localhost:8000/'
                }
              ]}
            />
          )}
        />
      </StoryAdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <TwoColumnsLayout />
    </Body>
  ))
