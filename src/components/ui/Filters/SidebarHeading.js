// @flow

import React, { PureComponent } from 'react'
import QuickSearchButton from './QuickSearchButton'

const cmz = require('cmz')

type Props = {}

const Container = cmz(`
  display: flex
  flex: 1
  width: 100%
  align-items: center
  justify-content: space-between
`)

export default class SidebarHeading extends PureComponent<Props> {
  render () {
    return (
      <div className={Container}>
        Filters
        <QuickSearchButton />
      </div>
    )
  }
}
