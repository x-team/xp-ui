// @flow

import React, { PureComponent } from 'react'
import theme from '../styles/theme'

const cmz = require('cmz')

type Props = {
  isDone?: boolean
}

const animatedStyles = {
  timeline: cmz(`
    & {
      position: relative
      height: 100%
      min-height: 20px
    }

    &:before {
      /* this is the vertical line */
      content: ''
      position: absolute
      top: 17px
      left: 7px
      overflow: hidden
      width: 2px
      height: 100%
      background: ${theme.offwhite}
      animation: process .6s linear forwards
    }
  `),
  timelineActive: cmz(`
    &:before {
      background: ${theme.red}
    }
  `),
  checkmarkBox: cmz(`
    width: 16px
    position: absolute
    top: 0
    left: 0
  `),
  checkmarkCircle: cmz(`
    stroke-dasharray: 166
    stroke-dashoffset: 0
    stroke-width: 3
    stroke-miterlimit: 10
    stroke: ${theme.offwhite}
  `),
  checkmarkCircleActive: cmz(`
    & {
      stroke: ${theme.red}
      fill: none
      animation: stroke 1s cubic-bezier(.65, 0, .45, 1) forwards
    }

    @keyframes stroke {
      100% {
        stroke-dashoffset: 0
      }
    }
  `),
  checkmark: cmz(`
    & {
      border-radius: 50%
      display: block
      stroke-width: 2
      stroke: ${theme.white}
      stroke-miterlimit: 10
      margin: 10% auto
      box-shadow: inset 0 0 0 ${theme.red}
      animation: fill 1s ease-in-out 1s forwards, scale 1s ease-in-out 1s both
    }

    @keyframes fill {
      100% {
        box-shadow: inset 0 0 0 30px ${theme.red}
      }
    }
  `),
  checkmarkCheck: cmz(`
    transform-origin: 50% 50%
    stroke-dasharray: 48
    stroke-dashoffset: 48
    animation: stroke .2s cubic-bezier(.65, 0, .45, 1) .6s forwards
  `)
}

class RoadmapTimelineElement extends PureComponent<Props> {
  static defaultProps = {
    isDone: false
  }

  render () {
    const { isDone } = this.props

    const cx = {
      active: isDone ? animatedStyles.timelineActive : '',
      box: animatedStyles.checkmarkBox,
      checkmark: isDone ? animatedStyles.checkmark : '',
      checkmarkCheck: isDone ? animatedStyles.checkmarkCheck : '',
      circle: `${animatedStyles.checkmarkCircle} ${isDone ? animatedStyles.checkmarkCircleActive : ''}`
    }

    return (
      <div className={`${animatedStyles.timeline} ${cx.active}`}>
        <div className={cx.box}>
          <svg className={cx.checkmark}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 52 52'>
            <circle className={cx.circle} cx='26' cy='26' r='25' fill='none' />
            <path className={cx.checkmarkCheck} fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
          </svg>
        </div>
      </div>
    )
  }
}

export default RoadmapTimelineElement
