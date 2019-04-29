import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchForm from './SearchForm'

const APPLICANT_STATUSES = [
  { id: 1, value: 'Waitlist' },
  { id: 2, value: 'Shortlisted' },
  { id: 3, value: 'Booked' },
  { id: 4, value: 'Booked (Available Soon)' },
  { id: 5, value: 'Runway' },
  { id: 6, value: 'Out' },
  { id: 7, value: 'In Review' }
]

storiesOf('UI Components/SearchForm', module)
  .add('card view mode', () => (
    <SearchForm
      mode='card'
      lists={[{ id: 1, value: 'a selected list', selected: true }]}
      onSelectList={action('onSelectList')}
      onClickShowLists={action('onClickShowLists')}
      keywords={'a keyword,or,two,and,much more'}
      onChangeKeywords={action('onChangeKeywords')}
      fields={[{ id: 1, value: 'an unselected field' }]}
      onSelectField={action('onSelectField')}
      statuses={APPLICANT_STATUSES}
      onSelectStatus={action('onSelectStatus')}
      onSubmit={action('onSubmit')}
      openListEditorModal={action('openListEditorModal')}
      renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
      tabularFilterTags={'Here it goes the tabular filters'}
      switchDisplay={(mode) => console.log('switchDisplay:', mode)}
    />
  ))
  .add('tabular view mode', () => (
    <SearchForm
      mode='tabular'
      lists={[{ id: 1, value: 'a selected list', selected: true }]}
      onSelectList={action('onSelectList')}
      onClickShowLists={action('onClickShowLists')}
      keywords={'a keyword,or,two,and,much more'}
      onChangeKeywords={action('onChangeKeywords')}
      fields={[{ id: 1, value: 'an unselected field' }]}
      onSelectField={action('onSelectField')}
      statuses={APPLICANT_STATUSES}
      onSelectStatus={action('onSelectStatus')}
      onSubmit={action('onSubmit')}
      openListEditorModal={action('openListEditorModal')}
      renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
      tabularFilterTags={'Here it goes the tabular filters'}
      switchDisplay={(mode) => console.log('switchDisplay:', mode)}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <SearchForm />
  ))
