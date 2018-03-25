Basic:

```js
<TextareaEditor
  charLimit={30}
  placeholder='A magical placeholder.'
  onChange={text => console.log('Fired when textarea value changes ' + text)}
  onFocus={target => console.log('Fired when textarea is focused: ' + target)}
  onBlur={target => console.log('Fired when textarea is blured: ' + target)}
/>
```

Hide Text Length on Blur:

```js
<TextareaEditor
  charLimit={30}
  placeholder='Text is hide on blur.'
  hideTextLengthOnBlur={true}
/>
```

Missing props (does component explode?):

```js
<TextareaEditor />
```
