// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'
import Button from '../Button'

const cmz = require('cmz')

const cx = {
  containerEditable: cmz(`
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
  value: any,
  editable?: boolean
}

type Props = {
  /** Component's value */
  value: any,
  /** To control whethere component can be editable or not */
  editable?: boolean,
  /** Editing mode render function */
  editor(props: EditorProps): any,
  /** Presentation mode render function */
  presenter(props: PresenterProps): any,
  /** On save changes callback */
  onSave(data: any): ?void,
  /** On change callback */
  onChange?: (data: any) => ?void,
  /** On cancel changes callback */
  onCancel(): ?void
}

type State = {
  editValue: any,
  editing: boolean
}

/**
 * A generic component that provides inline editing functionality to any component.
 */
class InlineEditor extends PureComponent<Props, State> {
  static defaultProps = {
    onChange: () => {},
    editable: true
  }

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

  setEditing = (editing: boolean) => {
    this.setState({ editing })
  }

  handleContainerClick = () => {
    const { editable } = this.props
    if (editable) {
      this.setEditing(!this.isEditing())
    }
  }

  handleEditLinkClick = (evt: Object) => {
    evt.preventDefault()
    this.setEditing(true)
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
      this.setEditing(false)
    }
  }

  handleSaveClick = (evt: Object) => {
    evt.stopPropagation()
    this.saveChanges()
  }

  saveChanges = () => {
    const { editValue } = this.state
    this.props.onSave(editValue)
    this.setEditing(false)
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

  handleClickOutside = () => {
    this.setEditing(false)
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
    const { editor, presenter, value, editable } = this.props
    const hasUnsavedChanges = value !== editValue
    const mainComponentRenderer = this.isEditing() ? editor : presenter
    const props = {
      value: editValue,
      onValueChange: this.handleValueChange,
      editable
    }

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div
          className={editable ? cx.containerEditable : ''}
          onClick={this.handleContainerClick}
          onKeyDown={this.handleKeyDown}
        >
          <div onClick={this.handleComponentClick}>
            {mainComponentRenderer(props)}
          </div>
          {this.isEditing() && this.renderControls()}
          {(!this.isEditing() && hasUnsavedChanges && editable) && this.renderWarningMessage()}
        </div>
      </ClickOutside>
    )
  }
}

export default InlineEditor
