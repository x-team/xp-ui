// @flow

import React, { PureComponent } from 'react'

import InputField from '../../forms/InputField'
import elem from '../../../utils/elem'
import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

const cmz = require('cmz')

const textCountStyles = cmz(`
  & {
    text-align: right
    color: ${theme.lineRed}
    font-weight: bold
    font-size: 14px
  }

  & > .hidden {
    visibility: hidden
  }
`)

const utilStyles = {
  maxWidth: cmz('max-width: 840px')
}

const Root = elem.div([
  utilStyles.maxWidth,
  typeface.text,
  cmz(`
    font-weight: 300
    font-size: 18px
    text-align: left
    display: block
    width: 100%
    margin-bottom: 20px
    box-sizing: border-box
    min-width: 320px
    margin: 0 auto
  `)
])

type Props = {
  id?: string,
  name?: string,
  value?: string,
  placeholder?: string,
  charLimit: number,
  linesLimit: number,
  onChange?: (value: string) => void
}

type State = {
  value: string
}

class TextareaEditor extends PureComponent<Props, State> {
  static defaultProps = {
    charLimit: 1000,
    linesLimit: 0
  }

  state = {
    value: this.props.value || ''
  }

  handleChangeValue = (input: Object): void => {
    const inputValue = input.target.value
    if (inputValue.length <= this.props.charLimit) {
      this.setState({ value: inputValue })
    }
  }

  render () {
    const { id, name, placeholder, charLimit, linesLimit } = this.props
    const { value } = this.state

    return Root(
      <div>
        <InputField
          id={id}
          name={name}
          type='textarea'
          placeholder={placeholder}
          value={value}
          linesLimit={linesLimit}
          onChange={this.handleChangeValue}
        />
        <div className={textCountStyles}>
          <span>{value.length}/{charLimit}</span>
        </div>
      </div>
    )
  }
}

export default TextareaEditor
