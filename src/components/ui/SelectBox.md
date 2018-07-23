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
  visibleItems={3}
  onSelect={item => console.log('onSelect:', item)}
  onCreateNew={listName =>
    new Promise(resolve =>
      listName && setTimeout(() => {
        const newItem = { id: new Date().getUTCMilliseconds(), value: listName }
        console.log('onCreateNew:', newItem);
        resolve(newItem);
      }, 3000)
    )
  }
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
  placeholder="Select Lists"
  collectionName="List"
  items={itemsArray}
  width={330}
  visibleItems={4}
  hasSearch={true}
  onSelect={item => console.log('onSelect:', item)}
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
  onSelect={item =>
    new Promise(resolve =>
      item && setTimeout(() => {
        console.log('onSelect:', item);
        resolve(item);
      }, 3000)
    )
  }
  onEdit={item =>
    new Promise(resolve =>
      item && setTimeout(() => {
        console.log('onEdit:', item);
        resolve(item);
      }, 3000)
    )
  }
  onCreateNew={listName =>
    new Promise(resolve =>
      listName && setTimeout(() => {
        const newItem = { id: new Date().getUTCMilliseconds(), value: listName }
        itemsArray.push(newItem) // Side-effect to force props update
        console.log('onCreateNew:', newItem);
        resolve(newItem);
      }, 3000)
    )
  }
/>
```

Missing props (does component explode?):

```
<SelectBox />
```
