// @flow
/* global React$Node */

import React from 'react'
import cmz from 'cmz'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cx = {
  form: cmz(
    typo.baseText,
    `
      & {
        width: 500px
        max-width: 100%
        margin: 0 auto
        flex: 1
        font-size: 16px
        line-height: 1.4
        color: ${theme.typoGrayed}
      }

      & p {
        margin: 12px 0
      }

      & a {
        color: ${theme.typoGrayed}
      }

      & a:hover {
        text-decoration: none
      }
    `
  ),

  padded: cmz(`
    & {
      width: 524px
      padding: 48px 12px
      box-sizing: border-box
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        width: 744px
        padding: 48px 122px
      }
    }
  `),

  title: cmz(
    typo.heading,
    `
      margin: 0 0 36px
      text-align: center
      font-family: Lato, Helvetica, Arial, sans-serif
      font-size: 24px
      line-height: 1.4
      text-transform: initial
    `
  ),

  content: cmz(`
    margin: 0
  `)
}

type Props = {
  title?: string,
  hasPadding?: boolean,
  children?: React$Node
}

const SignupForm = ({ title, hasPadding, children }: Props) => (
  <div className={[cx.form, hasPadding ? cx.padded : ''].join(' ')}>
    {title && (
      <h1 className={cx.title}>{title}</h1>
    )}
    <div className={cx.content}>
      {children}
    </div>
  </div>
)

export default SignupForm
