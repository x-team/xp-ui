// @flow

import React, { Component } from 'react'

import SelectBox from './SelectBox'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import Button from './Button'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import { pluralize } from '../../utils/helpers'

const cmz = require('cmz')

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
  collectionLabel?: string,
  title?: string,
  list: Array<Item>,
  onEdit: Function,
  onArchive: Function,
  onDelete: Function,
  onCreateNew: Function,
  onDismissDeletedMessages: Function
}

type DeleteConfirmation = {
  activeList: boolean,
  archiveList: boolean
}

type State = {
  search: string,
  confirmDeletion: DeleteConfirmation,
  activeList: Array<Item>,
  archiveList: Array<Item>
}

const cx = {
  listseditor: cmz(`
    position: relative
    width: 500px
    max-width: 100%
  `),

  heading: cmz(
    typo.sectionHeading,
    `
      margin: 0
      padding: 20px
      line-height: 1
    `
  ),

  control: cmz(`
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 60px
    margin: 0
    padding: 20px
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

  archive: cmz(`
    margin: 0
  `),

  tabs: cmz(`
    & {
      margin: 0
    }

    & nav {
      margin: 0
      padding: 0
    }

    & nav ul {
      display: flex
      justify-content: space-around
      background: silver
      background-color: ${theme.baseBright}
      border-color: ${theme.baseBright}
      margin: 0
    }

    & nav ul li {
      margin: 0
      padding: 0
      text-align: center
    }

    & nav ul li a {
      padding: 10px 40px
    }

    & > div > div {
      margin: 0
    }
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

class ListsEditor extends Component<Props, State> {
  static defaultProps = {
    collectionLabel: 'Collection',
    title: '',
    list: []
  }

  state = {
    search: '',
    confirmDeletion: {
      activeList: false,
      archiveList: false
    },
    activeList: this.props.list.filter(item => !item.archived),
    archiveList: this.props.list.filter(item => item.archived)
  }

  componentDidUpdate (prevProps: Props) {
    if (!Object.is(prevProps, this.props)) {
      this.setState((prevState, props) => {
        const newState = {
          ...prevState,
          activeList: this.props.list.filter(item => !item.archived),
          archiveList: this.props.list.filter(item => item.archived)
        }
        return newState
      })
    }
  }

  getCurrentListName = (active: boolean = true) => active ? 'activeList' : 'archiveList'

  getSelection = (active: boolean = true) => {
    const currentList = this.state[this.getCurrentListName(active)] || []
    return currentList.filter(each => each.selected)
  }

  handleSearch = (search: string) => {
    this.setState({ search })
  }

  handleSelect = (item: Item, active: boolean = true) => {
    const currentListName = this.getCurrentListName(active)
    const currentList = this.state[currentListName] || []
    const updatedList = currentList.map(each => each.id === item.id ? { ...item } : each)
    const selection = updatedList.filter(each => each.selected)
    this.setState(preState => ({
      ...preState,
      ...{ [currentListName]: updatedList },
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...{ [currentListName]: preState.confirmDeletion[currentListName] && selection.length > 0 }
      }
    }))
  }

  handleEdit = (item: Item) => {
    const { onEdit } = this.props
    onEdit && onEdit(item)
  }

  handleArchiveItem = (item: Item) => {
    const { onArchive } = this.props
    onArchive && onArchive([item])
  }

  handleArchive = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const { onArchive } = this.props
    onArchive && onArchive(this.getSelection(active))
  }

  handleDeleteItem = (item: Item) => {
    const { onDelete } = this.props
    onDelete && onDelete([item])
  }

  handleDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const currentListName = this.getCurrentListName(active)
    this.setState(preState => ({
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...{ [currentListName]: true }
      }
    }))
  }

  confirmDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const currentListName = this.getCurrentListName(active)
    const { onDelete } = this.props
    this.setState(preState => ({
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...{ [currentListName]: false }
      }
    }), () => {
      onDelete && onDelete(this.getSelection(active))
    })
  }

  cancelDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const currentListName = this.getCurrentListName(active)
    this.setState(preState => ({
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...{ [currentListName]: false }
      }
    }))
  }

  handleDismissDeletedMessage = (item: Item) => {
    const { onDismissDeletedMessages } = this.props
    if (item && item.id) {
      onDismissDeletedMessages && onDismissDeletedMessages([item])
    }
  }

  handleCreateNew = (name: string) => {
    const { onCreateNew } = this.props
    onCreateNew && onCreateNew(name)
  }

  renderListing = (active: boolean = true) => {
    const currentListName = this.getCurrentListName(active)
    const currentList = this.state[currentListName] || []
    const { collectionLabel } = this.props
    const { confirmDeletion } = this.state
    const selection = this.getSelection(active)

    return (
      <div>
        <SelectBox
          items={currentList}
          collectionLabel={collectionLabel}
          expanded
          visibleItems={7}
          search={this.state.search}
          onSearch={search => this.handleSearch(search)}
          onSelect={item => this.handleSelect(item, active)}
          onEdit={item => this.handleEdit(item)}
          onArchive={item => this.handleArchiveItem(item)}
          onDelete={item => this.handleDeleteItem(item)}
          onCreateNew={active ? listName => this.handleCreateNew(listName) : undefined}
          onDismissDeletedMessage={this.handleDismissDeletedMessage}
        />
        {confirmDeletion[currentListName] ? (
          <div className={cx.control}>
            <div className={cx.question}>
              <p>Delete <strong>{selection.length}</strong> {pluralize(selection.length, 'list', true)}</p>
              <p><strong>Are you sure?</strong></p>
            </div>
            <div className={cx.answer}>
              <Button
                onClick={e => this.cancelDelete(e, active)}
                pseudolink
                className={cx.button}
              >
                CANCEL
              </Button>
              <Button
                onClick={e => this.confirmDelete(e, active)}
                className={[cx.button, cx.archive].join(' ')}
              >
                Yes
              </Button>
            </div>
          </div>
        ) : (
          <div className={cx.control}>
            <Button
              disabled={selection.length === 0}
              onClick={e => this.handleDelete(e, active)}
              className={cx.button}
              outlined
            >
              Delete
            </Button>
            <Button
              disabled={selection.length === 0}
              onClick={e => this.handleArchive(e, active)}
              className={[cx.button, cx.archive].join(' ')}
            >
              {active ? 'Archive' : 'Unarchive' }
            </Button>
          </div>
        )}
      </div>
    )
  }

  render () {
    const { title } = this.props

    return (
      <div className={cx.listseditor} data-testid='xpui-listsEditor'>
        <h1 className={cx.heading}>Edit {title}</h1>
        <Tabs className={cx.tabs}>
          <Tab title='Active'>
            {this.renderListing(true)}
          </Tab>
          <Tab title='Archived'>
            {this.renderListing(false)}
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ListsEditor
