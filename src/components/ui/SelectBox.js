// @flow

import React, { Component } from 'react'

import InputField from '../forms/InputField'
import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'
import withProps from '../hocs/withProps'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import type { Element } from 'react'
import type { InputType } from '../../utils/types'

const cmz = require('cmz')

const controlBaseClass = cmz(`
  & {
    position: absolute
    top: calc(50% - 7px)
    cursor: pointer
    z-index: 5
  }

  & svg {
    position: absolute
  }
`)

const cx = {
  selectbox: cmz(`
    background: ${theme.baseBrighter}
    position: relative
    width: 100%
  `),

  dropdown: cmz(`
    width: 100%
  `),

  placeholder: cmz(
    typo.baseText,
    `
      & {
        border: 1px solid ${theme.lineSilver2}
        padding: 0 20px
        height: 60px
        width: 100%
        box-sizing: border-box
        display: flex
        align-items: center
        position: relative
        border-radius: 2px
      }

      & > div {
        width: inherit
      }
    `
  ),

  noSearchAndPlaceholder: cmz(`
    height: 1px
    border: none
    border-top: 1px solid ${theme.lineSilver2}
  `),

  selects: cmz(`
    & {
      width: 100%
    }
    & > div {
      display: block
      line-height: 1.1
    }
    & > div:first-of-type {
      font-size: 15px
      color: ${theme.typoLabel}
      padding: 10px 0 0
      transition: color .10s ease-out, font-size .10s ease-out
    }
    & > div:last-of-type {
      width: calc(100% - 20px)
      height: 24px
      white-space: nowrap
      overflow-x: overlay
      overflow-y: hidden
      padding: 0 0 10px
      transition: opacity .10s ease-out, padding .10s ease-out, height .10s ease-out
      opacity: 1
    }
  `),

  selectsEmpty: cmz(`
    & > div:first-of-type {
      transition: color .10s ease-out, font-size .10s ease-out
    }
    & > div:last-of-type {
      transition: opacity .10s ease-out, padding .10s ease-out, height .10s ease-out
      opacity: 0
      height: 0
    }
  `),

  search: cmz(`
    position: relative
  `),

  // The !important used below is required to override the global input[type="text"] styles
  searchInput: cmz(`
    padding: 23px 30px 20px 52px !important
    height: 60px !important
    width: 100%
  `),

  magnifier: cmz(`
    & {
      position: absolute
      z-index: 5
      top: 23px
      left: 22px
    }
    & svg {
      position: absolute
    }
  `),

  triangle: cmz(`
    & {
      position: absolute
      z-index: 5
      top: 50%
      right: 30px
    }
    & svg {
      position: absolute
    }
  `),

  close: cmz(
    controlBaseClass,
    `
      right: 40px
    `
  ),

  clear: cmz(
    controlBaseClass,
    `
      right: 55px
      transform: scale(0.9)
      top: calc(50% - 5px)
    `
  ),

  label: cmz(typo.baseText, `
    border-bottom: 1px solid transparent
  `),

  list: cmz(`
    & {
      list-style: none
      margin: 0
      padding: 0
      border: 1px solid ${theme.lineSilver2}
      border-top: none
      overflow-y: auto
      background: ${theme.baseBrighter}
      width: 100%
      box-sizing: border-box
    }
    &:not(.expanded):empty {
      border: none
    }
  `),

  shadow: cmz(`
    box-shadow: 0 5px 12px rgba(0, 0, 0, .15)
  `),

  item: cmz(typo.baseText, `
    & {
      min-height: 30px
    }
    &:hover {
      background-color: ${theme.baseBright}
    }
    &:last-child::after {
      background-color: transparent
    }
    &:hover .editableButton {
      display: flex
    }
  `),

  controllable: cmz(`
    display: flex
    justify-content: space-between
    align-items: center
    padding: 15px 22px
  `),

  clickable: cmz(`
    cursor: pointer
  `),

  lined: cmz(`
    & {
      position: relative
    }
    &::after {
      content: ''
      display: block
      height: 1px
      width: calc(100% - 30px)
      position: absolute
      bottom: 0
      left: 15px
      background-color: ${theme.lineSilver2}
    }
  `),

  active: cmz(`
    border-bottom: 1px solid ${theme.baseRed}
  `),

  message: cmz(`
    font-style: italic
  `),

  // !important is used to override global input values
  editing: cmz(`
    & input {
      border-bottom: 1px solid ${theme.baseRed} !important
    }
  `),

  control: cmz(`
    flex-shrink: 0
    display: flex
  `),

  controlButton: cmz(`
    cursor: pointer
    padding: 5px
    display: flex
    align-items: center
  `),

  editableButton: cmz('editableButton', `
    display: none
  `),

  selecting: cmz(
    typo.baseText,
    `
      position: relative
      padding-left: 30px
    `
  ),

  selectingDots: cmz(`
    & {
      position: absolute
      top: calc(50% - 9px)
      left: 0
      width: 20px
      height: 20px
      border-top-color: ${theme.lineSilver2}
      border-left-color: ${theme.lineSilver2}
      animation: spinner 400ms linear infinite
      border-bottom-color: transparent
      border-right-color: transparent
      border-style: solid
      border-width: 2px
      border-radius: 50%
      box-sizing: border-box
      display: inline-block
      vertical-align: middle
    }
    @keyframes spinner {
      0% {
        transform: rotate(0)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  `),

  // !important is used to override global input values
  editInput: cmz(
    typo.baseText,
    `
      & {
        width: 70%
        height: 30px
      }
      & input {
        height: 30px !important
        padding: 0 !important
        border-top: none !important
        border-right: none !important
        border-left: none !important
        transition: all .2s ease
      }
    `
  ),

  nothingLabel: cmz(
    typo.baseText,
    `
      display: block
      margin: 15px 22px
    `
  ),

  createNew: cmz(
    typo.baseText,
    `
      & {
        display: flex
        align-items: center
        margin: 15px 22px
        color: ${theme.baseRed}
        cursor: pointer
      }
      & svg {
        transform: scale(.7)
        margin-right: 8px
      }
    `
  ),

  appendix: cmz(`
    border-right: 1px solid ${theme.lineSilver2}
    border-left: 1px solid ${theme.lineSilver2}
  `),

  button: cmz(`
    & {
      border-color: transparent
      margin: 0
    }
    &:hover {
      border-color: transparent
    }
  `),

  confirm: cmz(`
    & {
      display: block
      min-height: 30px
      margin: 0
      padding: 0
      width: 70%
    }
    & p {
      margin: 0
    }
  `),

  question: cmz(`
  `)
}

