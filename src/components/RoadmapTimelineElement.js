// @flow

import type { Element } from 'react'
import React, { PureComponent } from 'react'
import theme from '../styles/theme'

const cmz = require('cmz')

type Props = {
  isDone?: Boolean
}

const styles = {
  timeline: cmz(`
    & {
      position: relative;
      display: inline-block;
      width: 0.25em;
      height: 0.25em;
      background-color: ${theme.white};
      border: 2px solid ${theme.offwhite};
      border-radius: 50%;
      padding: .1em;
      max-width: 100%;
      transition: all .25s ease-out;
      z-index: 10;
      cursor: pointer;
    }
  `),
  checkmark: cmz(`   
    &:after{
      content: '';
      display: block;
   
      width: 0.1em;
      height: 0.2em;
   
      border: solid ${theme.white};
      border-width: 0 1px 1px 0;
   
      transform: rotate(45deg);
    }
  `)
}

styles.active = cmz(
  styles.timeline,
  `
    & {
      background-color: ${theme.red};
      border: 2px solid ${theme.red};    
    }
  `
)

class RoadmapTimelineElement extends PureComponent<Props> {
  static defaultProps = {
    isDone: false
  }

  render () {
    const {isDone} = this.props

    const element = !isDone ? styles.timeline : styles.active

    return (
      <div>
        <div className={element}>
          <div className={isDone ? styles.checkmark : ''} />
        </div>
      </div>
    )
  }
}

export default RoadmapTimelineElement
