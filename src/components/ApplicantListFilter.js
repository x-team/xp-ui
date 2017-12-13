// @flow

import React, { PureComponent } from 'react'

import typo from '../styles/typo'

const cmz = require('cmz')

const option = cmz(`
  display: inline-block
  margin: 5px
  padding: 5px
`)

const optionContainer = cmz(
  typo.baseText,
  `
  text-align: right
`)

const label = cmz(`
  text-transform: capitalize
`)

type Props = {
  handleCheck(): void,
  pending: number,
  accepted: number,
  excluded: number
}

class ApplicantListFilter extends PureComponent<Props> {
  render () {
    const { handleCheck } = this.props
    const types = [
      'pending',
      'accepted',
      'excluded'
    ]

    return (
      <form className={optionContainer}>
        { types.map(name => (
          <div key={name} className={option}>
            <label>
              <input type='checkbox' name={name} onChange={handleCheck} />
              <span className={label}>{name} ({this.props[name]})</span>
            </label>
          </div>
        ))}
      </form>
    )
  }
}

export default ApplicantListFilter
