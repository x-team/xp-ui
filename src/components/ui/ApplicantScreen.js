// @flow
/* global React$Node */
/* global React$StatelessFunctionalComponent */

import React from 'react'
import PropTypes from 'prop-types'

import HeaderBar from './HeaderBar'
import ApplicantScreenNotification from './ApplicantScreenNotification'

const cmz = require('cmz')

const cx = {
  header: cmz(`
    z-index: 2
    position: relative
  `),

  notification: cmz(`
    z-index: 1
  `),

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

type Link = {
  label: string,
  href?: string,
  to?: string,
  active?: boolean
}

type Props = {
  children?: React$Node,
  noWrapper?: boolean,
  wrapper?: 'narrower' | 'wider',
  notification?: React$Node,
  menuLinks: Array<Link>,
  appLink?: React$StatelessFunctionalComponent<*>
}

const ApplicantScreen = ({
  children,
  wrapper,
  noWrapper = false,
  notification,
  menuLinks,
  appLink
}: Props) => {
  const getWrapperClass = () => (wrapper && cx[wrapper]) || cx.content
  return (
    <div>
      <div className={cx.header}>
        <HeaderBar
          links={menuLinks}
          appLink={appLink}
        />
      </div>
      {notification && (
        <div className={cx.notification}>
          <ApplicantScreenNotification>
            {notification}
          </ApplicantScreenNotification>
        </div>
      )}
      {noWrapper ? children : (
        <div className={getWrapperClass()}>{children}</div>
      )}
    </div>
  )
}

ApplicantScreen.propTypes = {
  children: PropTypes.node,
  noWrapper: PropTypes.bool,
  wrapper: PropTypes.string,
  notification: PropTypes.node
}

export default ApplicantScreen
