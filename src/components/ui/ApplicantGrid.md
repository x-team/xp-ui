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
const SvgIcon = require('./SvgIcon').default;
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
