// @flow
/* global React$Node */

import React from 'react'

import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const GAP = '32px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  content: cmz(
    typo.baseText,
    `
      & {
        display: flex
        align-items: center
        color: ${theme.baseBrighter}
        font-weight: 400
        font-size: 14px
        line-height: 1
        max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
        padding: 15px ${GAP}
        margin: 0 auto
      }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 16px
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
    <div className={cx.color[type]}>
      <div className={cx.content}>
        {renderIcon()}
        {children}
      </div>
    </div>
  ) : null
}

export default ApplicantScreenNotification
