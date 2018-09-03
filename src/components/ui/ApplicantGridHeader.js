// @flow

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import React, { PureComponent } from 'react'
import { getClassName } from '../../utils/helpers'

const cmz = require('cmz')

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
  sortDirection?: string,
  onSortingChange: Function
}

const SORT_DIRECTIONS = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
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
  [`${SORT_DIRECTIONS.ASCENDING}Sort`]: cmz(`
    &:after {
      content: ''
      width: 0
      height: 0 
      border-left: 4px solid transparent
      border-right: 4px solid transparent
      border-bottom: 4px solid ${theme.typoLabel}
      vertical-align: middle
      display: inline-block;
      margin-left: 5px;
    }
  `),
  [`${SORT_DIRECTIONS.DESCENDING}Sort`]: cmz(`
    &:after {
      content: ''
      width: 0
      height: 0 
      border-left: 4px solid transparent
      border-right: 4px solid transparent
      border-top: 4px solid ${theme.typoLabel}
      vertical-align: middle
      display: inline-block;
      margin-left: 5px;
    }
  `)
}

const toggleDirection = (direction: ?string) => {
  if (direction === SORT_DIRECTIONS.ASCENDING) {
    return SORT_DIRECTIONS.DESCENDING
  }
  return SORT_DIRECTIONS.ASCENDING
}

const getSortDirection = (columnName: string, sortBy: ?string, sortDirection: ?string): string => {
  if (columnName === sortBy) {
    return toggleDirection(sortDirection)
  }
  return SORT_DIRECTIONS.ASCENDING
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
