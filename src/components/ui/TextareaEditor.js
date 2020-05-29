// @flow

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
    font-weight: bold
    font-size: 14px
  `),
  textLimitExceeded: cmz(`
    color: ${theme.lineRed}
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

  handleChangeValue = (input: Object): void => {
    const inputValue = input.target.value
    const charLimit = this.props.charLimit
    const isValueLimitExceeded = this.state.initialValueLength >= inputValue.length
    const isValueValidLenght = inputValue.length <= charLimit

    if (isValueValidLenght || isValueLimitExceeded) {
      this.setState({ value: inputValue }, () => {
        const { onChange } = this.props
        onChange && onChange(inputValue)
      })

      if (isValueLimitExceeded && inputValue.length === charLimit) {
        this.setState({ initialValueLength: charLimit })
      }
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
          <span className={`${value.length >= charLimit ? cx.textLimitExceeded : ''}`}>
            {value.length}/{charLimit}
          </span>
        </div>
      </div>
    )
  }
}

export default TextareaEditor
