Labeled button:

```
<Dropdown icon="add" label="Add to List" indicator>
  <div style={{ background: '#e9e9e9' }}>
    <Dropdown label="Add to List">
      <div style={{ background: '#c9c9c9' }}>
        <Dropdown icon="calendar" label="Add to List" targetXOrigin="right" indicator padded>
          <div style={{ background: '#b9b9b9' }}>
            <Loader />
          </div>
        </Dropdown>
      </div>
    </Dropdown>
  </div>
</Dropdown>
```

Label and indicator positioned on the right:

```
const itemsArray = [
  { id: 1, value: "item-1" },
  { id: 2, value: "item-2" },
  { id: 3, value: "item-3" },
  { id: 4, value: "item-4" },
  { id: 5, value: "item-5" },
  { id: 6, value: "item-6" }
];
<div style={{ textAlign: 'right' }}>
  <Dropdown
    label="Find something"
    targetXOrigin="right"
    padded
    indicator
  >
    <SelectBox
      items={itemsArray}
      expanded={true}
      lined={true}
      width={500}
      onClick={item => console.log('onClick:', item)}
    />
  </Dropdown>
</div>
```

Icon only button:

```
<Dropdown icon="hamburger" padded>
  <div style={{ background: '#e9e9e9' }}>
    <Loader />
  </div>
</Dropdown>
```

SelectBox example:

```
const itemsArray = [
  { id: 2, value: "registered", selected: true },
  { id: 3, value: "portfolio-building", selected: true },
  { id: 4, value: "portfolio-review", selected: true },
  { id: 5, value: "social-media-screen", selected: true },
  { id: 6, value: "react-shortlist", selected: false }
];
<Dropdown icon="add" label="This is a Dropdown" indicator padded>
  <SelectBox
    collectionName="List"
    items={itemsArray}
    expanded={false}
    width={300}
    visibleItems={3}
    onClick={item => console.log('onClick:', item)}
  />
</Dropdown>
```

Tooltip display:

```
<Dropdown tooltip label={<Button>x</Button>}>
  Anything here
</Dropdown>
```

Missing props (does component explode?):

```
<Dropdown />
```
