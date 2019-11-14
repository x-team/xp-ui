// @flow
/* global React$Node */

import React from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(
    typo.regularText,
    `
      & {
        background: ${theme.baseYellow}
        border: 1px solid ${theme.lineYellow}
        box-shadow: 4px 4px 0px ${theme.baseYellowDark.fade(0.85)}
        padding: 24px
        line-height: 1.4
        font-weight: 400
      }

      & a {
        color: ${theme.typoAnchor}
      }

      & a:hover {
        color: ${theme.typoAnchorHover}
      }

      &:not(:only-child) {
        margin: 0 0 38px
      }
    `
  ),

  heading: cmz(`
    & {
      font-size: 18px
      line-height: 1.4
      margin: 0
    }

    &:not(:only-child) {
      margin: 0 0 12px
    }
  `)
}

type Props = {
  children?: React$Node,
  heading?: string
}

const JobsPageProTipCard = ({ children, heading }: Props) => children || heading ? (
  <div className={cx.card}>
    {heading && (
      <h2 className={cx.heading}>{heading}</h2>
    )}
    {children}
  </div>
) : null

export default JobsPageProTipCard
