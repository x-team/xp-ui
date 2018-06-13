// @flow

import React, { PureComponent } from 'react'
import InputField from '../forms/InputField'
import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const styles = {
  selectbox: cmz(`
    background: #fff
    position: relative
    width: 100%
  `),
  dropdown: cmz(`
    width: 100%
  `),
  placeholder: cmz(
    typo.baseText,
    `
      color: ${theme.baseDark}
      border: 1px solid #E9EDEE
      padding: 20px
      height: 60px
      width: 100%
      box-sizing: border-box
      display: flex
      align-items: center
      position: relative
    `
  ),
  search: cmz(`
    position: relative
  `),
  searchinput: cmz(`
    padding: 23px 30px 20px 52px
    height: 60px
    width: 100%
  `),
  magnifier: cmz(`
    position: absolute
    z-index: 5
    top: 22px
    left: 22px
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
  label: cmz(
    typo.baseText,
    `
      line-height: 1
    `
  ),
  list: cmz(`
    list-style: none
    margin: 0
    padding: 0
    border: 1px solid #E9EDEE
    border-top: none
    overflow-y: scroll
    background: #fff
    width: 100%
    box-sizing: border-box
  `),
  shadow: cmz(`
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15)
  `),
  item: cmz(`
    & {
      min-height: 30px
      margin: 22px
      display: flex
      justify-content: space-between
      align-items: center
    }

    &:last-child {
      border-bottom: none
    }
  `),
  lined: cmz(`
    border-bottom: 1px solid #E9EDEE
    margin: 0 22px
    padding: 15px 0
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
  editinput: cmz(
    typo.baseText,
    `
      & {
        width: 70%
        height: 30px
      }

      & input {
        height: 30px
        padding: 0
        border-top: none
        border-right: none
        border-left: none
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
  )
}

type Item = {
  id: number,
  value: string,
  editing?: string,
  hidden?: boolean,
  selected?: boolean
}

type Props = {
  placeholder?: string,
  items?: Array<Item>,
  width?: number,
  itemsHeight?: number,
  expanded?: boolean,
  collectionName?: string,
  onSelect?: Function,
  onClick?: Function,
  onCreateNew?: Function,
  onEdit?: Function
}

type State = {
  search?: string,
  items?: Array<Item>,
  expanded?: boolean
}

class SelectBox extends PureComponent<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    items: [],
    expanded: false,
    collectionName: ''
  }

  state: State = {
    search: '',
    items: this.props.items,
    expanded: this.props.expanded
  }

  updateItemsState = (updatedItem: Item) => {
    const { items } = this.state
    const newItems = items && items.map((each, i) => {
      return each.id === updatedItem.id ? updatedItem : each
    })
    this.setState({ items: newItems })
  }

  handleSearch = (input: Object) => {
    const { items } = this.state
    const { value } = input.target
    const match = new RegExp(value.trim().toUpperCase(), 'g')
    const filteredItems = items && items.map(item => {
      const itemMatch = item && item.value && item.value.toUpperCase().match(match)
      return {
        ...item,
        hidden: !(itemMatch && itemMatch.length > 0)
      }
    })
    this.setState({ search: value, items: filteredItems })
  }

  handleSelect = (item: Item) => {
    const { onSelect } = this.props
    const updatedItem = { ...item, selected: !item.selected }
    if (onSelect) {
      onSelect(updatedItem)
      this.updateItemsState(updatedItem)
    }
  }

  handleClick = (item: Item) => {
    const { onClick } = this.props
    if (!onClick) {
      this.handleSelect(item)
    } else {
      onClick(item)
    }
  }

  handleCreateNew = () => {
    const { search } = this.state
    const { onCreateNew } = this.props
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
    const updatedItem = { ...item, value: item.editing, editing: '' }
    if (onEdit) {
      onEdit(updatedItem)
      this.updateItemsState(updatedItem)
    }
  }

  render () {
    const { placeholder, collectionName, itemsHeight, width, expanded, onSelect, onEdit, onCreateNew } = this.props
    const { items, search } = this.state

    const filteredItems = items && items.filter((item: Item) => !item.hidden)

    const renderCheckboxOrString = (item: Item) => onSelect ? (
      <InputField
        type='checkbox'
        label={item.value}
        name={item.value}
        checked={item.selected}
        onChange={() => this.handleSelect(item)}
      />
    ) : (
      <span className={styles.label} onClick={() => this.handleClick(item)}>
        {item.value}
      </span>
    )

    const renderEditable = (item) => onEdit && (
      <span className={styles.controlbutton} onClick={() => this.handleStartEditing(item)}>
        <SvgIcon icon='edit' color='grayscale' />
      </span>
    )

    const itemClasses = [ styles.item, expanded ? '' : styles.lined ].join(' ')
    const renderIsEditing = (item: Item) => !item.editing ? (
      <li className={itemClasses} key={item.id}>
        {renderCheckboxOrString(item)}
        {renderEditable(item)}
      </li>
    ) : (
      <li className={itemClasses} key={item.id}>
        <span className={styles.editinput}>
          <InputField
            name={item.value}
            value={item.editing}
            onChange={(input = {}) => this.handleEditChange(item, input)}
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

    const renderItemsOrEmpty = () => filteredItems && filteredItems.length > 0
      ? filteredItems.map(item => renderIsEditing(item))
      : (
        <li>
          <span className={styles.nothinglabel}>No Results for "{search}"</span>
          {onCreateNew && (
            <span className={styles.createnew} onClick={this.handleCreateNew}>
              <SvgIcon icon='plus' />
              <span>Add new {collectionName} "{search}"</span>
            </span>
          )}
        </li>
      )

    const itemsClasses = [ styles.list, expanded ? '' : styles.shadow ].join(' ')
    const renderItems = () => ((filteredItems && filteredItems.length > 0) || search) ? (
      <ul className={itemsClasses} style={{
        maxHeight: itemsHeight ? `${itemsHeight * 61}px` : 'auto',
        width: width ? `${width}px` : '100%'
      }}>
        {renderItemsOrEmpty()}
      </ul>
    ) : ''

    const renderSearchLabel = () => placeholder === 'Search' ? (
      <div className={styles.search}>
        <div className={styles.magnifier}>
          <SvgIcon icon='magnifier' color='grayscale' />
        </div>
        <InputField
          name='search'
          placeholder={placeholder}
          onChange={(input = {}) => this.handleSearch(input)}
          className={styles.searchinput}
        />
        <div className={styles.triangle}>
          <SvgIcon icon='triangledown' color='grayscale' />
        </div>
      </div>
    ) : (
      <div className={styles.placeholder}>
        {placeholder}
        <div className={styles.triangle}>
          <SvgIcon icon='triangledown' color='grayscale' />
        </div>
      </div>
    )

    return (
      <div className={styles.selectbox} style={{ width: width ? `${width}px` : '100%' }}>
        {expanded ? (
          <div>
            {renderSearchLabel()}
            {renderItems()}
          </div>
        ) : (
          <Dropdown label={renderSearchLabel()} className={styles.dropdown}>
            {renderItems()}
          </Dropdown>
        )}
      </div>
    )
  }
}

export default SelectBox
