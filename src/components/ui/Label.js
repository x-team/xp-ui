// @flow

import React from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  label: cmz(
    typo.baseText,
    `
      line-height: 1.4
    `
  ),

  invalid: cmz(`
    color: ${theme.typoSubheading}
  `),

  description: cmz(`
    font-size: 16px
  `)
}

type Props = {
  headline?: string,
  description?: string,
  isInvalid?: boolean
}

const Label = ({ headline, description, isInvalid }: Props) => headline || description ? (
  <div className={cx.label}>
    {headline && (
      <div className={isInvalid ? cx.invalid : ''}>{headline}</div>
    )}
    {description && (
      <div className={cx.description}>{description}</div>
    )}
  </div>
) : null

export default Label
