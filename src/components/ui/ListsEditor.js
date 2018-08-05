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

type Item = {
  id: number,
  value: string,
  selected?: boolean,
  selecting?: boolean,
  editing?: boolean | string,
  saving?: boolean,
  hidden?: boolean,
  archived?: boolean
}

type Props = {
  collectionName?: string,
  list: Array<Item>,
  saving?: boolean,
  onSave: Function
}

type State = {
  search: string,
  editing: boolean,
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
  save: cmz(`
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
    `
  )
}

class ListsEditor extends Component<Props, State> {
  static defaultProps = {
    collectionName: 'Collection',
    list: [],
    saving: false
  }

  state = {
    search: '',
    editing: false,
    activeList: this.props.list.filter(item => !item.archived),
    archiveList: this.props.list.filter(item => item.archived)
  }

  handleSearch = (search: string) => {
    this.setState({ search })
  }

  handleCreateNew = (name: string) => {
    this.setState(() => ({
      search: '',
      editing: true,
      activeList: [
        { id: +new Date(), value: name },
        ...this.state.activeList
      ]
    }))
  }

  handleEdit = (item: Item) => {
    const { activeList, archiveList } = this.state
    const isActive = activeList.some(each => each.id === item.id)
    this.setState(() => ({
      editing: true,
      activeList: isActive
        ? activeList.map(each => each.id === item.id ? { ...item, editing: false } : each)
        : activeList,
      archiveList: !isActive
        ? archiveList.map(each => each.id === item.id ? { ...item, editing: false } : each)
        : archiveList
    }))
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

  handleArchive = (event: any, active: boolean = false) => {
    event && event.stopPropagation()
    const { activeList, archiveList } = this.state
    this.setState(() => ({
      editing: true,
      activeList: active
        ? [
          ...activeList
            .filter(each => !each.selected),
          ...archiveList
            .filter(each => each.selected)
            .map(each => ({ ...each, selected: false, archived: false }))
        ] : [
          ...activeList,
          ...archiveList
            .filter(each => each.selected)
            .map(each => ({ ...each, selected: false, archived: false }))
        ],
      archiveList: !active
        ? [
          ...archiveList
            .filter(each => !each.selected),
          ...activeList
            .filter(each => each.selected)
            .map(each => ({ ...each, selected: false, archived: true }))
        ] : [
          ...archiveList,
          ...activeList
            .filter(each => each.selected)
            .map(each => ({ ...each, selected: false, archived: true }))
        ]
    }))
  }

  handleDelete = (event: any, active: boolean = true) => {
    event && event.stopPropagation()
    this.setState(() => ({ editing: true }))
    const { activeList, archiveList } = this.state
    this.setState(() => ({
      editing: true,
      activeList: active
        ? activeList.filter(each => !each.selected)
        : activeList,
      archiveList: !active
        ? archiveList.filter(each => !each.selected)
        : archiveList
    }))
  }

  handleSave = (event: any) => {
    event && event.stopPropagation()
    const { activeList, archiveList } = this.state
    const { onSave } = this.props
    onSave && onSave([...activeList, ...archiveList].map(each => ({
      id: each.id,
      value: each.value,
      archived: each.archived || false
    })))
  }

  hasSelected = (list: Array<Item> = []) => {
    const selected = list.filter(item => item.selected)
    return selected && selected.length > 0
  }

  render () {
    const { collectionName, saving } = this.props
    const { editing, activeList, archiveList } = this.state
    return (
      <div className={cx.listseditor}>
        <h1 className={cx.heading}>Edit {collectionName}</h1>
        {saving && (
          <div className={cx.saving}>
            <Loader />
            <h2 className={cx.savingMessage}>Saving changes...</h2>
          </div>
        )}
        <Tabs className={cx.tabs}>
          <Tab title='Active'>
            <div className={cx.listing}>
              <SelectBox
                items={activeList}
                collectionName={collectionName}
                expanded
                visibleItems={7}
                search={this.state.search}
                onSearch={search => this.handleSearch(search)}
                onEdit={item => this.handleEdit(item)}
                onSelect={item => this.handleSelect(item)}
                onCreateNew={listName => this.handleCreateNew(listName)}
              />
              <div className={cx.control}>
                <div>
                  {this.hasSelected(activeList) && (
                    <div>
                      <Button onClick={(e) => this.handleArchive(e, true)} className={cx.button} outlined>Archive</Button>
                      <Button onClick={(e) => this.handleDelete(e, true)} className={cx.button} outlined>Delete</Button>
                    </div>
                  )}
                </div>
                <Button disabled={!editing || saving} onClick={this.handleSave} className={cx.save}>Save</Button>
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
                onEdit={item => this.handleEdit(item)}
                onSelect={item => this.handleSelect(item)}
              />
              <div className={cx.control}>
                <div>
                  {this.hasSelected(archiveList) && (
                    <div>
                      <Button onClick={(e) => this.handleArchive(e, false)} className={cx.button} outlined>Unarchive</Button>
                      <Button onClick={(e) => this.handleDelete(e, false)} className={cx.button} outlined>Delete</Button>
                    </div>
                  )}
                </div>
                <Button disabled={!editing || saving} onClick={this.handleSave} className={cx.save}>Save</Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ListsEditor
