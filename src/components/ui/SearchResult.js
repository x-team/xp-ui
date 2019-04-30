// @flow

import React, { Component } from 'react'

import DataGrid from './DataGrid'
import MetaGroup from './MetaGroup'
import ResultCount from './ResultCount'
import ColumnsCustomizer from './ColumnsCustomizer'

import { size } from '../../utils/helpers'

import type { Applicant, Filters } from '../../utils/types'

const cmz = require('cmz')

const cx = {
  searchResultContent: cmz(`
    box-sizing: border-box
    padding: 40px 60px 20px
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
  `)
}

type Props = {
  applicants: Array<Applicant>,
  isLoading: boolean,
  visibleColumnsDropdownItems: Array<*>,
  visibleColumns: Array<*>,
  handleGridSort: () => void,
  queryFilters: Filters,
  handleColumnVisibilityChange: () => void,

  // getUpdatedURL: any, // (filters: Filters) => Filters,
  // applicants: any, // ?Array<Doc>,
  // columns: Array<*>,
  // queryFilters: any,
  // handleColumnVisibilityChange: any // (item: GridColumnVisibility) => void
}

class SearchResult extends Component<Props, void> {
  static defaultProps = {
    applicants: []
  }

  render () {
    const {
      applicants,
      isLoading,
      visibleColumnsDropdownItems,
      visibleColumns,
      queryFilters,
      handleColumnVisibilityChange,
      handleGridSort
    } = this.props
    const { sort = '', order = 'NONE' } = queryFilters || {}

    return (
      <div className={cx.searchResultContent}>
        <MetaGroup
          secondaryElements={[
            <ResultCount key='ResultCount' items={size(applicants)} />,
            <ColumnsCustomizer
              key='ColumnsCustomizer'
              items={visibleColumnsDropdownItems}
              onSelect={handleColumnVisibilityChange}
            />
          ]}
        />
        <DataGrid
          isLoading={isLoading}
          applicants={applicants}
          visibleColumns={visibleColumns}
          sortColumn={sort}
          sortDirection={order}
          handleGridSort={handleGridSort}
        />
      </div>
    )
  }
}

export default SearchResult
