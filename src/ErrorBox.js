// @flow

import React, { PureComponent } from 'react'

type Err = {[key: string|number]: string}
type Props = {
  errors: Err
}

class ErrorBox extends PureComponent {
  props: Props

  renderErrorItem (errors: Err) {
    return Object.keys(errors).map((err) => (
      <li key={err} className='error-box-item'>
        {errors[err]}
      </li>
    ))
  }

  render () {
    const { errors } = this.props

    return Object.keys(errors).length ?
      (<div className='error-box'>
        <ul className='error-box-list'>
          {this.renderErrorItem(errors)}
        </ul>
      </div>) : null
  }
}

export default ErrorBox
