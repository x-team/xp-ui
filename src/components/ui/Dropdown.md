Labeled button:

```js
const Loader = require('./Loader.js').default;
<Dropdown icon='add' label='Add to List' indicator>
  <div style={{ background: '#e9e9e9' }}>
    <Dropdown label='Add to List'>
      <div style={{ background: '#c9c9c9' }}>
        <Dropdown icon='calendar' label='Add to List' targetXOrigin='right' indicator padded>
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

```js
const SelectBox = require('./SelectBox.js').default;
const itemsArray = [
  { id: 1, value: 'item-1' },
  { id: 2, value: 'item-2' },
  { id: 3, value: 'item-3' },
  { id: 4, value: 'item-4' },
  { id: 5, value: 'item-5' },
  { id: 6, value: 'item-6' }
];
<div style={{ textAlign: 'right' }}>
  <Dropdown
    label='Find something'
    targetXOrigin='right'
    padded
    indicator
  >
    <SelectBox
      items={itemsArray}
      expanded
      lined
      width={500}
      onClick={item => console.log('onClick:', item)}
    />
  </Dropdown>
</div>
```

Icon only button:

```js
const Loader = require('./Loader.js').default;
<Dropdown icon='hamburger' padded>
  <div style={{ background: '#e9e9e9' }}>
    <Loader />
  </div>
</Dropdown>
```

SelectBox example:

```js
const SelectBox = require('./SelectBox.js').default;
const itemsArray = [
  { id: 2, value: 'registered', selected: true },
  { id: 3, value: 'portfolio-building', selected: true },
  { id: 4, value: 'portfolio-review', selected: true },
  { id: 5, value: 'social-media-screen', selected: true },
  { id: 6, value: 'react-shortlist', selected: false }
];
<Dropdown icon='add' label='This is a Dropdown' indicator padded>
  <SelectBox
    collectionLabel='List'
    items={itemsArray}
    expanded
    width={300}
    visibleItems={3}
    onSelect={item => console.log('onSelect:', item)}
  />
</Dropdown>
```

Another SelectBox example:

```js
const SelectBox = require('./SelectBox.js').default;
const itemsArray = [
  { id: 2, value: 'registered', selected: true },
  { id: 3, value: 'portfolio-building', selected: false },
  { id: 4, value: 'portfolio-review', selected: false },
  { id: 5, value: 'social-media-screen', selected: false },
  { id: 6, value: 'react-shortlist', selected: false }
];
<Dropdown label='registered' indicator padded>
  <SelectBox
    collectionLabel='List'
    items={itemsArray}
    hasSearch={false}
    expanded
    width={300}
    visibleItems={4}
    onClick={item => console.log('onClick:', item)}
  />
</Dropdown>
```

Tooltip display:

```js
const Button = require('./Button.js').default;
<Dropdown tooltip label={<Button>x</Button>}>
  Anything here
</Dropdown>
```

Close Dropdown from children:

```js
const CloseButton = ({ closeDropdown }) => <h1 onClick={closeDropdown}>Click to close!</h1>;
CloseButton.defaultProps = { closeDropdown: true };

<Dropdown tooltip label={<h1>Click to open!</h1>}>
  <CloseButton />
</Dropdown>
```

Missing props (does component explode?):

```js
<Dropdown />
```
