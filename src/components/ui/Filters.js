// @flow

import React, { PureComponent, Fragment } from 'react'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  layout: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
  `),

  heading: cmz(typeface.extraHeading, `
    & {
      color: ${theme.typoHighlightOnDarkBackground}
      text-transform: uppercase
      font-size: 1rem
      display: flex
      align-items: center
      padding: 24px 20px
    }

    &:not(:first-of-type) {
      border-top: 1px solid ${theme.lineSilver2}
    }
  `),

  label: cmz(typeface.semiHeading, `
    color: ${theme.typoHighlightOnDarkBackground}
    font-size: 1rem
    display: flex
    align-items: center
    padding: 0 20px 10px
  `),

  filter: cmz(`
    padding: 0 20px 20px
  `),

  tabHeads: cmz(`
    padding: 0 20px 20px
  `)
}

type Props = {}

class Filters extends PureComponent<Props, void> {
  static Heading = (props) => (
    <div className={cx.heading}>{props.children}</div>
  )

  static Label = (props) => (
    <div className={cx.label}>{props.children}</div>
  )

  static Filter = (props) => (
    <Fragment>
      <div className={cx.label}>{props.label}</div>
      <div className={cx.filter}>{props.children}</div>
    </Fragment>
  )

  static TabHeads = (props) => (
    <div className={cx.tabHeads}>{props.children}</div>
  )

  render () {
    return (
      <div className={cx.layout}>
        {this.props.children}
      </div>
    )
  }
}

export default Filters
