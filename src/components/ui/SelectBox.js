// @flow

import React, { Component } from 'react'

import InputField from '../forms/InputField'
import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const styles = {
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
  label: cmz(
    typo.baseText,
    `
      line-height: 1
    `
  ),
  labelevent: cmz(
    typo.baseText,
    `
      line-height: 1
      font-style: italic
    `
  ),
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
      padding: 15px 22px
      display: flex
      justify-content: space-between
      align-items: center
    }

    &:hover {
      background-color: ${theme.baseBright}
    }

    &:last-child::after {
      background-color: transparent
    }

    &:not(.isCreating):not(.isSelecting):not(.isArchiving):not(.isDeleting):hover .editablebuton {
      display: flex
    }
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
      padding: 0 0 0 30px
      position: relative
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
  `)
}

type Item = {
  id: number,
  value: string,
  selected?: boolean,
  selecting?: boolean,
  editing?: boolean | string,
  creating?: boolean,
  hidden?: boolean,
  archived?: boolean
}

type Props = {
  placeholder?: string,
  items?: Array<Item>,
  width?: number,
  visibleItems?: number,
  expanded?: boolean,
  hasSearch?: boolean,
  lined?: boolean,
  creating?: boolean | string,
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
  creating?: boolean | string,
  search?: string
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
    expanded: this.props.expanded || false,
    creating: this.props.creating || false
  }

  componentDidMount () {
    this.handleSearch(this.state.search)
  }

  componentDidUpdate (prevProps: Props) {
    if (!Object.is(prevProps, this.props)) {
      const viewItems = this.mapItemsInput(this.props.items || [], this.state.view)
      this.setState((prevState, props) => {
        const newState = {
          ...prevState,
          items: viewItems,
          view: viewItems,
          expanded: this.props.expanded,
          creating: this.props.creating !== 'undefined' ? this.props.creating : false
        }

        return newState
      }, () => {
        if (this.state.search !== this.props.search) {
          this.handleSearch(this.props.search)
        }
      })
    }
  }

  mapItemsInput = (items: Array<Item>, view: Array<Item>): Array<Item> =>
    items.map((each, i) => {
      const viewItem = view.find(item => item.id === each.id) || {}
      const isEditing = (viewItem.editing || !each.editing) && each.value !== viewItem.editing
      const newItem = {
        id: each.id,
        value: each.value,
        selected: each.selected || false,
        selecting: each.selecting || false,
        editing: (isEditing && viewItem.editing) || false,
        creating: each.creating || false,
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

  handleSearch = (input: string = '') => {
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

  handleSelect = (item: Item) => {
    const { onSelect } = this.props
    if (!item.selecting && onSelect) {
      onSelect({
        ...this.getUncachedItem(item),
        selected: !item.selected
      })
    }
  }

  handleClick = (item: Item) => {
    const { onClick } = this.props
    if (!item.selecting && onClick) {
      onClick({
        ...this.getUncachedItem(item),
        selected: !item.selected
      })
    } else {
      this.handleSelect(item)
    }
  }

  handleCreateNew = () => {
    const { onCreateNew } = this.props
    const { search } = this.state

    if (onCreateNew) {
      onCreateNew(search)
    }
  }

  handleStartEditing = (item: Item) => {
    const updatedItem = { ...item, editing: item.value }
    this.updateItemsState(updatedItem)
  }

  handleEditChange = (item: Item, input: Object) => {
    const { value } = input.target
    const updatedItem = { ...item, editing: value }
    this.updateItemsState(updatedItem)
  }

  handleCancelEdit = (item: Item) => {
    const updatedItem = { ...item, editing: '' }
    this.updateItemsState(updatedItem)
  }

  handleEdit = (item: Item) => {
    const { onEdit } = this.props
    if (onEdit) {
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
      this.handleCancelEdit(item)
    }

    if (evt.keyCode === 13) { // Enter
      this.handleEdit(item)
    }
  }

  handleArchive = (item: Item) => {
    const { onArchive } = this.props
    if (onArchive) {
      onArchive({
        ...this.getUncachedItem(item),
        archived: true
      })
    }
  }

  handleStartDeleting = (item: Item) => {
    const updatedItem = { ...item, status: 'deleting' }
    this.updateItemsState(updatedItem)
  }

  handleCancelDelete = (item: Item) => {
    const updatedItem = { ...item, status: '' }
    this.updateItemsState(updatedItem)
  }

  handleDelete = (item: Item) => {
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
      onEdit,
      onArchive,
      onDelete,
      onCreateNew,
      lined,
      append
    } = this.props
    const { view, search, creating } = this.state

    const filteredItems = view && view.filter((item: Item) => !item.hidden)

    const renderCheckboxOrString = (item: Item) => onSelect ? (
      item.selecting ? (
        <span className={styles.selecting}>
          <span className={styles.selectingdots} />
          {item.value}
        </span>
      ) : (
        <InputField
          key={`${item.id}${item.selected ? 'selected' : 'unselected'}`}
          type='checkbox'
          label={item.value}
          name={item.value}
          checked={!!item.selected}
          onChange={() => this.handleSelect(item)}
        />
      )
    ) : (
      item.selecting ? (
        <span className={styles.labelevent}>
          {item.value}
        </span>
      ) : (
        <span className={styles.label} onClick={() => this.handleClick(item)}>
          {item.value}
        </span>
      )
    )

    const renderEdit = (item) => onEdit && (
      <span className={[styles.controlbutton, styles.editablebuton].join(' ')} onClick={() => this.handleStartEditing(item)}>
        <SvgIcon icon='edit' color='grayscale' />
      </span>
    )

    const renderArchive = (item) => onArchive && (
      <span className={[styles.controlbutton, styles.editablebuton].join(' ')} onClick={() => this.handleArchive(item)}>
        <SvgIcon icon='archive' color='grayscale' />
      </span>
    )

    const renderDelete = (item) => onDelete && (
      <span className={[styles.controlbutton, styles.editablebuton].join(' ')} onClick={() => this.handleStartDeleting(item)}>
        <SvgIcon icon='trashcan2' color='grayscale' />
      </span>
    )

    const itemClasses = (item) => ([
      styles.item,
      (lined || !expanded) ? styles.lined : '',
      (item.editing && item.editing !== item.value) ? styles.editing : '',
      // item.archiving ? 'isArchiving' : '',
      // item.deleting ? 'isDeleting' : '',
      item.creating ? 'isCreating' : '',
      item.selecting ? 'isSelecting' : ''
    ].join(' '))

    const renderIsCreatingOrEditing = (item: Item) => item.creating ? (
      <li className={itemClasses(item)} key={item.id}>
        Creating "{item.editing}"...
      </li>
    ) : (
      <li className={itemClasses(item)} key={item.id}>
        <span className={styles.editinput}>
          <InputField
            name={item.value}
            value={item.editing}
            onChange={(input = {}) => this.handleEditChange(item, input)}
            autoFocus='autofocus'
            onFocus={(e) => {
              const val = e.target.value
              e.target.value = ''
              e.target.value = val
            }}
            onKeyDown={(e: any) => e.stopPropagation()}
            onKeyPress={(e: any) => e.stopPropagation()}
            onKeyUp={(e: any) => this.handleEditingKeyUp(e, item)}
          />
        </span>
        <span className={styles.control}>
          <span className={styles.controlbutton} onClick={() => this.handleCancelEdit(item)}>
            <SvgIcon icon='x' color='grayscale' />
          </span>
          <span className={styles.controlbutton} onClick={() => this.handleEdit(item)}>
            <SvgIcon icon='check' color='grayscale' />
          </span>
        </span>
      </li>
    )

    const renderIsEditing = (item: Item) => item.editing
      ? renderIsCreatingOrEditing(item)
      : (
        <li className={itemClasses(item)} key={item.id}>
          {renderCheckboxOrString(item)}
          <span className={styles.control}>
            {renderEdit(item)}
            {renderArchive(item)}
            {renderDelete(item)}
          </span>
        </li>
      )

    const renderItems = () => (
      <ul className={[styles.list, expanded && 'expanded'].join(' ')} style={{
        height: visibleItems && expanded ? `${visibleItems * 60}px` : 'auto',
        maxHeight: visibleItems ? `${visibleItems * 60}px` : 'auto',
        width: width ? `${width}px` : '100%'
      }}>
        {search && filteredItems && filteredItems.length === 0 && (
          <li>
            <span className={styles.nothinglabel}>No Results for "{search}"</span>
            {onCreateNew && !creating && (
              <span className={styles.createnew} onClick={this.handleCreateNew}>
                <SvgIcon icon='plus' />
                <span>Add new {collectionName} "{search}"</span>
              </span>
            )}
          </li>
        )}
        {creating && (
          <li><span className={styles.nothinglabel}>Adding new {collectionName} "{creating}"...</span></li>
        )}
        {filteredItems.map(item => renderIsEditing(item))}
      </ul>
    )

    const selectsClass = filteredItems && filteredItems.filter(item => item.selected).length > 0
      ? styles.selects : styles.selectsEmpty

    const renderSearchLabel = (isSearch: boolean = false) => isSearch ? (
      <div className={styles.search}>
        <div className={styles.magnifier}>
          <SvgIcon icon='magnifier' color='grayscale' />
        </div>
        <InputField
          name='search'
          value={search}
          placeholder={hasSearch ? 'Search' : placeholder}
          onChange={(input = {}) => this.handleSearch(input.target.value)}
          className={styles.searchinput}
          autoComplete='off'
          onKeyDown={(e: any) => e.stopPropagation()}
          onKeyPress={(e: any) => e.stopPropagation()}
          onKeyUp={(e: any) => e.stopPropagation()}
        />
        {search !== '' && (
          <div className={styles.close} onClick={() => this.handleSearch('')}>
            <SvgIcon icon='x' color='grayscale' />
          </div>
        )}
      </div>
    ) : (
      <div className={styles.placeholder}>
        <div className={selectsClass}>
          <div>
            {placeholder}
          </div>
          <div>
            {filteredItems.filter(item => item.selected).map(item => item.value).join(', ')}
          </div>
        </div>
        <div className={styles.triangle}>
          <SvgIcon icon='triangledown' color='grayscale' />
        </div>
      </div>
    )

    const renderAppendix = () => append && (
      <div className={styles.appendix}>
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
        className={styles.dropdown}
      >
        <div className={expanded ? '' : styles.shadow}>
          {hasSearch && renderSearchLabel(true)}
          {renderItems()}
          {renderAppendix()}
        </div>
      </Dropdown>
    )

    return (
      <div className={styles.selectbox} style={{ width: width ? `${width}px` : '100%' }}>
        {renderExpandedOrDropdown()}
      </div>
    )
  }
}

export default SelectBox
