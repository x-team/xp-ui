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
      filterRender: <SelectBox />,
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
      filterRender: <SelectBox />,
      isFiltering: false
    },
    {
      name: 'rate',
      label: 'Rate',
      isSortable: true,
      size: 'tiny',
      filterRender: <SelectBox />,
      isFiltering: false
    }
  ],
  {
    name: 'status',
    label: 'Status',
    size: 'small'
  },
  {
    name: 'ranking',
    label: 'Ranking',
    isSortable: true,
    size: 'tiny'
  }
];
<div style={{overflowX: 'scroll'}}>
  <ApplicantGridHeader
    className={`custom-class-name`}
    headerColumns={headerColumns}
    onSortingChange={() => {}}
    sortBy={`field1`}
    sortDirection={`desc`}
   />
</div>
```
