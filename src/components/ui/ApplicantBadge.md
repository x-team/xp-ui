Basic card:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  mode='card'
  id={123123}
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
```

Active card:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  status='pending'
  active={true}
  mode='card'
  id={123123}
  name='Applicant full name'
  email='applicant@email.com'
  info={[
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
    },
    {
      label: 'Anything:',
      value: 'nonono'
    },
    {
      label: 'Else:',
      value: 'nonono'
    }
  ]}
  tags={[
    'JavaScript',
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
```

No status specified:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  mode='card'
  id={123123}
  name='Applicant full name'
  email='applicant@email.com'
  info={[
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
```

Basic tabular:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  status='excluded'
  mode='tabular'
  id={123123}
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
```

Basic tabular with a status:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  status='excluded'
  applicantStatus='Booked (Available Soon)'
  mode='tabular'
  id={123123}
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
```

With children:

```js
<ApplicantBadge
  id={123123}
  email='applicant@x-team.com'
  status='accepted'
>
  <button>Hello</button>
  <button>World</button>
</ApplicantBadge>
```

With a custom avatar:

```js
<ApplicantBadge
  id={123123}
  status='accepted'
  name='Applicant'
  email='applicant@x-team.com'
  avatar=<div style={{width: 90, height: 90, borderRadius: '50%', background: 'orange' }} />
/>
```

With applicant status:

```js
const SvgIcon = require('./SvgIcon').default;
<ApplicantBadge
  mode='card'
  id={123123}
  name='Applicant full name'
  email='applicant@email.com'
  applicantStatus='Booked'
  info={[
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
```

Missing props (does component explode?):

```js
<ApplicantBadge />
```
