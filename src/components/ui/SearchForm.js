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
    width: calc(100% - 202px)
    max-width: calc(100% - 202px)
  `),

  listsButton: cmz(`
    width: 106px
    height: 58px
    margin-left: 10px
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

  listsButton: cmz(`
    margin: 0 10px 0 20px
    width: 106px
    height: 58px
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
  onClickShowLists: Function,
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
    onClickShowLists: () => {},
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
      onClickShowLists,
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
          // to do: make able to click on new tab
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
          // to do: make able to click on new tab
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
      <div className={themeClasses.searchFormContainer}>
        <form onSubmit={onSubmit} className={themeClasses.searchForm}>
          <div className={themeClasses.selectLists}>
            <div className={themeClasses.listsSelector}>
              <SelectBox
                placeholder='Select Lists'
                items={lists}
                visibleItems={3}
                hasSearch
                collectionLabel='List'
                onSelect={onSelectList}
                append={
                  <Button type='button' selectbox onClick={this.handleModalOpen}>
                    <span><SvgIcon icon='edit' /> Edit lists</span>
                  </Button>
                }
              />
            </div>
            <Button
              className={themeClasses.listsButton}
              type='button'
              raised
              onClick={onClickShowLists}
            >
              Show
            </Button>
            {mode !== 'tabular' && renderDislpaySwitchButtons()}
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
            Filter
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
