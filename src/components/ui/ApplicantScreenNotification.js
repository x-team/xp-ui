// @flow
/* global React$Node */

import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const ENTER_TIMEOUT = 1000
const LEAVE_TIMEOUT = 300

const GAP = '32px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  wrapper: cmz(`
    & > span {
      display: block
      position: relative
    }
  `),

  container: cmz(`
    position: absolute
    display: block
    width: 100%
  `),

  content: cmz(
    typo.baseText,
    `
      & {
        display: flex
        align-items: center
        color: ${theme.baseBrighter}
        font-weight: 400
        font-size: 16px
        line-height: 1
        max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
        padding: 15px ${GAP}
        margin: 0 auto
      }

      @media screen and (max-width: ${breakpoints.sm}) {
        & {
          padding: 15px 0
          margin: 0 ${GAP}
        }
      }
    `
  ),

  icon: cmz(`
    & {
      flex-shrink: 0
      margin-right: 15px
      width: 20px
      height: 15px
    }

    & > svg {
      width: 100%
      height: 100%
    }
  `),

  color: {
    success: cmz(`
      background-color: ${theme.baseGreen}
    `),

    warning: cmz(`
      background-color: ${theme.baseWarning}
    `),

    error: cmz(`
      background-color: ${theme.baseRed}
    `)
  },

  animation: {
    enter: cmz(`
      top: -100px
    `),

    enterActive: cmz(`
      top: 0
      transition: top ${ENTER_TIMEOUT}ms ease
    `),

    leave: cmz(`
      top: 0
    `),

    leaveActive: cmz(`
      top: -100px
      transition: top ${LEAVE_TIMEOUT}ms ease
    `)
  }
}

type NotificationType = 'success' | 'error' | 'warning'

type Props = {
  type?: NotificationType,
  children?: React$Node
}

const ApplicantScreenNotification = ({ type = 'success', children }: Props) => {
  const renderIcon = () => {
    const icons = {
      success: <SvgIcon icon='check' color='inverted' />,
      error: <SvgIcon icon='x' color='inverted' />,
      warning: null
    }

    return icons[type] && (
      <div className={cx.icon}>
        {icons[type]}
      </div>
    )
  }

  return children ? (
    <div className={cx.wrapper}>
      <CSSTransitionGroup
        transitionName={{
          appear: cx.animation.enter,
          appearActive: cx.animation.enterActive,
          enter: cx.animation.enter,
          enterActive: cx.animation.enterActive,
          leave: cx.animation.leave,
          leaveActive: cx.animation.leaveActive
        }}
        transitionAppear
        transitionAppearTimeout={ENTER_TIMEOUT}
        transitionEnterTimeout={ENTER_TIMEOUT}
        transitionLeaveTimeout={LEAVE_TIMEOUT}
      >
        <div key='animate' className={[cx.container, cx.color[type]].join(' ')}>
          <div className={cx.content}>
            {renderIcon()}
            {children}
          </div>
        </div>
      </CSSTransitionGroup>
    </div>
  ) : null
}

export default ApplicantScreenNotification
