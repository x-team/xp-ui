import React, { PureComponent } from 'react'
import type { Element } from 'react'
import Editor from 'draft-js-plugins-editor';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import { EditorState } from 'draft-js';

import elem from '../../utils/elem'
import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

type Props = {
  placeholder: string,
  charLimit: number,
  onChange(target?: Object): void,
  onFocus(target?: Object): void,
  onUnfocus(target?: Object): void
}

type BaseProps = {
  children?: Element<*> | string
}

type State = {
  text: string,
  shouldShowTextLength: boolean
}

const textCountStyles = cmz(`
  text-align: right
  color: ${theme.lineRed}
  height: 40px
`)

const utilStyles = {
  maxWidth: cmz('max-width: 840px'),
  noOutline: cmz('outline: none')
}

const navStyles = cmz(`
  margin-bottom: -1px
  padding: 0 10px
`)

const navContainerStyles = cmz(`
  margin-bottom: 10px
  border-bottom: 1px solid ${theme.lineSilver3}
`)

const navButtonStyles = cmz(`
  background-color: transparent
  border: 1px solid ${theme.lineSilver3} !important
  border-bottom: 0 !important
  background-color: ${theme.baseBrighter} !important
  font-size: 14px;
  border-radius: 3px 3px 0 0
  border: 0
  padding: 8px 12px
  outline: none
  cursor: pointer
`)

const editorContainerStyles = cmz(`
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

  & .public-DraftEditor-content {
    height: 130px
  }
`)

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    font-size: 18px
    text-align: left
    display: block
    width: 100%
    padding: 10px 20px
    margin-bottom: 20px
    resize: vertical
    border: 1px solid ${theme.lineSilver3}
    box-sizing: border-box
    min-width: 320px
    margin: 0 auto
  `)
])

const plugins = [
  createMarkdownShortcutsPlugin()
];

class MarkdownTextarea extends PureComponent<Props> {

  state: State = {
    text: '',
    editorState: EditorState.createEmpty(),
    shouldShowTextLength: false
  }

  _handleBeforeInput = () => {
    const { editorState } = this.state
    const currentContentLength = editorState.getCurrentContent().getPlainText('').length
    const MAX_LENGTH = this.props.charLimit || 1000

    if (currentContentLength > MAX_LENGTH - 1) {
      return 'handled'
    }
  }

  _onChange = editorState => {
    const text = editorState.getCurrentContent().getPlainText('')

    this.setState({
      editorState
    })
    const { onChange } = this.props
    if (onChange) {
      onChange(text)
    }
  }

  _onFocus = ({ target }) => {
    this.setState({
      shouldShowTextLength: true
    })
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(target)
    }
  }

  _onBlur = ({ target }) => {
    this.setState({
      shouldShowTextLength: false
    })
    const { onBlur } = this.props
    if (onBlur) {
      onBlur(target)
    }
  }

  render () {
    const {
      placeholder = 'Enter your response here.',
      charLimit = 1000
    } = this.props

    const {
      editorState,
      shouldShowTextLength
    } = this.state

    const textLength = editorState.getCurrentContent().getPlainText('').length

    return Root(
      <div className={navContainerStyles}>
        <nav className={navStyles}>
          <button
            name='Write'
            className={navButtonStyles}>
            Write
          </button>
        </nav>
      </div>,
      <div>
        <div className={editorContainerStyles}>
          <Editor
            placeholder={placeholder}
            editorState={this.state.editorState}
            onChange={this._onChange}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            handleBeforeInput={this._handleBeforeInput}
            plugins={plugins} />
        </div>
        <div className={textCountStyles}>
          {shouldShowTextLength
            ? <p>
              {textLength}/{charLimit}
            </p>
            : null
          }
        </div>
      </div>
    )
  }
}

export default MarkdownTextarea
