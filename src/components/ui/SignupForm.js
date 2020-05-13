// @flow
/* global React$Node */

import React from 'react'

import ErrorBox from './ErrorBox'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  form: cmz(`
    width: 500px
    max-width: 100%
    margin: 0 auto
    flex: 1
  `),

  padded: cmz(`
    padding: 48px 122px
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

  layoutErrorMessage: cmz(`
    margin: 0 0 48px
  `),

  content: cmz(`
    margin: 0
  `),

  group: cmz(`
    margin: 0 0 24px
  `),

  element: cmz(`
    margin: 0 0 16px
  `),

  inputGroupErrorMessage: cmz(
    typo.baseText,
    `
      color: ${theme.typoSubheading}
      font-size: 16px
      margin: -16px 0 0
    `
  )
}

type InputGroupProps = {
  children?: React$Node,
  errorMessage?: string
}

type LayoutProps = {
  errorMessage?: string,
  title?: string,
  hasPadding?: boolean,
  children?: React$Node
}

const Layout = ({ errorMessage = '', title = '', hasPadding = false, children }: LayoutProps) => (
  <div className={[cx.form, hasPadding ? cx.padded : ''].join(' ')}>
    {title && (
      <h1 className={cx.title}>{title}</h1>
    )}
    {errorMessage && (
      <div className={cx.layoutErrorMessage}>
        <ErrorBox
          errors={{
            name: errorMessage
          }}
        />
      </div>
    )}
    <div className={cx.content}>
      {children}
    </div>
  </div>
)

const InputGroup = ({ children, errorMessage }: InputGroupProps) => children ? (
  <div className={cx.group}>
    {React.Children.map(children, (child) => (
      <div className={cx.element}>{child}</div>
    ))}
    {errorMessage && (
      <div className={cx.inputGroupErrorMessage}>{errorMessage}</div>
    )}
  </div>
) : null

export default {
  Layout,
  InputGroup
}
