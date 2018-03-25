/* global HTMLTextAreaElement */
// @flow

import React, { PureComponent } from 'react'

import MediumEditorWrapper from './MediumEditorWrapper'
import elem from '../../../utils/elem'
import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

const cmz = require('cmz')

type Props = {
  placeholder: string,
  charLimit: number,
  onChange(text: string, text: string): ?void,
  onFocus(target: Object): ?void,
  onBlur(target: Object): ?void
}

type State = {
  text: string,
  html: string,
  shouldShowTextLength: boolean
}

const textCountStyles = cmz(`
  text-align: right
  color: ${theme.lineRed}
  height: 40px
`)

const utilStyles = {
  maxWidth: cmz('max-width: 840px')
}

const editorContainerStyles = cmz(`
  & {
    display: block
    width: 100%
    height: 156px
    padding: 15px
    margin-bottom: 20px
    resize: vertical
    border: 1px solid ${theme.lineSilver3}
    overflow: scroll
    box-sizing: border-box
  }

  & .editable {
    height: 100%
    outline: none
  }

  & :first-child {
    margin-top: 0
  }

  & :last-child {
    margin-bottom: 0
  }
`)

const Root = elem.div([
  utilStyles.maxWidth,
  typeface.text,
  cmz(`
    font-weight: 300
    font-size: 18px
    text-align: left
    display: block
    width: 100%
    padding: 10px 20px
    margin-bottom: 20px
    resize: vertical
    box-sizing: border-box
    min-width: 320px
    margin: 0 auto
  `)
])

class TextareaEditor extends PureComponent<Props, State> {
  static defaultProps = {
    charLimit: 1000
  }

  state = {
    text: '',
    html: '',
    shouldShowTextLength: false
  }

  handleChange = (text: string, html: string) => {
    this.setState(() => ({ text }))
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(text, html)
    }
  }

  handleFocus = (target: HTMLTextAreaElement) => {
    this.setState(() => ({ shouldShowTextLength: true }))
    const { onFocus } = this.props
    if (typeof onFocus === 'function') {
      onFocus(target)
    }
  }

  handleBlur = (target: HTMLTextAreaElement) => {
    const { onBlur } = this.props
    if (typeof onBlur === 'function') {
      onBlur(target)
    }
  }

  render () {
    const {
      charLimit,
      placeholder
    } = this.props

    const {
      text,
      html,
      shouldShowTextLength
    } = this.state

    const options = {
      placeholder: {
        text: placeholder
      }
    }

    return Root(
      <div>
        <div className={editorContainerStyles}>
          <MediumEditorWrapper
            text={text}
            html={html}
            charLimit={charLimit}
            options={options}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur} />
        </div>
        <div className={textCountStyles}>
          {shouldShowTextLength && <p>
              {text.length}/{charLimit}
            </p>
          }
        </div>
      </div>
    )
  }
}

export default TextareaEditor
