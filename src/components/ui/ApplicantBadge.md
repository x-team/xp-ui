Basic card:

```js
<ApplicantBadge
  id={123123}
  onClick={id => console.log('Applicant selected: ' + id)}
  mode="card"
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
      label: 'Timezone:',
      value: 'UTC+7'
    },
    {
      label: 'Timezone:',
      value: 'UTC+7'
    },
    {
      label: 'Avail. date:',
      value: '11/05/2018',
      tip: 'I\'m not currently seeking opportunities.'
    },
    {
      label: 'Rate:',
      value: '$40'
    }
  ]}
  tags={[
    'JavaScript JavaScript',
    'ES2015',
    'Node',
    'Express',
    'React',
    'Redux',
    'React',
    'Redux',
    'Webpack'
  ]}
/>
```

Active card:

```js
<ApplicantBadge
  active={true}
  mode="card"
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
    'Express',
    'React',
    'Redux',
    'Webpack'
  ]}
/>
```

Basic tabular:

```js
<ApplicantBadge
  id={123123}
  onClick={id => console.log('Applicant selected: ' + id)}
  mode="tabular"
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
    'Webpack',
  ]}
/>
```

With children:

```js
<ApplicantBadge>
  <button>Hello</button>
  <button>World</button>
  anything?
  really?
</ApplicantBadge>
```

With a custom avatar:

```js
<ApplicantBadge
  name={'Applicant'}
  email={'applicant@x-team.com'}
  avatar=<div style={{width: 64, height: 64, borderRadius: '50%', background: 'orange' }} />
/>
```
