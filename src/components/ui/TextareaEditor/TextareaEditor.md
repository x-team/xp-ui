Basic usage:

```js
<TextareaEditor
  charLimit={30}
  placeholder='A magical placeholder.'
  onChange={text => console.log('Fired when textarea value changes ' + text)}
  onFocus={target => console.log('Fired when textarea is focused: ' + target)}
  onBlur={target => console.log('Fired when textarea is blured: ' + target)}
/>
```

Basic usage, lines limit set:

```js
<TextareaEditor
  charLimit={200}
  linesLimit={5}
  placeholder='A magical placeholder.'
  text='Magical text #1.\nMagical text #2.\nMagical text #3.\nMagical text #4.\nMagical text #5.\nMagical text #6.\nMagical text #7.\nMagical text #8.\nMagical text #9.\nMagical text #10.'
  html='<p>Magical text #1.</p><p>Magical text #2.</p><p>Magical text #3.</p><p>Magical text #4.</p><p>Magical text #5.</p><p>Magical text #6.</p><p>Magical text #7.</p><p>Magical text #8.</p><p>Magical text #9.</p><p>Magical text #10.</p>'
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
    text='Text Area #1 With Formatted Text'
    html='<p>Text Area #1 <b>With Formatted Text</b></p>'
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
  text='Text Area #1 With Formatted Text'
  html='<p>Text Area #1 <b>With Formatted Text</b></p>'
/>
```

Missing props (does component explode?):

```js
<TextareaEditor />
```
