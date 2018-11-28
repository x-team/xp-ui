import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ApplicantGridHeader from './ApplicantGridHeader'
import SelectBox from './SelectBox'

const headerColumns = [
  {
    name: 'fullName',
    label: 'Name',
    isSortable: true,
    size: 'large'
  },
  {
    name: 'skills',
    label: 'Skills',
    size: 'medium'
  },
  [
    {
      name: 'availabilityDate',
      label: 'Avail. Date',
      isSortable: true,
      size: 'tiny',
      filterRender: (onChange) => (
        <div>
          Anything goes here
        </div>
      ),
      isFiltering: false
    },
    {
      name: 'availabilityUpdated',
      label: 'Avail. Updated',
      isSortable: true,
      size: 'tiny'
    },
    {
      name: 'timezoneOffset',
      label: 'Timezone',
      isSortable: true,
      size: 'tiny',
      filterRender: (onChange) => (
        <SelectBox
          placeholder='Timezone filter...'
          onSelect={action('TZ option selected')}
          items={[
            { id: '01', value: '01' },
            { id: '02', value: '02', selected: true },
            { id: '03', value: '03' },
            { id: '04', value: '04', selected: true },
            { id: '05', value: '05' }
          ]}
          expanded
          lined
          hasSearch={false}
          width={200}
          visibleItems={4}
        />
      ),
      isFiltering: true
    },
    {
      name: 'rate',
      label: 'Rate',
      isSortable: true,
      size: 'tiny',
      filterRender: (onChange) => (
        <div>
          Anything goes here
        </div>
      ),
      isFiltering: true
    }
  ],
  {
    name: 'status',
    label: 'Status',
    size: 'tiny'
  },
  {
    name: 'ranking',
    label: 'Ranking',
    isSortable: true,
    size: 'tiny'
  }
]

storiesOf('UI Components/ApplicantGridHeader', module)
  .add('default grid header', () => (
    <div style={{ overflowX: 'scroll', height: '400px' }}>
      <ApplicantGridHeader
        className={`custom-class-name`}
        headerColumns={headerColumns}
        onSortingChange={action('onSortingChange')}
        sortBy={`availabilityUpdated`}
        sortDirection={`desc`}
      />
    </div>
  ))
  .add('missing props (does component explode?)', () => (
    <ApplicantGridHeader />
  ))