type Status = '' | 'selecting' | 'editing' | 'saving' | 'edited' | 'creating' | 'created' | 'confirm' | 'deleting' | 'deleted' | 'dismissed' | 'archiving' | 'archived' | 'unarchiving' | 'unarchived'

type Item = {
  id: number,
  value: string,
  selected?: boolean,
  archived?: boolean,
  editing?: string | null,
  hidden?: boolean,
  status?: ?Status
}

type Props = {
  placeholder?: string,
  items?: Array<Item>,
  width?: number,
  visibleItems?: number,
  expanded?: boolean,
  shouldSortItems?: boolean,
  hasSearch?: boolean,
  hasClear?: boolean,
  lined?: boolean,
  search?: string,
  collectionLabel?: string,
  onSelect?: Function,
  onClick?: Function,
  onClear?: Function,
  onCreateNew?: Function,
  onSearch?: Function,
  onEdit?: Function,
  onArchive?: Function,
  onDelete?: Function,
  append?: Element<*>|string,
  dismissTimeout?: number,
  areItemsToggleable?: boolean,
  inputType?: InputType,
  closeDropdown?: boolean | Function,
  autoFocus?: boolean
}

type State = {
  search?: string,
  items: Array<Item>,
  view: Array<Item>,
  expanded?: boolean,
  search?: string
}

