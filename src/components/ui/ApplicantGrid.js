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

const tabularTheme = {
  list: cmz(`
    display: block
  `),

  item: cmz(`
    display: block
  `),

  more: cmz(`
    & button {
      width: 100%
    }
  `)
}

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
      <div>
        <TruncatedList
          items={items}
          visible={visible}
          increment={increment}
          listClass={cx.list}
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
      </div>
    ) : null
  }
}

export default ApplicantGrid
