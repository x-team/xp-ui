Default Applicant Grid Header

```js
const headerConfig = [
  {
    name: 'field1',
    label: 'Field1',
    isSortable: true,
    size: 'large'
  },
  {
    name: 'field2',
    label: 'Field2',
    size: 'large'
  },
  {
    name: 'field3',
    label: 'Field3',
    isSortable: false,
    size: 'medium'
  },
  {
    name: 'field4',
    label: 'Field4',
    isSortable: true,
    size: 'medium'
  },
  {
    name: 'field5',
    label: 'Field5',
    isSortable: true,
    size: 'small'
  },
  {
    name: 'field6',
    label: 'Field6',
    isSortable: true,
    size: 'small'
  }
];
<div style={{overflowX: 'scroll'}}>
  <ApplicantGridHeader
    className={`custom-class-name`}
    headerColumns={headerConfig}
    onSortingChange={() => {}}
    sortBy={`field1`}
    sortDirection={`desc`}
   />
</div>
```
