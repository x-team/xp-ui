// @flow

import React, { Component } from 'react'
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
  editing: cmz(`
    & input {
      border-bottom: 1px solid ${theme.baseRed}
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
  saving: cmz(typo.baseText),
  selecting: cmz(
    typo.baseText,
    `
      padding: 0 0 0 13px
    `
  ),
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
  selected?: boolean,
  selecting?: boolean,
  editing?: boolean | string,
  hidden?: boolean
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
  view: Array<Item>,
  expanded?: boolean,
  creating?: boolean
}

class SelectBox extends Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    items: [],
    expanded: false,
    collectionName: ''
  }

  state: State = {
    search: '',
    items: this.props.items,
    view: this.props.items.map(each => ({
      id: each.id,
      value: each.value,
      selected: each.selected || false,
      selecting: each.selecting || false,
      editing: each.editing || false,
      saving: each.saving || false,
      hidden: each.hidden || false
    })),
    expanded: this.props.expanded || false,
    creating: false
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    console.log('!componentDidUpdate')
    // console.log('prevProps:', prevProps)
    // console.log('this.props:', this.props)
    // console.log('prevState:', prevState)
    // console.log('this.state:', this.state)

    const viewItems = this.mapItemsInput(this.state.items)
    console.log(this.state.view) // updated
    console.log(viewItems) // gets outdated with state only changes
    console.log(JSON.stringify(this.state.view) !== JSON.stringify(viewItems)) //
    // if (!Object.is(prevProps, this.props)) {
      // this.setState((prevState, props) => ({
         // ...prevState
      // }))
    // }
  }

  mapItemsInput = items => items.map(each => ({
    id: each.id,
    value: each.value,
    selected: each.selected || false,
    selecting: each.selecting || false,
    editing: each.editing || false,
    saving: each.saving || false,
    hidden: each.hidden || false
  }))

  updateItemsState = (updatedItem: Item) => {
    const { view } = this.state
    const newItems = view && view.map((each, i) => {
      return each.id === updatedItem.id ? { ...each, ...updatedItem } : each
    })
    this.setState({ view: newItems })
  }

  handleSearch = (input: Object) => {
    const { view } = this.state
    const match = new RegExp(input.trim().toUpperCase(), 'g')
    const filteredItems = view && view.map(item => {
      const itemMatch = item && item.value && item.value.toUpperCase().match(match)
      return { ...item, hidden: !(itemMatch && itemMatch.length > 0) }
    })
    this.setState({ search: input, view: filteredItems })
  }

  handleSelect = (item: Item) => {
    const { onSelect } = this.props
    if (!item.selecting && onSelect && (typeof onSelect().then === 'function')) {
      this.updateItemsState({
        ...this.state.view.find(obj => obj.id === item.id),
        selecting: true
      })
      onSelect({
        ...this.state.view.find(obj => obj.id === item.id),
        selected: !item.selected
      }).then((reponseItem) => {
        const uncachedItem = this.state.view.find(obj => obj.id === reponseItem.id)
        uncachedItem && this.updateItemsState({
          ...uncachedItem,
          selected: !item.selected,
          selecting: false
        })
      })
    }
  }

  handleClick = (item: Item) => {
    const { onClick } = this.props
    if (!item.selecting && onClick && (typeof onClick().then === 'function')) {
      this.updateItemsState({
        ...this.state.view.find(obj => obj.id === item.id),
        selecting: true
      })
      onClick({
        ...this.state.view.find(obj => obj.id === item.id),
        selected: !item.selected
      }).then((reponseItem) => {
        const uncachedItem = this.state.view.find(obj => obj.id === reponseItem.id)
        uncachedItem && this.updateItemsState({
          ...uncachedItem,
          selected: !item.selected,
          selecting: false
        })
      })
    } else {
      this.handleSelect(item)
    }
  }

  handleCreateNew = () => {
    const { onCreateNew } = this.props
    const { search, creating } = this.state
    if (!creating && onCreateNew && (typeof onCreateNew().then === 'function')) {
      this.setState(() => ({ creating: true }))
      onCreateNew(search).then((reponseItem) => {
        this.setState(() => ({ view: [...this.state.view, reponseItem], creating: false }))
        this.handleSearch('')
      })
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
    if (onEdit && (typeof onEdit().then === 'function')) {
      this.updateItemsState({
        ...this.state.view.find(obj => obj.id === item.id),
        saving: true
      })
      onEdit({
        ...this.state.view.find(obj => obj.id === item.id),
        value: item.editing
      }).then((reponseItem) => {
        const uncachedItem = this.state.view.find(obj => obj.id === reponseItem.id)
        this.updateItemsState({
          ...uncachedItem,
          value: reponseItem.value,
          saving: false,
          editing: false
      })
      })
    }
  }

  render () {
    const {
      placeholder,
      collectionName,
      itemsHeight,
      width,
      expanded,
      onSelect,
      onEdit,
      onCreateNew
    } = this.props
    const { view, search, creating } = this.state

    const filteredItems = view && view.filter((item: Item) => !item.hidden)

    const renderCheckboxOrString = (item: Item) => onSelect ? (
      item.selecting ? (
        <span className={styles.selecting}>
          ... {item.value}
        </span>
      ) : (
        <InputField
          key={`${item.id}${item.selected}`}
          type='checkbox'
          label={item.value}
          name={item.value}
          checked={item.selected}
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

    const renderEditable = (item) => onEdit && (
      <span className={styles.controlbutton} onClick={() => this.handleStartEditing(item)}>
        <SvgIcon icon='edit' color='grayscale' />
      </span>
    )

    const itemClasses = (item) => ([
      styles.item,
      expanded ? '' : styles.lined,
      (item.editing && item.editing !== item.value) ? styles.editing : ''
    ].join(' '))

    const renderIsSavingOrEditing = (item: Item) => item.saving ? (
      <li className={itemClasses(item)} key={item.id}>
        <span className={styles.saving}>
          Saving "{item.editing}"...
        </span>
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
      ? renderIsSavingOrEditing(item)
      : (
        <li className={itemClasses(item)} key={item.id}>
          {renderCheckboxOrString(item)}
          {renderEditable(item)}
        </li>
      )

    const renderItemsOrEmpty = () => filteredItems && filteredItems.length > 0
      ? filteredItems.map(item => renderIsEditing(item))
      : (
        <li>
          {creating ? (
            <span className={styles.nothinglabel}>Adding new {collectionName} "{search}"...</span>
          ) : (
            <span>
              <span className={styles.nothinglabel}>No Results for "{search}"</span>
              {onCreateNew && (
                <span className={styles.createnew} onClick={this.handleCreateNew}>
                  <SvgIcon icon='plus' />
                  <span>Add new {collectionName} "{search}"</span>
                </span>
              )}
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
          value={search}
          placeholder={placeholder}
          onChange={(input = {}) => this.handleSearch(input.target.value)}
          className={styles.searchinput}
          autoComplete='off'
          disabled={creating}
        />
        {search !== '' && (
          <div className={styles.close} onClick={() => this.handleSearch('')}>
            <SvgIcon icon='x' color='grayscale' />
          </div>
        )}
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
          <Dropdown
            toggle={placeholder === 'Search' ? false : true}
            label={renderSearchLabel()}
            className={styles.dropdown}
          >
            {renderItems()}
          </Dropdown>
        )}
      </div>
    )
  }
}

export default SelectBox
