// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import InputField from './InputField'

storiesOf('Core Components|Form Components/InputField', module)
  .add('default usage', () => (
    <InputField
      placeholder='Text field...'
    />
  ))

storiesOf('Core Components|Form Components/InputField/Debug', module)
  .add('missing props', () => (
    <InputField />
  ))

/**
 * Text
 */
storiesOf('Core Components|Form Components/InputField/Text', module)
  .add('default usage', () => (
    <InputField
      placeholder='Text field...'
    />
  ))

storiesOf('Core Components|Form Components/InputField/Text/States', module)
  .add('invalid', () => (
    <InputField
      placeholder='Text field...'
      isInvalid
    />
  ))
  .add('invalid with value', () => (
    <InputField
      placeholder='Text field...'
      defaultValue='Lorem ipsum sit dolor amet'
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputField
      placeholder='Text field...'
      disabled
    />
  ))
  .add('disabled with value', () => (
    <InputField
      placeholder='Text field...'
      defaultValue='Lorem ipsum sit dolor amet'
      disabled
    />
  ))

storiesOf('Core Components|Form Components/InputField/Text/Debug', module)
  .add('with label', () => (
    <InputField
      label='This is a label'
      placeholder='Text field...'
      defaultValue='Lorem ipsum sit dolor amet'
    />
  ))
  .add('required with label', () => (
    <InputField
      label='This is a label'
      placeholder='Text field...'
      defaultValue='Lorem ipsum sit dolor amet'
      required
    />
  ))
  .add('small size with label', () => (
    <InputField
      label='This is a label'
      placeholder='Text field...'
      defaultValue='Lorem ipsum sit dolor amet'
      size='small'
    />
  ))
  .add('with postText', () => (
    <InputField
      label='How many years of experience do you have?'
      placeholder='Years of experience..'
      defaultValue='1'
      style={{ width: '10%' }}
      postText='years'
    />
  ))
  .add('with postText and without label', () => (
    <InputField
      placeholder='Years of experience..'
      defaultValue='1'
      style={{ width: '10%' }}
      postText='years'
    />
  ))

/**
 * Textarea
 */
storiesOf('Core Components|Form Components/InputField/Textarea', module)
  .add('default usage', () => (
    <InputField
      type='textarea'
      placeholder='Textarea field...'
    />
  ))

storiesOf('Core Components|Form Components/InputField/Textarea/States', module)
  .add('invalid', () => (
    <InputField
      type='textarea'
      placeholder='Textarea field...'
      isInvalid
    />
  ))
  .add('invalid with value', () => (
    <InputField
      type='textarea'
      placeholder='Textarea field...'
      defaultValue='Lorem ipsum sit dolor amet'
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputField
      type='textarea'
      placeholder='Textarea field...'
      disabled
    />
  ))
  .add('disabled with value', () => (
    <InputField
      type='textarea'
      placeholder='Textarea field...'
      defaultValue='Lorem ipsum sit dolor amet'
      disabled
    />
  ))

storiesOf('Core Components|Form Components/InputField/Textarea/Debug', module)
  .add('textarea with label', () => (
    <InputField
      label='What’s your availability like right now? If you’re employed and would need to give a notice, how long would that take?'
      type='textarea'
      placeholder='I am currrently…'
    />
  ))
  .add('textarea element, lines limit set', () => (
    <InputField
      label='Which skills have you used professionally?'
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

/**
 * Radio
 */
storiesOf('Core Components|Form Components/InputField/Radio', module)
  .add('default usage', () => (
    <State initialState={{ option: '' }}>
      {({ setState, state }) => (
        <section>
          <InputField
            type='radio'
            label='Value 1'
            checked={state.option === 'value1'}
            onChange={() => setState({ option: 'value1' })}
          />
          <br />
          <InputField
            type='radio'
            label='Value 2'
            checked={state.option === 'value2'}
            onChange={() => setState({ option: 'value2' })}
          />
        </section>
      )}
    </State>
  ))

storiesOf('Core Components|Form Components/InputField/Radio/States', module)
  .add('disabled', () => (
    <State initialState={{ option: 'value1' }}>
      {({ setState, state }) => (
        <section>
          <InputField
            type='radio'
            label='Value 1'
            checked={state.option === 'value1'}
            onChange={() => setState({ option: 'value1' })}
            disabled
          />
          <br />
          <InputField
            type='radio'
            label='Value 2'
            checked={state.option === 'value2'}
            onChange={() => setState({ option: 'value2' })}
            disabled
          />
        </section>
      )}
    </State>
  ))

/**
 * Checkbox
 */
storiesOf('Core Components|Form Components/InputField/Checkbox', module)
  .add('default usage', () => (
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

storiesOf('Core Components|Form Components/InputField/Checkbox/States', module)
  .add('disabled', () => (
    <State initialState={{ cb: false }}>
      {({ setState, state }) => (
        <InputField
          type='checkbox'
          label='Checkbox'
          checked={state.cb}
          onChange={() => setState(prev => ({ cb: !prev.cb }))}
          disabled
        />
      )}
    </State>
  ))
  .add('disabled and checked', () => (
    <State initialState={{ cb: true }}>
      {({ setState, state }) => (
        <InputField
          type='checkbox'
          label='Checkbox'
          checked={state.cb}
          onChange={() => setState(prev => ({ cb: !prev.cb }))}
          disabled
        />
      )}
    </State>
  ))

/**
 * Sliding checkbox
 */
storiesOf('Core Components|Form Components/InputField/Sliding checkbox', module)
  .add('default usage', () => (
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

storiesOf('Core Components|Form Components/InputField/Sliding checkbox/States', module)
  .add('disabled', () => (
    <State initialState={{ cb: true }}>
      {({ setState, state }) => (
        <InputField
          type='sliding-checkbox'
          label='Sliding Checkbox'
          checked={state.cb}
          onChange={() => setState(prev => ({ cb: !prev.cb }))}
          disabled
        />
      )}
    </State>
  ))

/**
 * Date
 */
storiesOf('Core Components|Form Components/InputField/Date', module)
  .add('default usage', () => (
    <InputField
      type='date'
      placeholder='yyyy-mm-dd'
    />
  ))

storiesOf('Core Components|Form Components/InputField/Date/States', module)
  .add('invalid', () => (
    <InputField
      type='date'
      placeholder='yyyy-mm-dd'
      isInvalid
    />
  ))
  .add('invalid with value', () => (
    <InputField
      type='date'
      defaultValue='2020-05-10'
      placeholder='yyyy-mm-dd'
      isInvalid
    />
  ))
  .add('disabled', () => (
    <InputField
      type='date'
      placeholder='yyyy-mm-dd'
      disabled
    />
  ))
  .add('disabled with value', () => (
    <InputField
      type='date'
      defaultValue='2020-05-10'
      placeholder='yyyy-mm-dd'
      disabled
    />
  ))

storiesOf('Core Components|Form Components/InputField/Date/Debug', module)
  .add('small date field', () => (
    <InputField
      type='date'
      placeholder='yyyy-mm-dd'
      size='small'
    />
  ))
  .add('date field with label', () => (
    <InputField
      label='Date Field'
      type='date'
      placeholder='yyyy-mm-dd'
    />
  ))
