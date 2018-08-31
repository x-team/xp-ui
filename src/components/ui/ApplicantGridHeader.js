// @flow

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const SORT_DIRECTIONS = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

const cx = {
  container: cmz(typo.baseText,
    `
      & {
        display: flex
        width: 100vw
        margin: 14px
      }
  
      & > span {
          margin-right: 14px
          color: ${theme.typoLabel}
          font-size: 18px
          white-space: nowrap
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
      content: ' \\25B4'
    }
  `),
  [`${SORT_DIRECTIONS.DESCENDING}Sort`]: cmz(`
    &:after {
      content: ' \\25BE'
    }
  `)
}

type Props = {
  config: Array<*>,
  sortBy?: string,
  sortDirection?: string,
  onSortingChange: Function
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

const getClassName = (config: Object) => Object.keys(config)
  .filter(className => config && className && config[className])
  .join(' ')

class ApplicantGridHeader extends PureComponent<Props> {
  handleColumnClick = (name: string, isSortable: ?boolean) => () => {
    if(!isSortable) {
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
    const { config, sortBy, sortDirection } = this.props
    const direction = sortDirection || SORT_DIRECTIONS.ASCENDING
    return (
      <div className={cx.container}>
        <span className={cx.placeHolder} />
        {config.map(headerColumn => {
          const {
            isSortable,
            name,
            size,
            label
          } = headerColumn
          const className = getClassName({
            [cx[size]]: true,
            [cx.sortable]: isSortable,
            [cx[`${direction}Sort`]]: sortBy === name
          })

          return (
            <span
              key={name}
              className={className}
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
