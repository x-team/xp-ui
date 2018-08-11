// @flow

import React, { Component } from 'react'

import InputField from '../forms/InputField'
import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'
import Button from './Button'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

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
      border: 1px solid ${theme.lineSilver2}
      padding: 0 20px
      height: 60px
      width: 100%
      box-sizing: border-box
      display: flex
      align-items: center
      position: relative
      border-radius: 2px
    `
  ),
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
      transition: color 0.15s ease-out, font-size 0.15s ease-out
    }

    & > div:last-of-type {
      width: calc(100% - 20px)
      white-space: nowrap
      overflow: auto
      padding: 0 0 10px
      transition: visibility 0s, opacity 0.15s ease-out, padding 0.15s ease-out
      visibility: visible
      opacity: 1
    }
  `),
  selectsEmpty: cmz(`
    & > div:first-of-type {
      transition: color 0.15s ease-out, font-size 0.15s ease-out
    }

    & > div:last-of-type {
      transition: visibility 1s, opacity 0.15s ease-out, padding 0.15s ease-out
      visibility: hidden
      opacity: 0
    }
  `),
  search: cmz(`
    position: relative
  `),
  // The !important used below is required to override the global input[type="text"] styles
  searchinput: cmz(`
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
  close: cmz(`
    & {
      position: absolute
      z-index: 5
      top: calc(50% - 7px)
      right: 40px
      cursor: pointer
    }

    & svg {
      position: absolute
    }
  `),
  label: cmz(typo.baseText),
  list: cmz(`
    & {
      list-style: none
      margin: 0
      padding: 0
      border: 1px solid ${theme.lineSilver2}
      border-top: none
      overflow-y: scroll
      background: ${theme.baseBrighter}
      width: 100%
      box-sizing: border-box
    }

    &:not(.expanded):empty {
      border: none
    }
  `),
  shadow: cmz(`
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15)
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

    &:hover .editablebuton {
      display: flex
    }
  `),
  controlable: cmz(`
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
  controlbutton: cmz(`
    cursor: pointer
    padding: 5px
    display: flex
    align-items: center
  `),
  editablebuton: cmz('editablebuton', `
    display: none
  `),
  selecting: cmz(
    typo.baseText,
    `
      position: relative
      padding-left: 30px
    `
  ),
  selectingdots: cmz(`
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
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  `),
  // !important is used to override global input values
  editinput: cmz(
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
  nothinglabel: cmz(
    typo.baseText,
    `
      display: block
      margin: 15px 22px
    `
  ),
  createnew: cmz(
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
        transform: scale(0.7)
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
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 30px
    margin: 0
    padding: 0
    width: 100%
  `),
  question: cmz(`
    & p {
      margin: 0
    }
  `),
  answer: cmz(`
    & > * {
      margin-left: 10px
    }
  `)
}

type Status = '' | 'selecting' | 'editing' | 'saving' | 'edited' | 'creating' | 'created' | 'confirm' | 'deleting' | 'deleted' | 'archiving' | 'archived'

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
  hasSearch?: boolean,
  lined?: boolean,
  search?: string,
  collectionName?: string,
  onSelect?: Function,
  onClick?: Function,
  onCreateNew?: Function,
  onSearch?: Function,
  onEdit?: Function,
  onArchive?: Function,
  onDelete?: Function,
  append?: Element<*>|string
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
  ARCHIVING: 'archiving',
  ARCHIVED: 'archived'
}

class SelectBox extends Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    items: [],
    expanded: false,
    hasSearch: false,
    lined: false,
    collectionName: ''
  }

  state: State = {
    search: this.props.search || '',
    items: this.props.items || [],
    view: this.props.items || [],
    expanded: this.props.expanded || false
  }

  componentDidMount () {
    this.handleSearch({}, this.state.search)
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
        if (this.state.search !== this.props.search) {
          this.handleSearch({}, this.props.search)
        }
      })
    }
  }

  mapItemsInput = (items: Array<Item>, view: Array<Item>): Array<Item> =>
    items.map((each, i) => {
      const viewItem = view.find(item => item.id === each.id) || {}
      const isEditing = (viewItem.editing || !each.editing) && each.value !== viewItem.editing
      const newItem = {
        ...each,
        id: each.id,
        value: each.value,
        selected: each.selected !== 'undefined' ? each.selected : viewItem.selected,
        editing: (isEditing && viewItem.editing) || '',
        hidden: each.hidden || viewItem.hidden || false,
        status: each.status || ''
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
    e.stopPropagation && e.stopPropagation()
    const { onSearch } = this.props
    const { view } = this.state
    const match = new RegExp(input.trim().toUpperCase(), 'g')
    const filteredItems = view && view.map(item => {
      const itemMatch = item && item.value && item.value.toUpperCase().match(match)
      return { ...item, hidden: !(itemMatch && itemMatch.length > 0) }
    })
    this.setState({ ...this.state, search: input, view: filteredItems }, () => {
      if (onSearch) {
        onSearch(input)
      }
    })
  }

  handleSelect = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onSelect } = this.props
    if (item.status !== STATUS.SELECTING && onSelect) {
      onSelect({
        ...this.getUncachedItem(item),
        selected: !item.selected
      })
    }
  }

  handleClick = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onClick } = this.props
    if (item.status !== STATUS.SELECTING && onClick) {
      onClick({
        ...this.getUncachedItem(item),
        selected: !item.selected
      })
    } else {
      this.handleSelect(e, item)
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

    if (evt.keyCode === 27) { // Esc
      this.handleCancelEdit(evt, item)
    }

    if (evt.keyCode === 13) { // Enter
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

  handleCancelDelete = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const updatedItem = { ...item, status: '' }
    this.updateItemsState(updatedItem)
  }

  handleDelete = (e: any, item: Item) => {
    e.stopPropagation && e.stopPropagation()
    const { onDelete } = this.props
    if (onDelete) {
      onDelete({
        ...this.getUncachedItem(item)
      })
    }
  }

  render () {
    const {
      placeholder,
      collectionName,
      visibleItems,
      width,
      expanded,
      hasSearch,
      onSelect,
      onClick,
      onEdit,
      onArchive,
      onDelete,
      onCreateNew,
      lined,
      append
    } = this.props
    const { view, search } = this.state

    const filteredItems = view && view.filter((item: Item) => !item.hidden)

    const editionButton = [cx.controlbutton, cx.editablebuton].join(' ')

    const renderEditButton = (item) => (
      <span className={editionButton} onClick={(e) => this.handleStartEditing(e, item)}>
        <SvgIcon icon='edit' color='grayscale' hover='default' />
      </span>
    )

    const renderArchiveButton = (item) => (
      <span className={editionButton} onClick={(e) => this.handleArchive(e, item)}>
        <SvgIcon icon='archive' color='grayscale' hover='default' />
      </span>
    )

    const renderDeleteButton = (item) => (
      <span className={editionButton} onClick={(e) => this.handleStartDeleting(e, item)}>
        <SvgIcon icon='trashcan2' color='grayscale' hover='default' />
      </span>
    )

    const itemClasses = (item) => ([
      cx.item,
      (lined || !expanded) ? cx.lined : '',
      ((item.editing || item.editing === '') && item.editing !== item.value) ? cx.editing : ''
    ].join(' '))

    const renderEditingStatus = (item: Item) => (
      <span className={cx.editinput}>
        <InputField
          name={item.value}
          value={item.editing ? item.editing : ''}
          onChange={(input = {}) => this.handleEditChange(item, input)}
          autoFocus='autofocus'
          onFocus={(e) => {
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
        <span className={cx.controlbutton} onClick={(e) => this.handleCancelEdit(e, item)}>
          <SvgIcon icon='x' color='grayscale' hover='default' />
        </span>
        <span className={cx.controlbutton} onClick={(e) => this.handleEdit(e, item)}>
          <SvgIcon
            icon='check'
            color={item.editing === item.value ? 'grayscale' : 'text'}
            hover={item.editing === item.value ? 'grayscale' : 'default'}
          />
        </span>
      </span>
    )

    const renderSavingStatus = (item: Item) => (
      `Saving "${item.value}"...`
    )

    const renderCreatingStatus = (item: Item) => (
      `Creating ${collectionName ? `new ${collectionName} ` : ''}"${item.value}"...`
    )

    const renderConfirmStatus = (item: Item) => (
      <div className={cx.confirm}>
        <div className={cx.question}>
          <p>Delete <strong>"{item.value}"</strong></p>
          <p><strong>Are you sure?</strong></p>
        </div>
        <div className={cx.answer}>
          <Button
            onClick={(e) => this.handleCancelDelete(e, item)}
            pseudolink
            className={cx.button}
            size={'small'}
          >
            CANCEL
          </Button>
          <Button
            onClick={(e) => this.handleDelete(e, item)}
            className={cx.button}
            size={'small'}
          >
            Yes
          </Button>
        </div>
      </div>
    )

    const renderDeletingStatus = (item: Item) => (
      `Deleting "${item.value}"...`
    )

    const renderArchivingStatus = (item: Item) => (
      `Archiving "${item.value}"...`
    )

    const renderSelectingStatus = (item: Item) => onSelect ? (
      <span className={cx.selecting}>
        <span className={cx.selectingdots} />
        {item.value}
      </span>
    ) : item.value

    const renderDefaultStatus = (item: Item) => onSelect ? (
      <InputField
        key={`${item.id}${item.selected ? 'selected' : 'unselected'}`}
        type='checkbox'
        label={item.value}
        name={item.value}
        checked={!!item.selected}
        onChange={() => {}}
        onClick={(e: any) => e.stopPropagation && e.stopPropagation()}
      />
    ) : (
      <span className={cx.label}>
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
      control
    }: {
      item: Item,
      method?: Function,
      render?: Function,
      control?: Function
    }) => method ? (
      <div className={cx.controlable}>
        {render && render(item)}
        {control && control(item)}
      </div>
    ) : (
      <div
        className={[cx.controlable, (onSelect || onClick) ? cx.clickable : ''].join(' ')}
        onClick={onSelect
          ? (e) => this.handleSelect(e, item)
          : (e) => this.handleClick(e, item)
        }
      >
        {renderDefaultStatus(item)}
        {renderDefaultStatusControl(item)}
      </div>
    )

    const renderItem = (item: Item) => {
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
              render: renderConfirmStatus
            })
          case STATUS.DELETING:
            return getRenderWithFallback({
              item,
              method: onDelete,
              render: renderDeletingStatus
            })
          case STATUS.DELETED:
            return null
          case STATUS.ARCHIVING:
            return getRenderWithFallback({
              item,
              method: onArchive,
              render: renderArchivingStatus
            })
          case STATUS.EDITED:
          case STATUS.CREATED:
          case STATUS.ARCHIVED:
          default:
            return getRenderWithFallback({ item })
        }
      }

      return status !== STATUS.DELETED && (
        <li
          className={itemClasses(item)}
          key={item.id}
        >
          {getRenderByStatus()}
        </li>
      )
    }

    const renderItems = () => (
      <ul className={[cx.list, expanded && 'expanded'].join(' ')} style={{
        height: visibleItems && expanded ? `${visibleItems * 60}px` : 'auto',
        maxHeight: visibleItems ? `${visibleItems * 60}px` : 'auto',
        width: width ? `${width}px` : '100%'
      }}>
        {search && filteredItems && filteredItems.length === 0 && (
          <li>
            <span className={cx.nothinglabel}>No Results for "{search}"</span>
            {onCreateNew && (
              <span className={cx.createnew} onClick={(e) => this.handleCreateNew(e)}>
                <SvgIcon icon='plus' />
                <span>Add new {collectionName} "{search}"</span>
              </span>
            )}
          </li>
        )}
        {filteredItems
          .sort((x, y) => (x.status === STATUS.CREATING ? -1 : y.status == STATUS.CREATING ? 1 : 0))
          .map(item => renderItem(item))
        }
      </ul>
    )

    const selectsClass = filteredItems && filteredItems.filter(item => item.selected).length > 0
      ? cx.selects : cx.selectsEmpty

    const renderSearchLabel = (isSearch: boolean = false) => isSearch ? (
      <div className={cx.search}>
        <div className={cx.magnifier}>
          <SvgIcon icon='magnifier' color='grayscale' />
        </div>
        <InputField
          name='search'
          value={search}
          placeholder={hasSearch ? 'Search' : placeholder}
          onChange={(input = {}) => this.handleSearch({}, input.target.value)}
          className={cx.searchinput}
          autoComplete='off'
          onKeyDown={(e: any) => e.stopPropagation && e.stopPropagation()}
          onKeyPress={(e: any) => e.stopPropagation && e.stopPropagation()}
          onKeyUp={(e: any) => e.stopPropagation && e.stopPropagation()}
        />
        {search !== '' && (
          <div className={cx.close} onClick={(e) => this.handleSearch(e, '')}>
            <SvgIcon icon='x' color='grayscale' hover='default' />
          </div>
        )}
      </div>
    ) : (
      <div className={cx.placeholder}>
        <div className={selectsClass}>
          <div>
            {placeholder}
          </div>
          <div>
            {filteredItems.filter(item => item.selected).map(item => item.value).join(', ')}
          </div>
        </div>
        <div className={cx.triangle}>
          <SvgIcon icon='triangledown' color='grayscale' />
        </div>
      </div>
    )

    const renderAppendix = () => append && (
      <div className={cx.appendix}>
        {append}
      </div>
    )

    const labelIsSearch = placeholder === 'Search'

    const renderExpandedOrDropdown = () => expanded ? (
      <div>
        {renderSearchLabel(labelIsSearch || hasSearch)}
        {renderItems()}
        {renderAppendix()}
      </div>
    ) : (
      <Dropdown
        toggle={!labelIsSearch}
        label={renderSearchLabel(labelIsSearch && !hasSearch)}
        className={cx.dropdown}
      >
        <div className={expanded ? '' : cx.shadow}>
          {hasSearch && renderSearchLabel(true)}
          {renderItems()}
          {renderAppendix()}
        </div>
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
