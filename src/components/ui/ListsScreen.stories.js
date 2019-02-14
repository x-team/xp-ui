import React from 'react'
import { storiesOf } from '@storybook/react'

import ListsScreen from './ListsScreen'
import AdminScreen from './AdminScreen'

import { StorySearchForm } from './SearchForm.stories'

const sampleContent = Array(50).fill('Anything goes in the content').map((each, i) => <p key={`content-${i}`}>{each}</p>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center', fontStyle: 'italic' }}>
    XHeader is not available at auto-ui, this is a fake representation
  </div>
)

const FakeApplicantProfileHeader = () => (
  <div style={{ height: '100%', textAlign: 'center', fontStyle: 'italic' }}>
    ApplicantProfileHeader is not available at auto-ui, this is a fake representation
  </div>
)

const FakeApplicantRender = () => (
  <div style={{ height: '100%', overflow: 'auto', fontStyle: 'italic' }}>
    {sampleContent}
  </div>
)

const FakeResultRender = () => (
  <div style={{ height: '100%', overflow: 'auto', fontStyle: 'italic' }}>
    {sampleContent}
  </div>
)

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/ListsScreen', module)
  .add('full composition with AdminScreen', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        <ListsScreen
          mode='list'
          header={<FakeApplicantProfileHeader />}
          applicant={<FakeApplicantRender />}
          result={<FakeResultRender />}
          search={<StorySearchForm />}
        />
      </AdminScreen>
    </Body>
  ))
  .add('lists view mode', () => (
    <Body>
      <ListsScreen
        mode='list'
        header={<FakeApplicantProfileHeader />}
        applicant={<FakeApplicantRender />}
        result={<FakeResultRender />}
        search={<StorySearchForm />}
      />
    </Body>
  ))
  .add('tabular view mode', () => (
    <Body>
      <ListsScreen
        mode='tabular'
        applicant={<FakeApplicantRender />}
        result={<FakeResultRender />}
        search={<StorySearchForm mode='tabular' />}
      />
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <Body>
      <ListsScreen />
    </Body>
  ))
