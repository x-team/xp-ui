Basic:

```js
const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i+1,
  value: `Sample item ${i+1}`,
  archived: i > 12 && true
}));

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <ListsEditor
    collectionLabel='list'
    list={itemsArray}
    onEdit={list => console.log('onEdit:', list)}
    onArchive={lists => console.log('onArchive:', lists)}
    onDelete={lists => console.log('onDelete:', lists)}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />
</div>
```

Missing props (does component explode?):

```js
<ListsEditor />
```
