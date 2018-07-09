// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'

const cmz = require('cmz')

const cardTheme = {
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

const tabularTheme = {} // to do: https://zube.io/x-team/xp-formerly-auto/c/1638

type Props = {
  items?: Array<*>,
  mode?: string,
  visible?: number,
  increment?: number
}

type State = {
  open: boolean
}

class ApplicantGrid extends PureComponent<Props, State> {
  static defaultProps = {
    items: [],
    mode: 'card',
    visible: 50,
    increment: 50
  }

  render () {
    const { items, mode, visible, increment } = this.props

    const cx = mode === 'card' ? cardTheme : tabularTheme

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
