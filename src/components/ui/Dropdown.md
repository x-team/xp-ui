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

SelectBox example:

```
const itemsArray = [
  {
    id: 2,
    value: "registered",
    selected: true
  },
  {
    id: 3,
    value: "portfolio-building",
    selected: true
  },
  {
    id: 4,
    value: "portfolio-review",
    selected: true
  },
  {
    id: 5,
    value: "social-media-screen",
    selected: true
  },
  {
    id: 6,
    value: "react-shortlist",
    selected: false
  }
];
<Dropdown icon="add" label="This is a Dropdown" indicator padded>
  <SelectBox
    collectionName="List"
    items={itemsArray}
    expanded={false}
    width={300}
    itemsHeight={3}
    onClick={item => console.log('onClick:', item)}
  />
</Dropdown>
```

Missing props (does component explode?):

```
<Dropdown />
```
