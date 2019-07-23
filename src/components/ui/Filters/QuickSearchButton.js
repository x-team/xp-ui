// @flow

import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

const cmz = require('cmz')

type Props = {}

const Container = cmz(`
  height: 48px
  width: 48px
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer

  background: #FFFFFF
  border: 1px solid #E9EDEE
  border-radius: 50%
`)

export default class QuickSearchButton extends PureComponent<Props> {
  render () {
    return (
      <div className={Container}>
        <SvgIcon color='grayscarpaflow' icon='magnifier' hover='default' />
      </div>
    )
  }
}
