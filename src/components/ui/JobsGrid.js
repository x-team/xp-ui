// @flow
/* global React$Node */

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const cx = {
  card: cmz(`
    display: grid
    grid-gap: 30px
    margin-bottom: 50px
  `)
}

type Props = {
  jobCards?: Array<React$Node>
}

class JobsGrid extends PureComponent<Props, void> {
  render () {
    return (
      <div className={cx.card}>
        {this.props.jobCards}
      </div>
    )
  }
}

export default JobsGrid
