// @flow
/* globals SyntheticMouseEvent, HTMLButtonElement */

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import React, { PureComponent } from 'react'
import { getClassName } from '../../utils/helpers'

import Dropdown from './Dropdown'

import type { Element } from 'react'

const cmz = require('cmz')

type SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

type HeaderColumn = {
  name: string,
  label: string,
  isSortable?: boolean,
  size: string,
  filterRender?: ({ onChangeFilter: () => void, isFetching?: boolean }) => Element<*>
}

type Props = {
  className?: string,
  headerColumns: Array<HeaderColumn | Array<HeaderColumn>>,
  sortBy?: string,
  sortDirection?: $Values<SortDirections>, // eslint-disable-line no-undef
  onSortingChange: Function,
  isFetching?: boolean
}

const SORT_DIRECTIONS: SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

const arrowBase = cmz(`
  &:after {
    content: ''
    width: 0
    height: 0
    border-left: 4px solid transparent
    border-right: 4px solid transparent
    vertical-align: middle
    display: inline-block;
    margin-left: 5px;
  }
`)

const arrow = {
  up: cmz(arrowBase,
    `
      &:after {
        border-bottom: 4px solid ${theme.iconDark}
      }

      &.isFitering:after {
        border-bottom: 4px solid ${theme.baseRed}
      }
    `),
  down: cmz(arrowBase,
    `
      &:after {
        border-top: 4px solid ${theme.iconDark}
      }

      &.isFitering:after {
        border-top: 4px solid ${theme.baseRed}
      }
    `)
}

const cx = {
  container: cmz(typo.baseText,
    `
      & {
        display: inline-flex
        min-width: 100%
        padding: 14px 30px 14px 14px
        font-size: 14px
        line-height: 1.2
        border-top: 1px solid ${theme.lineSilver1}
        position: sticky
        box-sizing: border-box
        z-index: 999
        text-transform: uppercase
        font-weight: bold
        background: ${theme.baseBright}
      }

      & > span {
        margin-right: 14px
        flex-wrap: wrap
        flex-shrink: 0
      }

      & > span:first-of-type {
        padding-right: 56px
      }
  `),
  column: cmz(`
    display: inline-flex;
  `),
  grouped: cmz(`
    & {
      flex: 1
      display: flex
      justify-content: space-between
    }

    & > span {
      text-align: center
      position: relative
      white-space: nowrap
    }
  `),
  tiny: cmz(`
    & {
      width: 100px
      margin: 0 14px
      text-align: center
    }

    & > span {
      white-space: nowrap
    }
  `),
  small: cmz(`
    width: 150px
  `),
  medium: cmz(`
    width: 260px
  `),
  large: cmz(`
    width: 300px
  `),
  sortable: cmz(`
    & {
      cursor: pointer
    }

    &:hover {
      color: ${theme.baseDark}
    }
  `),
  filter: cmz(`
    & {
      margin-right: 10px;
    }

    & svg {
      width: 12px
    }
  `),
  dropdown: cmz(`
    background: ${theme.baseBrighter}
    margin-top: 10px
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
  `),
  clearButton: cmz(`
    text-align: right
    padding: 10px
  `),
  [`${SORT_DIRECTIONS.ASCENDING}Sort`]: arrow.up,
  [`${SORT_DIRECTIONS.DESCENDING}Sort`]: arrow.down
}

// eslint-disable-next-line no-undef
const toggleDirection = (direction: ?$Values<SortDirections>) => {
  const { ASCENDING, DESCENDING } = SORT_DIRECTIONS
  return direction === ASCENDING
    ? DESCENDING
    : ASCENDING
}

// eslint-disable-next-line no-undef
const getSortDirection = (columnName: string, sortBy: ?string, sortDirection: ?$Values<SortDirections>): string => {
  return columnName === sortBy
    ? toggleDirection(sortDirection)
    : SORT_DIRECTIONS.ASCENDING
}

class ApplicantGridHeader extends PureComponent<Props> {
  handleColumnClick = (name: string, isSortable: ?boolean) => () => {
    if (!isSortable) {
      return
    }
    const {
      sortBy,
      sortDirection,
      onSortingChange
    } = this.props
    const direction = getSortDirection(name, sortBy, sortDirection)
    onSortingChange && onSortingChange({ sortBy: name, sortDirection: direction })
  }

  stopPropagation = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event && event.stopPropagation()
  }

  onChangeFilter = () => {
    this.forceUpdate()
  }

  render () {
    const {
      className,
      headerColumns,
      sortBy,
      sortDirection,
      isFetching
    } = this.props
    const direction = sortDirection || SORT_DIRECTIONS.ASCENDING
    const componentCustomClassName = className || ''
    const componentClassName = getClassName({
      [cx.container]: true,
      [componentCustomClassName]: className
    })

    const renderCell = (headerColumn) => {
      if (Array.isArray(headerColumn)) {
        return (
          <div
            key={`grouped${headerColumns.indexOf(headerColumn).toString()}`}
            className={cx.grouped}
          >
            {headerColumn.map(renderCell)}
          </div>
        )
      }

      const {
        isSortable,
        name,
        size,
        label,
        filterRender
      } = headerColumn
      const columnClassName = getClassName({
        [cx.column]: true,
        [cx[size]]: true,
        [cx.sortable]: isSortable,
        [cx[`${direction}Sort`]]: sortBy === name
      })

      return (
        <span
          key={name}
          className={columnClassName}
          onClick={this.handleColumnClick(name, isSortable)}
        >
          {filterRender && (
            <div className={cx.filter} onClick={this.stopPropagation}>
              <Dropdown
                icon='filter'
                targetXOrigin='left'
                onClose={this.onChangeFilter}
              >
                <div className={cx.dropdown}>
                  {filterRender({ onChangeFilter: this.onChangeFilter, isFetching })}
                </div>
              </Dropdown>
            </div>
          )}
          {label}
        </span>
      )
    }

    return (
      <div className={componentClassName}>
        {headerColumns && headerColumns.map(renderCell)}
      </div>
    )
  }
}

export default ApplicantGridHeader
