/* global HTMLTextAreaElement */
// @flow

import React, { PureComponent } from 'react'

import MediumEditorWrapper from './MediumEditorWrapper'
import elem from '../../../utils/elem'
import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

const cmz = require('cmz')

const textCountStyles = cmz(`
  & {
    text-align: right
    color: ${theme.lineRed}
    height: 40px
  }

  & > .hidden {
    visibility: hidden
  }
`)

const utilStyles = {
  maxWidth: cmz('max-width: 840px')
}

const editorContainerStyles = cmz(`
  & {
    display: block
    width: 100%
    padding: 15px
    margin-bottom: 20px
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
    margin-bottom: 20px
    box-sizing: border-box
    min-width: 320px
    margin: 0 auto
  `)
])

const editableClass = cmz(`
  resize: vertical
  height: 156px
`)

type Props = {
  placeholder: string,
  text: string,
  html: string,
  id: string,
  charLimit: number,
  onChange(text: string, html: string): ?void,
  onFocus(target: Object, text: string, html: string): ?void,
  onBlur(target: Object, text: string, html: string): ?void,
  disableEditing?: boolean,
}

type State = {
  id: string,
  text: string,
  html: string,
  shouldShowTextLength: boolean,
  options: {
    placeholder: {
      text: string
    },
    disableEditing: boolean,
    toolbar: boolean
  }
}

class TextareaEditor extends PureComponent<Props, State> {
  static defaultProps = {
    charLimit: 1000
  }

  state = {
    id: this.props.id || 'default',
    text: this.props.text || '',
    html: this.props.html || '',
    shouldShowTextLength: false,
    options: {
      placeholder: {
        text: this.props.placeholder
      },
      disableEditing: this.props.disableEditing || false,
      toolbar: !this.props.disableEditing
    }
  }

  changeShouldShowTextLength = (val: boolean) => {
    this.setState(() => ({ shouldShowTextLength: val }))
  }

  handleChange = (text: string, html: string) => {
    this.setState(() => ({ text, html }))
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(text, html)
    }
  }

  handleFocus = (target: HTMLTextAreaElement) => {
    const { text, html } = this.state
    const { onFocus } = this.props

    this.changeShouldShowTextLength(true)

    if (typeof onFocus === 'function') {
      onFocus(target, text, html)
    }
  }

  handleBlur = (target: HTMLTextAreaElement) => {
    const { text, html } = this.state
    const { onBlur } = this.props

    this.changeShouldShowTextLength(false)

    if (typeof onBlur === 'function') {
      onBlur(target, text, html)
    }
  }

  render () {
    const { charLimit } = this.props
    const { id, text, html, shouldShowTextLength, options } = this.state

    const counterVisibilityClassName = shouldShowTextLength ? '' : 'hidden'

    return Root(
      <div>
        <div className={`${editorContainerStyles} ${options.disableEditing ? '' : editableClass}`}>
          <MediumEditorWrapper
            text={text}
            html={html}
            id={id}
            charLimit={charLimit}
            options={options}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
        <div className={textCountStyles}>
          <p className={counterVisibilityClassName}>{text.length}/{charLimit}</p>
        </div>
      </div>
    )
  }
}

export default TextareaEditor
