Basic:

```js
<Milestones
  level={1}
  levels={[
    {
      label: 'Webcam',
      icon: 'webcam'
    },
    {
      label: 'Message',
      icon: 'message'
    },
    {
      label: 'Head',
      icon: 'head'
    },
    {
      label: 'Diamond',
      icon: 'diamond'
    }
  ]}
/>
```

With click handlers:

```js
<Milestones
  level={1}
  levels={[
    {
      label: 'Webcam',
      icon: 'webcam',
      handleClick() { console.log('webcam clicked.') }
    },
    {
      label: 'Message',
      icon: 'message',
      handleClick() { console.log('message clicked.') }
    },
    {
      label: 'Head',
      icon: 'head',
      handleClick() { console.log('head clicked.') }
    },
    {
      label: 'Diamond',
      icon: 'diamond',
      handleClick() { console.log('diamond clicked.') }
    }
  ]}
/>
```

Missing 'label' prop:

```js
<Milestones
  level={1}
  levels={[
    {
      label: '',
      icon: 'webcam'
    },
    {
      label: '',
      icon: 'message'
    },
    {
      label: '',
      icon: 'head'
    },
    {
      label: '',
      icon: 'diamond'
    }
  ]}
/>
```

Second step is in progress:

```js
<Milestones
  level={2}
  levels={[
    {
      label: '',
      icon: 'webcam'
    },
    {
      label: '',
      icon: 'message'
    },
    {
      label: '',
      icon: 'head'
    },
    {
      label: '',
      icon: 'diamond'
    }
  ]}
/>
```

Last step is in progress:

```js
<Milestones
  level={4}
  levels={[
    {
      label: '',
      icon: 'webcam'
    },
    {
      label: '',
      icon: 'message'
    },
    {
      label: '',
      icon: 'head'
    },
    {
      label: '',
      icon: 'diamond'
    }
  ]}
/>
```

Missing props (does component explode?):

```js
<Milestones />
```
