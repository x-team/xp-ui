// @flow
/* global SyntheticKeyboardEvent, HTMLInputElement */

import React, { PureComponent } from 'react'
import cmz from 'cmz'

import InputField from '../forms/InputField'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cx = {
  wrapper: cmz(
    typeface.text,
    `
      font-weight: 300
      font-size: 18px
      text-align: left
      display: block
      width: 100%
      margin-bottom: 20px
      box-sizing: border-box
      min-width: 320px
      margin: 0 auto
    `
  ),

  textCountStyles: cmz(`
    text-align: right
    font-size: 14px
  `),

  textLimitExceeded: cmz(`
    color: ${theme.lineRed}
    font-weight: bold
  `)
}

type Props = {
  id?: string,
  name?: string,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  isInvalid?: boolean,
  charLimit: number,
  linesLimit: number,
  onChange?: (value: string) => void
}

type State = {
  value: string,
  initialValueLength: number
}

class TextareaEditor extends PureComponent<Props, State> {
  static defaultProps = {
    charLimit: 1000,
    linesLimit: 0
  }

  state = {
    value: this.props.value || '',
    initialValueLength: this.props.value ? this.props.value.length : 0
  }

  handleChangeValue = (event: SyntheticKeyboardEvent<HTMLInputElement>): void => {
    const inputValue = event.currentTarget.value
    const charLimit = this.props.charLimit
    const hasAllowedInitialValueLength = this.state.initialValueLength >= inputValue.length
    const hasAllowedValueLength = inputValue.length <= charLimit

    if (hasAllowedValueLength || hasAllowedInitialValueLength) {
      this.setState({ value: inputValue }, () => {
        const { onChange } = this.props
        onChange && onChange(inputValue)
      })

      if (hasAllowedInitialValueLength && inputValue.length === charLimit) {
        this.setState({ initialValueLength: charLimit })
      }
    }
  }

  componentWillReceiveProps ({ value: nextValue }: Props) {
    if (nextValue !== this.props.value) {
      this.setState({ value: nextValue || '' })
    }
  }

  render () {
    const { charLimit, ...rest } = this.props
    const { value } = this.state

    return (
      <div className={cx.wrapper}>
        <InputField
          {...rest}
          value={value}
          type='textarea'
          onChange={this.handleChangeValue}
        />
        <div className={cx.textCountStyles}>
          <span className={value.length >= charLimit ? cx.textLimitExceeded : ''}>
            {value.length}/{charLimit}
          </span>
        </div>
      </div>
    )
  }
}

export default TextareaEditor
