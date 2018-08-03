### Color Options

default red state

```js
<Button>Normal state with default color</Button>
```

silver state

```js
<Button color={'silver'}>Normal state with silver color</Button>
```

monochrome state

```js
<Button color={'monochrome'}>Normal state with monochrome color</Button>
```

### Size Options

small size

```js
<Button size={'small'}>Small size</Button>
```

normal size

```js
<Button>Normal size</Button>
```

large size

```js
<Button size={'large'}>Large size</Button>
```

block size

```js
<Button block>Block size</Button>
```

wide size

```js
<Button wide>Wide size</Button>
```

### Extra States

disabled

```js
<Button disabled>Disabled state</Button>
```

rounded default

```js
<Button rounded>Rounded default state</Button>
```

raised default

```js
<Button raised>Raised default state</Button>
```

link-style default

```js
<Button pseudolink>Link default state</Button>
```

outlined default

```js
<Button outlined>Outlined default state</Button>
```

outlined monochrome

```js
<Button outlined color={'monochrome'}>Outlined monochrome state</Button>
```

outlined silver

```js
<Button outlined color={'silver'}>Outlined silver state</Button>
```

button generated with custom element (&lt;a&gt;)

```js
<Button component='a' color={'monochrome'}>custom default button state</Button>
```

### Use Cases

skill tag

```js
<Button outlined rounded raised color={'silver'}>Androind</Button>
```

selected skill tag

```js
<Button selected outlined rounded raised color={'silver'}>Android</Button>
```

exclude applicant form buttons

```js
const SvgIcon = require('./SvgIcon.js').default;
<div style={{ textAlign: 'right' }}>
  <Button pseudolink color={'silver'}>Cancel</Button>
  <Button><SvgIcon icon={'paperplane'} color={'inverted'} /></Button>
</div>
```

SelectBox option button

```js
const SvgIcon = require('./SvgIcon.js').default;
<Button selectbox><SvgIcon icon="edit" /> Edit Lists</Button>
```

Missing props (does component explode?):

```js
<Button>Regular button with no props</Button>
```
