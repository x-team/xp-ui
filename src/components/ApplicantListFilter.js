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
            <label>
              <input type='checkbox' name='pending' onChange={handleCheck} />
              <span>Pending ({pending})</span>
            </label>
          </div>
          <div className={option}>
            <label>
              <input type='checkbox' name='accepted' onChange={handleCheck} />
              <span>Accepted ({accepted})</span>
            </label>
          </div>
          <div className={option}>
            <label>
              <input type='checkbox' name='excluded' onChange={handleCheck} />
              <span>Excluded ({excluded})</span>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default ApplicantListFilter
