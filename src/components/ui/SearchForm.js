// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import SelectBox from './SelectBox'
import SvgIcon from './SvgIcon'
import Keywords from './Keywords'
import ApplicantGridHeader from './ApplicantGridHeader'

import theme from '../../styles/theme'

const cmz = require('cmz')

const listTheme = {
  searchFormContainer: cmz(`
    background-color: ${theme.baseBright}
  `),

  searchForm: cmz(`
    width: 100%
  `),

  selectLists: cmz(`
    display: flex
    align-items: center
  `),

  listsSelector: cmz(`
    width: calc(100% - 82px)
    max-width: calc(100% - 82px)
  `),

  displayButtons: cmz(`
    display: flex
    align-items: center
    flex-wrap: nowrap
    margin-left: 10px
    cursor: pointer
  `),

  displayButton: cmz(`
    & svg {
      display: block
      padding: 10px
    }
  `),

  formKeywords: cmz(`
    display: block
    width: 100%
    margin: 20px 0 0
    padding: 20px 0 0
    border-top: 1px solid ${theme.lineSilver4}
  `),

  selectFields: cmz(`
    display: inline-block
    width: 100%
    margin-top: 20px
  `),

  formButton: cmz(`
    display: block
    width: 100%
    height: 40px
    margin-top: 20px
    padding: 0 24px
  `),

  applicantsStatusFilter: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
    padding: 20px 10px 0
    box-sizing: border-box
  `)
}

const tabularTheme = {
  searchFormContainer: cmz(`
    width: 100%
    display: flex
    flex-direction: column
    box-sizing: border-box
  `),

  searchForm: cmz(`
    display: flex
    flex-shrink: 0
    width: 100%
    padding: 30px
    box-sizing: border-box
    background-color: ${theme.baseBright}
  `),

  selectLists: cmz(`
    display: flex
    flex-shrink: 0
    align-items: center
  `),

  listsSelector: cmz(`
    width: 250px
  `),

  displayButtons: cmz(`
    display: flex
    align-items: center
    flex-wrap: nowrap
    margin-left: 10px
    cursor: pointer
  `),

  displayButton: cmz(`
    & svg {
      display: block
      padding: 10px
    }
  `),

  formKeywords: cmz(`
    margin: 0 10px
    height: 58px
    flex: 1
    flex-shrink: 0
    min-width: 200px
  `),

  selectFields: cmz(`
    flex-shrink: 0
    width: 250px
    margin: 0 10px
  `),

  formButton: cmz(`
    margin: 0 10px
    height: 58px
  `),

  applicantsStatusFilter: cmz(`
    width: 100%
    padding: 20px 30px 30px
    box-sizing: border-box
  `)
}

type SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

type Props = {
  mode: 'list' | 'tabular',
  lists: Array<*>,
  onSelectList: Function,
  keywords: string,
  onChangeKeywords: Function,
  fields: Array<*>,
  onSelectField: Function,
  onSubmit: Function,
  openListEditorModal: Function,
  renderApplicantsStatusFilter: any,
  headerColumns: Array<*>,
  sortBy: string,
  sortDirection: $Values<SortDirections>, // eslint-disable-line no-undef
  onSortingChange: Function,
  switchDisplay: Function
}

const SORT_DIRECTIONS: SortDirections = {
  ASCENDING: 'asc',
  DESCENDING: 'desc'
}

class SearchForm extends PureComponent<Props> {
  static defaultProps = {
    mode: 'list',
    lists: [],
    onSelectList: () => {},
    keywords: '',
    onChangeKeywords: () => {},
    fields: [],
    onSelectField: () => {},
    onSubmit: () => {},
    openListEditorModal: () => {},
    renderApplicantsStatusFilter: null,
    headerColumns: [],
    sortBy: '',
    sortDirection: SORT_DIRECTIONS.ASCENDING,
    onSortingChange: () => {},
    switchDisplay: () => {}
  }

  handleModalOpen = (e: Object) => {
    e.preventDefault()
    this.props.openListEditorModal()
  }

  handleSwitchDisplay = (e: Object, mode: string) => {
    e.preventDefault()
    this.props.switchDisplay(mode)
  }

  render () {
    const {
      mode,
      lists,
      onSelectList,
      keywords,
      onChangeKeywords,
      fields,
      onSelectField,
      onSubmit,
      renderApplicantsStatusFilter,
      headerColumns,
      onSortingChange,
      sortBy,
      sortDirection

    } = this.props

    const themeClasses = mode === 'tabular' ? tabularTheme : listTheme

    const renderDislpaySwitchButtons = () => (
      <div className={themeClasses.displayButtons}>
        <a
          className={themeClasses.displayButton}
          onClick={(e) => this.handleSwitchDisplay(e, 'tabular')}
        >
          <SvgIcon
            icon='tabular'
            color={mode === 'tabular' ? 'default' : 'grayscale'}
            hover='default'
          />
        </a>
        <a
          className={themeClasses.displayButton}
          onClick={(e) => this.handleSwitchDisplay(e, 'list')}
        >
          <SvgIcon
            icon='cards'
            color={mode !== 'tabular' ? 'default' : 'grayscale'}
            hover='default'
          />
        </a>
      </div>
    )

    return (
      <div className={theme.searchFormContainer}>
        <form onSubmit={onSubmit} className={theme.searchForm}>
          <div className={theme.selectLists}>
            <SelectBox
              placeholder='Select Lists'
              items={lists}
              visibleItems={3}
              hasSearch
              collectionLabel='List'
              onSelect={onSelectList}
              shouldSortItems={false}
              append={
                <Button type='button' selectbox onClick={this.handleModalOpen}>
                  <span><SvgIcon icon='edit' /> Edit lists</span>
                </Button>
              }
            />
          </div>
          <Keywords
            values={keywords}
            onChange={onChangeKeywords}
            onSubmit={onSubmit}
            className={themeClasses.formKeywords}
          />
          <div className={themeClasses.selectFields}>
            <SelectBox
              placeholder='Select Fields'
              items={fields}
              visibleItems={3}
              hasSearch
              collectionLabel='Field'
              onSelect={onSelectField}
            />
          </div>
          <Button
            className={themeClasses.formButton}
            type='submit'
            raised
          >
            Show
          </Button>
          {mode === 'tabular' && renderDislpaySwitchButtons()}
        </form>
        {renderApplicantsStatusFilter && (
          <div className={themeClasses.applicantsStatusFilter}>{renderApplicantsStatusFilter}</div>
        )}
        {mode === 'tabular' && (
          <ApplicantGridHeader
            headerColumns={headerColumns}
            onSortingChange={onSortingChange}
            sortBy={sortBy}
            sortDirection={sortDirection}
          />
        )}
      </div>
    )
  }
}

export default SearchForm
