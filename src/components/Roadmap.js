// @flow

import React, { PureComponent, Children } from 'react'
import { findDOMNode } from 'react-dom'

import RoadmapTimelineElement from './RoadmapTimelineElement'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  children?: Element<*>|string,
}

const wrapperClassName = cmz(`
  & {
    overflow: hidden
    position: relative
    // display: flex
    // flex-flow: row wrap
    // justify-content: space-between
    // align-items: flex-start
  }
`)

const timelineElementClassName = cmz(`
  & {
    position: relative
    top: 0
  }

  & > * {
    height: 150px
  }
`)

const roadmapLevelClassName = cmz(`
  & {
    position: relative
    // margin-top: 2rem
    width: 45%
    // display: flex

    display: block
    margin-bottom: 6rem
  }

  &:last-child {
    width: auto
    padding-left: 6rem
    padding-right: 6rem
  }

  &:nth-child(2) {
    margin-top: 16rem
  }

  &:nth-child(even) {
    // flex-direction: row-reverse
    float: right
  }

  &:nth-child(odd) {
    float: left
  }

  & > .${timelineElementClassName} {
    position: absolute
    top: 0
  }

  &:nth-child(even) .${timelineElementClassName} {
    left: -13%
    right: auto
  }

  &:nth-child(odd) .${timelineElementClassName} {
    right: -9%
    left: auto
  }
`)

class Roadmap extends PureComponent<Props> {
  static defaultProps = {
    children: null
  }

  timelineEl = []
  levelEl = []

  componentDidMount() {
    for (let i = 0; i < this.timelineEl.length; i++) {
      this.setTimelineElementHeight(this.timelineEl[i], i)
    }
  }

  setTimelineElementHeight = (timelineEl: any, index: number) => {
    const timelineElementsLength = this.timelineEl.length
    if (!timelineEl) return
    if (index !== timelineElementsLength - 1) {
      const currentTimelineDOMNode = findDOMNode(timelineEl)
      const nextTimelineDOMNode = findDOMNode(this.timelineEl[index + 1])
      currentTimelineDOMNode.style.height = `${nextTimelineDOMNode.getBoundingClientRect().top - currentTimelineDOMNode.getBoundingClientRect().top}px`
    } else {
      const lastTimelineDOMNode = findDOMNode(timelineEl)
      const lastLevelDOMNode = findDOMNode(this.levelEl[timelineElementsLength])
      lastTimelineDOMNode.style.height = `${lastLevelDOMNode.getBoundingClientRect().top - lastTimelineDOMNode.getBoundingClientRect().top}px`
    }
  }

  renderRoadmap = () => {
    const children = this.props.children

    return Children.map(children, (child, index) => {
      const isLastChild = index === Children.count(children) - 1
      const timelineElement = !isLastChild && (
        <span className={timelineElementClassName}>
          <RoadmapTimelineElement ref={node => { this.timelineEl[index] = node }} />
        </span>
      )

      return (
        <section className={roadmapLevelClassName} ref={node => { this.levelEl[index] = node }}>
          {child}
          {timelineElement}
        </section>
      )
      // return React.cloneElement(child, { prop: 'custom value' })
    })
  }

  render () {
    return (
      <div className={wrapperClassName}>
        {this.renderRoadmap()}
      </div>
    )
  }
}

export default Roadmap
