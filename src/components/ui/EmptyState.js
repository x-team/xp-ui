// @flow
/* global React$Node */

import React from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.regularText,
    `
      & {
        border: 1px dashed ${theme.lineSilver5}
        padding: 64px
        display: flex
        flex-direction: column
        align-items: center
        color: ${theme.typoGrayed}
        text-align: center
      }

      &:not(:only-child) {
        margin: 0 0 38px
      }

      & a {
        color: ${theme.typoAnchor}
      }

      & a:hover {
        color: ${theme.typoAnchorHover}
      }
    `
  ),

  image: cmz(`
    &:not(:only-child) {
      margin: 0 0 24px
    }
  `),

  heading: cmz(
    typeface.semiHeading,
    `
      & {
        font-size: 20px
        font-weight: 400
        line-height: 1.3
        margin: 0
        max-width: 400px
      }

      &:not(:only-child) {
        margin: 0 0 12px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 24px
        }
      }
    `
  ),

  content: cmz(`
    & {
      font-size: 16px
      line-height: 1.2
      margin: 0
      max-width: 400px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 18px
      }
    }
  `)
}

type Props = {
  children?: React$Node,
  heading?: string
}

const EmptyState = ({ children, heading }: Props) => (
  <div data-testid='xpui-emptyState-wrapper' className={cx.wrapper}>
    <svg className={cx.image} width='124' height='103' viewBox='0 0 124 103' fill='none'>
      <path d='M62 103C75.2297 103 85.9545 99.5492 85.9545 95.2925C85.9545 91.0358 75.2297 87.585 62 87.585C48.7702 87.585 38.0454 91.0358 38.0454 95.2925C38.0454 99.5492 48.7702 103 62 103Z' fill='#F0F1F4' />
      <path fillRule='evenodd' clipRule='evenodd' d='M0 20.214L20.3671 32.1052L124 0L0 20.214Z' fill='#F0F1F4' />
      <path fillRule='evenodd' clipRule='evenodd' d='M20.1191 31.775L26.1238 56.4888L124 0L20.1191 31.775Z' fill='#E2E3E8' />
      <path fillRule='evenodd' clipRule='evenodd' d='M33.5015 44.552L56.768 74.3702L123.359 0.291229L33.5015 44.552Z' fill='#F0F1F4' />
    </svg>
    {heading && (
      <h2 className={cx.heading}>
        {heading}
      </h2>
    )}
    {children && (
      <div className={cx.content}>
        {children}
      </div>
    )}
  </div>
)

export default EmptyState
