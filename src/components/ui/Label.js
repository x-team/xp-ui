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
    hasError?: boolean
}
const Label = ({ headline, description, hasError }: Props) => {
  const headlineClassname = hasError ? [cx.headline, cx.error].join(' ') : cx.headline
  return (
    <div>
      <div className={headlineClassname}>{headline}</div>
      <div className={cx.description}>{description}</div>
    </div>
  )
}
export default Label
