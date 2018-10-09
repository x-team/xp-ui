Complete:

```js
const content = Array(50).fill(<p>Anything goes in the content</p>);
const menu = Array(50).fill(<a href="#">Menu link</a>);
menu.push(<p>A strangely wide menu item just to make it more difficult and breakable, also this is not a link (<a href="#">this is a link</a>), this is just text...</p>);
<div style={{ height: '500px' }}>
  <SettingsScreen menu={menu}>
    <div>
      {content.map(each => each)}
    </div>
  </SettingsScreen>
</div>
```

Missing props (does component explode?):

```js
<SettingsScreen />
```
