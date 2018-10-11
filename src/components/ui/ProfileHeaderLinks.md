Default:
```js
const links = [
  { label: 'Link 1', hash: '#link1' },
  { label: 'Link 2', hash: '#link2' },
  {
    label: 'External Link',
    url: 'http://localhost:8000/'
  }
];
<ProfileHeaderLinks links={links} />
```

Missing props (does component explode?):

```js
<ProfileHeaderLinks />
```
