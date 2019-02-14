import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ListsScreen from './ListsScreen'
import AdminScreen from './AdminScreen'
import SearchForm from './SearchForm'

const sampleSidebar = Array(80).fill('Anything goes in the sidebar body').map((each, i) => <div key={`sidebar-${i}`}>{each}</div>)
const sampleContent = Array(80).fill('Anything goes in the content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
const sampleModalContent = Array(80).fill('Anything goes in the modal content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)

const FakeXHeader = () => (
  <div style={{ height: '100%', background: 'white', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)', textAlign: 'center', fontStyle: 'italic' }}>
    XHeader is not available at auto-ui, this is a fake representation
  </div>
)

const FakeApplicantProfileHeader = () => (
  <div style={{ height: '100%', textAlign: 'center', fontStyle: 'italic', backgroundColor: 'rgb(249, 250, 251)', borderBottom: '1px solid rgb(228, 228, 228)' }}>
    ApplicantProfileHeader is not available at auto-ui, this is a fake representation
  </div>
)

const FakeApplicantRender = () => (
  <div style={{ height: '100%', fontStyle: 'italic' }}>
    {sampleSidebar}
  </div>
)

const FakeResultRender = () => (
  <div style={{ height: '100%', fontStyle: 'italic' }}>
    {sampleContent}
  </div>
)

const FakeSearchFormRender = () => (
  <div style={{ height: '220px', background: '#ededed', fontStyle: 'italic' }}>
    SearchForm placeholder
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

storiesOf('UI Components/ListsScreen', module)
  .add('lists view mode', () => (
    <ListsScreen
      mode='list'
      applicant={
        <ul>
          {Array(100)
            .fill()
            .map((_, i) => (
              <li key={i}>Applicant Profile stuff</li>
            ))}
        </ul>
      }
      result={
        <div>
          ApplicantGrid
          <ul>
            {Array(100)
              .fill()
              .map((_, i) => (
                <li key={i}>ApplicantCard</li>
              ))}
          </ul>
        </div>
      }
      search={
        <SearchForm
          mode='card'
          lists={[{ id: 1, value: 'a selected list', selected: true }]}
          onSelectList={action('onSelectList')}
          onClickShowLists={action('onClickShowLists')}
          keywords={'a keyword,or,two,and,much more'}
          onChangeKeywords={action('onChangeKeywords')}
          fields={[{ id: 1, value: 'an unselected field' }]}
          onSelectField={action('onSelectField')}
          statuses={[{ id: 1, value: 'In Pipeline' }]}
          onSelectStatus={action('onSelectStatus')}
          onSubmit={action('onSubmit')}
          openListEditorModal={e => {
            e.preventDefault()
            console.log('openListEditorModal')
          }}
          renderApplicantsStatusFilter={
            'Here it goes ApplicantsStatusFilter component'
          }
        />
      }
    />
  ))
  .add('tabular view mode', () => (
    <ListsScreen
      mode='tabular'
      applicant={
        <ul>
          {Array(100)
            .fill()
            .map((_, i) => (
              <li key={i}>Applicant Profile stuff</li>
            ))}
        </ul>
      }
      result={
        <div>
          ApplicantGrid
          <ul>
            {Array(100)
              .fill()
              .map((_, i) => (
                <li key={i}>ApplicantCard</li>
              ))}
          </ul>
        </div>
      }
      search={
        <SearchForm
          mode='tabular'
          lists={[{ id: 1, value: 'a selected list', selected: true }]}
          onSelectList={action('onSelectList')}
          onClickShowLists={action('onClickShowLists')}
          keywords={'a keyword,or,two,and,much more'}
          onChangeKeywords={action('onChangeKeywords')}
          fields={[{ id: 1, value: 'an unselected field' }]}
          onSelectField={action('onSelectField')}
          statuses={[{ id: 1, value: 'In Pipeline' }]}
          onSelectStatus={action('onSelectStatus')}
          onSubmit={action('onSubmit')}
          openListEditorModal={e => {
            e.preventDefault()
            action('openListEditorModal')
          }}
          renderApplicantsStatusFilter={
            'Here it goes ApplicantsStatusFilter component'
          }
        />
      }
    />
  ))
  .add('lists view mode composed with AdminScreen', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
      >
        <ListsScreen
          mode='list'
          header={<FakeApplicantProfileHeader />}
          applicant={<FakeApplicantRender />}
          result={<FakeResultRender />}
          search={<SearchForm />}
        />
      </AdminScreen>
    </Body>
  ))
  .add('lists view mode composed with AdminScreen with Modal', () => (
    <Body>
      <AdminScreen
        header={<FakeXHeader />}
        modal={{
          onClose: action('Close modal'),
          content: sampleModalContent
        }}
      >
        <ListsScreen
          mode='list'
          header={<FakeApplicantProfileHeader />}
          applicant={<FakeApplicantRender />}
          result={<FakeResultRender />}
          search={<SearchForm />}
        />
      </AdminScreen>
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <ListsScreen />
  ))
