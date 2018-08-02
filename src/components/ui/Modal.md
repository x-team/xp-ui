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
<div style={{ position: 'relative', minHeight: '500px' }}>
  <Modal>
    <ListsEditor />
  </Modal>
</div>
```

Missing props (does component explode?):

```js
<div style={{ position: 'relative', minHeight: '300px' }}>
  <Modal />
</div>
```
