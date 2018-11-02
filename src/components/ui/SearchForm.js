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
    margin: 16px 0
    padding: 0 40px
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
    & {
      display: block
      flex: 1
      padding: 0
      margin-right: 16px
    }

    & .Select-menu-outer {
      width: 100%
    }
  `),

  fieldsAndStatusesContainer: cmz(`
    display: flex
    margin: 16px 0
    padding: 0 40px
  `),

  selectFields: cmz(`
    display: inline-block
    width: calc(50% - 8px)
    max-width: calc(50% - 8px)
    margin-right: 16px
  `),

  selectStatuses: cmz(`
    display: inline-block
    width: calc(50% - 8px)
    max-width: calc(50% - 8px)
  `),

  keywordsAndformButtonContainer: cmz(`
    display: flex
    margin: 16px 0
    padding: 0 40px
  `),

  formButton: cmz(`
    display: block
    width: 100px
    height: 40px
    margin: 0
    padding: 0
    border: none
    transition: none
  `),

  applicantsStatusFilter: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
    padding: 0 40px
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
    padding: 20px 30px
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
    height: 40px
    flex: 1
    flex-shrink: 0
    min-width: 200px
  `),

  fieldsAndStatusesContainer: cmz(`
    display: inline-flex
  `),

  selectFields: cmz(`
    flex-shrink: 0
    max-width: 300px
    min-width: 200px
    margin: 0 10px
  `),

  selectStatuses: cmz(`
    margin: 0 10px
    max-width: 300px
    min-width: 200px
  `),

  keywordsAndformButtonContainer: cmz(`
    flex: 1
    display: flex
  `),

  formButton: cmz(`
    margin: 0 10px
    height: 40px
    padding: 10px 40px
    transition: none
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
  statuses: Array<*>,
  onSelectStatus: Function,
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
    statuses: [],
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
      statuses,
      onSelectStatus,
      onSubmit,
      renderApplicantsStatusFilter
    } = this.props

    const isTabular = mode === DISPLAY_MODES.TABULAR
    const themeClasses: Object = isTabular ? tabularTheme : listTheme

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
          <div className={themeClasses.fieldsAndStatusesContainer}>
            <div className={themeClasses.selectFields}>
              <SelectBox
                placeholder='Select Field'
                items={fields}
                visibleItems={SELECTBOX_HEIGTH}
                collectionLabel='Field'
                onClick={onSelectField}
                closeDropdown
              />
            </div>
            <div className={themeClasses.selectStatuses}>
              <SelectBox
                hasSearch={false}
                placeholder='Status'
                items={statuses}
                visibleItems={SELECTBOX_HEIGTH}
                collectionLabel='Status'
                onSelect={onSelectStatus}
              />
            </div>
          </div>
          <div className={themeClasses.keywordsAndformButtonContainer}>
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
          </div>
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
