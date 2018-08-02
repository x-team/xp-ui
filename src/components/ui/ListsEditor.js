// @flow

import React, { PureComponent } from 'react'

import SelectBox from './SelectBox'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'
import Button from './Button'

const cmz = require('cmz')

type Props = {}

const cx = {
  listseditor: cmz(`
    width: 500px
  `)
}

class ListsEditor extends PureComponent<Props> {
  render () {
    return (
      <div className={cx.listseditor}>
        <h1>Edit Lists</h1>
        <Tabs>
          <Tab title='Active'>
            <div>
              <SelectBox
                collectionName='Lists'
                expanded={true}
                visibleItems={7}
              />
              <Button>Archive</Button>
              <Button>Delete</Button>
              <Button>Save</Button>
            </div>
          </Tab>
          <Tab title='Archived'>
            <div>
              <SelectBox
                collectionName='Lists'
                expanded={true}
                visibleItems={7}
              />
              <Button>Unarchive</Button>
              <Button>Delete</Button>
              <Button>Save</Button>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ListsEditor
