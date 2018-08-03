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

const tabularTheme = {} // TODO: https://zube.io/x-team/xp-formerly-auto/c/1638

type Props = {
  items?: Array<*>,
  mode?: string,
  visible?: number,
  increment?: number,
  onViewMore?: Function,
  isFetching?: boolean,
  hasMore?: boolean
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

  handleViewMore = (showMore: Function) => {
    const { onViewMore } = this.props
    onViewMore && onViewMore()
    showMore()
  }

  render () {
    const { items, mode, visible, increment, isFetching, hasMore } = this.props
    const cx = mode === 'card' ? cardTheme : tabularTheme

    return items ? (
      <TruncatedList
        items={items}
        visible={visible}
        increment={increment}
        itemClass={cx.item}
        isFetching={isFetching}
        hasMore={hasMore}
        viewMore={(amount, action, isFetching) => (
          <span className={cx.more}>
            <Button
              block
              outlined
              disabled={isFetching}
              onClick={() => this.handleViewMore(action)}
            >
              View more
            </Button>
          </span>
        )}
      />
    ) : null
  }
}

export default ApplicantGrid
