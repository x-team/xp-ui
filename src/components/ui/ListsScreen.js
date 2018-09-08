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
    [MODE[0]]: '470px',
    [MODE[1]]: '100%'
  },
  searchHeight: {
    [MODE[0]]: '500px',
    [MODE[1]]: 'auto'
  }
}

const cx = {
  main: cmz(`
    position: relative
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    overflow-y: auto
  `),

  search: cmz(`
    position: absolute
    top: 0
    width: ${dimensions.searchWidth[MODE[0]]}
    min-height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    display: flex
    flex-direction: column
    border-right: 2px solid ${theme.lineSilver1}
  `),
  // .Admin--card .Search {
  //   width: ${dimensions.searchWidth[MODE[0]]}
  // }
  // .Admin--tabular .Search {
  //   width: 100%
  // }

  searchForm: cmz(`
    background-color: ${theme.baseBright}
    position: fixed
    z-index: 999
    width: ${dimensions.searchWidth[MODE[0]]}
    padding: 30px
    box-sizing: border-box
  `),
  // .Admin--card .SearchForm {
  //   height: 365px
  // }
  // .Admin--tabular .SearchForm {
  //   height: 200px
  // }

  applicantGrid: cmz(`
    background-color: ${theme.baseBright}
    min-height: ${dimensions.screenHeight}
    padding: ${dimensions.searchHeight[MODE[0]]} 30px 30px
    width: ${dimensions.searchWidth[MODE[0]]}
    box-sizing: border-box
  `),
  // .Admin--card .ApplicantGrid {
  //   height: calc(${dimensions.screenHeight} - 70px - ${dimensions.searchWidth[MODE[0]]})
  // }
  // .Admin--tabular .ApplicantGrid {
  //   height: calc(${dimensions.screenHeight} - 70px - 200px)
  // }

  applicant: cmz(`
    position: fixed
    left: ${dimensions.searchWidth[MODE[0]]}
    height: 100%
    width: calc(100% - ${dimensions.searchWidth[MODE[0]]})
  `),
  // .Admin--card .Applicant {
  // }
  // .Admin--tabular .Applicant {
  // }

  headings: cmz(`
    height: ${dimensions.headingHeight}
  `),

  profile: cmz(`
    overflow-y: auto
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight} - ${dimensions.headingHeight})
    padding-top: 10px
  `)
}

type Props = {
  applicant?: Element<*>,
  search?: Element<*>,
  result?: Element<*>,
  mode?: string
}

type State = {
  mode: string
}

class ListsScreen extends PureComponent<Props, State> {
  static defaultProps = {
    applicant: null,
    search: null,
    result: null,
    mode: MODE[0]
  }

  state = {
    mode: MODE[0]
  }

  componentDidUpdate (prevProps: Props) {
    this.setState((prevState, props) => ({ ...prevState, mode: props.mode }))
  }

  toggleViewMode = () => {
    this.setState({
      mode: this.state.mode === MODE[0] ? MODE[1] : MODE[0]
    })
  }

  render () {
    return (
      <div className={cx.main}>
        <div className={cx.applicant}>
          <div className={cx.headings}>
            <ProfileHeaderLinks />
          </div>
          <div className={cx.profile}>
            {this.props.applicant}
          </div>
        </div>
        <div className={cx.search}>
          <div className={cx.searchForm}>
            {this.props.search}
          </div>
          <div className={cx.applicantGrid}>
            {this.props.result}
          </div>
        </div>
      </div>
    )
  }
}

export default ListsScreen
