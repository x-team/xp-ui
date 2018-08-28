// @flow

import React, { Component } from 'react'
import '../../assets/react-select.css'

import Select from 'react-select'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  formTagList: cmz(typo.baseText, `
    & {
      font-size: 20px
      text-rendering: optimizeLegibility
      -webkit-font-smoothing: antialiased
    }
    & .Select-control {
      display: flex
      padding-left: 15px
      border: 1px solid ${theme.lineSilver2}
      border-radius: 2px
    }
    & .Select-control,
    & .Select-control .Select-placeholder {
      height: 60px
    }
    & .Select-control .Select-placeholder {
      line-height: 60px !important
      color: ${theme.typoParagraph}
      cursor: text
      padding-left: 20px !important
    }
    & .Select-control .Select-value .Select-value-label {
      color: ${theme.typoParagraph}
    }
    & .Select-input input {
      max-width: 165px
      border: none
      padding-top: 0
      padding-bottom: 0
      margin-left: 0
    }
    &.Select--multi .Select-control .Select-value {
      padding: 0 !important
      line-height: initial !important
      margin-top: 0
      font-size: 17px
    }
    &.Select--multi .Select-control .Select-input {
      margin-left: 5px
      line-height: 60px
      height: 60px
      padding: 0 !important;
    }
    &.Select--multi .Select-multi-value-wrapper {
      white-space: nowrap
      flex: 1
      overflow-x: auto
      overflow-y: hidden
      display: flex
      align-items: center
    }
    &.Select--multi .Select-control .Select-arrow-zone {
      display: none
    }
    &.Select--multi .Select-control .Select-clear-zone {
      padding-right: 10px
      padding-left: 10px
      width: 45px
    }
    &.Select--multi .Select-control .Select-clear-zone span {
      line-height: 60px
    }
  `)
}

type Props = {
  values: string,
  onChange: Function,
  onSubmit: Function,
  className: string
}

type State = {
  values: string
}

class Keywords extends Component<Props, State> {
  static defaultProps = {
    values: '',
    className: ''
  }

  state: State = {
    values: this.props.values
  }

  componentDidUpdate (prevProps: Props) {
    const values = this.props.values
    const prevValues = prevProps.values
    if (values !== prevValues) {
      this.setState(() => ({ values }))
    }
  }

  uppercaseOpperators = (value: string) => {
    const upperCasedLabel = value.toUpperCase()
    return ['AND', 'OR'].includes(upperCasedLabel) ? upperCasedLabel : value
  }

  handleChange = (values: Array<*>) => {
    const newValues = values
      .map(keyword => this.uppercaseOpperators(keyword.label))
      .join(',')
    this.setState(prevState => ({ values: newValues }), () => {
      const { onChange } = this.props
      onChange && onChange(newValues)
    })
  }

  handleInputKeyDown = (event: any) => {
    if (event && event.keyCode === 13) {
      const { onSubmit } = this.props
      onSubmit && onSubmit()
    }
  }

  render () {
    const keywords = this.state.values
      .split(',')
      .map(String)
      .filter(Boolean)
      .map((keyword, i) => ({
        value: i,
        label: this.uppercaseOpperators(keyword)
      })) || []

    return (
      <Select.Creatable
        className={[cx.formTagList.toString(), this.props.className].join(' ')}
        name='keywords'
        placeholder='Type keywords'
        value={keywords}
        multi
        clearable
        onChange={this.handleChange}
        onInputKeyDown={this.handleInputKeyDown}
      />
    )
  }
}

export default Keywords
