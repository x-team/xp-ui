Labeled button:

```
<Dropdown icon="add" label="Add to List" indicator>
  <div style={{ background: '#f1f1f1' }}>
    <Loader />
  </div>
</Dropdown>
```

Only text label:

```
<Dropdown label="Add to List">
  <div style={{ background: '#f1f1f1' }}>
    <Loader />
  </div>
</Dropdown>
```

Icon only button:

```
<Dropdown icon="hamburger" position="right" padded>
  <div style={{ background: '#f1f1f1' }}>
    <Loader />
  </div>
</Dropdown>
```

Missing props (does component explode?):

```
<Dropdown />
```
