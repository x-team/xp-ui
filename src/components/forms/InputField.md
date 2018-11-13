Standard use (text input element):

```js
<InputField
  label="First Name"
  name="name"
  placeholder="First name.."
  defaultValue="Simon"
/>
```

Standard use (with `label` and 'postText' defined)

```js
<InputField
  label="How many years of experience do you have?"
  name="experience"
  placeholder="Years of experience.."
  defaultValue="1"
  style={{ width: '10%' }}
  postText="years"
/>
```

Standard use (with only 'postText' defined)

```js
<InputField
  name="experience"
  placeholder="Years of experience.."
  defaultValue="1"
  style={{ width: '10%' }}
  postText="years"
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

Textarea element, lines limit set:

```js
<InputField
  label="Which skills have you used professionally?"
  name="skills"
  type="textarea"
  placeholder="These are my…"
  defaultValue={`1.
2.
3.
4.
5.
6.
7.
8.
9.
10.`}
  linesLimit={5}
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

Checkbox element:

```js
initialState = { cb: true };
makeValueChangeHandler = option => () => setState(prev => ({ cb: !prev.cb }));

<InputField
  type="checkbox"
  label="Checkbox"
  checked={state.cb}
  onChange={makeValueChangeHandler(state.cb)}
/>
```

Sliding Checkbox element:

```js
initialState = { cb: true };
makeValueChangeHandler = option => () => setState(prev => ({ cb: !prev.cb }));

<InputField
  type="sliding-checkbox"
  label="Sliding Checkbox"
  checked={state.cb}
  onChange={console.log(state.cb) || makeValueChangeHandler(state.cb)}
/>
```

Required element:

```js
<InputField
  label="Required Field"
  name="required"
  placeholder="Required Placeholder..."
  required
/>
```

Invalid element:

```js
<InputField
  label="Invalid Field"
  name="invalid"
  placeholder="Error Placeholder..."
  isInvalid
/>
```

Missing props (does component explode?):

```js
<InputField />
```