const STATUS = {
  SELECTING: 'selecting',
  EDITING: 'editing',
  SAVING: 'saving',
  EDITED: 'edited',
  CREATING: 'creating',
  CREATED: 'created',
  CONFIRM: 'confirm',
  DELETING: 'deleting',
  DELETED: 'deleted',
  DISMISSED: 'dismissed',
  ARCHIVING: 'archiving',
  ARCHIVED: 'archived',
  UNARCHIVING: 'unarchiving',
  UNARCHIVED: 'unarchived'
}

const dismissTimeout = 2500

const DropdownCloseControl = withProps(({ className, closeDropdown, children: childrenAsAFunction }) => ({
  className,
  onClick: closeDropdown,
  children: childrenAsAFunction(closeDropdown)
}))('div')

class SelectBox extends Component<Props, State> {
  static defaultProps = {
    placeholder: '',
    items: [],
    expanded: false,
    hasSearch: true,
    hasClear: false,
    lined: false,
    collectionLabel: '',
    dismissTimeout,
    shouldSortItems: true,
    areItemsToggleable: true,
    inputType: 'checkbox',
    closeDropdown: false,
    autoFocus: false
  }

  state: State = {
    search: this.props.search || '',
    items: this.props.items || [],
    view: this.props.items || [],
    expanded: this.props.expanded || false
  }

  timers: Array<*>

  componentDidMount () {
    this.timers = []
    this.setupDismissTimers()
    this.handleSearch(null, this.state.search)
  }

  componentDidUpdate (prevProps: Props) {
    if (!Object.is(prevProps, this.props)) {
      const viewItems = this.mapItemsInput(this.props.items || [], this.state.view)
      this.setState((prevState, props) => {
        const newState = {
          ...prevState,
          items: viewItems,
          view: viewItems,
          expanded: this.props.expanded
        }
        return newState
      }, () => {
        if (typeof this.props.search !== 'undefined' && this.props.search !== this.state.search) {
          this.handleSearch(null, this.props.search)
        }
        this.setupDismissTimers()
      })
    }
  }

  componentWillUnmount () {
    this.timers.forEach(timer => {
      clearTimeout(timer)
    })
  }

  setupDismissTimers = () => {
    const { items, dismissTimeout } = this.props
    const deletedItems = (items && items.filter(item => item.status === STATUS.DELETED)) || []
    deletedItems.forEach(item => {
      this.timers.push(setTimeout(() => {
        const updatedItem = { ...item, status: 'dismissed' }
        this.updateItemsState(updatedItem)
      }, dismissTimeout))
    })
  }

  mapItemsInput = (items: Array<Item>, view: Array<Item>): Array<Item> =>
    items.map((each, i) => {
      const viewItem = view.find(item => item.id === each.id) || {}
      const updatedStatus = viewItem.status !== STATUS.DELETED && viewItem.status !== STATUS.DISMISSED
        ? typeof each.status !== 'undefined' ? each.status : viewItem.status
        : viewItem.status
      const newItem = {
        ...each,
        id: each.id,
        value: each.value,
        selected: typeof each.selected !== 'undefined' ? each.selected : (viewItem.selected || false),
        status: updatedStatus || '',
        editing: each.editing || viewItem.editing || '',
        hidden: each.hidden || viewItem.hidden || false
      }
      return newItem
    })

  getUncachedItem = (item: Item) => this.state.view.find(obj => obj.id === item.id)

  updateItemsState = (updatedItem: Item) => {
    const { view } = this.state
    const newItems = view && view.filter(each => Boolean(each.id)).map((each, i) => {
      return each.id === updatedItem.id ? { ...each, ...updatedItem } : each
    })
    this.setState({ view: newItems })
  }

  handleSearch = (e: any, input: string = '') => {
    e && e.stopPropagation && e.stopPropagation()
    const { onSearch } = this.props
    const { view } = this.state
    const match = new RegExp(input.trim().toUpperCase(), 'g')
    const filteredItems = view && view.map(item => {
      const itemMatch = item && item.value && item.value.toUpperCase().match(match)
      const shouldHide = item.status === STATUS.DISMISSED || !(itemMatch && itemMatch.length > 0)
      return { ...item, hidden: shouldHide }
    })
    this.setState({ ...this.state, search: input, view: filteredItems }, () => {
      if (onSearch) {
        onSearch(input)
      }
    })
  }

