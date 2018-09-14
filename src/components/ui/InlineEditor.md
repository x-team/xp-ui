With InputField usage:

```js
<InlineEditor
  editor={({ onValueChange, value }) => (
    <InputField
      label="Example"
      autoFocus
      onChange={evt => onValueChange(evt.target.value)}
      value={value}
    />
  )}
  presenter={({ value, activateEditingMode }) => (
    <div
      onClick={activateEditingMode}
      style={{ cursor: 'pointer' }}
    >
      <p>{value}</p>
    </div>
  )}
  value="This is a sample text. Click on me to edit me!"
/>
```

With TextArea usage:

```js
<InlineEditor
  shouldSaveOnEnter={false}
  editor={({ onValueChange, value }) => (
    <TextareaEditor
      onChange={text => onValueChange(text)}
      text={value}
    />
  )}
  presenter={({ value, activateEditingMode }) => (
    <div
      onClick={activateEditingMode}
      style={{ cursor: 'pointer' }}
    >
      <p>{value}</p>
    </div>
  )}
  value="This is a sample text. Click on me to edit me!"
/>
```

With Keywords usage:

```js
<InlineEditor
  shouldSaveOnEnter={false}
  editor={({ onValueChange, value }) => (
    <Keywords
      values={value}
      onChange={values => onValueChange(values)}
      onSubmit={() => console.log('Submit keywords')}
    />
  )}
  presenter={({ value, activateEditingMode }) => (
    <div
      onClick={activateEditingMode}
      style={{ cursor: 'pointer' }}
    >
      <h3>Keywords</h3>
      <ul>
        {value.split(',').map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )}
  value="a,simple,string,separated,by,commas,with,operators,and,or"
/>
```

Not editable usage (editable false):

```js

<InlineEditor
  isEditable={false}
  editor={({ onValueChange, value }) => (
    <InputField
      label="Example"
      autoFocus
      onChange={evt => onValueChange(evt.target.value)}
      value={value}
    />
  )}
  presenter={({ value, activateEditingMode }) => (
    <div
      onClick={activateEditingMode}
      style={{ cursor: 'pointer' }}
    >
      <p>{value}</p>
    </div>
  )}
  value="This is a sample text. I am not editable so clicking on me will not allow edit mode!"
/>
```

Invalid usage (isValid false):
The same button won't be triggered

```js

<InlineEditor
  isValid={false}
  editor={({ onValueChange, value }) => (
    <InputField
      label="Example"
      autoFocus
      onChange={evt => onValueChange(evt.target.value)}
      value={value}
    />
  )}
  presenter={({ value, activateEditingMode }) => (
    <div
      onClick={activateEditingMode}
      style={{ cursor: 'pointer' }}
    >
      <p>{value}</p>
    </div>
  )}
  value='This is a sample text. I am editable but changes will not be saved once clicking "SAVE"'
/>
```

Missing props (does component explode?):

```js
<InlineEditor />
```
