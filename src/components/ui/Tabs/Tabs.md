Basic usage:

```js
const Tab = require('./Tab.js').default;
<Tabs>
  <Tab title='Tab 1'>Tab 1 Content</Tab>
  <Tab title='Tab 2'>Tab 2 Content</Tab>
  <Tab title='Tab 3'>Tab 3 Content</Tab>
</Tabs>
```

One tab:

```js
const Tab = require('./Tab.js').default;
<Tabs>
  <Tab title='Tab 1'>Tab 1 Content</Tab>
</Tabs>
```

Default active last tab:

```js
const Tab = require('./Tab.js').default;
<Tabs defaultActiveTabKey={2}>
  <Tab title='Tab 1'>Tab 1 Content</Tab>
  <Tab title='Tab 2'>Tab 2 Content</Tab>
  <Tab title='Tab 3'>Tab 3 Content</Tab>
</Tabs>
```

Missing props (does component explode?):

```js
<Tabs />
```
