// flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchResult from './SearchResult'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

const applicants = Array(1000).fill('').map((each, index) => ({
  id: index,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email()
}))

const visibleColumns = [
  {
    key: 'id',
    name: 'ID',
    sortable: true,
    frozen: true,
    width: 60
  },
  {
    key: 'email',
    name: 'Email',
    sortable: true,
    resizable: true
  },
  {
    key: 'name',
    name: 'Name',
    sortable: true,
    resizable: true
  }
]

const visibleColumnsDropdownItems = [...visibleColumns].map(each => ({
  id: each.key,
  value: each.name,
  selected: true
}))

storiesOf('UI Components|Applicants/SearchResults', module)
  .add('basic usage', () => (
    <Body>
      <SearchResult
        applicants={applicants}
        isLoading={false}
        visibleColumnsDropdownItems={visibleColumnsDropdownItems}
        visibleColumns={visibleColumns}
        queryFilters={{ sort: 'name', order: 'ASC' }}
        handleColumnVisibilityChange={action('handleColumnVisibilityChange')}
        handleGridSort={action('handleGridSort')}
      />
    </Body>
  ))

storiesOf('UI Components|Applicants/SearchResults/States', module)
  .add('loading', () => (
    <Body>
      <SearchResult
        applicants={applicants}
        isLoading
        visibleColumnsDropdownItems={visibleColumnsDropdownItems}
        visibleColumns={visibleColumns}
        queryFilters={{ sort: 'name', order: 'ASC' }}
        handleColumnVisibilityChange={action('handleColumnVisibilityChange')}
        handleGridSort={action('handleGridSort')}
      />
    </Body>
  ))

storiesOf('UI Components|Applicants/SearchResults/Debug', module)
  .add('missing props (does component explode?)', () => (
    <SearchResult />
  ))
