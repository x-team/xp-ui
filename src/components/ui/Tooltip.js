// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(``)
}

type Props = {}

class Tooltip extends PureComponent<Props, void> {
  static defaultProps = {}

  render () {
    return (
      <div className={cx.wrapper}></div>
    )
  }
}

export default Tooltip
