// @flow
import React, { PureComponent } from 'react'
import Select from 'react-select'

import SelectorOption from './SelectorOption'

import '../../assets/react-select.css'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  select: cmz(
    typo.baseText,
    `
      & {
        font-size: 18px
        text-rendering: optimizeLegibility
        -webkit-font-smoothing: antialiased
        color: ${theme.typoParagraph}
        border: 1px solid transparent
      }

      & .Select-control {
        display: flex
        border: 1px solid ${theme.lineSilver2}
        height: 60px
        padding: 14px 16px
        border-radius: 0
        cursor: pointer
      }

      &.is-focused .Select-control {
        border: 1px solid ${theme.lineSilver6} !important
        box-shadow: 0 0 3px ${theme.lineSilver6} !important
      }

      &.is-disabled:hover {
        border: 1px solid transparent
        box-shadow: none
      }

      & .Select-multi-value-wrapper {
        white-space: nowrap
        flex: 1
        overflow-x: auto
        overflow-y: hidden
        display: flex
        align-items: center
        height: 100%
      }

      & .Select-placeholder,
      & .Select-control .Select-value {
        padding: 21px 18px !important
        line-height: 1 !important
        white-space: nowrap !important
        overflow: hidden !important
        text-overflow: ellipsis !important
        height: 100%
      }

      & .Select-input {
        padding: 0 !important
        display: flex !important
        align-items: center
        height: 100%
      }

      & .Select-input > input {
        height: 100%
        padding: 0 !important
      }

      & .Select-input:focus {
        background: transparent !important
      }

      & .Select-control > *:last-child {
        padding: 0
        margin-right: -5px
      }

      & .Select-menu-outer {
        top: calc(100% + 5px)
        max-height: 270px
        background: ${theme.baseBrighter}
        border: 1px solid rgba(0, 0, 0, 0.15)
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15)
        border-radius: 0
      }

      & .Select-menu {
        max-height: 270px
      }

      & .Select-option {
        padding: 0
        border-bottom: 1px solid ${theme.lineSilver2}
      }
    `
  ),

  invalid: cmz(`
    & .Select-control {
      border: 1px solid ${theme.lineRed}
    }

    &.is-focused .Select-control {
      border: 1px solid ${theme.lineRed} !important
      box-shadow: 0 0 3px ${theme.lineRed} !important
    }
  `)
}

type Option = {
  value: string | number,
  label: string
}

type Props = {
  isInvalid?: boolean
}

type State = {
  selectedOption: Option | null
}

class CustomSelector extends PureComponent<Props, State> {
  state: State = {
    selectedOption: null
  }

  handleSelection = (selectedOption: Option) => {
    this.setState({ selectedOption })
  }

  render () {
    const { isInvalid } = this.props
    const { selectedOption } = this.state

    const classNames = [
      cx.select.toString(),
      isInvalid ? cx.invalid.toString() : ''
    ].join(' ')

    return (
      <Select
        name='CustomSelector'
        placeholder='Select...'
        optionRenderer={SelectorOption}
        onChange={this.handleSelection}
        value={selectedOption}
        disabled={false}
        clearable={false}
        searchable={false}
        {...this.props}
        className={classNames}
      />
    )
  }
}

export default CustomSelector
