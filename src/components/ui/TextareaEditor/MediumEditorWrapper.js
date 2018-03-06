// @flow

import { PureComponent } from 'react'
import elem from '../../../utils/elem'

// $FlowFixMe
import 'medium-editor/dist/css/medium-editor.css'
// $FlowFixMe
import 'medium-editor/dist/css/themes/default.css'

import type { Element } from 'react'

const MediumEditor = require('medium-editor')

type State = {
  medium: Object
}

type Input = Element<*> & {
  textContent: string
}

type Props = {
  text: string,
  charLimit: number,
  onChange: (string) => void,
  onFocus: (*) => void,
  onBlur: (*) => void,
  options?: Object
}

class MediumEditorWrapper extends PureComponent<Props, State> {
  state: State
  props: Props
  medium: MediumEditor
  input: Input

  componentDidUpdate = () => {
    this.medium.restoreSelection()
  }

  componentWillUnmount = () => {
    this.medium.destroy()
  }

  componentDidMount = () => {
    if (!this.input) return

    const subscribeFunction:((input: *) => * => void) = fun => event => fun(this.input)

    this.medium = new MediumEditor('.editable', this.props.options)
    this.medium.subscribe('editableInput', e => {
      const { text, charLimit } = this.props
      if (this.input.textContent.length > charLimit) {
        this.input.textContent = text
      }

      const { textContent } = this.input
      this.props.onChange(textContent)
    })

    const { onFocus, onBlur } = this.props
    this.medium.subscribe('focus', subscribeFunction(onFocus))
    this.medium.subscribe('blur', subscribeFunction(onBlur))
  }

  render () {
    if (this.medium) {
      this.medium.saveSelection()
    }
    return elem('editable', {ref: node => { this.input = node }})()
  }
}

export default MediumEditorWrapper
