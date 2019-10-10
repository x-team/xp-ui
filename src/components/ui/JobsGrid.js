// @flow
/* global React$Node */

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const cx = {
  card: cmz(`
    display: grid
    grid-gap: 32px
    grid-template-columns: repeat(1, 1fr)
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
