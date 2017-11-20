// @flow

import type { Element } from 'react'
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
      height: .24em;
      border: 2px solid ${theme.offwhite};
      background-color: ${theme.white};
      border-radius: 50%;
      padding: .05em;
      max-width: 100%;
  `),
  checkmark: cmz(`   
      content: '';
      margin: -1px 0 0 0;
      display: block;
      width: 0.1em;
      height: 0.2em;
      border: solid ${theme.white};
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
  `),
  verticalLine: cmz(`
    width: 2px;
    margin: 0.4em 0 0 1px;
    height: 3em;
    background-color: ${theme.offwhite}
    border: 0;
`)
}

styles.active = cmz(
  styles.timeline,
  `
    background-color: ${theme.redHighlight};
    border-color: ${theme.redHighlight};
  `
)

styles.veritcalLineActivated = cmz(
  styles.verticalLine,
  `
    margin: 0.2em 0 0 1px;
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
    const verticalLineClassName = isDone ? styles.veritcalLineActivated : styles.verticalLine

    const checkmarkClassName = isDone && styles.checkmark

    return (
      <div className={wrapperClassName}>
        <div className={checkmarkClassName}/>
        <hr className={verticalLineClassName}/>
      </div>
    )
  }
}

export default RoadmapTimelineElement
