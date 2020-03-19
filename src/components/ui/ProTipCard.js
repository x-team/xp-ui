// @flow
/* global React$Node */

import React from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(
    typo.regularText,
    `
      & {
        background: ${theme.baseYellow}
        border-top: 1px solid ${theme.lineYellow}
        border-bottom: 1px solid ${theme.lineYellow}
        box-shadow: 4px 4px 0 ${theme.baseYellowDark.fade(0.85)}
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

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          border: 1px solid ${theme.lineYellow}
        }
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

const ProTipCard = ({ children, heading }: Props) => children || heading ? (
  <div className={cx.card}>
    {heading && (
      <h2 className={cx.heading}>{heading}</h2>
    )}
    {children}
  </div>
) : null

export default ProTipCard
