// @flow
/* global HTMLDivElement */

import React, { Component } from 'react'
import Editor from 'tui-editor'

import typo from '../../styles/typo'

const cmz = require('cmz')

require('codemirror/lib/codemirror.css') // codemirror
require('tui-editor/dist/tui-editor.css') // editor ui
require('tui-editor/dist/tui-editor-contents.css') // editor content
require('highlight.js/styles/github.css') // code block highlight

const cx = {
  root: cmz(`
    & * {
      box-sizing: border-box;
      line-height: 1;
    }

    & .CodeMirror-scroll {
      overflow-x: hidden !important;
    }
  `),

  disabledOverlay: cmz(`
    position: absolute;
    z-index: 2;
    background-color: rgba(233, 237, 238, 0.8);
  `),

  characterCounter: cmz(
    typo.baseText,
    `
    margin-left: 10px;
    font-size: 12px;
    line-height: 20px;
  `)
}

type Props = {
  disabled: boolean,
  initialValue?: string,
  characterLimit: number,
  hideModeSwitch: boolean,
  handleChange({ markdown: string, plainText: string }): void
}

type State = {
  characterCount: number
}

class RichTextEditor extends Component<Props, State> {
  static defaultProps = {
    disabled: false,
    characterLimit: Infinity,
    hideModeSwitch: true,
    handleChange: () => {}
  }

  state = {
    characterCount: 0
  }

  // $FlowFixMe: Local version of flow is out-dated and doesn't have definitions for createRef
  editSection = React.createRef()
  editor: *
  editorContentsNode: HTMLDivElement
  prevValue: string = ''

  shouldComponentUpdate (nextProps: Props, nextState: State) {
    return (
      this.props.disabled !== nextProps.disabled ||
      this.props.characterLimit !== nextProps.characterLimit ||
      this.props.hideModeSwitch !== nextProps.hideModeSwitch ||
      this.props.handleChange !== nextProps.handleChange ||
      this.state.characterCount !== nextState.characterCount
    )
  }

  componentDidMount () {
    const { initialValue, hideModeSwitch, disabled } = this.props

    if (this.editSection.current) {
      this.editor = new Editor({
        el: this.editSection.current,
        initialValue,
        hideModeSwitch,
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
        height: 'auto',
        usageStatistics: false,
        events: { change: this.onChange }
      })

      this.editorContentsNode = this.editSection.current.querySelector(
        '.tui-editor-contents[contenteditable=true]'
      )

      if (initialValue) {
        this.prevValue = this.editor.getValue()
        const characterCount = (this.editorContentsNode.innerText || '').trim().length
        this.setState({ characterCount })
      } else if (disabled) {
        this.forceUpdate()
      }
    }
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.hideModeSwitch !== this.props.hideModeSwitch) {
      this.props.hideModeSwitch
        ? this.editor.getUI().getModeSwitch().hide()
        : this.editor.getUI().getModeSwitch().show()
    }
  }

  onChange = () => {
    const { characterLimit, handleChange } = this.props
    const values = {
      markdown: this.editor.getMarkdown(),
      plainText: this.editorContentsNode.innerText || ''
    }

    const characterCount = values.plainText.trim().length

    if (characterCount > characterLimit && this.prevValue.length < this.editor.getValue().length) {
      this.editor.setValue(this.prevValue)
    } else {
      handleChange(values)
      this.prevValue = this.editor.getValue()
      this.setState({ characterCount })
    }
  }

  render () {
    const { characterCount } = this.state
    const { disabled, characterLimit } = this.props

    const { offsetWidth, offsetHeight } = this.editSection.current || {}

    return (
      <div className={cx.root}>

        {disabled && <div
          className={cx.disabledOverlay}
          style={{
            width: offsetWidth,
            height: offsetHeight
          }}
        />}

        <div ref={this.editSection} />

        {characterLimit !== Infinity && (
          <div className={cx.characterCounter}>{characterCount}/{characterLimit}</div>
        )}
      </div>
    )
  }
}

export default RichTextEditor
