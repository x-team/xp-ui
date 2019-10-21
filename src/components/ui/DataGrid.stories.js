// flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DataGrid from './DataGrid'

const Body = ({ children }) => (
  <div style={{ height: '100vh', padding: '0 50px' }}>
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

storiesOf('UI Components|DataGrid', module)
  .add('basic usage', () => (
    <Body>
      <DataGrid
        applicants={applicants}
        visibleColumns={visibleColumns}
        sortColumn={'email'}
        sortDirection={'DESC'}
        handleGridSort={action('handleGridSort')}
      />
    </Body>
  ))

storiesOf('UI Components|DataGrid/States', module)
  .add('loading', () => (
    <Body>
      <DataGrid
        isLoading
        applicants={applicants}
        visibleColumns={visibleColumns}
        sortColumn={'email'}
        sortDirection={'DESC'}
        handleGridSort={action('handleGridSort')}
      />
    </Body>
  ))

storiesOf('UI Components|DataGrid/Debug', module)
  .add('missing props (does component explode?)', () => (
    <DataGrid />
  ))
