// @flow

import React, { PureComponent } from 'react'

import ProfileHeaderLinks from './ProfileHeaderLinks'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

type DisplayModes = {
  LIST: 'list',
  TABULAR: 'tabular'
}

type Props = {
  applicant?: Element<*>,
  search?: Element<*>,
  result?: Element<*>,
  mode?: $Values<DisplayModes>, // eslint-disable-line no-undef
}

const DISPLAY_MODES: DisplayModes = {
  LIST: 'list',
  TABULAR: 'tabular'
}

const dimensions = {
  screenHeight: '100vh',
  headerHeight: '86px',
  headingHeight: '60px',
  searchWidth: {
    [DISPLAY_MODES.LIST]: '530px',
    [DISPLAY_MODES.TABULAR]: '100%'
  },
  searchHeight: {
    [DISPLAY_MODES.LIST]: '410px',
    [DISPLAY_MODES.TABULAR]: 'auto'
  }
}

const cx = {
  main: cmz(`
    position: relative
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
  `),

  search: cmz(`
    position: relative
  `),

  searchForm: cmz(`
    box-sizing: border-box
  `),

  applicantGrid: cmz(`
    box-sizing: border-box
  `),

  applicant: cmz(``)
}

const listTheme = {
  main: cmz(cx.main, `
    overflow-y: auto
  `),

  search: cmz(cx.search, `
    width: ${dimensions.searchWidth[DISPLAY_MODES.LIST]}
    border-right: 2px solid ${theme.lineSilver1}
    background-color: ${theme.baseBright}
  `),

  searchForm: cmz(cx.searchForm, `
    width: ${dimensions.searchWidth[DISPLAY_MODES.LIST]}
    position: fixed
    z-index: 9999
    padding: 30px 30px 0
    background-color: ${theme.baseBright}
  `),

  applicantGrid: cmz(cx.applicantGrid, `
    width: ${dimensions.searchWidth[DISPLAY_MODES.LIST]}
    min-height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    padding: ${dimensions.searchHeight[DISPLAY_MODES.LIST]} 30px 30px
  `),

  applicant: cmz(cx.applicant, `
    width: calc(100% - ${dimensions.searchWidth[DISPLAY_MODES.LIST]})
    position: fixed
    left: ${dimensions.searchWidth[DISPLAY_MODES.LIST]}
    height: 100%
    overflow: auto
  `),

  headings: cmz(`
    position: relative
    z-index: 9999
    height: ${dimensions.headingHeight}
  `),

  profile: cmz(`
    overflow-y: auto
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight} - ${dimensions.headingHeight})
    box-sizing: border-box
  `)
}

const tabularTheme = {
  main: cmz(cx.main, ``),

  search: cmz(cx.search, `
    width: ${dimensions.searchWidth[DISPLAY_MODES.TABULAR]}
    display: flex
    flex-direction: column
    height: 100%
  `),

  searchForm: cmz(cx.searchForm, `
    width: ${dimensions.searchWidth[DISPLAY_MODES.TABULAR]}
  `),

  applicantGrid: cmz(cx.applicantGrid, `
    width: calc(${dimensions.searchWidth[DISPLAY_MODES.TABULAR]} - 60px)
    margin: 0 auto
    overflow-y: auto
    flex: 1
    border-top: 1px solid ${theme.lineSilver1}
  `),

  applicant: cmz(cx.applicant, `
    display: none
  `),

  headings: cmz(`
    display: none
  `),

  profile: cmz(`
    display: none
  `)
}

class ListsScreen extends PureComponent<Props, void> {
  static defaultProps = {
    applicant: null,
    search: null,
    result: null,
    mode: DISPLAY_MODES.LIST
  }

  render () {
    const themeClasses = this.props.mode === DISPLAY_MODES.TABULAR ? tabularTheme : listTheme
    return (
      <div className={themeClasses.main}>
        <div className={themeClasses.applicant}>
          <div className={themeClasses.headings}>
            <ProfileHeaderLinks />
          </div>
          <div className={themeClasses.profile}>
            {this.props.applicant}
          </div>
        </div>
        <div className={themeClasses.search}>
          <div className={themeClasses.searchForm}>
            {this.props.search}
          </div>
          <div className={themeClasses.applicantGrid}>
            {this.props.result}
          </div>
        </div>
      </div>
    )
  }
}

export default ListsScreen
