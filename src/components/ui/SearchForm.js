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
  `),

  searchForm: cmz(`
    & {
      padding: 30px 50px
    }
    &:empty {
      padding: 0
    }
  `),

  listsButton: cmz(`
    width: 100px
    height: 58px
    margin-left: 10px
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
    width: 50%
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

  listsButton: cmz(`
    margin: 0 10px 0 20px
    width: 100px
    height: 58px
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
  onClickShowLists: Function,
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
    onSelectList: () => {},
    onClickShowLists: () => {},
    keywords: '',
    onChangeKeywords: () => {},
    fields: [],
    onSelectField: () => {},
    onSubmit: () => {},
    openListEditorModal: () => {},
    renderApplicantsStatusFilter: null
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
              collectionLabel='List'
              onSelect={onSelectList}
              append={
                <Button type='button' selectbox onClick={this.handleModalOpen}>
                  <span><SvgIcon icon='edit' /> Edit lists</span>
                </Button>
              }
            />
            <Button
              className={theme.listsButton}
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
            Filter
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
