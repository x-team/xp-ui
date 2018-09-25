// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'
import ApplicantGridHeader from './ApplicantGridHeader'

import theme from '../../styles/theme'

import type { DisplayModes } from '../../utils/types'
import { DISPLAY_MODES } from '../../utils/constants'

const cmz = require('cmz')

const listTheme = {
  wrapper: cmz(`
    outline: none
  `),

  tabular: '',

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

const tabularTheme = {
  wrapper: cmz(`
    outline: none
    overflow-y: auto
    overflow-x: visible
    height: calc(100% - 60px)
  `),

  tabular: cmz(`
    position: relative
    overflow-x: auto
    overflow-y: hidden
    height: calc(100vh - 300px)
    min-width: 100%
  `),

  list: cmz(`
    display: block
  `),

  item: cmz(`
    display: block
    border-bottom: 1px solid ${theme.baseBright}
  `),

  more: cmz(`
    & button {
      width: 100%
    }
  `)
}

type SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

type Props = {
  items?: Array<*>,
  mode?: $Values<DisplayModes>, // eslint-disable-line no-undef
  visible?: number,
  increment?: number,
  onViewMore?: Function,
  isFetching?: boolean,
  hasMore?: boolean,
  onKeyPress?: Function,
  headerColumns: Array<*>,
  sortBy: string,
  sortDirection: $Values<SortDirections>, // eslint-disable-line no-undef
  onSortingChange: Function
}

type State = {
  open: boolean
}

const SORT_DIRECTIONS: SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

class ApplicantGrid extends PureComponent<Props, State> {
  static defaultProps = {
    items: [],
    mode: DISPLAY_MODES.LIST,
    visible: 50,
    increment: 50,
    headerColumns: [],
    sortBy: '',
    sortDirection: SORT_DIRECTIONS.ASCENDING
  }

  handleViewMore = (showMore: Function) => {
    const { onViewMore } = this.props
    onViewMore && onViewMore()
    showMore()
  }

  render () {
    const {
      items,
      mode,
      visible,
      increment,
      isFetching,
      hasMore,
      onKeyPress,
      headerColumns,
      onSortingChange,
      sortBy,
      sortDirection
    } = this.props
    const { TABULAR } = DISPLAY_MODES
    const cx = mode === TABULAR ? tabularTheme : listTheme

    const handleKeyPress = () => {
      onKeyPress && onKeyPress()
    }

    const renderItems = () => items && (
      <div
        className={cx.wrapper}
        data-test='applicants'
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
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
    )

    return mode === 'tabular' ? (
      <div className={cx.tabular}>
        <ApplicantGridHeader
          headerColumns={headerColumns}
          onSortingChange={onSortingChange}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        {renderItems()}
      </div>
    ) : renderItems()
  }
}

export default ApplicantGrid
