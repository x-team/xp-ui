// @flow

import React, { PureComponent } from 'react'
import InputField from '../forms/InputField'
import SvgIcon from './SvgIcon'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const styles = {
  selectbox: cmz(`
    background: #fff
    position: relative
  `),
  search: cmz(`
    padding: 23px 30px 20px 52px
    height: 60px
  `),
  magnifier: cmz(`
    position: absolute
    z-index: 5
    top: 22px
    left: 22px
  `),
  label: cmz(typo.baseText),
  list: cmz(`
    list-style: none
    margin: 0
    padding: 0
    border: 1px solid #E9EDEE
    border-top: none
    overflow-y: scroll
  `),
  item: cmz(`
    & {
      height: 30px
      margin: 0 22px
      padding: 18px 0
      border-bottom: 1px solid #E9EDEE
      display: flex
      justify-content: space-between
      align-items: center
    }

    &:last-child {
      border-bottom: none
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
  editinput: cmz(
    typo.baseText,
    `
      & {
        width: 70%
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
      margin: 0 22px
      padding: 18px 0 9px
    `
  ),
  createnew: cmz(
    typo.baseText,
    `
      & {
        display: flex
        align-items: center
        margin: 0 22px
        padding: 9px 0 18px
        color: ${theme.baseRed}
        cursor: pointer
      }

      & svg {
        transform: scale(0.8)
        margin-right: 8px
      }
    `
  ),
}

type Item = {
  id: number,
  value: string,
  selected?: boolean,
  editing?: string | boolean
}

type Props = {
  placeholder?: string,
  items?: Array<Item>,
  addOnSearch?: boolean,
  width?: number,
  visibleItems?: number,
  nesting?: boolean,
  collapsible?: boolean,
  expanded?: boolean,
  collectionName?: string,
  onSelect?: Function,
  onClick?: Function,
  onCreateNew?: Function,
  onEdit?: Function
}

type State = {
  search: string,
  items: Array<Item>,
  expanded: boolean
}

class SelectBox extends PureComponent<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    items: [],
    expanded: true,
    collectionName: ''
  }

  state: State = {
    search: '',
    items: this.props.items,
    expanded: this.props.expanded
  }

  updateItemsState = (updatedItem: Item) => {
    const { items } = this.state
    const newItems = items.map((each, i) => {
      return each.id === updatedItem.id ? updatedItem : each
    })
    this.setState({ items: newItems })
  }

  handleSearch = (input: Object) => {
    const { items } = this.state
    const { value } = input.target
    const match = new RegExp(value.trim().toUpperCase(), 'g')
    const filteredItems = items.map(item => ({
      ...item,
      hidden: !(item.value.toUpperCase().match(match) && item.value.toUpperCase().match(match).length > 0)
    }))
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
      handleSelect(item)
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
    const updatedItem = { ...item, editing: false }
    this.updateItemsState(updatedItem)
  }

  handleEdit = (item: Item) => {
    const { onEdit } = this.props
    const updatedItem = { ...item, name: item.editing, editing: false }
    if (onEdit) {
      onEdit(updatedItem)
      this.updateItemsState(updatedItem)
    }
  }

  render () {
    const { placeholder, collectionName, addOnSearch, visibleItems, onSelect, onEdit } = this.props
    const { items, search } = this.state

    const filteredItems = items.filter(item => !item.hidden)

    const renderCheckboxOrString = (item) => onSelect ? (
      <InputField
        type='checkbox'
        label={item.value}
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

    const renderIsEditing = (item) => !item.editing ? (
      <li className={styles.item} key={item.id}>
        {renderCheckboxOrString(item)}
        {renderEditable(item)}
      </li>
    ) : (
      <li className={styles.item} key={item.id}>
        <span className={styles.editinput}>
          <InputField
            type='input'
            name={item.value}
            value={item.editing}
            onChange={(input) => this.handleEditChange(item, input)}
          />
        </span>
        <span className={styles.control}>
          <span className={styles.controlbutton} onClick={() => this.handleCancelEdit(item)}>
            <SvgIcon icon="x" color="grayscale" />
          </span>
          <span className={styles.controlbutton} onClick={() => this.handleEdit(item)}>
            <SvgIcon icon="check" color="grayscale" />
          </span>
        </span>
      </li>
    )

    const renderItemsOrEmpty = () => filteredItems.length > 0
      ? filteredItems.map(item => renderIsEditing(item))
      : (
        <li>
          <span className={styles.nothinglabel}>No Results for "{search}"</span>
          {addOnSearch && (
            <span className={styles.createnew} onClick={this.handleCreateNew}>
              <SvgIcon icon='plus' />
              <span>Add new {collectionName} "{search}"</span>
            </span>
          )}
        </li>
      )

    const renderItems = () => (filteredItems.length > 0 || search) && (
      <ul className={styles.list} style={{ maxHeight: `${visibleItems * 67}px` }}>
        {renderItemsOrEmpty()}
      </ul>
    )

    return (
      <div className={styles.selectbox}>
        <div className={styles.magnifier}>
          <SvgIcon icon='magnifier' color='grayscale' />
        </div>
        <InputField
          name='search'
          placeholder={placeholder}
          onChange={this.handleSearch}
          className={styles.search}
        />
        {renderItems()}
      </div>
    )
  }
}

export default SelectBox

