// @flow
/* global React$Node */

import React from 'react'
import cmz from 'cmz'

import InputLabel from './InputLabel'
import InputError from './InputError'

const cx = {
  set: cmz(`
    margin: 0 0 24px
  `),

  label: cmz(`
    margin: 0 0 16px
  `),

  field: cmz(`
    margin: 0 0 16px
  `),

  error: cmz(`
    margin: -8px 0 0
  `)
}

type Props = {
  children?: React$Node,
  headline?: string,
  description?: string,
  isRequired?: boolean,
  errorMessage?: string
}

const InputSet = ({
  children,
  headline,
  description,
  isRequired,
  errorMessage
}: Props) => children ? (
  <div className={cx.set}>
    <div className={cx.label}>
      <InputLabel
        headline={headline}
        description={description}
        isRequired={isRequired}
      />
    </div>
    {React.Children.map(children, (child) => (
      <div className={cx.field}>{child}</div>
    ))}
    {errorMessage && (
      <div className={cx.error}>
        <InputError message={errorMessage} />
      </div>
    )}
  </div>
) : null

export default InputSet
