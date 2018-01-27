Normal textarea example :

```js
<MarkdownTextarea />
```

With limit and placeholder example :

```js
<MarkdownTextarea
    placeholder='A magical placeholder.'
    charLimit={30}
    onChange={target => console.log('Fires when a change happens in textarea: ' + target)}
    onFocus={target => console.log('Fires when focusing textarea: ' + target)}
    onUnfocus={target => console.log('Fires in blur event textarea: ' + target)}
    />
```
