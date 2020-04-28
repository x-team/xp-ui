// @flow
/* global React$Node */

import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const ENTER_TIMEOUT = 1000
const EXIT_TIMEOUT = 300
const HIDE_TIMEOUT = 5000
const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'

const cx = {
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
        font-size: 14px
        line-height: 1
        max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
        padding: 15px ${MOBILE_GAP}
        margin: 0 auto
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          padding: 15px ${GAP}
          font-size: 16px
        }
      }

      @media screen and (min-width: ${breakpoints.lg}) {
        & {
          max-width: ${WRAPPER_WIDTH}
          padding: 15px 0
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

  text: cmz(`
    width: 100%
    word-break: break-word
  `),

  close: cmz(`
    cursor: pointer
    display: block
    flex-shrink: 0
    margin-left: 15px
    width: 14px
    height: 16px
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

    exit: cmz(`
      top: 0
    `),

    exitActive: cmz(`
      top: -100px
      transition: top ${EXIT_TIMEOUT}ms ease
    `)
  }
}

type NotificationType = 'success' | 'error' | 'warning'

type Props = {
  type: NotificationType,
  children?: React$Node
}

type State = {
  open: boolean
}

class ApplicantScreenNotification extends PureComponent<Props, State> {
  timeOut: number

  state: State = {
    open: true
  }

  static defaultProps: Props = {
    type: 'success'
  }

  componentDidMount () {
    this.timeOut = setTimeout(this.closeNotification, HIDE_TIMEOUT)
  }

  componentWillUnmount () {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
  }

  closeNotification = () => {
    this.setState({ open: false })
  }

  renderIcon = () => {
    const icons = {
      success: <SvgIcon icon='check' color='inverted' />,
      error: null,
      warning: null
    }

    return icons[this.props.type] && (
      <div className={cx.icon}>
        {icons[this.props.type]}
      </div>
    )
  }

  render () {
    return this.props.children ? (
      <CSSTransition
        in={this.state.open}
        appear
        unmountOnExit
        classNames={{
          appear: cx.animation.enter,
          appearActive: cx.animation.enterActive,
          enter: cx.animation.enter,
          enterActive: cx.animation.enterActive,
          exit: cx.animation.exit,
          exitActive: cx.animation.exitActive
        }}
        timeout={{
          appear: ENTER_TIMEOUT,
          enter: ENTER_TIMEOUT,
          exit: EXIT_TIMEOUT
        }}
      >
        <div data-testid='xpui-applicantScreenNotification' className={[cx.container, cx.color[this.props.type]].join(' ')}>
          <div className={cx.content}>
            {this.renderIcon()}
            <div className={cx.text}>
              {this.props.children}
            </div>
            <div className={cx.close} onClick={this.closeNotification}>
              <SvgIcon icon='x' color='inverted' />
            </div>
          </div>
        </div>
      </CSSTransition>
    ) : null
  }
}

export default ApplicantScreenNotification
