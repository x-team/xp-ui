Simple view for Add to List:

```js
const itemsArray = [
  {
    id: 2,
    value: 'registered',
    selected: true
  },
  {
    id: 3,
    value: 'portfolio-building',
    selected: true
  },
  {
    id: 4,
    value: 'portfolio-review',
    selected: true
  },
  {
    id: 5,
    value: 'social-media-screen',
    selected: true
  },
  {
    id: 6,
    value: 'react-shortlist',
    selected: false
  }
];

<SelectBox
  collectionName='list'
  items={itemsArray}
  width={300}
  visibleItems={3}
  onSelect={item => console.log('onSelect:', item)}
  onCreateNew={listName => console.log('onCreateNew:', listName)}
/>
```

Simple view for Search module:

```js
const Button = require('./Button.js').default;
const SvgIcon = require('./SvgIcon.js').default;
const itemsArray = [
  {
    id: 2,
    value: 'registered'
  },
  {
    id: 3,
    value: 'portfolio-building'
  },
  {
    id: 4,
    value: 'portfolio-review'
  },
  {
    id: 5,
    value: 'social-media-screen'
  },
  {
    id: 6,
    value: 'react-shortlist'
  }
];

<SelectBox
  placeholder='Select Lists'
  collectionName='list'
  items={itemsArray}
  width={330}
  visibleItems={4}
  hasSearch={true}
  append={(
    <Button selectbox>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  )}
  onClick={item => console.log('onClick:', item)}
/>
```

Complete view for Edit Lists:

```js
const itemsArray = [
  {
    id: 2,
    value: 'registered'
  },
  {
    id: 3,
    value: 'portfolio-building'
  },
  {
    id: 4,
    value: 'portfolio-review'
  },
  {
    id: 5,
    value: 'social-media-screen'
  },
  {
    id: 6,
    value: 'react-shortlist'
  }
];

<SelectBox
  collectionName='list'
  items={itemsArray}
  expanded={true}
  onSelect={item => console.log('onSelect:', item)}
  onEdit={item => console.log('onEdit:', item)}
  onArchive={item => console.log('onArchive:', item)}
  onDelete={item => console.log('onDelete:', item)}
  onCreateNew={listName => console.log('onCreateNew:', listName)}
/>
```

Example of all items states:

```js
const itemsArray = [
  {
    id: 2,
    value: 'unselected'
  },
  {
    id: 3,
    value: 'selected',
    selected: true
  },
  {
    id: 4,
    value: '(un)selecting',
    status: 'selecting'
  },
  {
    id: 5,
    value: 'editing (no changes yet)',
    editing: 'editing (no changes yet)',
    status: 'editing'
  },
  {
    id: 6,
    value: 'editing',
    editing: 'editing (this is changed but not yet saved)',
    status: 'editing'
  },
  {
    id: 7,
    value: 'saving edition',
    status: 'saving'
  },
  {
    id: 8,
    value: 'edited',
    status: 'edited'
  },
  {
    id: 9,
    value: 'creating this',
    status: 'creating'
  },
  {
    id: 10,
    value: 'created',
    status: 'created'
  },
  {
    id: 11,
    value: 'confirm delete',
    status: 'confirm'
  },
  {
    id: 12,
    value: 'deleting',
    status: 'deleting'
  },
  {
    id: 13,
    value: 'deleted',
    status: 'deleted'
  },
  {
    id: 14,
    value: 'archiving',
    status: 'archiving'
  },
  {
    id: 15,
    value: 'archived',
    status: 'archived'
  }
];

<div>
  <SelectBox
    collectionName='stuff'
    items={itemsArray}
    lined={true}
    expanded={true}
    onSelect={item => console.log('onSelect:', item)}
    onEdit={item => console.log('onEdit:', item)}
    onArchive={item => console.log('onArchive:', item)}
    onDelete={item => console.log('onDelete:', item)}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <hr />

  <p>All states but missing all methods (the strings showcased below are the 'item.value')</p>
  <SelectBox
    collectionName='stuff'
    items={itemsArray}
    lined={true}
    expanded={true}
  />
</div>
```

Examples of searching and creating simultaneously:

```js
<div>
  <p>The search will be always unlocked but one can't create new item while another item creation is in progress.</p>

  <p>In the cases below there's no items provided.</p>

  <p>Here the creating and search props were provided:</p>
  <SelectBox
    collectionName='entry'
    creating='Another entry'
    search='Searching some entry'
    expanded={true}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>In this case a new item is being created while nothing is being searched:</p>
  <SelectBox
    collectionName='entry'
    creating='A new entry'
    expanded={true}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>In this case a search is being performed while nothing is being created:</p>
  <SelectBox
    collectionName='entry'
    search='Searching some entry'
    expanded={true}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />
</div>
```

Fixed height:

```js
<SelectBox
  expanded={true}
  visibleItems={4}
/>
```

Missing props (does component explode?):

```js
<SelectBox />
```
