import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TwoColumnsLayout from './TwoColumnsLayout'
import AdminScreen from './AdminScreen'

const sampleSidebar = Array(50).fill('Anything goes in the sidebar body').map((each, i) => <p key={`sidebar-${i}`}>{each}</p>)
const sampleContent = Array(50).fill('Anything goes in the content body').map((each, i) => <p key={`content-${i}`}>{each}</p>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center' }}>
    XHeader is not available at auto-ui, this is a fake representation
  </div>
)

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/TwoColumnsLayout', module)
  .add('standalone', () => (
    <Body>
      <TwoColumnsLayout
        sidebar={sampleSidebar}
        sidebarHeading='Filters'
        content={sampleContent}
        contentHeading='Search'
      />
    </Body>
  ))
  .add('composed in AdminScreen', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        <TwoColumnsLayout
          sidebar={sampleSidebar}
          sidebarHeading='Filters'
          content={sampleContent}
          contentHeading='Search'
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
          content: sampleContent
        }}
      >
        <TwoColumnsLayout
          sidebar={sampleSidebar}
          sidebarHeading='Filters'
          content={sampleContent}
          contentHeading='Search'
        />
      </AdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <TwoColumnsLayout />
    </Body>
  ))
