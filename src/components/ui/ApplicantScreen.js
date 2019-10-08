// @flow
/* global React$Node */

import React from 'react'
import PropTypes from 'prop-types'

import HeaderBar from './HeaderBar'

const cmz = require('cmz')

const cx = {
  content: cmz(`
    max-width: 1280px
    margin: 93px auto 0
  `)
}

type Props = {
  children?: React$Node,
  contentWrapper?: boolean
}

const ApplicantScreen = (props: Props) => {
  const { children, contentWrapper } = props
  return (
    <div>
      <HeaderBar />
      {contentWrapper ? (
        <div className={cx.content}>{children}</div>
      ) : children}
    </div>
  )
}

ApplicantScreen.defaultProps = {
  contentWrapper: true
}

ApplicantScreen.propTypes = {
  children: PropTypes.node,
  contentWrapper: PropTypes.bool
}

export default ApplicantScreen
