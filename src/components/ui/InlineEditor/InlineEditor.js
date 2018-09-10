// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'

import Button from '../Button'

const cmz = require('cmz')

const cx = {
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

const KEY_CODES = {
  ENTER: 13,
  ESCAPE: 27
}

const isKeyOfType = (keyCode: number, type: number) => keyCode === type

type EditorProps = {
  value: any,
  onValueChange(data: any): void
}

type PresenterProps = {
  value: any,
  isEditable: boolean,
  isHover: boolean,
  activateEditingMode(): void
}

type Props = {
  /** Component's value */
  value: any,
  /** To control whethere component can be editable or not */
  isEditable: boolean,
  /** Editing mode render function */
  editor(props: EditorProps): any,
  /** Presentation mode render function */
  presenter(props: PresenterProps): any,
  /** On save changes callback */
  onSave(data: any): void,
  /** On cancel changes callback */
  onCancel: () => void,
}

type State = {
  editValue: any,
  isInEditionMode: boolean,
  isHover: boolean
}

/**
 * A generic component that provides inline editing functionality to any component.
 */
class InlineEditor extends PureComponent<Props, State> {
  static defaultProps = {
    isEditable: true
  }

  state = {
    isInEditionMode: false,
    isHover: false,
    editValue: this.props.value
  }

  renderControls = () => (
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

  renderWarningMessage = () => (
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

  setEditing = (isInEditionMode: boolean) => {
    let update = { isInEditionMode }
    if (!isInEditionMode) {
      update = {
        ...update,
        isHover: false
      }
    }
    this.setState(update)
  }

  handleContainerClick = () => {
    const { isInEditionMode } = this.state
    if (isInEditionMode) {
      this.setEditing(false)
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
    const { isInEditionMode } = this.state
    if (isInEditionMode) {
      evt.stopPropagation()
    }
  }

  handleKeyDown = (evt: Object) => {
    const { keyCode } = evt
    const { ENTER, ESCAPE } = KEY_CODES

    if (isKeyOfType(keyCode, ENTER)) {
      this.saveChanges()
    } else if (isKeyOfType(keyCode, ESCAPE)) {
      this.setEditing(false)
    }
  }

  handleSaveClick = (evt: Object) => {
    evt.stopPropagation()
    this.saveChanges()
  }

  saveChanges = () => {
    const { editValue } = this.state
    const { onSave } = this.props

    this.setEditing(false)

    if (onSave) {
      onSave(editValue)
    }
  }

  abortChanges = () => {
    const { value, onCancel } = this.props
    this.setState({
      editValue: value,
      isInEditionMode: false,
      isHover: false
    })

    if (onCancel) {
      onCancel()
    }
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

  handleActivateEditingMode = () => {
    const { isEditable } = this.props
    if (isEditable) {
      this.setEditing(true)
    }
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false })
  }

  componentWillReceiveProps (nextProps: Props) {
    const { value } = nextProps
    const { editValue } = this.state
    if (this.props.value !== value && editValue !== value) {
      this.setState({ editValue: value })
    }
  }

  render () {
    const { editValue, isHover, isInEditionMode } = this.state
    const { editor, presenter, value, isEditable } = this.props
    const hasUnsavedChanges = value !== editValue
    const mainComponentRenderer = isInEditionMode ? editor : presenter
    const props = {
      value: editValue,
      onValueChange: this.handleValueChange,
      activateEditingMode: this.handleActivateEditingMode,
      isEditable,
      isHover
    }
    const canRenderWarning = (!isInEditionMode && hasUnsavedChanges && isEditable)

    return (
      <ClickOutside onClickOutside={this.handleClickOutside}>
        <div
          onClick={this.handleContainerClick}
          onKeyDown={this.handleKeyDown}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div onClick={this.handleComponentClick}>
            {mainComponentRenderer(props)}
          </div>
          {isInEditionMode && this.renderControls()}
          {canRenderWarning && this.renderWarningMessage()}
        </div>
      </ClickOutside>
    )
  }
}

export default InlineEditor
