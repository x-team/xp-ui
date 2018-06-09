Simple view for Add to List:

```
const itemsArray = [
  {
    id: 2,
    name: "registered",
    selected: true
  },
  {
    id: 3,
    name: "portfolio-building",
    selected: true
  },
  {
    id: 4,
    name: "portfolio-review",
    selected: true
  },
  {
    id: 5,
    name: "social-media-screen",
    selected: true
  },
  {
    id: 6,
    name: "react-shortlist",
    selected: false
  }
];
<SelectBox
  items={itemsArray}
  addOnSearch={true}
  width={300}
  visibleItems={3}
  onSelect={(listId) => console.log('onSelect', listId)}
  onCreateNew={(listName) => console.log('onCreateNew', listName)}
/>
```

Simple view for Search module:

```
const itemsArray = [
  {
    id: 2,
    name: "registered"
  },
  {
    id: 3,
    name: "portfolio-building"
  },
  {
    id: 4,
    name: "portfolio-review"
  },
  {
    id: 5,
    name: "social-media-screen"
  },
  {
    id: 6,
    name: "react-shortlist"
  }
];
<SelectBox
  items={itemsArray}
  width={300}
  visibleItems={4}
  nesting={true}
  onClick={(listId) => console.log('onClick', listId)}
/>
```

Complete view for Edit Lists:

```
const itemsArray = [
  {
    id: 2,
    name: "registered"
  },
  {
    id: 3,
    name: "portfolio-building"
  },
  {
    id: 4,
    name: "portfolio-review"
  },
  {
    id: 5,
    name: "social-media-screen"
  },
  {
    id: 6,
    name: "react-shortlist"
  }
];
<SelectBox
  items={itemsArray}
  onSelect={(listId) => console.log('onSelect', listId)}
  onEdit={(listId) => console.log('onEdit', listId)}
  onCreateNew={(listName) => console.log('onCreateNew', listName)}
/>
```

Missing props (does component explode?):

```
<SelectBox />
```
