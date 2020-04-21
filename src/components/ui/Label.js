// @flow

import React from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  headline: cmz(
    typo.baseText,
    `
      font-size: 24px
    `
  ),

  error: cmz(`
    color: ${theme.typoSubheading}
  `),

  description: cmz(
    typo.baseText,
    `
      font-size: 18px
    `
  )
}

type Props = {
  headline?: string,
  description?: string,
  isInvalid?: boolean
}

const Label = ({ headline, description, isInvalid }: Props) => {
  const headlineClassname = isInvalid ? [cx.headline, cx.error].join(' ') : cx.headline
  return (
    <div>
      {headline && (
        <div className={headlineClassname}>{headline}</div>
      )}
      {description && (
        <div className={cx.description}>{description}</div>
      )}
    </div>
  )
}

export default Label
