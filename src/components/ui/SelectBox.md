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
  collectionLabel='list'
  lined
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
  collectionLabel='list'
  items={itemsArray}
  width={330}
  visibleItems={4}
  append={(
    <Button selectbox>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  )}
  onClick={item => console.log('onClick:', item)}
/>
```

Simple view for Search module with close dropdown on item click:

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
  collectionLabel='list'
  items={itemsArray}
  width={330}
  visibleItems={4}
  append={(
    <Button selectbox>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  )}
  onClick={item => console.log('onClick:', item)}
  closeDropdown
/>
```

Simple view for Search module with one selected:

```js
const Button = require('./Button.js').default;
const SvgIcon = require('./SvgIcon.js').default;
const itemsArray = [
  {
    id: 2,
    value: 'registered',
    selected: true
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
  collectionLabel='list'
  items={itemsArray}
  width={330}
  visibleItems={4}
  append={(
    <Button selectbox>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  )}
  onClick={item => console.log('onClick:', item)}
/>
```

Simple view, selectable with many selected:

```js
const Button = require('./Button.js').default;
const SvgIcon = require('./SvgIcon.js').default;
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
    selected: true
  }
];

<SelectBox
  placeholder='Select Lists'
  collectionLabel='list'
  items={itemsArray}
  width={330}
  visibleItems={4}
  append={(
    <Button selectbox>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  )}
  onSelect={item => console.log('onSelect:', item)}
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
  collectionLabel='list'
  items={itemsArray}
  expanded
  onSelect={item => console.log('onSelect:', item)}
  onEdit={item => console.log('onEdit:', item)}
  onArchive={item => console.log('onArchive:', item)}
  onDelete={item => console.log('onDelete:', item)}
  onCreateNew={listName => console.log('onCreateNew:', listName)}
/>
```

Example with auto-focus on search field:

```js
<SelectBox
  autoFocus
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
    value: 'dismissed',
    status: 'dismissed'
  },
  {
    id: 15,
    value: 'archiving',
    status: 'archiving'
  },
  {
    id: 16,
    value: 'archived',
    status: 'archived'
  },
  {
    id: 17,
    value: 'unarchiving',
    status: 'unarchiving'
  },
  {
    id: 18,
    value: 'unarchived',
    status: 'unarchived'
  }
];

<div>
  <SelectBox
    collectionLabel='stuff'
    items={itemsArray}
    lined
    expanded
    onSelect={item => console.log('onSelect:', item)}
    onEdit={item => console.log('onEdit:', item)}
    onArchive={item => console.log('onArchive:', item)}
    onDelete={item => console.log('onDelete:', item)}
    onCreateNew={listName => console.log('onCreateNew:', listName)}
    dismissTimeout={99999}
  />

  <hr />

  <p>All states but missing all methods (the strings showcased below are the 'item.value')</p>
  <SelectBox
    collectionLabel='stuff'
    items={itemsArray}
    lined
    expanded
  />
</div>
```

"Searching" and "creating" use cases:

```js
<div>
  <p>Empty list and no search provided. The "create new" button should be hidden:</p>
  <SelectBox
    collectionLabel='entry'
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>Empty list and search is provided. Nothing is found on search. The "create new" button should should be visible:</p>
  <SelectBox
    collectionLabel='entry'
    search='wat?'
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>Valid list and search is provided. Nothing is found on search. The "create new" button should be visible:</p>
  <SelectBox
    collectionLabel='entry'
    search='wat?'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>Valid list and search is provided. Some results are found on search, but none of them matches exactly with search string. The "create new" button should be visible:</p>
  <SelectBox
    collectionLabel='entry'
    search='ent'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>Valid list and search is provided. One result is found on search, but don't match exactly with the search string. The "create new" button should be visible:</p>
  <SelectBox
    collectionLabel='entry'
    search='another'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>Valid list and search is provided. At least one of the items in the search result matches exactly with search string. The "create new" button should be hidden:</p>
  <SelectBox
    collectionLabel='entry'
    search='entry'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>A new item is being created right after something was searched. The "create new" button should be hidden:</p>
  <SelectBox
    collectionLabel='entry'
    search='entr'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'},
      {id: 4, value: 'entr', status: 'creating'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>A new item is being created while nothing is being searched. The "create new" button should be hidden:</p>
  <SelectBox
    collectionLabel='entry'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'},
      {id: 4, value: 'entr', status: 'creating'}
    ]}
    expanded
    onCreateNew={listName => console.log('onCreateNew:', listName)}
  />

  <p>In all searching and creating situations. If the method "onCreateNew" is forgotten or invalid, the "create new" button will be always hidden and items with "creating" status will have fallback to default render:</p>
  <SelectBox
    collectionLabel='entry'
    search='ent'
    items={[
      {id: 1, value: 'entry'},
      {id: 2, value: 'entry another entry'},
      {id: 3, value: 'justtoentrymakesure'},
      {id: 4, value: 'entr', status: 'creating'}
    ]}
    expanded
  />
</div>
```

"Searching" and "creating" use cases:

```js
const itemsArray = [
  {id: 1, value: 'entry'},
  {id: 2, value: 'entry another entry'},
  {id: 3, value: 'justtoentrymakesure'},
  {id: 4, value: 'entr', status: 'creating'}
];

const casesMatrix = [
  [false, true],
  [false, true, 'Custom placeholder'],
  [false, false],
  [false, false, 'Custom placeholder'],
  [true, true],
  [true, true, 'Custom placeholder'],
  [true, false],
  [true, false, 'Custom placeholder']
];

<div>
  {casesMatrix.map(i => (
    <div>
      <h3>
        hasSearch: {i[0].toString()}
        <br/>
        expanded: {i[1].toString()}
        <br/>
        placeholder: {(i[2] && i[2].toString()) || '<undefined>'}
      </h3>
      <SelectBox
        items={itemsArray}
        hasSearch={i[0]}
        expanded={i[1]}
        placeholder={i[2]}
      />
    </div>
  ))}
</div>
```


Fixed height:

```js
<SelectBox
  expanded
  visibleItems={4}
/>
```

Missing props (does component explode?):

```js
<SelectBox />
```
