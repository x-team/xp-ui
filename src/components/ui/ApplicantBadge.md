Basic card:

```js
<ApplicantBadge
  mode="card"
  id={123123}
  name={'Ryan Chartrand'}
  email={'ryan-chartrand@x-team.com'}
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
  onClick={id => console.log('Applicant selected: ' + id)}
  onExclude={id => console.log('Exclude selected: ' + id)}
/>
```

Active card:

```js
<ApplicantBadge
  active={true}
  mode="card"
  id={123123}
  name={'Ryan Chartrand'}
  email={'ryan-chartrand@x-team.com'}
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
  onExclude={id => console.log('Exclude selected: ' + id)}
/>
```

Basic tabular:

```js
<ApplicantBadge
  id={123123}
  mode="tabular"
  id={123123}
  name={'Ryan Chartrand'}
  email={'ryan-chartrand@x-team.com'}
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
  onExclude={id => console.log('Exclude selected: ' + id)}
/>
```

With children:

```js
<ApplicantBadge
  id={123123}
  email={'applicant@x-team.com'}
>
  <button>Hello</button>
  <button>World</button>
</ApplicantBadge>
```

With a custom avatar:

```js
<ApplicantBadge
  id={123123}
  name={'Applicant'}
  email={'applicant@x-team.com'}
  avatar=<div style={{width: 90, height: 90, borderRadius: '50%', background: 'orange' }} />
/>
```

Missing props (does component explode?):

```js
<ApplicantBadge />
```
