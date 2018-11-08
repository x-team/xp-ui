Default Applicant Grid Header

```js
const SelectBox = require('./SelectBox').default;
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
          onSelect={(value) => console.log(value)}
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
    },
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
];
<div style={{overflowX: 'scroll', height: '400px'}}>
  <ApplicantGridHeader
    className={`custom-class-name`}
    headerColumns={headerColumns}
    onSortingChange={(value) => console.log('onSortingChange', value)}
    sortBy={`availabilityUpdated`}
    sortDirection={`desc`}
   />
</div>
```
