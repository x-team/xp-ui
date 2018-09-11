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
    & {
      width: 100%
    }
    &:empty {
      padding: 0
    }
  `),

  selectLists: cmz(`
    display: flex
    align-items: center
  `),

  listsSelector: cmz(`
    width: calc(100% - 106px)
  `),

  listsButton: cmz(`
    width: 106px
    height: 58px
    margin-left: 10px
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
    background-color: ${theme.baseBright}
    display: flex
    flex-direction: column
    box-sizing: border-box
  `),

  searchForm: cmz(`
    display: flex
    flex-shrink: 0
    width: 100%
    padding: 50px 30px 30px
    box-sizing: border-box
  `),

  selectLists: cmz(`
    width: 420px
    display: flex
    flex-shrink: 0
    align-items: center
  `),

  listsSelector: cmz(`
  `),

  listsButton: cmz(`
    margin: 0 10px 0 20px
    width: 106px
    height: 58px
  `),

  formKeywords: cmz(`
    margin: 0 10px
    min-width: 300px
    height: 58px
    flex: 1
    flex-shrink: 0
  `),

  selectFields: cmz(`
    flex-shrink: 0
    width: 300px
    margin: 0 10px
  `),

  formButton: cmz(`
    margin: 0 10px
    height: 58px
  `),

  applicantsStatusFilter: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
    padding: 20px 30px 30px
    box-sizing: border-box
  `)
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
  headerColumns?: Array<*>,
  sortBy?: string,
  sortDirection?: string,
  onSortingChange?: Function
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
    sortDirection: 'asc',
    onSortingChange: () => {}
  }

  handleModalOpen = (e: Object) => {
    e.preventDefault()
    this.props.openListEditorModal()
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

    return (
      <div className={themeClasses.searchFormContainer}>
        <form onSubmit={onSubmit} className={themeClasses.searchForm}>
          <div className={themeClasses.selectLists}>
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
              className={themeClasses.listsSelector}
            />
            <Button
              className={themeClasses.listsButton}
              type='button'
              size='large'
              raised
              onClick={onClickShowLists}
            >
              Show
            </Button>
          </div>
          <Keywords
            values={keywords}
            onChange={onChangeKeywords}
            onSubmit={onSubmit}
            className={themeClasses.formKeywords}
          />
          <SelectBox
            placeholder='Select Fields'
            items={fields}
            visibleItems={3}
            hasSearch
            collectionLabel='Field'
            onSelect={onSelectField}
            className={themeClasses.selectFields}
          />
          <Button
            className={themeClasses.formButton}
            type='submit'
            size='large'
            raised
          >
            Filter
          </Button>
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
