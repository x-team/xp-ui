// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    outline: none
    flex: 1
  `),

  list: cmz(`
    display: block
  `),

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
  increment?: number,
  onViewMore?: Function,
  isFetching?: boolean,
  hasMore?: boolean,
  onKeyPress?: Function
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

  handleViewMore = (showMore: Function) => {
    const { onViewMore } = this.props
    onViewMore && onViewMore()
    showMore()
  }

  handleKeyPress = () => {
    const { onKeyPress } = this.props
    onKeyPress && onKeyPress()
  }

  renderViewMore = (amount: number, action: Function, isFetching: boolean) => (
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
  )

  render () {
    const {
      items,
      visible,
      increment,
      isFetching,
      hasMore
    } = this.props

    return items && (
      <div
        className={cx.wrapper}
        data-testid='xpui-applicantGrid'
        tabIndex={0}
        onKeyPress={this.handleKeyPress}
      >
        <TruncatedList
          items={items}
          visible={visible}
          increment={increment}
          listClass={cx.list}
          itemClass={cx.item}
          isFetching={isFetching}
          hasMore={hasMore}
          viewMore={this.renderViewMore}
        />
      </div>
    )
  }
}

export default ApplicantGrid
