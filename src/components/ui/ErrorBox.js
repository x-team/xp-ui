// @flow

import React, { PureComponent } from 'react'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Err = {[key: string|number]: string | Array<Element<*>>}
type Props = {
  errors: Err
}

const Root = elem.div(cmz(
  typo.baseText,
  `
  & {
    color: ${theme.baseRed.darken(0.3)}
    border: 2px solid ${theme.baseRed}
    border-radius: .175em
    background: ${theme.baseRed.lighten(0.65)}
    margin: 10px 0
  }

  & a {
    color: ${theme.baseRed.darken(0.3)}
  }
`))

const List = elem.ul(cmz(`
  list-style-type: none
  padding: 3px
  text-align: center
`))

const Item = elem.li()

class ErrorBox extends PureComponent<Props> {
  static defaultProps = {
    errors: {}
  }

  renderErrorItem = (err: string) => {
    const { errors } = this.props
    return Item({ key: err }, errors[err])
  }

  render () {
    const { errors } = this.props

    const keys = Object.keys(errors)
    if (!keys.length) { return <div /> }

    return Root(
      List(
        keys.map(this.renderErrorItem)
      )
    )
  }
}

export default ErrorBox
