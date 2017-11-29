// @flow

import React, { PureComponent, Children } from 'react'
import { findDOMNode } from 'react-dom'

import { throttle, isScrolledIntoView } from '../utils/helpers'

import RoadmapTimelineElement from './RoadmapTimelineElement'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  children?: Element<*>|string,
}

type State = {
  activeVisible: number
}

const wrapperClassName = cmz(`
  // overflow: hidden
  // position: relative
  display: flex
  flex-direction: column
`)

const timelineElementClassName = cmz(`
  & {
    position: relative
    top: 0
  }
`)

const roadmapLevelClassName = cmz(`
  & {
    position: relative
    // width: 45%
    // display: block
    // margin-bottom: 6rem

    width: 100%
    margin-top: -200px
    display: flex
    flex-direction: column
  }

  &:first-child {
    margin-top: 0
  }

  &:last-child {
    // display: block
    width: auto
    padding-left: 6rem
    padding-right: 6rem
  }

  &:nth-child(even) {
    align-items: flex-end
  }

  // &:nth-child(2) {
  //   margin-top: 16rem
  // }

  // &:nth-child(even) {
  //   float: right
  // }

  // &:nth-child(odd) {
  //   float: left
  // }

  // level element inside the wrapper
  & > section:nth-of-type(1) {
    z-index: 2
    width: 45%
    min-height: 30px
    margin: 10px
    box-sizing: border-box
  }

  &:last-child > section:nth-of-type(1) {
    width: auto
  }

  & > .${timelineElementClassName} {
    position: absolute
    top: 0
  }

  // &:nth-child(even) .${timelineElementClassName} {
  //   left: -13%
  //   right: auto
  // }

  // &:nth-child(odd) .${timelineElementClassName} {
  //   right: -9%
  //   left: auto
  // }
`)

class Roadmap extends PureComponent<Props, State> {
  static defaultProps = {
    children: null
  }

  state = {
    activeVisible: 0
  }

  timelineEl = []
  levelEl = []
  lastScrollPos = 0
  throttledScrollHandler = () => {}

  componentWillMount () {
    this.lastScrollPos = window.scrollY
    this.throttledScrollHandler = throttle(this.handleDocumentScroll, 350)
    window.addEventListener('scroll', this.throttledScrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.throttledScrollHandler)
  }

  componentDidMount() {
    // this.timelineEl.forEach(this.setTimelineElementHeight)
  }

  detectScrollDirection = () => {
    // -1 — scroll up; 1 — scroll down
    return this.lastScrollPos > window.scrollY ? -1 : 1
  }

  handleDocumentScroll = () => {
    this.levelEl.forEach((element, index) => {
      const elNode = findDOMNode(element)
      if (isScrolledIntoView(elNode, this.detectScrollDirection())) {
        this.setState({ activeVisible: index })
      }
    })
    this.lastScrollPos = window.scrollY
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
    const { children } = this.props
    const { activeVisible } = this.state

    return Children.map(children, (child, index) => {
      const isLastChild = index === Children.count(children) - 1
      const isActiveRoadmapLevel = index === activeVisible
      const isActiveTimelineElement = index <= activeVisible

      const timelineElement = !isLastChild && (
        <span className={timelineElementClassName}>
          <RoadmapTimelineElement
            isDone={isActiveTimelineElement}
            ref={node => { this.timelineEl[index] = node }}
          />
        </span>
      )

      return (
        <section className={roadmapLevelClassName} ref={node => { this.levelEl[index] = node }}>
          {React.cloneElement(child, { isActive: isActiveRoadmapLevel })}
          {timelineElement}
        </section>
      )
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
