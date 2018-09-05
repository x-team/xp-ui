Complete:

```js
<div style={{ height: '500px' }}>
  <AdminScreen
    header={<div>Anything goes in the header</div>}
  >
    <div>Anything goes in the content</div>
  </AdminScreen>
</div>
```

With modal:

```js
<div style={{ height: '500px' }}>
  <AdminScreen
    header={<div>Anything goes in the header</div>}
    modal={{
      onClose: () => console.log('Close modal'),
      content: <div>Anything goes in the modal</div>
    }}
  >
    <div>Anything goes in the content</div>
  </AdminScreen>
</div>
```

Missing props (does component explode?):

```js
<AdminScreen />
```
