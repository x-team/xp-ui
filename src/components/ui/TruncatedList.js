// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const styles = {
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
  increment: number,
  inserted: boolean,
  viewMore: Function | void
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
    inserted: false
  }

  constructor (props: Props) {
    super(props)
    this.state = this.getInitialState({}, this.props)
  }

  componentDidUpdate (prevProps: Props) {
    if (!Object.is(prevProps, this.props)) {
      this.setState((prevState, props) =>
        this.getInitialState(prevState, props))
    }
  }

  getInitialState = (prevState: State | Object, props: Props) => {
    const { items, visible, increment, inserted } = props
    const hiddenAmount = items.length >= visible ? items.length - visible : 0
    return {
      allVisible: prevState.allVisible || hiddenAmount === 0,
      hiddenItems: inserted ? hiddenAmount + 1 : hiddenAmount,
      page: prevState.page || 1,
      pagesCount: increment ? hiddenAmount / increment + 1 : 2,
      itemsLength: items.length
    }
  }

  handleViewMore = () => {
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
    const { items, visible, increment, inserted, viewMore } = this.props
    const { allVisible, hiddenItems, page, itemsLength } = this.state

    const realVisible = inserted
      ? visible - 1
      : visible
    const nextIncrement = increment || itemsLength - realVisible
    const nextRealIncrement = hiddenItems < nextIncrement
      || (inserted && nextIncrement + 1 === hiddenItems)
      ? hiddenItems
      : nextIncrement
    const nextView = increment ? realVisible + (page > 1 ? (page - 1) * increment : 0) : realVisible + nextRealIncrement

    const renderShowMore = () => {
      return viewMore
        ? viewMore(nextRealIncrement, this.handleViewMore)
        : (
          <li
            className={styles.item}
            onClick={this.handleViewMore}
          >
            {increment
              ? `+${nextRealIncrement} more`
              : `+${hiddenItems} more`
            }
          </li>
        )
    }

    return itemsLength > 0 ? (
      <ul className={styles.list}>
        {items
          .map((item, i) => {
            const isVisible = allVisible || i < realVisible || (increment && i < nextView)
              ? styles.item
              : [styles.item, styles.hidden].join(' ')
            return (
              <li className={isVisible} key={i}>
                {item}
              </li>
            )
          })
        }
        {!allVisible && renderShowMore()}
      </ul>
    ) : null
  }
}

export default TruncatedList
