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

Large Editor:
```js
<TextareaEditor
  large
  charLimit={30}
  placeholder='A magical placeholder.'
  onChange={text => console.log('Fired when textarea value changes ' + text)}
  onFocus={target => console.log('Fired when textarea is focused: ' + target)}
  onBlur={target => console.log('Fired when textarea is blured: ' + target)}
/>
```

Two editors side by side:

```js
<div>
  <TextareaEditor
    charLimit={50}
    id={1}
    placeholder='Placeholder 1'
    text="Text Area #1 With Formatted Text"
    html="<div>Text Area #1 <b>With Formatted Text</b></div>"
    onChange={text => console.log('Fired when textarea 1 value changes ' + text)}
    onFocus={target => console.log('Fired when textarea 1 is focused: ' + target)}
    onBlur={target => console.log('Fired when textarea 1 is blured: ' + target)}
  />
  <TextareaEditor
    charLimit={500}
    id={2}
    placeholder='Placeholder 2'
    onChange={text => console.log('Fired when textarea 2 value changes ' + text)}
    onFocus={target => console.log('Fired when textarea 2 is focused: ' + target)}
    onBlur={target => console.log('Fired when textarea 2 is blured: ' + target)}
  />
</div>
```

Read only mode:

```js
<TextareaEditor
  disableEditing
  text="Text Area #1 With Formatted Text"
  html="<div>Text Area #1 <b>With Formatted Text</b></div>"
/>
```

Missing props (does component explode?):

```js
<TextareaEditor />
```
