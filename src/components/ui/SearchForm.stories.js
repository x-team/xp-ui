import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select, object } from '@storybook/addon-knobs'

import SearchForm from './SearchForm'

const modes = {
  Card: 'card',
  Tabular: 'tabular'
}

const lists = [
  { id: 1, value: 'Sample list #1', selected: false },
  { id: 2, value: 'Sample list #2', selected: true },
  { id: 3, value: 'Sample list #3', selected: false },
  { id: 4, value: 'Sample list #4', selected: false },
  { id: 5, value: 'Sample list #5', selected: true }
]

const keywords = 'a keyword,or,two,and,much more'

const fields = [
  { id: 1, value: 'Sample field #1', selected: false },
  { id: 2, value: 'Sample field #2', selected: true },
  { id: 3, value: 'Sample field #3', selected: false },
  { id: 4, value: 'Sample field #4', selected: true },
  { id: 5, value: 'Sample field #5', selected: false }
]

const statuses = [
  { id: 1, value: 'In Pipeline', selected: false },
  { id: 2, value: 'Booked', selected: true },
  { id: 3, value: 'Internal', selected: false },
  { id: 4, value: 'Unqualified', selected: false },
  { id: 5, value: 'Lost', selected: false },
  { id: 6, value: 'Left', selected: false }
]

const FakeApplicantsStatusFilter = () => (
  <div style={{ width: '100%', paddingBottom: '6px', borderBottom: '1px solid #eee', textAlign: 'center', fontStyle: 'italic' }}>
    ApplicantsStatusFilter is not available at auto-ui, this is a fake representation
  </div>
)

const FakeFilterTags = () => (
  <div style={{ width: '100%', margin: '10px 0 0', textAlign: 'center', fontStyle: 'italic' }}>
    FilterTags is not available at auto-ui, this is a fake representation
  </div>
)

export const StorySearchForm = (props) => (
  <SearchForm
    mode={select('Mode', modes, props.mode || 'list', 'SearchForm')}
    lists={object('Lists', props.lists || lists, 'SearchForm')}
    onSelectList={action('onSelectList')}
    onClickShowLists={action('onClickShowLists')}
    keywords={text('Keywords', props.keywords || keywords, 'SearchForm')}
    onChangeKeywords={action('onChangeKeywords')}
    fields={object('Fields', props.fields || fields, 'SearchForm')}
    onSelectField={action('onSelectField')}
    statuses={object('Statuses', props.statuses || statuses, 'SearchForm')}
    onSelectStatus={action('onSelectStatus')}
    onSubmit={action('onSubmit')}
    openListEditorModal={action('openListEditorModal')}
    renderApplicantsStatusFilter={<FakeApplicantsStatusFilter />}
    tabularFilterTags={<FakeFilterTags />}
    switchDisplay={(mode) => console.log('switchDisplay:', mode)}
  />
)

storiesOf('UI Components/SearchForm', module)
  .add('card view mode', () => (
    <StorySearchForm />
  ))
  .add('tabular view mode', () => (
    <StorySearchForm
      mode='tabular'
    />
  ))
  .add('missing props (does component explode?)', () => (
    <SearchForm />
  ))
