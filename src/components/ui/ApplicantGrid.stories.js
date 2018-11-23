import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ApplicantGrid from './ApplicantGrid'
import ApplicantBadge from './ApplicantBadge'
import SvgIcon from './SvgIcon'
import SelectBox from './SelectBox'

storiesOf('UI Components/ApplicantGrid', module)
  .add('list view (default)', () => {
    const info = [
      {
        label: 'Avail. date:',
        value: 'DD/MM/YYYY',
        tip: 'Avail. date tooltip copy'
      },
      {
        label: 'Timezone:',
        value: 'UTC+00'
      },
      {
        label: 'Rate:',
        value: '$100'
      }
    ]

    const tags = [
      'JavaScript',
      'ES2015',
      'Node',
      'Express',
      'React',
      'Redux',
      'Webpack'
    ]

    let i = 1
    const items = Array(10).fill(
      <ApplicantBadge
        id={i++}
        onClick={action('Applicant selected')}
        name='Applicant full name'
        email='applicant@email.com'
        info={info}
        tags={tags}
        status='accepted'
      />
    )
    items[1] = (
      <ApplicantBadge
        active
        id={999}
        onClick={action('Applicant selected')}
        name='Applicant full name'
        email='applicant@email.com'
        info={info}
        tags={tags}
        status='excluded'
      />
    )
    return (
      <ApplicantGrid
        items={items}
        visible={3}
        increment={2}
      />
    )
  })
  .add('tabular view', () => {
    const items = Array(15).fill(
      <ApplicantBadge
        mode='tabular'
        id={333}
        name='Applicant full name'
        email='applicant@email.com'
        status='accepted'
        applicantStatus='In Pipeline'
        info={[
          {
            label: 'Avail. date:',
            value: 'DD/MM/YYYY',
            tip: 'Avail. date tooltip copy'
          },
          {
            label: 'Avail. updated:',
            value: 'DD/MM/YYYY',
            tip: 'Avail. updated tooltip copy'
          },
          {
            label: 'Timezone:',
            value: 'UTC+00'
          },
          {
            label: 'Rate:',
            value: '$100'
          }
        ]}
        tags={[
          'JavaScript',
          'ES2015',
          'Node',
          'Express',
          'React',
          'Redux',
          'Webpack',
          'JavaScript',
          'ES2015',
          'Node',
          'Express',
          'React',
          'Redux',
          'Webpack',
          'JavaScript',
          'ES2015',
          'Node',
          'Express',
          'React',
          'Redux',
          'Webpack'
        ]}
        onClick={action('Applicant selected')}
        actions={[
          {
            key: 'approval',
            icon: () => <SvgIcon icon='check' />,
            render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
          },
          {
            key: 'exclusion',
            icon: () => <SvgIcon icon='x' />,
            render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
          }
        ]}
      />
    )

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
          filterRender: ({ onChange, isFetching }) => (
            <div>
              Anything goes here
            </div>
          )
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
          filterRender: ({ onChange, isFetching }) => (
            <SelectBox
              placeholder='Timezone filter...'
              onSelect={(value) => onChange(value)}
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
          )
        },
        {
          name: 'rate',
          label: 'Rate',
          isSortable: true,
          size: 'tiny',
          filterRender: ({ onChange, isFetching }) => (
            <div>
              Anything goes here
            </div>
          )
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

    return (
      <div style={{ overflowX: 'scroll', width: '1698px', height: 'auto' }}>
        <ApplicantGrid
          items={items}
          mode='tabular'
          visible={5}
          increment={2}
          headerColumns={headerColumns}
          sortBy={'timezoneOffset'}
          sortDirection={'desc'}
          onSortingChange={action('changing sorting')}
        />
      </div>
    )
  })
  .add('missing props (does component explode?)', () => (
    <ApplicantGrid />
  ))
