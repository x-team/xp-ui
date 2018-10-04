// @flow

import React, { PureComponent } from 'react'

import Button from './Button'
import SelectBox from './SelectBox'
import SvgIcon from './SvgIcon'
import Keywords from './Keywords'

import { DISPLAY_MODES } from '../../utils/constants'

import theme from '../../styles/theme'

import type { DisplayModes } from '../../utils/types'

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
    margin-top: 20px
  `),

  selectFields: cmz(`
    display: inline-block
    width: 100%
    margin: 20px 0 0
    padding: 20px 0 0
    border-top: 1px solid ${theme.lineSilver4}
  `),

  formButton: cmz(`
    display: block
    width: 100%
    height: 58px
    margin-top: 20px
    padding: 0 24px
    transition: margin, padding 0
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
    min-width: 100%
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
    align-items: center
    margin-right: 10px
    width: 100%
    max-width: 300px
    min-width: 200px
  `),

  listsSelector: cmz(`
    width: inherit
    max-width: inherit
    min-width: inherit
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
    max-width: 300px
    min-width: 200px
    margin: 0 10px
  `),

  formButton: cmz(`
    margin: 0 10px
    height: 58px
    padding: 10px 40px
    transition: margin, padding 0
  `),

  applicantsStatusFilter: cmz(`
    width: 100%
    padding: 20px 30px
    box-sizing: border-box
  `)
}

type Props = {
  mode: $Values<DisplayModes>, // eslint-disable-line no-undef
  lists: Array<*>,
  onSelectList: Function,
  onClearList: Function,
  keywords: string,
  onChangeKeywords: Function,
  fields: Array<*>,
  onSelectField: Function,
  onSubmit: Function,
  openListEditorModal: Function,
  renderApplicantsStatusFilter: any,
  switchDisplay: Function
}

const SELECTBOX_HEIGTH = 3

class SearchForm extends PureComponent<Props> {
  static defaultProps = {
    mode: 'list',
    lists: [],
    keywords: '',
    fields: [],
    renderApplicantsStatusFilter: null
  }

  handleModalOpen = (event: Object) => {
    const { openListEditorModal } = this.props
    event.preventDefault()
    openListEditorModal && openListEditorModal()
  }

  handleSwitchDisplay = (mode: string) => (event: Object) => {
    const { switchDisplay } = this.props
    event.preventDefault()
    switchDisplay && switchDisplay(mode)
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

    const isTabular = mode === DISPLAY_MODES.TABULAR
    const themeClasses = isTabular ? tabularTheme : listTheme

    const renderDisplaySwitchButtons = () => (
      <div className={themeClasses.displayButtons}>
        <a
          className={themeClasses.displayButton}
          onClick={this.handleSwitchDisplay('tabular')}
          title='View in tabular mode'
        >
          <SvgIcon
            icon='grid'
            color={isTabular ? 'default' : 'grayscale'}
            hover='default'
          />
        </a>
        <a
          className={themeClasses.displayButton}
          onClick={this.handleSwitchDisplay('list')}
          title='View in list mode'
        >
          <SvgIcon
            icon='list'
            color={!isTabular ? 'default' : 'grayscale'}
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
                placeholder='Select List'
                items={lists}
                visibleItems={SELECTBOX_HEIGTH}
                hasClear
                collectionLabel='List'
                onClick={onSelectList}
                onClear={onClearList}
                shouldSortItems={false}
                areItemsToggleable={false}
                append={
                  <Button type='button' selectbox onClick={this.handleModalOpen}>
                    <span><SvgIcon icon='edit' /> Edit lists</span>
                  </Button>
                }
              />
            </div>
            {!isTabular && renderDisplaySwitchButtons()}
          </div>
          <div className={themeClasses.selectFields}>
            <SelectBox
              placeholder='Select Fields'
              items={fields}
              visibleItems={3}
              collectionLabel='Field'
              onSelect={onSelectField}
            />
          </div>
          <Keywords
            values={keywords}
            onChange={onChangeKeywords}
            onSubmit={onSubmit}
            className={themeClasses.formKeywords}
          />
          <Button
            className={themeClasses.formButton}
            type='submit'
            raised
          >
            Show
          </Button>
          {isTabular && renderDisplaySwitchButtons()}
        </form>
        {renderApplicantsStatusFilter && (
          <div className={themeClasses.applicantsStatusFilter}>{renderApplicantsStatusFilter}</div>
        )}
      </div>
    )
  }
}

export default SearchForm
