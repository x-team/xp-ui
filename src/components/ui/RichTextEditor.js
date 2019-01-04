// @flow
/* global HTMLDivElement */

import React, { Component } from 'react'
import TUIEditor from 'tui-editor'

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
    }

    & .CodeMirror-scroll {
      overflow-x: hidden !important;
    }
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
  initialValue?: string,
  characterLimit: number,
  hideModeSwitch: boolean,
  handleChange({ html: string, markdown: string, plainText: string}): void
}

type State = {
  characterCount: number
}

class RichTextEditor extends Component<Props, State> {
  static defaultProps = {
    characterLimit: Infinity,
    hideModeSwitch: true,
    handleChange: () => {}
  }

  state = {
    characterCount: 0
  }

  // Local version of flow is out-dated and doesn't have definitions for createRef
  // $FlowFixMe
  editSection = React.createRef()
  editor: *
  editorContentsNode: HTMLDivElement
  prevValue: string = ''

  componentDidMount () {
    const { initialValue, hideModeSwitch } = this.props

    if (this.editSection.current) {
      this.editor = new TUIEditor({
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
      }
    }
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.hideModeSwitch !== this.props.hideModeSwitch) {
      this.props.hideModeSwitch
        ? this.editor.getUI().getModeSwitch().hide()
        : this.editor.getUI().getModeSwitch().show()
    }

    if (prevProps.initialValue !== this.props.initialValue) {
      this.editor.setValue(this.props.initialValue)
    }
  }

  onChange = () => {
    const { characterLimit, handleChange } = this.props
    const values = {
      markdown: this.editor.getMarkdown(),
      html: this.editor.getHtml(),
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
    const { characterLimit } = this.props

    return <div className={cx.root}>
      <div ref={this.editSection} />

      {characterLimit !== Infinity && (
        <div className={cx.characterCounter}>{characterCount}/{characterLimit}</div>
      )}
    </div>
  }
}

export default RichTextEditor
