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
      height: 10em
    }

    &:before {
      /* this is the vertical line */
      content: ''
      position: absolute
      top: 17px
      left: 7px
      overflow: hidden
      width: 2px
      height: 0
      background: ${theme.offwhite}
      animation: process .6s linear forwards
    }

    @keyframes process {
      100% {
        height: 90%
      }
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

    const activeTimelineClassName = isDone ? animatedStyles.timelineActive : ''
    const checkmarkBoxClassName = animatedStyles.checkmarkBox
    const checkmarkClassName = isDone ? animatedStyles.checkmark : ''
    const circleClassName = `${animatedStyles.checkmarkCircle} ${isDone ? animatedStyles.checkmarkCircleActive : ''}`
    const checkmarkCheckClassName = isDone ? animatedStyles.checkmarkCheck : ''

    return (
      <div className={`${animatedStyles.timeline} ${activeTimelineClassName}`}>
        <div className={checkmarkBoxClassName}>
          <svg className={checkmarkClassName}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 52 52'>
            <circle className={circleClassName} cx='26' cy='26' r='25' fill='none' />
            <path className={checkmarkCheckClassName} fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
          </svg>
        </div>
      </div>
    )
  }
}

export default RoadmapTimelineElement
