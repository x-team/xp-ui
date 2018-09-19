// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import SelectBox from './SelectBox'
import SvgIcon from './SvgIcon'
import Keywords from './Keywords'

import theme from '../../styles/theme'

const cmz = require('cmz')

const cardTheme = {
  searchFormContainer: cmz(`
    background-color: ${theme.baseBright}
    width: 630px
  `),

  searchForm: cmz(`
    & {
      padding: 30px 50px
    }
    &:empty {
      padding: 0
    }
  `),

  selectLists: cmz(`
    display: flex
    align-items: center
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
    padding: 10px 30px 30px
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
    background-color: ${theme.baseBrighter}
    padding: 10px 30px 30px
    box-sizing: border-box
  `)
}

type Props = {
  mode: 'card' | 'tabular',
  lists: Array<*>,
  onSelectList: Function,
  onClearList: Function,
  keywords: string,
  onChangeKeywords: Function,
  fields: Array<*>,
  onSelectField: Function,
  onSubmit: Function,
  openListEditorModal: Function,
  renderApplicantsStatusFilter: any
}

class SearchForm extends PureComponent<Props> {
  static defaultProps = {
    mode: 'card',
    lists: [],
    keywords: '',
    fields: [],
    renderApplicantsStatusFilter: null
  }

  handleModalOpen = (e: Object) => {
    const { openListEditorModal } = this.props
    e.preventDefault()
    openListEditorModal && openListEditorModal()
  }

  render () {
    const {
      mode,
      lists,
      onSelectList,
      onClearList,
      keywords,
      onChangeKeywords,
      fields,
      onSelectField,
      onSubmit,
      renderApplicantsStatusFilter
    } = this.props

    const theme = mode === 'card' ? cardTheme : tabularTheme

    return (
      <div className={theme.searchFormContainer}>
        <form onSubmit={onSubmit} className={theme.searchForm}>
          <div className={theme.selectLists}>
            <SelectBox
              placeholder='Select Lists'
              items={lists}
              visibleItems={3}
              hasSearch
              hasClear
              collectionLabel='List'
              shouldSortItems={false}
              onClick={onSelectList}
              onClear={onClearList}
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
            className={theme.formKeywords}
          />
          <div className={theme.selectFields}>
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
            className={theme.formButton}
            type='submit'
            size='large'
            raised
          >
            Show
          </Button>
        </form>
        {renderApplicantsStatusFilter && (
          <div className={theme.applicantsStatusFilter}>{renderApplicantsStatusFilter}</div>
        )}
      </div>
    )
  }
}

export default SearchForm
