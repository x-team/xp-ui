// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'

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
      background: ${theme.lineSilver3}
      animation: process .6s linear forwards
    }
  `),
  timelineActive: cmz(`
    &:before {
      background: ${theme.baseRed}
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
    stroke: ${theme.lineSilver1}
  `),
  checkmarkCircleActive: cmz(`
    & {
      stroke: ${theme.baseRed}
      fill: none
      animation: stroke .6s cubic-bezier(.65, 0, .45, 1) forwards
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
      stroke: ${theme.baseBrighter}
      stroke-miterlimit: 10
      margin: 10% auto
      box-shadow: inset 0 0 0 ${theme.baseRed}
      transition: box-shadow ease-in-out .2s
    }
  `),
  checkmarkActive: cmz(`
    & {
      box-shadow: inset 0 0 0 8px ${theme.baseRed}
    }
  `),
  checkmarkCheck: cmz(`
    transform-origin: 50% 50%
    opacity: 0
    transition: opacity .2s
  `),
  checkmarkCheckActive: cmz(`
    opacity: 1
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
      checkmark: `${animatedStyles.checkmark} ${isDone ? animatedStyles.checkmarkActive : ''}`,
      checkmarkCheck: `${animatedStyles.checkmarkCheck} ${isDone ? animatedStyles.checkmarkCheckActive : ''}`,
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
