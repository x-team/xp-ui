// @flow

import React, { Component } from 'react'

import SelectBox from './SelectBox'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import Button from './Button'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

type Props = {}

type State = {
  search: string,
  editing: boolean
}

const cx = {
  listseditor: cmz(`
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
    margin: 40px 0
    padding: 0 20px
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
  `)
}

class ListsEditor extends Component<Props, State> {
  state = {
    search: '',
    editing: false
  }

  handleSearch = (search: string) => {
    this.setState({ search })
  }

  handleCreateNew = (name: string) => {
    console.log({handleCreateNew: name})
  }

  render () {
    return (
      <div className={cx.listseditor}>
        <h1 className={cx.heading}>Edit Lists</h1>
        <Tabs className={cx.tabs}>
          <Tab title='Active'>
            <div className={cx.listing}>
              <SelectBox
                collectionName='Lists'
                expanded
                visibleItems={7}
                search={this.state.search}
                onSearch={search => this.handleSearch(search)}
                onCreateNew={name => this.handleCreateNew(name)}
              />
              <div className={cx.control}>
                <div>
                  <Button className={cx.button} outlined>Archive</Button>
                  <Button className={cx.button} outlined>Delete</Button>
                </div>
                <Button className={cx.save}>Save</Button>
              </div>
            </div>
          </Tab>
          <Tab title='Archived'>
            <div className={cx.listing}>
              <SelectBox
                collectionName='Lists'
                expanded
                visibleItems={7}
                search={this.state.search}
                onSearch={search => this.handleSearch(search)}
                onCreateNew={name => this.handleCreateNew(name)}
              />
              <div className={cx.control}>
                <div>
                  <Button className={cx.button} outlined>Unarchive</Button>
                  <Button className={cx.button} outlined>Delete</Button>
                </div>
                <Button className={cx.save}>Save</Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ListsEditor
