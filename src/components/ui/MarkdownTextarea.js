import React, { PureComponent } from 'react'
const cmz = require('cmz')

import elem from './../../utils/elem'
import typo from '../../styles/typo'
import theme from '../../styles/theme'

type Props = {
  placeholder: string,
  charLimit: number,
  onChange(): void,
  onFocus(): void
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

const Form = elem.form([
  utilStyles.maxWidth,
  cmz(`
    margin: 30px auto
    position: relative
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
      margin-bottom: 100px
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

  render () {
    const {
      placeholder = 'Enter your response here.',
      charLimit = 1,
      onChange,
      onFocus,
    } = this.props

    return Root(
      Form(
        {onChange},
        Textarea({
          name: 'something',
          onChange,
          placeholder
        })
      )
    )
  }
}

export default MarkdownTextarea
