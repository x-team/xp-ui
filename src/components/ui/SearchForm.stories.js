import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchForm from './SearchForm'

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
      statuses={[
        { id: 1, value: 'In Pipeline' },
        { id: 2, value: 'Booked' },
        { id: 3, value: 'Internal' },
        { id: 4, value: 'Unqualified' },
        { id: 5, value: 'Lost' },
        { id: 6, value: 'Left' }
      ]}
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
      statuses={[
        { id: 1, value: 'In Pipeline' },
        { id: 2, value: 'Booked' },
        { id: 3, value: 'Internal' },
        { id: 4, value: 'Unqualified' },
        { id: 5, value: 'Lost' },
        { id: 6, value: 'Left' }
      ]}
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
