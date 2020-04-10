import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorBox from './ErrorBox'

storiesOf('Core Components|ErrorBox', module)
  .add('basic usage', () => <ErrorBox errors={{ name: 'Something went wrong' }} />)

storiesOf('Core Components|ErrorBox/Debug', module)
  .add('no errors', () => (
    <ErrorBox errors={{}} />
  ))
  .add('with failed', () => (
    <ErrorBox
      errors={{
        name: 'Something went wrong',
        failed: <span>The operation <b>failed</b></span>
      }}
    />
  ))
  .add('with HTML content', () => (
    <ErrorBox
      errors={{
        name: <span>Something went <a href='#'>wrong</a></span>
      }}
    />
  ))
  .add('missing props', () => (
    <ErrorBox />
  ))
  .add('Older browser error \'TypeError: invalid \'instanceof\' operand y.Request\'', () => (
    <ErrorBox
      errors={{
        name: `TypeError: invalid 'instanceof' operand y.Request`
      }}
    />
  ))
  .add('Older browser error \'TypeError: y.Request is not a function. (evaluating \'t instanceof y.Request\')\'', () => (
    <ErrorBox
      errors={{
        name: `TypeError: y.Request is not a function. (evaluating 't instanceof y.Request')`
      }}
    />
  ))
  .add('Older browser error \'TypeError: Expecting a function in instanceof check, but got undefined\'', () => (
    <ErrorBox
      errors={{
        name: `TypeError: Expecting a function in instanceof check, but got undefined`
      }}
    />
  ))
  .add('Older browser error \'ReferenceError: URLSearchParams is not defined\'', () => (
    <ErrorBox
      errors={{
        name: `ReferenceError: URLSearchParams is not defined`
      }}
    />
  ))
