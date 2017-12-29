// @flow

import React, { PureComponent } from 'react'

import InputField from './InputField'

import elem from '../../utils/elem'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  name: string,
  label?: string,
  addonText: string,
  className?: string,
  defaultValue?: string
}

const Root = elem.div(cmz(`
  position: relative
  display: table
  border-collapse: separate
  width: 100%
`))

const AddonText = elem.span([
  typo.baseText,
  cmz(`
    & {
      width: 40%
      padding: 6px 12px
      text-align: left
      white-space: nowrap
      vertical-align: middle
      display: table-cell
      box-sizing: border-box
      pointer-events: none
    }

    &:first-child {
      border-right: 0
    }

    @media screen and (max-width: ${breakpoints.xs}) {
      & {
        display: block
        width: 100%
        padding-left: 0
        padding-right: 0
      }
    }
  `)
])

class InputGroup extends PureComponent<Props> {
  static defaultProps = {
    className: '',
    type: 'text'
  }

  render () {
    const { className, name, addonText, ...rest } = this.props

    return Root(
      { className },
      AddonText(addonText),
      <InputField name={name} {...rest} />
    )
  }
}

export default InputGroup
