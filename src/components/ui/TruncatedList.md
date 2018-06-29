TruncatedList is an invisible component that receives a list of anything and creates truncation effect on it.

### Props

- `items={[Component,Component]}`
- `visible={2}`
- `increment={3}`
- `viewMore={(amount , action) => <span onClick={action}>show + {amount}</span>}`
- `inserted={true}`

### Examples

Show 4 visible of 13 total, with increments of 2, custom view more item, not inserted:
```
const items = Array(13).fill(<Loader />);
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

Show 6 visible of 30 total, with increments of 6, with inserted custom view more item:
```
const items = Array(30).fill(<Loader />);
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

Show 5 visible of 24 total:
```
const items = Array(24).fill(<Loader />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible of 6 total:
```
const items = Array(6).fill(<Loader />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible of 6 total, but with custom show more item inserted in the first visible count:
```
const items = Array(6).fill(<Loader />);
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

Show 5 visible of 5 total:
```
const items = Array(5).fill(<Loader />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 5 visible of 4 total:
```
const items = Array(4).fill(<Loader />);
<TruncatedList
  items={items}
  visible={5}
/>
```

Show 8 visible of 11 total:
```
<TruncatedList
  items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  visible={8}
/>
```

```
<TruncatedList />
```
