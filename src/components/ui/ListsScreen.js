// @flow

import React, { PureComponent } from 'react'

import ProfileHeaderLinks from './ProfileHeaderLinks'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const MODE = ['lists', 'tabular']

const dimensions = {
  screenHeight: '100vh',
  headerHeight: '86px',
  headingHeight: '60px',
  searchWidth: {
    [MODE[0]]: '530px',
    [MODE[1]]: '100%'
  },
  searchHeight: {
    [MODE[0]]: '410px',
    [MODE[1]]: 'auto'
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
    width: ${dimensions.searchWidth[MODE[0]]}
    border-right: 2px solid ${theme.lineSilver1}
    background-color: ${theme.baseBright}
  `),

  searchForm: cmz(cx.searchForm, `
    width: ${dimensions.searchWidth[MODE[0]]}
    position: fixed
    z-index: 9999
    padding: 30px 30px 0
    background-color: ${theme.baseBright}
  `),

  applicantGrid: cmz(cx.applicantGrid, `
    width: ${dimensions.searchWidth[MODE[0]]}
    min-height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    padding: ${dimensions.searchHeight[MODE[0]]} 30px 30px
  `),

  applicant: cmz(cx.applicant, `
    width: calc(100% - ${dimensions.searchWidth[MODE[0]]})
    position: fixed
    left: ${dimensions.searchWidth[MODE[0]]}
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
    width: ${dimensions.searchWidth[MODE[1]]}
    display: flex
    flex-direction: column
    height: 100%
  `),

  searchForm: cmz(cx.searchForm, `
    width: ${dimensions.searchWidth[MODE[1]]}
  `),

  applicantGrid: cmz(cx.applicantGrid, `
    width: calc(${dimensions.searchWidth[MODE[1]]} - 60px)
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

type Props = {
  applicant?: Element<*>,
  search?: Element<*>,
  result?: Element<*>,
  mode?: string
}

class ListsScreen extends PureComponent<Props, void> {
  static defaultProps = {
    applicant: null,
    search: null,
    result: null,
    mode: MODE[0]
  }

  render () {
    const themeClasses = this.props.mode === 'tabular' ? tabularTheme : listTheme
    return (
      <div className={themeClasses.main}>
        <div className={themeClasses.applicant}>
          <div className={cx.headings}>
            <ProfileHeaderLinks />
          </div>
          <div className={cx.profile}>
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
