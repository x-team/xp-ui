Multiple files:

```js
<AttachFiles
  files={[
    {
      filename: 'filename-01.zip',
      path: 'string',
      progress: 100
    },
    {
      filename: 'filename-02.zip',
      path: 'string',
      progress: 100
    },
    {
      filename: 'filename-03.zip',
      path: 'string',
      progress: 30
    },
    {
      filename: 'filename-04.zip',
      path: 'string',
      progress: 90
    }
  ]}
  onUpload={() => console.log('upload new file')}
  onCancel={(file) => console.log('cancel upload of ' + file)}
  onDelete={(file) => console.log('delete ' + file)}
/>
```

Multiple files (Preview):

```js
<AttachFiles
  files={[
    {
      filename: 'filename-01.zip'
    },
    {
      filename: 'filename-02.zip'
    },
    {
      filename: 'filename-03.zip'
    },
    {
      filename: 'filename-04.zip'
    }
  ]}
  onUpload={() => console.log('upload new file')}
  onCancel={(file) => console.log('cancel upload of ' + file)}
  onDelete={(file) => console.log('delete ' + file)}
/>
```

None files (no props):

```js
<AttachFiles />
```
