// @flow

import React, { Component } from 'react'

import SelectBox from './SelectBox'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import Button from './Button'
import Loader from './Loader'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

export type Status = 'archiving' | 'deleting'

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
  status?: Status,
  collectionName?: string,
  list: Array<Item>,
  onEdit: Function,
  onArchive: Function,
  onDelete: Function,
  onCreateNew: Function
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
      padding: 30px
    `
  ),
  listing: cmz(``),
  control: cmz(`
    display: flex
    justify-content: space-between
    margin: 0
    padding: 40px 20px
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
    padding-right: 70px
    padding-left: 70px
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
  saving: cmz(`
    position: absolute
    top: 0
    width: 100%
    height: 100%
    background: rgba(255, 255, 255, 0.75)
    z-index: 10
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  `),
  savingMessage: cmz(
    typo.sectionHeading,
    `
      text-align: center
      margin: 0
      padding: 0
    `
  )
}

class ListsEditor extends Component<Props, State> {
  static defaultProps = {
    status: '',
    collectionName: 'Collection',
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

  getSelection = (active: boolean = true) => {
    const { activeList, archiveList } = this.state
    return active
      ? activeList.filter(each => each.selected)
      : archiveList.filter(each => each.selected)
  }

  handleSearch = (search: string) => {
    this.setState({ search })
  }

  handleSelect = (item: Item) => {
    const { activeList, archiveList } = this.state
    const isActive = activeList.some(each => each.id === item.id)
    this.setState(() => ({
      activeList: isActive
        ? activeList.map(each => each.id === item.id ? { ...item } : each)
        : activeList,
      archiveList: !isActive
        ? archiveList.map(each => each.id === item.id ? { ...item } : each)
        : archiveList
    }))
  }

  handleEdit = (item: Item) => {
    const { onEdit } = this.props
    onEdit && onEdit(item)
    // const { activeList, archiveList } = this.state
    // const isActive = activeList.some(each => each.id === item.id)
    // this.setState(() => ({
    //   editing: true,
    //   activeList: isActive
    //     ? activeList.map(each => each.id === item.id ? { ...item, editing: false } : each)
    //     : activeList,
    //   archiveList: !isActive
    //     ? archiveList.map(each => each.id === item.id ? { ...item, editing: false } : each)
    //     : archiveList
    // }))
  }

  handleArchiveItem = (item: Item) => {
    const { onArchive } = this.props
    onArchive && onArchive([item])
  }

  handleArchive = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const { onArchive } = this.props
    onArchive && onArchive(this.getSelection(active))
    // this.setState(() => ({
    //   editing: true,
    //   activeList: active
    //     ? [
    //       ...activeList
    //         .filter(each => !each.selected),
    //       ...archiveList
    //         .filter(each => each.selected)
    //         .map(each => ({ ...each, selected: false, archived: false }))
    //     ] : [
    //       ...activeList,
    //       ...archiveList
    //         .filter(each => each.selected)
    //         .map(each => ({ ...each, selected: false, archived: false }))
    //     ],
    //   archiveList: !active
    //     ? [
    //       ...archiveList
    //         .filter(each => !each.selected),
    //       ...activeList
    //         .filter(each => each.selected)
    //         .map(each => ({ ...each, selected: false, archived: true }))
    //     ] : [
    //       ...archiveList,
    //       ...activeList
    //         .filter(each => each.selected)
    //         .map(each => ({ ...each, selected: false, archived: true }))
    //     ]
    // }))
  }

  handleDeleteItem = (item: Item) => {
    const { onDelete } = this.props
    onDelete && onDelete([item])
  }

  handleDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const currentList = active
      ? { activeList: true }
      : { archiveList: true }
    this.setState(preState => ({
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...currentList
      }
    }))
    //   const { activeList, archiveList } = this.state
    //   this.setState(() => ({
    //     editing: true,
    //     activeList: active
    //       ? activeList.filter(each => !each.selected)
    //       : activeList,
    //     archiveList: !active
    //       ? archiveList.filter(each => !each.selected)
    //       : archiveList
    //   }))
  }

  confirmDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const { onDelete } = this.props
    onDelete && onDelete(this.getSelection(active))
  }

  cancelDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    const currentList = active
      ? { activeList: false }
      : { archiveList: false }
    this.setState(preState => ({
      confirmDeletion: {
        ...preState.confirmDeletion,
        ...currentList
      }
    }))
  }

  handleCreateNew = (name: string) => {
    const { onCreateNew } = this.props
    onCreateNew && onCreateNew(name)
    // this.setState(() => ({
    //   search: '',
    //   editing: true,
    //   activeList: [
    //     { id: +new Date(), value: name },
    //     ...this.state.activeList
    //   ]
    // }))
  }

  hasSelected = (list: Array<Item> = []) => {
    const selected = list.filter(item => item.selected)
    return selected && selected.length > 0
  }

  render () {
    const { status, collectionName } = this.props
    const { confirmDeletion, activeList, archiveList } = this.state
    return (
      <div className={cx.listseditor}>
        <h1 className={cx.heading}>Edit {collectionName}</h1>
        <Tabs className={cx.tabs} tabIndex={1}>
          <Tab title='Active'>
            <div className={cx.listing}>
              <SelectBox
                items={activeList}
                collectionName={collectionName}
                expanded
                visibleItems={7}
                search={this.state.search}
                onSearch={search => this.handleSearch(search)}
                onSelect={item => this.handleSelect(item)}
                onEdit={item => this.handleEdit(item)}
                onArchive={item => this.handleArchiveItem(item)}
                onDelete={item => this.handleDeleteItem(item)}
                onCreateNew={listName => this.handleCreateNew(listName)}
              />
              <div className={cx.control}>
                {confirmDeletion.activeList ? (
                  <div>confirm delete?
                    <Button
                      onClick={(e) => this.cancelDelete(e, true)}
                      outlined
                      className={cx.button}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={(e) => this.confirmDelete(e, true)}
                      className={cx.button}
                    >
                      Yes
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled={!this.hasSelected(activeList)}
                    onClick={(e) => this.handleDelete(e, true)}
                    className={cx.button}
                    outlined
                  >
                    Delete
                  </Button>
                )}
                <Button
                  disabled={!this.hasSelected(activeList)}
                  onClick={(e) => this.handleArchive(e, true)}
                  className={[cx.button, cx.archive].join(' ')}
                >
                  Archive
                </Button>
              </div>
            </div>
          </Tab>
          <Tab title='Archive'>
            <div className={cx.listing}>
              <SelectBox
                items={archiveList}
                collectionName={collectionName}
                expanded
                visibleItems={7}
                search={this.state.search}
                onSearch={search => this.handleSearch(search)}
                onSelect={item => this.handleSelect(item)}
                onEdit={item => this.handleEdit(item)}
                onArchive={item => this.handleArchiveItem(item)}
                onDelete={item => this.handleDeleteItem(item)}
              />
              <div className={cx.control}>
                {confirmDeletion.archiveList ? (
                  <div>confirm delete?
                    <Button
                      onClick={(e) => this.cancelDelete(e, false)}
                      outlined
                      className={cx.button}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={(e) => this.confirmDelete(e, false)}
                      className={cx.button}
                    >
                      Yes
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled={!this.hasSelected(archiveList)}
                    onClick={(e) => this.handleDelete(e, false)}
                    className={cx.button}
                    outlined
                  >
                    Delete
                  </Button>
                )}
                <Button
                  disabled={!this.hasSelected(archiveList)}
                  onClick={(e) => this.handleArchive(e, false)}
                  className={[cx.button, cx.archive].join(' ')}
                >
                  Unarchive
                </Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ListsEditor
