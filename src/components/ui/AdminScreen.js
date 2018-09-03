// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  admin: cmz(`
    background: salmon
    height: 100%
  `),

  header: cmz(`
    background: aqua
    height: 86px
  `)
}


type Props = {
  header?: Element<*>,
  children?: Element<*>
}

type State = {
}

class AdminScreen extends PureComponent<Props, State> {
  static defaultProps = {
    header: null,
    children: null
  }

  render () {
    return (
      <div className={cx.admin}>
        <div className={cx.header}>{this.props.header}</div>
        {this.props.children}
      </div>
    )
  }
}

export default AdminScreen
