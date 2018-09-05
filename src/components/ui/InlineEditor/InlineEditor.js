// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'
import Button from '../Button'

const cmz = require('cmz')

const cx = {
  container: cmz(`
    cursor: pointer
  `),
  link: cmz(`
    & {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  `),
  button: cmz(`
    margin-top: 10px
    margin-right: 10px
  `),
  warningMessage: cmz(`
    padding: 10px 0
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
  editValue: any,
  editing: boolean
}

class InlineEditor extends PureComponent<Props, State> {
  static defaultProps = {}

  state = {
    editing: false,
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

  renderWarningMessage = () => {
    return (
      <p className={cx.warningMessage}>
        You have unsaved changes.&nbsp;
        <a
          href=''
          className={cx.link}
          onClick={this.handleEditLinkClick}
        >
          View edits
        </a>
        &nbsp;-&nbsp;
        <a
          href=''
          className={cx.link}
          onClick={this.handleDiscardLinkClick}
        >
          Discard
        </a>
      </p>
    )
  }

  setEditing = () => {
    this.setState({ editing: true })
  }

  handleContainerClick = () => {
    if (this.isEditing()) {
      this.abortChanges()
    } else {
      this.setEditing()
    }
  }

  handleEditLinkClick = (evt: Object) => {
    evt.preventDefault()
    this.setEditing()
  }

  handleDiscardLinkClick = (evt: Object) => {
    evt.preventDefault()
    evt.stopPropagation()
    this.abortChanges()
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
      editing: false
    })
  }

  abortChanges = () => {
    const { value } = this.props
    this.props.onCancel()
    this.setState({
      editValue: value,
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

  componentWillReceiveProps (nextProps: Props) {
    const { value } = nextProps
    const { editValue } = this.state
    if (this.props.value !== value && editValue !== value) {
      this.setState({ editValue: value })
    }
  }

  render () {
    const { editValue } = this.state
    const { editor, presenter, value } = this.props
    const hasUnsavedChanges = value !== editValue
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
          {(!this.isEditing() && hasUnsavedChanges) && this.renderWarningMessage()}
        </div>
      </ClickOutside>
    )
  }
}

export default InlineEditor
