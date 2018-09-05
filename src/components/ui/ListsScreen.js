// @flow

import React, { PureComponent } from 'react'

import ProfileHeaderLinks from './ProfileHeaderLinks'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  main: cmz(`
    background: antiquewhite
    position: relative
    height: calc(100vh - 86px)
    overflow-y: scroll
  `),

  search: cmz(`
    background: olive
    position: absolute
    top: 0
    width: 470px
  `),
  // .Admin--card .Search {
  //   width: 470px
  // }
  // .Admin--tabular .Search {
  //   width: 100%
  // }

  searchForm: cmz(`
    background: orange
    height: 365px
  `),
  // .Admin--card .SearchForm {
  //   height: 365px
  // }
  // .Admin--tabular .SearchForm {
  //   height: 200px
  // }

  applicantGrid: cmz(`
    background: teal
    overflow-y: scroll
    height: calc(100vh - 86px - 365px)
  `),
  // .Admin--card .ApplicantGrid {
  //   height: calc(100vh - 70px - 470px)
  // }
  // .Admin--tabular .ApplicantGrid {
  //   height: calc(100vh - 70px - 200px)
  // }

  applicant: cmz(`
    background: purple
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
    background: springgreen
    height: 60px
  `),

  profile: cmz(`
    background: brown
    overflow-y: scroll
    height: calc(100vh - 86px - 60px)
  `)
}

type Props = {
  applicant?: Element<*>,
  search?: Element<*>,
  result?: Element<*>,
  view?: string
}

type State = {
  view: string
}

const VIEW = ['applicant', 'tabular']

class ListsScreen extends PureComponent<Props, State> {
  static defaultProps = {
    applicant: null,
    search: null,
    result: null,
    view: VIEW[0]
  }

  state = {
    view: VIEW[0]
  }

  componentDidUpdate (prevProps: Props) {
    this.setState((prevState, props) => ({ ...prevState, view: props.view }))
  }

  toggleView = () => {
    this.setState({
      view: this.state.view === VIEW[0] ? VIEW[1] : VIEW[0]
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
