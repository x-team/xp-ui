List view (default)

```js
const ApplicantBadge = require('./ApplicantBadge').default;
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
];
const tags = [
  'JavaScript',
  'ES2015',
  'Node',
  'Express',
  'React',
  'Redux',
  'Webpack'
];
let i = 1;
const items = Array(10).fill(
  <ApplicantBadge
    id={i++}
    onClick={id => console.log('Applicant selected: ' + id)}
    name='Applicant full name'
    email='applicant@email.com'
    info={info}
    tags={tags}
    status='accepted'
  />
);
items[1] = (
  <ApplicantBadge
    active={true}
    id={999}
    onClick={id => console.log('Applicant selected: ' + id)}
    name='Applicant full name'
    email='applicant@email.com'
    info={info}
    tags={tags}
    status='excluded'
  />
);
<ApplicantGrid
  items={items}
  visible={3}
  increment={2}
/>
```

Tabular view:

```js
const SvgIcon = require('./SvgIcon').default;
const ApplicantBadge = require('./ApplicantBadge').default;
const SelectBox = require('./SelectBox').default;
const items = Array(15).fill(
  <ApplicantBadge
    mode='tabular'
    id={333}
    name='Applicant full name'
    email='applicant@email.com'
    status='accepted'
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
      },
      {
        label: 'Status',
        value: 'In Pipeline'
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
    onClick={id => console.log('Applicant selected: ' + id)}
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
);
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
    },
    {
      name: 'status',
      label: 'Status',
      size: 'small'
    }
  ],
  {
    name: 'ranking',
    label: 'Ranking',
    isSortable: true,
    size: 'tiny'
  }
];
<div style={{width: '1698px', height: 'auto'}}>
  <ApplicantGrid
    items={items}
    mode='tabular'
    visible={5}
    increment={2}
    headerColumns={headerColumns}
    sortBy={'timezoneOffset'}
    sortDirection={'desc'}
    onSortingChange={sortOptions => console.log(sortOptions)}
  />
</div>
```

Missing props (does component explode?):

```js
<ApplicantGrid />
```
