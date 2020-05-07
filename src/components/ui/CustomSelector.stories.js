// @flow
/* globals alert */

import React from 'react'
import { storiesOf } from '@storybook/react'

import CustomSelector from './CustomSelector'

const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 }
]

const customOnChange = (selectedOption) => {
  alert(`Custom onChange() > Selected option label: ${selectedOption.label}`)
}

storiesOf('Core Components|Form Components/CustomSelector', module)
  .add('basic usage', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
    />
  ))

storiesOf('Core Components|Form Components/CustomSelector/States', module)
  .add('clearable', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      clearable
    />
  ))
  .add('searchable', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      searchable
    />
  ))
  .add('clearable + searchable', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      clearable
      searchable
    />
  ))
  .add('enabled', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
    />
  ))
  .add('disabled', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      disabled
    />
  ))

storiesOf('Core Components|Form Components/CustomSelector/Debug', module)
  .add('missing props', () => (
    <CustomSelector />
  ))
  .add('without the required "placeholder"', () => (
    <CustomSelector
      options={months}
    />
  ))
  .add('without the required "options"', () => (
    <CustomSelector
      placeholder={'Month'}
    />
  ))
  .add('custom "onChange" function', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      onChange={customOnChange}
    />
  ))
  .add('custom "value"', () => (
    <CustomSelector
      placeholder={'Month'}
      options={months}
      value={{ label: 'Custom Label', value: 'custom value' }}
    />
  ))
  .add('stacked selectors', () => (
    <div>
      <CustomSelector
        placeholder={'Month'}
        options={months}
      />

      <CustomSelector
        placeholder={'Month'}
        options={months}
      />

      <CustomSelector
        placeholder={'Month'}
        options={months}
      />

      <CustomSelector
        placeholder={'Month'}
        options={months}
      />

      <CustomSelector
        placeholder={'Month'}
        options={months}
      />

      <CustomSelector
        placeholder={'Month'}
        options={months}
      />
    </div>
  ))
