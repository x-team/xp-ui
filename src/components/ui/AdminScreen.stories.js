import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AdminScreen from './AdminScreen'

const sampleContent = Array(50).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center', fontStyle: 'italic' }}>
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

storiesOf('UI Components/AdminScreen', module)
  .add('complete', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        {sampleContent}
      </AdminScreen>
    </Body>
  ))
  .add('with modal', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: sampleContent
        }}
      >
        {sampleContent}
      </AdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <AdminScreen />
    </Body>
  ))
