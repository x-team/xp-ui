
Basic:

```js
 const Tab = require('./Tab.js').default;
 <Tabs>
  <Tab title='Tab 1'><div>Tab 1 Content</div></Tab>
  <Tab title='Tab 2'><div>Tab 2 Content</div></Tab>
  <Tab title='Tab 3'><div>Tab 3 Content</div></Tab>
</Tabs>
```

One tab:

```js
const Tab = require('./Tab.js').default;
<Tabs>
  <Tab title='Tab 1'><div>Tab 1 Content</div></Tab>
</Tabs>
```

Default Active Tab:

```js
const Tab = require('./Tab.js').default;
<Tabs defaultActiveTabKey={2}>
  <Tab title='Tab 1'><div>Tab 1 Content</div></Tab>
  <Tab title='Tab 2'><div>Tab 2 Content</div></Tab>
  <Tab title='Tab 3'><div>Tab 3 Content</div></Tab>
</Tabs>
```

Missing props (does component explode?):

```js
<Tabs></Tabs>
```

