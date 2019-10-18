// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import InputField from './InputField'

storiesOf('Core|InputField', module)
  .add('text ', () => (
    <InputField
      label='First Name'
      name='name'
      placeholder='First name..'
      defaultValue='Simon'
    />
  ))
  .add('textarea', () => (
    <InputField
      label='What’s your availability like right now? If you’re employed and would need to give a notice, how long would that take?'
      name='availability'
      type='textarea'
      placeholder='I am currrently…'
    />
  ))
  .add('radio', () => (
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
  .add('checkbox', () => (
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
  .add('sliding checkbox', () => (
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
  .add('date', () => (
    <InputField
      name='date'
      type='date'
      placeholder='yyyy-mm-dd'
    />
  ))

storiesOf('Core|InputField/States', module)
  .add('invalid', () => (
    <InputField
      label='Invalid Field'
      name='invalid'
      placeholder='Error Placeholder...'
      isInvalid
    />
  ))
  .add('required', () => (
    <InputField
      label='Required Field'
      name='required'
      placeholder='Required Placeholder...'
      required
    />
  ))

storiesOf('Core|InputField/Debug', module)
  .add('missing props (does component explode?)', () => <InputField />)
  .add('standard use (small)', () => (
    <InputField
      label='First Name'
      name='name'
      placeholder='First name..'
      defaultValue='Simon'
      size='small'
    />
  ))
  .add('standard use (with postText)', () => (
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
