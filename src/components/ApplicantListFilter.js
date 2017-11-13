// @flow

import React, { PureComponent } from 'react'
import * as typo from '../styles/typo'

const cmz = require('cmz')

const option = cmz(`
  display: inline-block
  margin: 5px
  padding: 5px
`)

const optionContainer = cmz(
  typo.family.base,
  `
  text-align: right
`)

type Props = {
  handleCheck(): void,
  pending: number,
  accepted: number,
  excluded: number
}

class ApplicantListFilter extends PureComponent<Props> {
  render () {
    const { handleCheck, pending, accepted, excluded } = this.props
    return (
      <div>
        <form className={optionContainer}>
          <div className={option}>
            <input type='checkbox' name='pending' onChange={handleCheck} />
            <label> Pending ({pending}) </label>
          </div>
          <div className={option}>
            <input type='checkbox' name='accepted' onChange={handleCheck} />
            <label> Accepted ({accepted}) </label>
          </div>
          <div className={option}>
            <input type='checkbox' name='excluded' onChange={handleCheck} />
            <label> Excluded ({excluded}) </label>
          </div>
        </form>
      </div>
    )
  }
}

export default ApplicantListFilter
