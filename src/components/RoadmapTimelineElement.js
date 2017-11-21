// @flow

import React, { PureComponent } from 'react'
import theme from '../styles/theme'

const cmz = require('cmz')

type Props = {
  isDone?: boolean
}

const styles = {
  timeline: cmz(`
    position: relative;
    display: inline-block;
    width: .25em;
    height: .25em;
    border: 2px solid ${theme.offwhite};
    background-color: ${theme.white};
    border-radius: 50%;
    padding: .2em;
    max-width: 100%;
  `),
  checkmark: cmz(`
    &:after {
      content: '';
      display: block;
      width: 0.1em;
      height: 0.3em;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    & {
      display: block;
      transform: translateY(-50%);
      position: relative;
      top: 50%;
    }
  `),
  verticalLine: cmz(`
    width: 2px;
    margin: .4em 0 0 1px;
    height: 3em;
    background-color: ${theme.offwhite}
    border: 0;
  `),
  active: '',
  verticalLineActivated: ''
}

styles.active = cmz(
  styles.timeline,
  `
    background-color: ${theme.redHighlight};
    border-color: ${theme.redHighlight};
  `
)

styles.verticalLineActivated = cmz(
  styles.verticalLine,
  `
    margin: .1em 0 0 1px;
    background-color: ${theme.red}
    border-color: ${theme.red}
  `
)

class RoadmapTimelineElement extends PureComponent<Props> {
  static defaultProps = {
    isDone: false
  }

  render () {
    const { isDone } = this.props

    const wrapperClassName = isDone ? styles.active : styles.timeline
    const verticalLineClassName = isDone ? styles.verticalLineActivated : styles.verticalLine
    const checkmarkClassName = isDone && styles.checkmark

    return (
      <div className={wrapperClassName}>
        <div className={checkmarkClassName} />
        <hr className={verticalLineClassName} />
      </div>
    )
  }
}

export default RoadmapTimelineElement
