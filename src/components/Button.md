### Color Options

default red state

```js
<Button>Normal state with default color</Button>
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

block button

```js
<Button size={'block'}>Block size</Button>
```

### Extra States

disabled

```js
<Button disabled>Disabled state</Button>
```

outlined default

```js
<Button outlined>Outlined default state</Button>
```

outlined monochrome

```js
<Button outlined color={'monochrome'}>Outlined monochrome state</Button>
```

button generated with custom element (&lt;a&gt;)

```js
<Button component='a' color={'monochrome'}>custom default button state</Button>
```

Missing props (does component explode?):

```js
<Button>Regular button with no props</Button>
```
