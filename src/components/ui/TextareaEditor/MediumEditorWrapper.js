import { PureComponent } from 'react'
import elem from '../../../utils/elem'

import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

const MediumEditor = require('medium-editor')

type State = {
  medium: Object
}

type Props = {
  text: string,
  charLimit: number,
  onChange: void,
  onFocus: void,
  onBlur: void
}

class MediumEditorWrapper extends PureComponent {
  state: State
  props: Props

  componentDidUpdate = () => {
    this.medium.restoreSelection()
  }

  componentWillUnmount = () => {
    this.medium.destroy()
  }

  componentDidMount = () => {
    const subscribeFunction = fun => event => fun(this.input)

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
