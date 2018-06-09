// @flow

import React, { PureComponent } from 'react'
import InputField from '../forms/InputField'
import type { Element } from 'react'

const cmz = require('cmz')

const styles = {
  selectbox: cmz(``)
}

type Props = {
  placeholder?: string,
  items?: Array<*>,
  addOnSearch?: boolean,
  width?: number,
  visibleItems?: number,
  nesting?: boolean,
  onSelect?: Function,
  onClick?: Function,
  onCreateNew?: Function,
  onEdit?: Function
}

type State = {
  search?: string,
  items?: Array<*>
}

class SelectBox extends PureComponent<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    items: []
  }

  state: State = {
    search: '',
    items: this.props.items
  }

  updateItemsState = (updatedItem) => {
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
      hidden: !(item.name.toUpperCase().match(match) && item.name.toUpperCase().match(match).length > 0)
    }))
    this.setState({ search: value, items: filteredItems })
  }

  handleSelect = (item: Object) => {
    const { onSelect } = this.props
    const updatedItem = { ...item, selected: !item.selected }
    if (onSelect) {
      onSelect(updatedItem)
      this.updateItemsState(updatedItem)
    }
  }

  handleClick = (item: Object) => {
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

  handleStartEditing = (item: Object) => {
    const updatedItem = { ...item, editing: item.name }
    this.updateItemsState(updatedItem)
  }

  handleEditChange = (item: Object, input: Object) => {
    const { value } = input.target
    const updatedItem = { ...item, editing: value }
    this.updateItemsState(updatedItem)
  }

  handleCancelEdit = (item: Object) => {
    const updatedItem = { ...item, editing: false }
    this.updateItemsState(updatedItem)
  }

  handleEdit = (item: Object) => {
    const { onEdit } = this.props
    const updatedItem = { ...item, name: item.editing, editing: false }
    if (onEdit) {
      onEdit(updatedItem)
      this.updateItemsState(updatedItem)
    }
  }

  render () {
    const { placeholder, addOnSearch, onSelect, onEdit } = this.props
    const { items } = this.state

    const filteredItems = items.filter(item => !item.hidden)

    const renderCheckboxOrString = (item) => onSelect ? (
      <InputField
        type='checkbox'
        label={item.name}
        checked={item.selected}
        onChange={() => this.handleSelect(item)}
      />
    ) : (
      <span onClick={() => this.handleClick(item)}>{item.name}</span>
    )

    const renderEditable = (item) => onEdit && (
      <span onClick={() => this.handleStartEditing(item)}>[edit]</span>
    )

    const renderIsEditing = (item) => !item.editing ? (
      <li key={item.id}>
        {renderCheckboxOrString(item)}
        {renderEditable(item)}
      </li>
    ) : (
      <li key={item.id}>
        <InputField
          type='input'
          name={item.name}
          value={item.editing}
          onChange={(input) => this.handleEditChange(item, input)}
        />
        <span onClick={() => this.handleCancelEdit(item)}>[cancel]</span>
        <span onClick={() => this.handleEdit(item)}>[save]</span>
      </li>
    )

    const renderItemsOrEmpty = () => filteredItems.length > 0
      ? filteredItems.map(item => renderIsEditing(item))
      : (
        <li>
          <span>nothing found...</span>
          {addOnSearch && (
            <span onClick={this.handleCreateNew}>[create new]</span>
          )}
        </li>
      )

    return (
      <div className={styles.selectbox}>
        <InputField
          name='search'
          placeholder={placeholder}
          onChange={this.handleSearch}
        />
        <ul>
          {renderItemsOrEmpty()}
        </ul>
      </div>
    )
  }
}

export default SelectBox

