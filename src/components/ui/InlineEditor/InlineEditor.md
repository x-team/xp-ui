With InputField usage:

```js

// InputField Usage

<InlineEditor
  editor={({ onValueChange, value }) => (
    <InputField
      label="Example"
      autoFocus
      onChange={(evt) => {
        onValueChange(evt.target.value)
      }}
      value={value}
    />
  )}
  presenter={({ value }) => <p>{value}</p>}
  onSave={() => {}}
  onCancel={() => {}}
  value={"This is a sample text. Click on me to edit me!"}
/>
```


With TextArea usage:

```js
<InlineEditor
  editor={({ onValueChange, value }) => (
  <TextareaEditor
    onChange={(text) => {
      onValueChange(text)
    }}
    text={value}
  />
)}
  presenter={({ value }) => <p>{value}</p>}
  onSave={() => {}}
  onCancel={() => {}}
  value={"This is a sample text. Click on me to edit me!"}
/>
```

With Keywords usage:

```js

const Presenter = ({ value }) => (
  <div>
    <h3>Keywords</h3>
    <ul>
      {value.split(',').map(item => (
        <li key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const Editor = ({ onValueChange, value }) => (
  <Keywords
  values={value}
  onChange={values => onValueChange(values)}
  onSubmit={() => console.log('Submit keywords')}
/>
);
<InlineEditor
  editor={Editor}
  presenter={Presenter}
  onSave={() => {}}
  onCancel={() => {}}
  value="a,simple,string,separated,by,commas,with,operators,and,or"
/>
```


