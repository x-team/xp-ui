import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AdminScreen from './AdminScreen'

const sampleContent = (
  <div>
    {Array(80).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)}
  </div>
)
const sampleModalContent = Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center', fontStyle: 'italic' }}>
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

storiesOf('UI Components/AdminScreen', module)
  .add('default with tall content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        {sampleContent}
      </AdminScreen>
    </Body>
  ))
  .add('default with short content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        <div>bump</div>
      </AdminScreen>
    </Body>
  ))
  .add('tall content with Modal with tall content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: sampleModalContent
        }}
      >
        {sampleContent}
      </AdminScreen>
    </Body>
  ))
  .add('tall content with Modal with short content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: (<div>bump</div>)
        }}
      >
        {sampleContent}
      </AdminScreen>
    </Body>
  ))
  .add('short content with Modal with short content', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: (<div>bump</div>)
        }}
      >
        <div>bump</div>
      </AdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <AdminScreen />
    </Body>
  ))
