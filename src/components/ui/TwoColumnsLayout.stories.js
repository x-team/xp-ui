import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TwoColumnsLayout from './TwoColumnsLayout'
import ProfileHeaderLinks from './ProfileHeaderLinks'
import { StoryAdminScreen } from './AdminScreen.stories'
import { StoryFilters } from './Filters/Filters.stories'
import HeadingWithQuickSearch from './HeadingWithQuickSearch'
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
    sidebarHeadingAction={props.sidebarHeadingAction}
    sidebarWidth={number('Sidebar Width', props.sidebarWidth || 385)}
    sidebarIcon={select('Sidebar Icon', availableIcons, props.sidebarIcon || '')}
    scrollableSidebar={boolean('Scrollable Sidebar', props.scrollableSidebar !== undefined ? props.scrollableSidebar : true)}
    content={props.content || sampleContent}
    contentHeading={text('Content Heading', props.contentHeading || 'Search')}
    contentId='test'
  />
)

storiesOf('Screens and Layouts|StoryTwoColumnsLayout', module)
  .add('standalone example', () => (
    <Body>
      <StoryTwoColumnsLayout />
    </Body>
  ))

storiesOf('Screens and Layouts|StoryTwoColumnsLayout/Use Cases', module)
  .add('composed in AdminScreen', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout />
      </StoryAdminScreen>
    </Body>
  ))
  .add('composed in AdminScreen with Filters and sidebarHeading element', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebarHeading={<HeadingWithQuickSearch leftIcon='filters' text='Filters' />}
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

storiesOf('Screens and Layouts|StoryTwoColumnsLayout/Debug', module)
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
  .add('with composed headings in AdminScreen', () => (
    <Body>
      <StoryAdminScreen>
        <StoryTwoColumnsLayout
          sidebarHeading={<div style={{ backgroundColor: 'black', color: 'white' }}>bump</div>}
          contentHeading={<div style={{ backgroundColor: 'black', color: 'white' }}>bump</div>}
        />
      </StoryAdminScreen>
    </Body>
  ), {
    notes: {
      markdown: `
This story is useful to demonstrate how both heading parts behave by default when being passed a Component, instead of a string.
      `
    }
  })
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
          sidebarHeadingAction={action('Sidebar heading route redirection')}
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

storiesOf('Screens and Layouts|StoryTwoColumnsLayout/Debug', module)
  .add('missing props (does component explode?)', () => (
    <Body>
      <TwoColumnsLayout />
    </Body>
  ))
