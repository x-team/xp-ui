// @flow

import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { Data } from 'react-data-grid-addons'

import Loader from './Loader'

import type { Applicant } from '../../utils/types'

const cmz = require('cmz')

const RENDER_ROWS_COUNT = 1000

const selectors = Data.Selectors

// Given the design of React-Data-Grid, it relies on minHeight to calculate the visible area and show/hide
// the virtualize rows as the user scrolls.
// Because of that it's hard to define adaptative height and this behaviour is not officialy supported by the library.
// The simplest workaround is to calculate the data grid height based on viewport and reducing the unavailable space
// with fixed unit (pixel).
const getTableMinHeightValues = () => {
  const viewportHeightReduction = 232
  const minAcceptableHeight = 386 // amount of pixels needed to show 6 table rows
  const isViewportTooSmall = window.innerHeight - viewportHeightReduction < minAcceptableHeight

  return {
    css: isViewportTooSmall ? `${minAcceptableHeight}px` : `calc(100vh - ${viewportHeightReduction}px)`,
    dataGrid: isViewportTooSmall ? minAcceptableHeight : window.innerHeight - viewportHeightReduction
  }
}

const tableMinHeightValues = getTableMinHeightValues()

const cx = {
  overlay: cmz(`
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center
  `),

  gridContainer: cmz(`
    display: flex
    flex-direction: column
    padding-top: 20px
  `),

  grid: cmz(`
    & {
      flex: 1
    }

    & .react-grid-Grid {
      min-height: ${tableMinHeightValues.css} !important
    }

    & .react-grid-HeaderCell input {
      width: 100%
      max-width: 100%
    }

    & .rdg-selected {
      display: none
    }
  `)
}

type SortDirection = 'ASC' | 'DESC' | 'NONE' | ''

type Props = {
  isLoading: boolean,
  applicants: Array<Applicant>,
  visibleColumns: Array<Object>,
  sortDirection: SortDirection,
  sortColumn: string,
  handleGridSort: (sortColumn: string, sortDirection: SortDirection) => void
}

const getRows = (applicants: Array<Applicant>) => selectors.getRows({ rows: applicants })
const getRow = (applicants: Array<Applicant>) => (rowIdx: number) => getRows(applicants)[rowIdx]

const DataGrid = ({
  visibleColumns,
  sortColumn,
  sortDirection,
  handleGridSort,
  applicants,
  isLoading
}: Props) =>
  isLoading ? (
    <div className={cx.overlay}>
      <Loader />
    </div>
  ) : (
    <div className={cx.gridContainer}>
      <div className={cx.grid}>
        <ReactDataGrid
          columns={visibleColumns}
          rowGetter={getRow(applicants)}
          rowsCount={RENDER_ROWS_COUNT}
          headerFiltersHeight={0}
          onGridSort={handleGridSort}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          minHeight={tableMinHeightValues.dataGrid}
        />
      </div>
    </div>
  )

DataGrid.defaultProps = {
  applicants: [],
  visibleColumns: []
}

export default DataGrid
