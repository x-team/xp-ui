List view (default)

```js
const ApplicantBadge = require('./ApplicantBadge').default;
const info = [
  {
    label: 'Avail. date:',
    value: '11/05/2018',
    tip: 'I\'m not currently seeking opportunities.'
  },
  {
    label: 'Timezone:',
    value: 'UTC+7'
  },
  {
    label: 'Rate:',
    value: '$40'
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
const ApplicantBadge = require('./ApplicantBadge').default;
let i = 1;
const items = Array(5).fill(
  <ApplicantBadge
    mode='tabular'
    id={i++}
    name='Applicant full name'
    email='applicant@email.com'
    info={[
      {
        label: 'Avail. date:',
        value: '11/05/2018',
        tip: 'I\'m not currently seeking opportunities.'
      },
      {
        label: 'Timezone:',
        value: 'UTC+7'
      },
      {
        label: 'Rate:',
        value: '$40'
      }
    ]}
    tags={[
      'JavaScript',
      'ES2015',
      'Node',
      'Express',
      'React',
      'Redux',
      'Webpack'
    ]}
  />
);
<ApplicantGrid
  items={items}
  mode='tabular'
  visible={3}
  increment={2}
/>
```

Missing props (does component explode?):

```js
<ApplicantGrid />
```
