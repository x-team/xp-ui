import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ListsScreen from './ListsScreen'
import SearchForm from './SearchForm'

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
  .add('missing props (does component explode?)', () => <ListsScreen />)
