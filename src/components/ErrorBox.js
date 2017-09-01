// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'
import theme from '../styles/theme'

type Err = {[key: string|number]: string}
type Props = {
  errors: Err
}

const styles = {
  root: cmz(`
    color: ${theme.brand.darken(0.2)}
    border: 2px solid ${theme.brand.darken(0.1)}
    border-radius: .175em
    background: ${theme.brand.lighten(0.3)}
    font-style: italic
    margin: 10px
  `),

  list: cmz(`
    list-style-type: none;
    padding: 3px;
    text-align: center;
  `)
}

class ErrorBox extends PureComponent<Props> {
  renderErrorItem (errors: Err) {
    return Object.keys(errors).map((err) => (
      <li key={err}>
        {errors[err]}
      </li>
    ))
  }

  render () {
    const { errors } = this.props

    return Object.keys(errors).length
      ? (<div className={styles.root}>
        <ul className={styles.list}>
          {this.renderErrorItem(errors)}
        </ul>
      </div>) : null
  }
}

export default ErrorBox
