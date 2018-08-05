Basic:

```js
const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i+1,
  value: `Sample item ${i+1}`,
  archived: i > 12 && true
}));
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <ListsEditor
    collectionName='Lists'
    list={itemsArray}
    onSave={list => console.log('onSave:', list)}
  />
</div>
```

Saving state:

```js
const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i+1,
  value: `Sample item ${i+1}`,
  archived: i > 12 && true
}));
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <ListsEditor
    collectionName='Lists'
    list={itemsArray}
    saving={true}
    onSave={list => console.log('onSave:', list)}
  />
</div>
```

Missing props (does component explode?):

```js
<ListsEditor />
```
