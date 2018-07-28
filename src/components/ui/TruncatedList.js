// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const cx = {
  list: cmz(`
    list-style: none
    margin: 0
    padding: 0
  `),

  item: cmz(`
    display: inline-block
    padding: 0
  `),

  hidden: cmz(`
    display: none
  `)
}

type Props = {
  items: Array<*>,
  visible: number,
  increment?: number,
  inserted?: boolean,
  viewMore?: Function | void,
  page?: number,
  isFetching?: boolean,
  hasMore?: boolean,
  listClass?: string,
  itemClass?: string
}

type State = {
  allVisible: boolean,
  hiddenItems: number,
  page: number,
  pagesCount: number,
  itemsLength: number
}

class TruncatedList extends PureComponent<Props, State> {
  static defaultProps = {
    items: [],
    visible: 2,
    increment: 0,
    inserted: false,
    isFetching: false,
    hasMore: false
  }

  constructor (props: Props) {
    super(props)
    this.state = this.getUpToDateState({}, this.props)
  }

  componentDidUpdate (prevProps: Props) {
    if (!Object.is(prevProps, this.props)) {
      this.setState((prevState, props) =>
        this.getUpToDateState(prevState, props))
    }
  }

  getUpToDateState = (prevState: State | Object, props: Props) => {
    const { items, visible, increment, inserted, page } = props
    const hiddenAmount = items.length >= visible ? items.length - visible : 0

    return {
      allVisible: prevState.allVisible || hiddenAmount === 0,
      hiddenItems: inserted ? hiddenAmount + 1 : hiddenAmount,
      page: page || prevState.page || 1,
      pagesCount: increment ? hiddenAmount / increment + 1 : 2,
      itemsLength: items.length
    }
  }

  handleViewMore = (e: any) => {
    e && e.stopPropagation()
    const { visible, increment, inserted } = this.props

    this.setState((prevState: State) => ({
      allVisible: increment
        ? prevState.page + 1 >= prevState.pagesCount
        : true,
      hiddenItems: increment
        ? prevState.itemsLength - (inserted ? visible - 1 : visible) - (prevState.page * increment)
        : 0,
      page: increment
        ? prevState.page + 1
        : prevState.pagesCount
    }))
  }

  render () {
    const { items, visible, increment, inserted, viewMore, isFetching, hasMore, listClass, itemClass } = this.props
    const { allVisible, hiddenItems, page, itemsLength } = this.state

    const realVisible = inserted
      ? visible - 1
      : visible
    const nextIncrement = increment || itemsLength - realVisible
    const nextRealIncrement = hiddenItems < nextIncrement || (inserted && nextIncrement + 1 === hiddenItems)
      ? hiddenItems
      : nextIncrement
    const nextView = increment ? realVisible + (page > 1 ? (page - 1) * increment : 0) : realVisible + nextRealIncrement

    const renderShowMore = () => {
      return viewMore
        ? viewMore(nextRealIncrement, this.handleViewMore, isFetching)
        : (
          <li
            className={[cx.item, itemClass].join(' ')}
            onClick={!isFetching && this.handleViewMore}
          >
            {isFetching
              ? 'Loading more...'
              : (increment
                ? `+${nextRealIncrement} more`
                : `+${hiddenItems} more`
              )
            }
          </li>
        )
    }

    return itemsLength > 0 ? (
      <ul className={[cx.list, listClass].join(' ')}>
        {items
          .map((item, i) => {
            const isVisible = allVisible || i < realVisible || (increment && i < nextView)
              ? [cx.item, itemClass].join(' ')
              : [cx.item, cx.hidden].join(' ')
            return (
              <li className={isVisible} key={i}>
                {item}
              </li>
            )
          })
        }
        {(!allVisible || hasMore) && renderShowMore()}
      </ul>
    ) : null
  }
}

export default TruncatedList
