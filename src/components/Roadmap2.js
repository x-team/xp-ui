// @flow

import React, { PureComponent, Children } from 'react'
import { findDOMNode } from 'react-dom'
import RoadmapTimelineElement from './RoadmapTimelineElement'
import elem from '../utils/elem'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  children?: Element<*>|string,
}

const column = cmz(`
  display: flex
  flex-direction: column
`)

const overlap = 300
const breakpoints = {
  small: '@media screen and (max-width: 600px)'
}

const Root = elem.div(cmz(
  column, `
& {
  align-items: center
  min-width: 600px
}
`))

const Level = elem.div(cmz(
  column, `
& {
  position: relative
  width: 100%
  margin-top: -${overlap}px
  min-height: ${overlap * 2}px
  padding: 10px 0
}

&.isFinal,
&:first-child {
  margin-top: 0
}

&.isFinal {
  align-items: center
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
`))

const Box = elem.div(cmz(`
& {
  z-index: 2
  width: 45%
  min-height: 30px
}

.isFinal & {
  width: 80%
}
`))

const Line = elem.div(cmz(`
& {
  z-index: 1
  width: 1px
  height: auto
  top: 10px
  bottom: ${overlap + 7}px
  position: absolute
  left: 50%
  margin-left: -8px
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

export default class Roadmap extends PureComponent<Props> {
  render () {
    const { children } = this.props
    const numChildren = children.length

    return Root(
      ...Children.map(children, (child, index) => {
        const isSecondLast = index === numChildren - 2
        const isFinal = index === numChildren - 1

        return Level(
            {
              className: [
                isSecondLast && 'isSecondLast',
                isFinal && 'isFinal'
              ]
            },
            Box(child),
            Line(<RoadmapTimelineElement />)
          )
      })
    )
  }
}
