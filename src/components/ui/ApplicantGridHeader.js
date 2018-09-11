// @flow

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import React, { PureComponent } from 'react'
import { getClassName } from '../../utils/helpers'

const cmz = require('cmz')

type SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

type HeaderColumn = {
  name: string,
  label: string,
  isSortable?: boolean,
  size: string
}

type Props = {
  className?: string,
  headerColumns: Array<HeaderColumn>,
  sortBy?: string,
  sortDirection?: $Values<SortDirections>, // eslint-disable-line no-undef
  onSortingChange: Function
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
        border-bottom: 4px solid ${theme.typoLabel}
      }
    `),
  down: cmz(arrowBase,
    `
      &:after {
        border-top: 4px solid ${theme.typoLabel}
      }
    `)
}

const cx = {
  container: cmz(typo.baseText,
    `
      & {
        display: flex
        width: fit-content
        margin: 14px
      }
  
      & > span {
          margin-right: 14px
          color: ${theme.typoLabel}
          font-size: 16px
          font-weight: normal
          flex-wrap: wrap
        }
      
  `),
  placeHolder: cmz(`
    width: 42px
  `),
  small: cmz(`
    & {
      width: 80px
      margin: 0 14px
    }

    & > span {
      white-space: nowrap
    }
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
      sortDirection
    } = this.props
    const direction = getSortDirection(name, sortBy, sortDirection)
    this.props.onSortingChange({ sortBy: name, sortDirection: direction })
  }

  render () {
    const {
      className,
      headerColumns,
      sortBy,
      sortDirection
    } = this.props
    const direction = sortDirection || SORT_DIRECTIONS.ASCENDING
    const componentCustomClassName = className || ''
    const componentClassName = getClassName({
      [cx.container]: true,
      [componentCustomClassName]: className
    })
    return (
      <div className={componentClassName}>
        <span className={cx.placeHolder} />
        {headerColumns.map(headerColumn => {
          const {
            isSortable,
            name,
            size,
            label
          } = headerColumn
          const columnClassName = getClassName({
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
              {label}
            </span>
          )
        })}
      </div>
    )
  }
}

export default ApplicantGridHeader
