Standard use (text input element):

```js
<InputField
  label="First Name"
  name="name"
  placeholder="First name.."
  defaultValue="Simon"
/>
```

Textarea element:

```js
<InputField
  label="What’s your availability like right now? If you’re employed and would need to give a notice, how long would that take?"
  name="availability"
  type="textarea"
  placeholder="I am currrently…"
/>
```

Radio element:

```js
initialState = { ln: '' };
makeValueChangeHandler = option => () => setState({ ln: option });

<section>
  <InputField
    type="radio"
    label="Value 1"
    checked={state.ln === 'value1'}
    onChange={makeValueChangeHandler('value1')}
  />

  <InputField
    type="radio"
    label="Value 2"
    checked={state.ln === 'value2'}
    onChange={makeValueChangeHandler('value2')}
  />
</section>
```

Invalid element:

```js
<InputField
  label="Invalid Field"
  name="invalid"
  placeholder="Error Placeholder.."
  isInvalid
/>
```

Missing props (does component explode?):

```js
<InputField />
```

Checkbox element:

```js
initialState = { cb: true };
makeValueChangeHandler = option => () =>
  setState(prev => ({ cb: !prev.cb }));

<section>
  <InputField
    type="checkbox"
    label="Checkbox"
    checked={state.cb}
    onChange={makeValueChangeHandler(state.cb)}
  />
</section>
```
