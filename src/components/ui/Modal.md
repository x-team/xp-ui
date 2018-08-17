Basic modal:

```js
<div style={{ position: 'relative', minHeight: '500px' }}>
  <Modal>
    <h1>Modal content goes here</h1>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
  </Modal>
</div>
```

Modal with content bigger than viewport:

```js
<div style={{ position: 'relative', minHeight: '300px' }}>
  <Modal>
    <h1>Modal content goes here</h1>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
  </Modal>
</div>
```

ListsEditor use case:

```js
const ListsEditor = require('./ListsEditor.js').default;
const itemsArray = Array(18).fill({}).map((item, i) => ({
  id: i+1,
  value: `Sample item ${i+1}`,
  archived: i > 12 && true
}));
<div style={{ position: 'relative', minHeight: '800px' }}>
  <Modal>
    <ListsEditor
      collectionLabel='Lists'
      list={itemsArray}
      onEdit={list => console.log('onEdit:', list)}
      onArchive={lists => console.log('onArchive:', lists)}
      onDelete={lists => console.log('onDelete:', lists)}
      onCreateNew={listName => console.log('onCreateNew:', listName)}
    />
  </Modal>
</div>
```

Missing props (does component explode?):

```js
<div style={{ position: 'relative', minHeight: '100px' }}>
  <Modal />
</div>
```
