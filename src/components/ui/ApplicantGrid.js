// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'

const cmz = require('cmz')

const cx = {
  item: cmz(`
    display: block
    margin: 0 0 6px
  `),
  more: cmz(`
    & button {
      margin: 10px
      width: calc(100% - 20px)
    }
  `)
}

type Props = {
  items?: Array<*>,
  visible?: number,
  increment?: number
}

type State = {
  open: boolean
}

class ApplicantGrid extends PureComponent<Props, State> {
  static defaultProps = {
    items: [],
    visible: 50,
    increment: 50
  }

  render () {
    const { items, visible, increment } = this.props
    return items ? (
      <TruncatedList
        items={items}
        visible={visible}
        increment={increment}
        itemClass={cx.item}
        viewMore={(amount, action) => (
          <li className={cx.more}>
            <Button onClick={action} outlined block>View more</Button>
          </li>
        )}
      />
    ) : null
  }
}

export default ApplicantGrid
