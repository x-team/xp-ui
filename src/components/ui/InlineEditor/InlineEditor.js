// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'
import Button from '../Button'

const cmz = require('cmz')

const cx = {
  container: cmz(`
    cursor: pointer
  `),
  button: cmz(`
    margin-top: 10px
    margin-right: 10px
`)
}

const ENTER_KEY_CODE = 13
const ESCAPE_KEY_CODE = 27
const isEnterKey = keyCode => keyCode === ENTER_KEY_CODE
const isEscapeKey = keyCode => keyCode === ESCAPE_KEY_CODE

type EditorProps = {
  value: any,
  onValueChange(data: any): ?void
}

type PresenterProps = {
  value: any
}

type Props = {
  value: any,
  editor(props: EditorProps): any,
  presenter(props: PresenterProps): any,
  onSave(data: any): ?void,
  onCancel(): ?void
}

type State = {
  lastValue: any,
  editValue: any,
  editing: boolean
}

class InlineEditor extends PureComponent<Props, State> {
  static defaultProps = {}

  state = {
    editing: false,
    lastValue: this.props.value,
    editValue: this.props.value
  }

  isEditing = () => {
    return this.state.editing
  }

  renderControls = () => {
    return (
      <div>
        <Button
          className={cx.button}
          size='small'
          color='silver'
          rounded
          onClick={this.handleSaveClick}
        >
          Save
        </Button>
        <Button
          className={cx.button}
          size='small'
          rounded
          onClick={this.handleCancelClick}
        >
          Cancel
        </Button>
      </div>
    )
  }

  handleContainerClick = () => {
    if (this.isEditing()) {
      this.abortChanges()
    } else {
      this.setState({ editing: true })
    }
  }

  handleComponentClick = (evt: Object) => {
    if (this.isEditing()) {
      evt.stopPropagation()
    }
  }

  handleKeyDown = (evt: Object) => {
    const { keyCode } = evt
    if (isEnterKey(keyCode)) {
      this.saveChanges()
    } else if (isEscapeKey(keyCode)) {
      this.abortChanges()
    }
  }

  handleSaveClick = (evt: Object) => {
    evt.stopPropagation()
    this.saveChanges()
  }

  saveChanges = () => {
    const { editValue } = this.state
    this.props.onSave(editValue)
    this.setState({
      lastValue: editValue,
      editing: false
    })
  }

  abortChanges = () => {
    const { lastValue } = this.state
    this.props.onCancel()
    this.setState({
      editValue: lastValue,
      editing: false
    })
  }

  handleCancelClick = (evt: Object) => {
    evt.stopPropagation()
    this.abortChanges()
  }

  handleValueChange = (value: any) => {
    this.setState({ editValue: value })
  }

  render () {
    const { editValue } = this.state
    const { editor, presenter } = this.props
    const mainComponentRenderer = this.isEditing() ? editor : presenter
    const props = {
      value: editValue,
      onValueChange: this.handleValueChange
    }

    return (
      <ClickOutside onClickOutside={this.abortChanges}>
        <div
          className={cx.container}
          onClick={this.handleContainerClick}
          onKeyDown={this.handleKeyDown}
        >
          <div onClick={this.handleComponentClick}>
            {mainComponentRenderer(props)}
          </div>
          {this.isEditing() && this.renderControls()}
        </div>
      </ClickOutside>
    )
  }
}

export default InlineEditor
