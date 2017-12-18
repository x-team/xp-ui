// @flow

import React, { PureComponent, Children } from 'react'
import { findDOMNode } from 'react-dom'

import RoadmapTimelineElement from './RoadmapTimelineElement'

import elem from '../../utils/elem'
import { throttle, isScrolledIntoView } from '../../utils/helpers'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  children?: Element<*> | string,
}

type State = {
  activeVisible: number
}

const overlap = 300

const columnClassName = cmz(`
  display: flex
  flex-direction: column
`)

const breakpoints = {
  small: '@media screen and (max-width: 600px)'
}

const Root = elem.div(cmz(
  columnClassName
))

const Level = elem.div(cmz(
  columnClassName,
  `
    & {
      position: relative
      width: 100%
      margin-top: -${overlap}px
      min-height: ${overlap * 2}px
      padding: 10px 0
    }

    &:first-child {
      margin-top: 0
    }

    &:last-child {
      align-items: center
      margin-top: 0
      padding-top: 80px
    }

    &:nth-child(even) {
      align-items: flex-end
    }

    ${breakpoints.small} {
      &,
      &:first-child {
        margin: 40px 0 0 0
      }

      &,
      &:nth-child(even) {
        align-items: center
      }
    }
  `
))

const Box = elem.div(cmz(`
  & {
    width: 45%
    min-height: 2rem
    z-index: 2
  }

  .isFinal & {
    width: auto
    padding-left: 6rem
    padding-right: 6rem
  }
`))

const Line = elem.div(cmz(`
  & {
    width: 1px
    height: auto
    position: absolute
    top: 10px
    bottom: ${overlap + 7}px
    left: 50%
    margin-left: -8px
    z-index: 1
  }

  .isSecondLast & {
    bottom: 0
  }

  .isFinal & {
    top: 17px
    height: 20px
  }

  ${breakpoints.small} {
    & {
      top: -15px
      height: calc(100% + 40px)
    }
  }
`))

class Roadmap extends PureComponent<Props, State> {
  static defaultProps = {
    children: null
  }

  state = {
    activeVisible: 0
  }

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

  detectScrollDirection = () => {
    // 1 — scroll down; -1 — scroll up
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

  renderRoadmap = () => {
    const { activeVisible } = this.state
    const { children } = this.props
    const childrenCount = Children.count(children)

    return Children.map(children, (child, index) => {
      const isLastChild = index === childrenCount - 1
      const isSecondLastChild = index === childrenCount - 2

      const isActiveRoadmapLevel = index === activeVisible
      const isActiveTimelineElement = index <= activeVisible

      const timelineElement = Line(
        <RoadmapTimelineElement isDone={isActiveTimelineElement} />
      )

      return Level(
        {
          className: [
            isSecondLastChild && 'isSecondLast',
            isLastChild && 'isFinal'
          ]
        },
        Box(
          {
            ref: node => { this.levelEl[index] = node }
          },
          React.cloneElement(child, { isActive: isActiveRoadmapLevel })
        ),
        timelineElement
      )
    })
  }

  render () {
    return Root(this.renderRoadmap())
  }
}

export default Roadmap
