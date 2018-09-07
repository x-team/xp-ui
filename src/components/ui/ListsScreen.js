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
  searchWidth: {
    [MODE[0]]: '470px',
    [MODE[1]]: '100%'
  }
}

const cx = {
  main: cmz(`
    position: relative
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    overflow: hidden
  `),

  search: cmz(`
    position: absolute
    top: 0
    width: 470px
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight})
    display: flex
    flex-direction: column
    border-right: 2px solid ${theme.lineSilver1}
  `),
  // .Admin--card .Search {
  //   width: 470px
  // }
  // .Admin--tabular .Search {
  //   width: 100%
  // }

  searchForm: cmz(`
  `),
  // .Admin--card .SearchForm {
  //   height: 365px
  // }
  // .Admin--tabular .SearchForm {
  //   height: 200px
  // }

  applicantGrid: cmz(`
    background-color: ${theme.baseBright}
    overflow-y: auto
    height: 100%
  `),
  // .Admin--card .ApplicantGrid {
  //   height: calc(${dimensions.screenHeight} - 70px - 470px)
  // }
  // .Admin--tabular .ApplicantGrid {
  //   height: calc(${dimensions.screenHeight} - 70px - 200px)
  // }

  applicant: cmz(`
    position: absolute
    width: calc(100% - 470px)
    top: 0
    padding-left: 470px
  `),
  // .Admin--card .Applicant {
  // }
  // .Admin--tabular .Applicant {
  // }

  headings: cmz(`
    height: 60px
  `),

  profile: cmz(`
    overflow-y: auto
    height: calc(${dimensions.screenHeight} - ${dimensions.headerHeight} - 60px)
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
