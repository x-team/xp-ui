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
  onSelect={item => console.log('onSelect:', item)}
  onCreateNew={(listName, done) => {
    done && setTimeout(() => {
      itemsArray.push({
        id: new Date().getUTCMilliseconds(),
        value: listName
      })
      console.log('onCreateNew:', listName)
      done()
    }, 5000)
  }}
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
  onClick={item => console.log('onClick:', item)}
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
  onSelect={item => {
    setTimeout(() => {
      const index = itemsArray.findIndex(obj => item.id === obj.id)
      itemsArray[index].selected = !itemsArray[index].selected
      console.log('onSelect:', item)
    }, 1000)
  }}
  onEdit={item => console.log('onEdit:', item)}
  onCreateNew={(listName, done) => {
    done && setTimeout(() => {
      itemsArray.push({
        id: new Date().getUTCMilliseconds(),
        value: listName
      })
      console.log('onCreateNew:', listName)
      done()
    }, 5000)
  }}
/>
```

Missing props (does component explode?):

```
<SelectBox />
```
