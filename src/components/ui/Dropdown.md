Labeled button:

```
<Dropdown icon="add" label="Add to List" indicator>
  <div style={{ background: '#e9e9e9' }}>
    <Loader />
  </div>
</Dropdown>
```

Only text label:

```
<Dropdown label="Add to List">
  <div style={{ background: '#e9e9e9' }}>
    <Loader />
  </div>
</Dropdown>
```

Icon only button:

```
<Dropdown icon="hamburger" position="right" padded>
  <div style={{ background: '#e9e9e9' }}>
    <Loader />
  </div>
</Dropdown>
```

Missing props (does component explode?):

```
<Dropdown />
```
