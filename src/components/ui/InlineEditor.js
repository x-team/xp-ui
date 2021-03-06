// @flow

import React, { PureComponent } from 'react'
import isEqual from 'lodash.isequal'
import ClickOutside from 'react-click-outside'

import Button from './Button'

const cmz = require('cmz')

const cx = {
  editor: cmz(`
    width: 100%
  `),

  link: cmz(`
    & {
      text-decoration: none
      color: inherit
    }

    &:hover {
      text-decoration: underline
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

export type EditorProps = {
  value: any,
  onValueChange(data: any): any
}

export type PresenterProps = {
  value: any,
  isEditable: boolean,
  isHover: boolean,
  activateEditingMode(): any
}

type Props = {
  /** Component's value */
  value: any,
  /** To control whether the component can be editable or not */
  isEditable: boolean,
  /** To control whether the component begins in presenter mode or edit mode */
  initialMode: 'present' | 'edit',
  /** To control whether the component can be saved or not */
  isValid: boolean,
  /** To control whether the component will save changes on Enter or not, the Shift+Enter combination works always */
  shouldSaveOnEnter: boolean,
  /** Editing mode render function */
  editor(props: EditorProps): any,
  /** Presentation mode render function */
  presenter(props: PresenterProps): any,
  /** On save changes callback */
  onSave(data: any): any,
  /** On cancel changes callback */
  onCancel?: () => void,
}

type State = {
  editValue: any,
  isInEditMode: boolean,
  isHover: boolean
}

/**
 * A generic component that provides inline editing functionality to any component.
 */
class InlineEditor extends PureComponent<Props, State> {
  static defaultProps = {
    isEditable: true,
    initialMode: 'present',
    isValid: true,
    shouldSaveOnEnter: true
  }

  state = {
    isInEditMode: this.props.initialMode === 'edit',
    isHover: false,
    editValue: this.props.value
  }

  componentWillReceiveProps (nextProps: Props) {
    const { value } = nextProps
    if (this.props.value !== value && this.state.editValue !== value) {
      this.setState({ editValue: value })
    }
  }

  renderControls = () => {
    const { editValue } = this.state
    const { value, isValid } = this.props

    return (
      <div>
        <Button
          className={cx.button}
          type='button'
          size='small'
          rounded
          onClick={this.handleSaveClick}
          disabled={isEqual(editValue, value) || !isValid}
        >
          Save
        </Button>
        <Button
          className={cx.button}
          type='button'
          size='small'
          rounded
          color='silver'
          onClick={this.handleCancelClick}
        >
          Cancel
        </Button>
      </div>
    )
  }

  setEditing = (isInEditMode: boolean) => {
    let update = { isInEditMode }
    if (!isInEditMode) {
      update = {
        ...update,
        isHover: false
      }
    }
    this.setState(update)
  }

  handleContainerClick = () => {
    if (this.state.isInEditMode) {
      this.abortChanges()
    }
  }

  handleComponentClick = (event: Object) => {
    if (this.state.isInEditMode) {
      event.stopPropagation()
    }
  }

  handleKeyDown = (event: Object) => {
    const { keyCode } = event
    const { shouldSaveOnEnter } = this.props
    const { ENTER, ESCAPE } = KEY_CODES

    const saveChanges = shouldSaveOnEnter
      ? isKeyOfType(keyCode, ENTER)
      : event.shiftKey && isKeyOfType(keyCode, ENTER)

    if (saveChanges) {
      this.saveChanges()
    } else if (isKeyOfType(keyCode, ESCAPE)) {
      this.abortChanges()
    }
  }

  handleSaveClick = (event: Object) => {
    event.stopPropagation()
    this.saveChanges()
  }

  saveChanges = () => {
    const { editValue } = this.state
    const { onSave, isValid } = this.props

    if (isValid) {
      this.setEditing(false)

      if (onSave) {
        onSave(editValue)
      }
    }
  }

  abortChanges = () => {
    const { value, onCancel } = this.props

    this.setState({
      editValue: value,
      isInEditMode: false,
      isHover: false
    })

    if (onCancel) {
      onCancel()
    }
  }

  handleCancelClick = (event: Object) => {
    event.stopPropagation()
    this.abortChanges()
  }

  handleClickOutside = () => {
    this.abortChanges()
  }

  handleValueChange = (value: any) => {
    this.setState({ editValue: value })
  }

  handleActivateEditingMode = () => {
    if (this.props.isEditable) {
      this.setEditing(true)
    }
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false })
  }

  renderContent = () => {
    const { editValue, isHover, isInEditMode } = this.state
    const { editor, presenter, isEditable } = this.props
    const mainComponentRenderer = isInEditMode ? editor : presenter
    const props = {
      value: editValue,
      onValueChange: this.handleValueChange,
      activateEditingMode: this.handleActivateEditingMode,
      isEditable,
      isHover
    }

    return (
      <div
        onClick={this.handleContainerClick}
        onKeyDown={this.handleKeyDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div onClick={this.handleComponentClick}>
          {mainComponentRenderer && mainComponentRenderer(props)}
        </div>
        {isInEditMode && this.renderControls()}
      </div>
    )
  }

  render () {
    return this.state.isInEditMode
      ? (
        <div className={cx.editor}>
          <ClickOutside onClickOutside={this.handleClickOutside}>
            {this.renderContent()}
          </ClickOutside>
        </div>
      ) : this.renderContent()
  }
}

export default InlineEditor
