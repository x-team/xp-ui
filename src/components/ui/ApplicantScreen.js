// @flow
/* global React$Node */

import React from 'react'
import PropTypes from 'prop-types'

import HeaderBar from './HeaderBar'
import ApplicationSuccessNotification from './ApplicationSuccessNotification'

const cmz = require('cmz')

const cx = {
  content: cmz(`
    max-width: 1280px
    margin: 93px auto 0
  `),

  narrower: cmz(`
    max-width: 840px
    margin: 93px auto 0
    padding: 0 60px 80px 60px
  `),

  wider: cmz(`
    max-width: 964px
    margin: 0 auto
    padding: 0 60px
    padding-top: 118px
  `)
}

type Props = {
  children?: React$Node,
  noWrapper?: boolean,
  wrapper?: 'narrower' | 'wider',
  showApplicationSuccessNotification?: boolean
}

const ApplicantScreen = ({
  children,
  wrapper,
  noWrapper = false,
  showApplicationSuccessNotification = false
}: Props) => {
  const getWrapperClass = () => (wrapper && cx[wrapper]) || cx.content
  return (
    <div>
      <HeaderBar />
      <ApplicationSuccessNotification display={showApplicationSuccessNotification} />
      {noWrapper ? children : (
        <div className={getWrapperClass()}>{children}</div>
      )}
    </div>
  )
}

ApplicantScreen.propTypes = {
  children: PropTypes.node,
  contentWrapper: PropTypes.bool
}

export default ApplicantScreen
