// @flow

import React from 'react'

import NotificationBar from './NotificationBar'
import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const gap = 32
const wrapper = 1100

const cx = {
  wrapper: cmz(`
    & {
      max-width: ${wrapper - 2 * gap}px
      padding: 0 ${gap}px
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        padding: 0 10px
      }
    }
  `),

  text: cmz(
    typo.baseText,
    `
      color: ${theme.baseBrighter}
      font-weight: 400
      margin-left: 20px
      font-size: 16px
    `
  )
}

type Props = {
  display?: boolean
}

const ApplicationSuccessNotification = ({
  display = false
}: Props) => {
  return (
    <NotificationBar display={display} type='success' isStatic>
      <div className={cx.wrapper}>
        <SvgIcon icon='check' color='inverted' />
        <span className={cx.text}>You've successfully applied for this position. <b>Check your email for next steps</b></span>
      </div>
    </NotificationBar>
  )
}

export default ApplicationSuccessNotification
