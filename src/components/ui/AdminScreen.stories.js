import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import AdminScreen from './AdminScreen'

const sampleContent = Array(80).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
const sampleModalContent = Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center', fontStyle: 'italic' }}>
    XHeader is not available at xp-ui, this is a fake representation
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

export const StoryAdminScreen = ({ modal, ...props }) => (
  <State initialState={{ isModalOpen: modal && !!modal.content }}>
    {({ setState, state }) => state.isModalOpen ? (
      <AdminScreen
        header={<FakeXHeader />}
        {...props}
        modal={{
          onClose: () => setState({ isModalOpen: false }),
          content: modal.content || null
        }}
      />
    ) : (
      <AdminScreen
        header={<FakeXHeader />}
        {...props}
      />
    )}
  </State>
)

storiesOf('UI Components/AdminScreen', module)
  .add('default with tall content', () => (
    <Body>
      <StoryAdminScreen>
        {sampleContent}
      </StoryAdminScreen>
    </Body>
  ))
  .add('default with short content', () => (
    <Body>
      <StoryAdminScreen>
        <div>bump</div>
      </StoryAdminScreen>
    </Body>
  ))
  .add('tall content with Modal with tall content', () => (
    <Body>
      <StoryAdminScreen
        modal={{
          content: sampleModalContent
        }}
      >
        {sampleContent}
      </StoryAdminScreen>
    </Body>
  ))
  .add('tall content with Modal with short content', () => (
    <Body>
      <StoryAdminScreen
        modal={{
          content: (<div>bump</div>)
        }}
      >
        {sampleContent}
      </StoryAdminScreen>
    </Body>
  ))
  .add('short content with Modal with short content', () => (
    <Body>
      <StoryAdminScreen
        modal={{
          content: (<div>bump</div>)
        }}
      >
        <div>bump</div>
      </StoryAdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <AdminScreen />
    </Body>
  ))
