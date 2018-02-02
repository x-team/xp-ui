import React, { PureComponent } from 'react'

import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

const _MediumEditor = require('medium-editor')

class MediumEditorWrapper extends PureComponent {
  componentDidUpdate = () => {
    this.medium.restoreSelection()
  }

  componentWillUnmount = () => {
    this.medium.destroy()
  }

  componentDidMount = () => {
    const subscribeFunction = fun => event => {
      if (fun) {
        fun(this.input)
      }
    }

    this.medium = new _MediumEditor('.editable', this.props.options);
    this.medium.subscribe('editableInput', e => {
      const { textContent } = this.input

      const { onChange } = this.props
      if (onChange) {
        onChange(textContent)
      }
    })

    this.medium.subscribe('focus', subscribeFunction(this.props.onFocus))
    this.medium.subscribe('blur', subscribeFunction(this.props.onBlur))
  }

  render () {
    const tag = 'div'

    const childProps = {
      ref: node => this.input = node,
      className: 'editable'
    }
    if (this.medium) {
      this.medium.saveSelection()
    }
    return React.createElement(tag, childProps)
  }
}

export default MediumEditorWrapper
