Default Applicant Grid Header

```js
const headerConfig = [
  {
    name: "name",
    label: "Name",
    isSortable: true,
    size: 'large'
  },
  {
    name: "skills",
    label: "Skills",
    size: 'medium'
  },
  {
    name: "availabilityDate",
    label: "Avail. Date",
    isSortable: false,
    size: 'small'
  },
  {
    name: "availabilityUpdated",
    label: "Avail. Updated",
    isSortable: true,
    size: 'small'
  },
  {
    name: "timezone",
    label: "Timezone",
    isSortable: true,
    size: 'small'
  },
  {
    name: "rate",
    label: "Rate",
    isSortable: true,
    size: 'small'
  },
  {
    name: "status",
    label: "Status",
    isSortable: true,
    size: 'small'
  },
  {
    name: "ranking",
    label: "Ranking",
    isSortable: true,
    size: 'small'
  },
];
const onSortingChange = (sort) => {
  console.log(sort.sortBy);
  console.log(sort.sortDirection);
}
const SvgIcon = require('./SvgIcon').default;
const ApplicantBadge = require('./ApplicantBadge').default;
const items = Array(5).fill(
  <ApplicantBadge
    mode='tabular'
    id={333}
    name='Applicant full name'
    email='applicant@email.com'
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
      },
      {
        label: 'Rank',
        value: 2
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
<div>
<ApplicantGridHeader
  config={headerConfig}
  onSortingChange={onSortingChange}
  sortBy={`name`}
  sortDirection={`desc`}
 />
 <ApplicantGrid
   items={items}
   mode='tabular'
   visible={3}
   increment={2}
 />
</div>
```
