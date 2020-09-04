// @flow
/* global React$Node */

import React from 'react'
import cmz from 'cmz'

import theme, { breakpoints } from '../../styles/theme'

const cx = {
  section: cmz(`
    display: block
  `),

  cards: cmz(`
    & {
      display: flex
      flex-direction: column
      align-items: center
    }

    & > * {
      margin: 0 0 24px 0
    }

    & > *:last-child {
      margin: 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        flex-direction: row
        align-items: normal
      }

      & > * {
        margin: 0 12px 0 0
        width: calc(100% / 3 - (12px * 2 / 3))
      }

      & > *:last-child {
        margin: 0
      }
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        flex-direction: row
      }

      & > * {
        margin: 0 38px 0 0
        width: calc(100% / 3 - (38px * 2 / 3))
        max-width: 341px
      }

      & > *:last-child {
        margin: 0
      }
    }
  `),

  title: cmz(`
    font-family: Open Sans
    font-weight: 800
    font-size: 37px
    line-height: 50px
    color: ${theme.typoHeading}
    text-transform: uppercase
    margin: 0 0 64px
  `)
}

type Props = {
  title?: string,
  children?: React$Node
}

const ArticleCardSection = ({ title, children }: Props) => title || children ? (
  <section className={cx.section}>
    {title && (
      <h1 className={cx.title}>{title}</h1>
    )}
    {children && (
      <div className={cx.cards}>
        {children}
      </div>
    )}
  </section>
) : null

export default ArticleCardSection
