// flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchResult from './SearchResult'

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

storiesOf('UI Components/SearchResult', module)
  .add('default', () => (
    <SearchResult
      applicants={applicants}
      isLoading={false}
      visibleColumnsDropdownItems={visibleColumnsDropdownItems}
      visibleColumns={visibleColumns}
      queryFilters={{sort: 'name', order: 'ASC'}}
      handleColumnVisibilityChange={action('handleColumnVisibilityChange')}
      handleGridSort={action('handleGridSort')}
    />
  ))

storiesOf('UI Components/SearchResult/Debug', module)
  .add('missing props (does component explode?)', () => (
    <SearchResult />
  ))
