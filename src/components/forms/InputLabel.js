// @flow

import React from 'react'
import cmz from 'cmz'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cx = {
  label: cmz(
    typo.baseText,
    `
      line-height: 1.4
    `
  ),

  required: cmz(`
    color: ${theme.formErrorText}
    margin-left: 4px
  `),

  description: cmz(`
    font-size: 16px
  `)
}

type Props = {
  headline?: string,
  description?: string,
  isInvalid?: boolean,
  isRequired?: boolean
}

const InputLabel = ({ headline, description, isRequired }: Props) => headline || description ? (
  <div className={cx.label}>
    {headline && (
      <div>
        {headline}
        {isRequired && (
          <span className={cx.required}>*</span>
        )}
      </div>
    )}
    {description && (
      <div className={cx.description}>{description}</div>
    )}
  </div>
) : null

export default InputLabel
