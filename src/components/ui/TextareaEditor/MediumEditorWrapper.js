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

  change(text) {
    if (this.props.onChange) this.props.onChange(text, this.medium)
  }

  componentDidMount = () => {
    this.medium = new _MediumEditor('.editable', this.props.options);
    this.medium.subscribe('editableInput', (e) => {
      this._updated = true;
      this.change(this.input.innerHTML);
    });
    this.medium.setContent('something');
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
