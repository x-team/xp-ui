Normal textarea example :

```js
<TextareaEditor />
```

Textarea with props

```js
<TextareaEditor
  charLimit={30}
  placeholder='A magical placeholder.'
  onChange={text => console.log('Fired when textarea value changes ' + text)}
  onFocus={target => console.log('Fired when textarea is focused: ' + target)}
  onBlur={target => console.log('Fired when textarea is blured: ' + target)}
/>
```
