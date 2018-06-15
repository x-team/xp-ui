Basic usage:

```js
const sample = [
  {
    id: 357,
    path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
  },
  {
    id: 357,
    path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
  }
];

<FileLinks files={sample} />
```

Missing props (does component explode?):

```js
<FileLinks />
```
