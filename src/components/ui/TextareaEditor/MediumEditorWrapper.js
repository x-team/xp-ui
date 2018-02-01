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
    this.medium = new _MediumEditor('.editable', this.props.options);
    this.medium.subscribe('editableInput', e => {
      this._updated = true;
      const { innerHTML } = this.input
      const { onChange } = this.props

      if (onChange) {
        onChange(innerHTML)
      }
    })

    this.medium.subscribe('focus', e => {
      const { onFocus } = this.props
      if (onFocus) {
        onFocus(this.input)
      }
    })

    this.medium.subscribe('blur', e => {
      const { onBlur } = this.props
      if (onBlur) {
        onBlur(this.input)
      }
    })
  }

  render () {
    const tag = 'div'
    const childProps = {
      ref: node => this.input = node,
      className: 'editable'
    };
    if (this.medium) {
      this.medium.saveSelection();
    }
    return React.createElement(tag, childProps)
  }
}

export default MediumEditorWrapper
