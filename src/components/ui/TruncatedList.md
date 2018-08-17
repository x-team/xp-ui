TruncatedList is an invisible component that receives a list of anything and creates truncation effect on it.

### Props

- `items={[Component,Component]}`
- `visible={2}`
- `increment={0}`
- `inserted={false}`
- `viewMore={(amount , action) => <span onClick={action}>show + {amount}</span>}`
- `isFetching={false}`
- `hasMore={false}`
- `page={1}`

### Examples

Show 4 visible `XIcon`s components of 13 total, with increments of 2, custom view more item, not inserted:

```js
const XIcon = require('./XIcon.js').default;
const Button = require('./Button.js').default;
const items = Array(13).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={4}
  increment={2}
  viewMore={(amount, action) => (
    <Button
      rounded
      raised
      outlined
      color='silver'
      onClick={action}
    >
      {`+${amount} more of ${items.length}`}
    </Button>
  )}
/>
```

Show 6 visible `XIcon`s components of 30 total, with increments of 6, with inserted custom view more item:

```js
const XIcon = require('./XIcon.js').default;
const Button = require('./Button.js').default;
const items = Array(30).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={6}
  increment={6}
  inserted
  viewMore={(amount, action) => (
    <Button
      rounded
      raised
      outlined
      color='silver'
      onClick={action}
    >
      {`+${amount} more of ${items.length}`}
    </Button>
  )}
/>
```

Show 5 visible `XIcon`s components of 6 total, but with custom show more item inserted in the first visible count:

```js
const XIcon = require('./XIcon.js').default;
const Button = require('./Button.js').default;
const items = Array(6).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={5}
  inserted
  viewMore={(amount, action) => (
    <Button
      rounded
      raised
      outlined
      onClick={action}
    >
      {`+${amount} more of ${items.length}`}
    </Button>
  )}
/>
```

Show 5 visible `XIcon`s components of 4 total:

```js
const XIcon = require('./XIcon.js').default;
const items = Array(4).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible `XIcon`s components of 5 total:

```js
const XIcon = require('./XIcon.js').default;
const items = Array(5).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible `XIcon`s components of 6 total:

```js
const XIcon = require('./XIcon.js').default;
const items = Array(6).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible `XIcon`s components of 24 total:

```js
const XIcon = require('./XIcon.js').default;
const items = Array(24).fill(<XIcon />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 8 visible numbers of 11 total:

```js
<TruncatedList
  items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
  visible={8}
/>
```

Missing props (does component explodes?):

```js
<TruncatedList />
```
