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

storiesOf('Core Components|ErrorBox/Debug/Custom error message for legacy devices', module)
  .add('error \'TypeError: invalid \'instanceof\' operand y.Request\'', () => (
    <ErrorBox
      errors={{
        name: `TypeError: invalid 'instanceof' operand y.Request`
      }}
    />
  ))
  .add('error \'TypeError: Expecting a function in instanceof check, but got undefined\'', () => (
    <ErrorBox
      errors={{
        anyKey: `TypeError: Expecting a function in instanceof check, but got undefined`
      }}
    />
  ))
  .add('error \'TypeError: y.Request is not a function. (evaluating \'t instanceof y.Request\')\'', () => (
    <ErrorBox
      errors={{
        1234: `TypeError: y.Request is not a function. (evaluating 't instanceof y.Request')`
      }}
    />
  ))
  .add('error \'ReferenceError: URLSearchParams is not defined\'', () => (
    <ErrorBox
      errors={{
        asdf1234: `ReferenceError: URLSearchParams is not defined`
      }}
    />
  ))
