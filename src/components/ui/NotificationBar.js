// @flow

import React from 'react'
import type { Node } from 'react'

import theme, { breakpoints } from '../../styles/theme'

const cmz = require('cmz')

const BAR_HEIGHT = 45

const cx = {
  container: cmz(`
    width: 100%
    overflow: hidden
    transition: height 1s
    display: flex
    align-items: flex-end
  `),

  contentWrapper: cmz(`
    & {
      height: ${BAR_HEIGHT}px
      display: flex
      align-items: center
      flex: 1
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        height: 80px
      }
    }
  `),

  state: {
    open: cmz(`
      & {
        height: ${BAR_HEIGHT}px
      }

      @media screen and (max-width: ${breakpoints.sm}) {
        & {
          height: ${BAR_HEIGHT * 2}px
        }
      }
    `),

    close: cmz(`
      height: 0
    `)
  },

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

  align: {
    default: cmz(`
      justify-content: flex-start
    `),

    center: cmz(`
      justify-content: center
    `)
  }
}

type NotificationType = 'success' | 'error' | 'warning'
type Alignment = 'default' | 'center'

type Props = {
  type?: NotificationType,
  display?: boolean,
  isStatic?: boolean,
  align?: Alignment,
  children?: Node
}

const NotificationBar = ({
  type = 'success',
  display = false,
  isStatic = false,
  align = 'default',
  children
}: Props) => {
  return (
    <div className={isStatic ? cx.state.open : ''}>
      <div className={`${cx.container} ${display ? cx.state.open : cx.state.close} ${cx.color[type]}`}>
        <div className={`${cx.contentWrapper} ${cx.align[align]}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default NotificationBar