  handleClearClick = (event: any) => {
    event.stopPropagation()
    const { onClear } = this.props
    onClear && onClear()
  }

  handleSelect = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onSelect, closeDropdown } = this.props
    if (item.status !== STATUS.SELECTING && onSelect) {
      onSelect({
        ...this.getUncachedItem(item),
        selected: !item.selected
      })
      closeDropdown && typeof closeDropdown === 'function' && closeDropdown()
    }
  }

  handleClick = (event: any, item: Item, internalCloseDropdown: ?Function) => {
    const { onClick, areItemsToggleable, closeDropdown } = this.props
    areItemsToggleable && event.stopPropagation()
    if (item.status !== STATUS.SELECTING && onClick) {
      onClick({
        ...this.getUncachedItem(item),
        selected: !areItemsToggleable || !item.selected
      })
      if (closeDropdown && typeof closeDropdown === 'function') {
        closeDropdown()
      } else if (internalCloseDropdown) {
        internalCloseDropdown()
      }
    } else {
      this.handleSelect(event, item)
    }
  }

  handleCreateNew = (e: any) => {
    e.stopPropagation && e.stopPropagation()
    const { onCreateNew } = this.props
    const { search } = this.state

    if (onCreateNew) {
      onCreateNew(search)
    }
  }

  handleStartEditing = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const updatedItem = { ...item, status: 'editing', editing: item.value }
    this.updateItemsState(updatedItem)
  }

  handleEditChange = (item: Item, input: Object) => {
    const { value } = input.target
    const updatedItem = { ...item, editing: value }
    this.updateItemsState(updatedItem)
  }

  handleCancelEdit = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const updatedItem = { ...item, status: '', editing: null }
    this.updateItemsState(updatedItem)
  }

  handleEdit = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onEdit } = this.props
    if (onEdit && item.editing !== '' && item.editing !== item.value) {
      onEdit({
        ...this.getUncachedItem(item),
        value: item.editing
      })
    }
  }

  handleEditingKeyUp = (e: any, item: Item) => {
    const evt = e || window.event
    evt.stopPropagation()

    // Esc
    if (evt.keyCode === 27) {
      this.handleCancelEdit(evt, item)
    }

    // Enter
    if (evt.keyCode === 13) {
      this.handleEdit(evt, item)
    }
  }

  handleArchive = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onArchive } = this.props
    if (onArchive) {
      onArchive({
        ...this.getUncachedItem(item)
      })
    }
  }

  handleStartDeleting = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const updatedItem = { ...item, status: 'confirm' }
    this.updateItemsState(updatedItem)
  }

  handleCancelDelete = (item: Item) => (e: Object) => {
    e.stopPropagation && e.stopPropagation()
    const updatedItem = { ...item, status: '' }
    this.updateItemsState(updatedItem)
  }

  handleDelete = (item: Item) => (e: Object) => {
    e.stopPropagation && e.stopPropagation()
    const { onDelete } = this.props
    if (onDelete) {
      onDelete({
        ...this.getUncachedItem(item)
      })
    }
  }

  handleDismissDeleteMessage = (item: Item) => (event: Object) => {
    event.stopPropagation && event.stopPropagation()
    const updatedItem = { ...item, status: 'dismissed' }
    this.updateItemsState(updatedItem)
  }

  handleByStoppingPropagation = (event: Object) => event.stopPropagation && event.stopPropagation()

  render () {
    const {
      placeholder,
      collectionLabel,
      visibleItems,
      width,
      expanded,
      hasSearch,
      hasClear,
      onSelect,
      onClick,
      onEdit,
      onArchive,
      onDelete,
      onCreateNew,
      lined,
      append,
      shouldSortItems,
      inputType,
      autoFocus
    } = this.props
    const { view, search } = this.state

    const isItemNotDismissed = (item: Item) => item.status !== STATUS.DISMISSED
    const filteredItems = view && view.filter((item: Item) => !item.hidden && isItemNotDismissed(item))
    const selectedItems = view && view.filter(isItemNotDismissed)

    const editionButton = [cx.controlButton, cx.editableButton].join(' ')

    const renderEditButton = (item) => (
      <span className={editionButton} onClick={e => this.handleStartEditing(e, item)}>
        <SvgIcon icon='edit' color='grayscale' hover='default' />
      </span>
    )

    const renderArchiveButton = (item) => (
      <span className={editionButton} onClick={e => this.handleArchive(e, item)}>
        <SvgIcon icon='archive' color='grayscale' hover='default' />
      </span>
    )

    const renderDeleteButton = (item) => (
      <span className={editionButton} onClick={e => this.handleStartDeleting(e, item)}>
        <SvgIcon icon='trashcanAlt' color='grayscale' hover='default' />
      </span>
    )

    const itemClasses = (item) => ([
      cx.item,
      (lined || !expanded) ? cx.lined : '',
      ((item.editing || item.editing === '') && item.editing !== item.value) ? cx.editing : ''
    ].join(' '))

    const renderEditingStatus = (item: Item) => (
      <span className={cx.editInput}>
        <InputField
          name={item.value}
          value={item.editing ? item.editing : ''}
          onChange={(input = {}) => this.handleEditChange(item, input)}
          autoFocus='autofocus'
          onFocus={e => {
            const val = e.target.value
            e.target.value = ''
            e.target.value = val
          }}
          onKeyDown={(e: any) => e.stopPropagation && e.stopPropagation()}
          onKeyPress={(e: any) => e.stopPropagation && e.stopPropagation()}
          onKeyUp={(e: any) => this.handleEditingKeyUp(e, item)}
          onClick={(e: any) => e.stopPropagation && e.stopPropagation()}
        />
      </span>
    )

    const renderEditingStatusControl = (item: Item) => (
      <span className={cx.control}>
        <span className={cx.controlButton} onClick={e => this.handleCancelEdit(e, item)}>
          <SvgIcon icon='x' color='grayscale' hover='default' />
        </span>
        <span className={cx.controlButton} onClick={e => this.handleEdit(e, item)}>
          <SvgIcon
            icon='check'
            color={item.editing === item.value || item.editing === '' ? 'grayscale' : 'text'}
            hover={item.editing === item.value || item.editing === '' ? 'grayscale' : 'default'}
          />
        </span>
      </span>
    )

    const renderSavingStatus = (item: Item) => (
      `Saving "${item.value}"...`
    )

    const renderCreatingStatus = (item: Item) => (
      `Creating ${collectionLabel ? `new ${collectionLabel} ` : ''}"${item.value}"...`
    )

    const renderConfirmStatus = (item: Item) => (
      <div className={cx.confirm}>
        <p>Delete "{item.value}"</p>
        <p><strong>Are you sure?</strong></p>
      </div>
    )

    const renderConfirmStatusControl = (item: Item) => (
      <span className={cx.control}>
        <span className={cx.controlButton} onClick={this.handleCancelDelete(item)}>
          <SvgIcon icon='x' color='grayscale' hover='default' />
        </span>
        <span className={cx.controlButton} onClick={this.handleDelete(item)}>
          <SvgIcon icon='check' color='grayscale' hover='default' />
        </span>
      </span>
    )

    const renderDeletingStatus = (item: Item) => (
      `Deleting "${item.value}"...`
    )

    const renderDeletedStatus = (item: Item) => (
      <span className={cx.message}>
        The item "{item.value}" was successfully deleted.
      </span>
    )

    const renderDeletedStatusControl = (item: Item) => (
      <span className={cx.control}>
        <span
          title='Dismiss this message'
          className={cx.controlButton}
          onClick={this.handleDismissDeleteMessage(item)}
        >
          <SvgIcon icon='x' color='grayscale' hover='default' />
        </span>
      </span>
    )

    const renderArchivingStatus = (item: Item) => (
      `Archiving "${item.value}"...`
    )

    const renderUnarchivingStatus = (item: Item) => (
      `Unarchiving "${item.value}"...`
    )

    const renderSelectingStatus = (item: Item) => onSelect ? (
      <span className={cx.selecting}>
        <span className={cx.selectingDots} />
        {item.value}
      </span>
    ) : item.value

    const renderDefaultStatus = (item: Item) => onSelect ? (
      <InputField
        key={`${item.id}${item.selected ? 'selected' : 'unselected'}`}
        type={inputType}
        label={item.value}
        name={item.value}
        checked={!!item.selected}
        onChange={() => {}}
        onClick={(e: any) => e.stopPropagation && e.stopPropagation()}
      />
    ) : (
      <span className={[cx.label, item.selected ? cx.active : ''].join(' ')}>
        {item.value}
      </span>
    )

    const renderDefaultStatusControl = (item: Item) => (
      <span className={cx.control}>
        {onEdit && renderEditButton(item)}
        {onArchive && renderArchiveButton(item)}
        {onDelete && renderDeleteButton(item)}
      </span>
    )

    const getRenderWithFallback = ({
      item,
      method,
      render,
      control,
      internalCloseDropdown
    }: {
      item: Item,
      method?: Function,
      render?: Function,
      control?: Function,
      internalCloseDropdown?: Function
    }) => method ? (
      <div className={cx.controllable}>
        {render && render(item)}
        {control && control(item)}
      </div>
    ) : (
      <div
        className={[cx.controllable, (onSelect || onClick) ? cx.clickable : ''].join(' ')}
        onClick={onSelect
          ? e => this.handleSelect(e, item)
          : e => this.handleClick(e, item, internalCloseDropdown)
        }
      >
        {renderDefaultStatus(item)}
        {renderDefaultStatusControl(item)}
      </div>
    )

    const renderItem = (item: Item, internalCloseDropdown?: Function) => {
      const { status } = item

      const getRenderByStatus = () => {
        switch (status) {
          case STATUS.SELECTING:
            return getRenderWithFallback({
              item,
              method: (onSelect || onClick),
              render: renderSelectingStatus
            })
          case STATUS.EDITING:
            return getRenderWithFallback({
              item,
              method: onEdit,
              render: renderEditingStatus,
              control: renderEditingStatusControl
            })
          case STATUS.SAVING:
            return getRenderWithFallback({
              item,
              method: onEdit,
              render: renderSavingStatus
            })
          case STATUS.CREATING:
            return getRenderWithFallback({
              item,
              method: onCreateNew,
              render: renderCreatingStatus
            })
          case STATUS.CONFIRM:
            return getRenderWithFallback({
              item,
              method: onDelete,
              render: renderConfirmStatus,
              control: renderConfirmStatusControl
            })
          case STATUS.DELETING:
            return getRenderWithFallback({
              item,
              method: onDelete,
              render: renderDeletingStatus
            })
          case STATUS.DELETED:
            return getRenderWithFallback({
              item,
              method: onDelete,
              render: renderDeletedStatus,
              control: renderDeletedStatusControl
            })
          case STATUS.DISMISSED:
            return null
          case STATUS.ARCHIVING:
            return getRenderWithFallback({
              item,
              method: onArchive,
              render: renderArchivingStatus
            })
          case STATUS.UNARCHIVING:
            return getRenderWithFallback({
              item,
              method: onArchive,
              render: renderUnarchivingStatus
            })
          case STATUS.EDITED:
          case STATUS.CREATED:
          case STATUS.ARCHIVED:
          case STATUS.UNARCHIVED:
          default:
            return getRenderWithFallback({ item, internalCloseDropdown })
        }
      }

      return item.status !== STATUS.DISMISSED && (
        <li
          className={itemClasses(item)}
          key={item.id}
        >
          {getRenderByStatus()}
        </li>
      )
    }

    const sortById = (x: Item, y: Item) => x.id - y.id

    const sortByCreatingFirst = (list: Array<Item>): Array<Item> => {
      const creating = list.filter(item => item.status === STATUS.CREATING)
      const data = list.filter(item => item.status !== STATUS.CREATING)
      data.unshift(...creating)
      return data
    }

    const renderItems = (internalCloseDropdown?: Function) => {
      const items = shouldSortItems
        ? filteredItems.sort(sortById)
        : filteredItems

      return (
        <ul className={[cx.list, expanded && 'expanded'].join(' ')} style={{
          height: visibleItems && expanded ? `${visibleItems * 60}px` : 'auto',
          maxHeight: visibleItems ? `${visibleItems * 60}px` : 'auto',
          width: width ? `${width}px` : '100%'
        }}>
          {search && filteredItems && (
            <li key='search-result'>
              {filteredItems.length === 0 && (
                <span className={cx.nothingLabel}>No Results for "{search}"</span>
              )}
              {onCreateNew && !filteredItems.find(each => each.value === search.trim()) && (
                <span className={cx.createNew} onClick={e => this.handleCreateNew(e)}>
                  <SvgIcon icon='plus' />
                  <span>Create new {collectionLabel} "{search}"</span>
                </span>
              )}
            </li>
          )}
          {sortByCreatingFirst(items).map((item: Item) => renderItem(item, internalCloseDropdown))}
        </ul>
      )
    }

    const filteredSelectedItems = (selectedItems || []).filter(item => item.selected)
    const selectsClass = filteredSelectedItems.length
      ? cx.selects
      : cx.selectsEmpty
    const shouldShowClearElement = hasClear && filteredSelectedItems.length > 0

    const renderSearchLabel = (stopClickPropagation: boolean = true) => (
      <div className={cx.search}>
        <div className={cx.magnifier}>
          <SvgIcon icon='magnifier' color='grayscale' />
        </div>
        <InputField
          name='search'
          value={search}
          placeholder={(expanded && placeholder) ? placeholder : 'Search'}
          onChange={(input = {}) => this.handleSearch(null, input.target.value)}
          className={cx.searchInput}
          autoComplete='off'
          onKeyDown={this.handleByStoppingPropagation}
          onKeyPress={this.handleByStoppingPropagation}
          onKeyUp={this.handleByStoppingPropagation}
          onClick={stopClickPropagation && this.handleByStoppingPropagation}
          autoFocus={autoFocus}
        />
        {search !== '' && (
          <div className={cx.close} onClick={e => this.handleSearch(e, '')}>
            <SvgIcon icon='x' color='grayscale' hover='default' />
          </div>
        )}
      </div>
    )

    const renderPlaceholder = () => (
      <div className={[
        cx.placeholder,
        (!hasSearch && !placeholder) ? cx.noSearchAndPlaceholder : ''
      ].join(' ')}>
        {placeholder && (
          <div>
            <div className={selectsClass}>
              <div>
                {placeholder}
              </div>
              <div>
                {filteredSelectedItems
                  .reduce((acc, { value }) => (
                    acc ? `${acc}, ${value}` : value
                  ), '')}
              </div>
            </div>
            {shouldShowClearElement && (
              <div className={cx.clear} onClick={this.handleClearClick}>
                <SvgIcon icon='x' color='grayscale' hover='default' />
              </div>
            )}
            <div className={cx.triangle}>
              <SvgIcon icon='triangledown' color='grayscale' />
            </div>
          </div>
        )}
      </div>
    )

    const renderAppendix = () => append && (
      <div className={cx.appendix}>
        {append}
      </div>
    )

    const renderExpandedOrDropdown = () => expanded ? (
      <div>
        {hasSearch ? renderSearchLabel() : renderPlaceholder()}
        {renderItems()}
        {renderAppendix()}
      </div>
    ) : (
      <Dropdown
        toggle={!!placeholder}
        label={(placeholder || !hasSearch) ? renderPlaceholder() : renderSearchLabel(false)}
        className={cx.dropdown}
      >
        <DropdownCloseControl className={expanded ? '' : cx.shadow} closeDropdown>
          {(internalCloseDropdown?: Function) => (
            <div>
              {(placeholder && hasSearch) && renderSearchLabel()}
              {renderItems(internalCloseDropdown)}
              {renderAppendix()}
            </div>
          )}
        </DropdownCloseControl>
      </Dropdown>
    )

    return (
      <div className={cx.selectbox} style={{ width: width ? `${width}px` : '100%' }}>
        {renderExpandedOrDropdown()}
      </div>
    )
  }
}

export default SelectBox
