import React, { PureComponent } from 'react'
const cmz = require('cmz')
import Markdown from 'react-remarkable'

import elem from '../../../utils/elem'
import typo from '../../../styles/typo'
import theme from '../../../styles/theme'

type Props = {
  placeholder: string,
  charLimit: number,
  onChange(): void,
  onFocus(): void,
  onUnfocus(): void
}

const utilStyles = {
  maxWidth: cmz('max-width: 840px'),
  noOutline: cmz('outline: none'),
}

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    text-align: left
    min-width: 320px
    margin: 0 auto
  `)
])

const textareaStyles = [
  utilStyles.noOutline,
  typo.formText,
  cmz(`
    & {
      display: block
      width: 100%
      height: 156px
      padding: 10px 20px
      margin-bottom: 20px
      resize: vertical
      border: 1px solid ${theme.lineSilver3}
      box-sizing: border-box
    }

    &::-webkit-input-placeholder {
      color: ${theme.formPlaceholder}
    }

    &::-moz-placeholder {
      color: ${theme.formPlaceholder}
    }
  `)
]

const Textarea = elem.textarea(textareaStyles)

class MarkdownTextarea extends PureComponent<Props> {
  state = {
    text: ''
  }

  onChange = ({ target }) => {
    this.setState({
      text: target.value
    })
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

  render () {
    const {
      placeholder = 'Enter your response here.',
      charLimit = 1000,
      onFocus,
      onUnfocus
    } = this.props

    const onChange = this.onChange

    return Root(
      Textarea({
        maxLength: charLimit,
        onChange,
        onFocus,
        onBlur: onUnfocus,
        placeholder
      })
    )
  }
}

export default MarkdownTextarea
