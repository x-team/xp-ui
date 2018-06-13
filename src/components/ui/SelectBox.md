Simple view for Add to List:

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
<SelectBox
  collectionName="List"
  items={itemsArray}
  width={300}
  itemsHeight={3}
  onSelect={(listId) => console.log('onSelect', listId)}
  onCreateNew={(listName) => console.log('onCreateNew', listName)}
/>
```

Simple view for Search module:

```
const itemsArray = [
  {
    id: 2,
    value: "registered"
  },
  {
    id: 3,
    value: "portfolio-building"
  },
  {
    id: 4,
    value: "portfolio-review"
  },
  {
    id: 5,
    value: "social-media-screen"
  },
  {
    id: 6,
    value: "react-shortlist"
  }
];
<SelectBox
  placeholder="Lists"
  collectionName="List"
  items={itemsArray}
  width={200}
  itemsHeight={4}
  onClick={(listId) => console.log('onClick', listId)}
/>
```

Complete view for Edit Lists:

```
const itemsArray = [
  {
    id: 2,
    value: "registered"
  },
  {
    id: 3,
    value: "portfolio-building"
  },
  {
    id: 4,
    value: "portfolio-review"
  },
  {
    id: 5,
    value: "social-media-screen"
  },
  {
    id: 6,
    value: "react-shortlist"
  }
];
<SelectBox
  collectionName="List"
  items={itemsArray}
  expanded={true}
  onSelect={(listId) => console.log('onSelect', listId)}
  onEdit={(listId) => console.log('onEdit', listId)}
  onCreateNew={(listName) => console.log('onCreateNew', listName)}
/>
```

Missing props (does component explode?):

```
<SelectBox />
```
