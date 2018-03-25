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

Two Editors Side by Side:

```js
<div>
  <TextareaEditor
    charLimit={30}
    placeholder='Placeholder 1'
    text="Text Area #1 With Formatted Text"
    html="<div>Text Area #1 <b>With Formatted Text</b></div>"
    onChange={text => console.log('Fired when textarea 1 value changes ' + text)}
    onFocus={target => console.log('Fired when textarea 1 is focused: ' + target)}
    onBlur={target => console.log('Fired when textarea 1 is blured: ' + target)}
  />
  <TextareaEditor
    charLimit={500}
    placeholder='Placeholder 2'
    onChange={text => console.log('Fired when textarea 2 value changes ' + text)}
    onFocus={target => console.log('Fired when textarea 2 is focused: ' + target)}
    onBlur={target => console.log('Fired when textarea 2 is blured: ' + target)}
  />
</div>
```

Missing props (does component explode?):

```js
<TextareaEditor />
```
