// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import InputField from './InputField'

storiesOf('Form Components/InputField', module)
  .add('standard use (text input element normal)', () => (
    <InputField
      label='First Name'
      name='name'
      placeholder='First name..'
      defaultValue='Simon'
    />
  ))
  .add('standard use (text input element small)', () => (
    <InputField
      label='First Name'
      name='name'
      placeholder='First name..'
      defaultValue='Simon'
      size='small'
    />
  ))
  .add('standard use (with `label` and `postText` defined)', () => (
    <InputField
      label='How many years of experience do you have?'
      name='experience'
      placeholder='Years of experience..'
      defaultValue='1'
      style={{ width: '10%' }}
      postText='years'
    />
  ))
  .add('standard use (with only `postText` defined)', () => (
    <InputField
      name='experience'
      placeholder='Years of experience..'
      defaultValue='1'
      style={{ width: '10%' }}
      postText='years'
    />
  ))
  .add('textarea element', () => (
    <InputField
      label='What’s your availability like right now? If you’re employed and would need to give a notice, how long would that take?'
      name='availability'
      type='textarea'
      placeholder='I am currrently…'
    />
  ))
  .add('textarea element, lines limit set', () => (
    <InputField
      label='Which skills have you used professionally?'
      name='skills'
      type='textarea'
      placeholder='These are my…'
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
  ))
  .add('radio element', () => (
    <State initialState={{ ln: '' }}>
      {({ setState, state }) => (
        <section>
          <InputField
            type='radio'
            label='Value 1'
            checked={state.ln === 'value1'}
            onChange={() => setState({ ln: 'value1' })}
          />

          <InputField
            type='radio'
            label='Value 2'
            checked={state.ln === 'value2'}
            onChange={() => setState({ ln: 'value2' })}
          />
        </section>
      )}
    </State>
  ))
  .add('checkbox element', () => (
    <State initialState={{ cb: true }}>
      {({ setState, state }) => (
        <InputField
          type='checkbox'
          label='Checkbox'
          checked={state.cb}
          onChange={() => setState(prev => ({ cb: !prev.cb }))}
        />
      )}
    </State>
  ))
  .add('sliding Checkbox element', () => (
    <State initialState={{ cb: true }}>
      {({ setState, state }) => (
        <InputField
          type='sliding-checkbox'
          label='Sliding Checkbox'
          checked={state.cb}
          onChange={() => setState(prev => ({ cb: !prev.cb }))}
        />
      )}
    </State>
  ))
  .add('required element', () => (
    <InputField
      label='Required Field'
      name='required'
      placeholder='Required Placeholder...'
      required
    />
  ))
  .add('invalid element', () => (
    <InputField
      label='Invalid Field'
      name='invalid'
      placeholder='Error Placeholder...'
      isInvalid
    />
  ))
  .add('Use date field (normal)', () => (
    <InputField
      name='date'
      type='date'
      placeholder='yyyy-mm-dd'
    />
  ))
  .add('Use date field (small)', () => (
    <InputField
      name='date'
      type='date'
      placeholder='yyyy-mm-dd'
      size='small'
    />
  ))
  .add('Use date field with label', () => (
    <InputField
      label='Date Field'
      name='date'
      type='date'
      placeholder='yyyy-mm-dd'
    />
  ))
  .add('missing props (does component explode?)', () => <InputField />)
