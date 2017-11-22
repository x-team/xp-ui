// @flow

import React, { PureComponent } from 'react'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  children?: Element<*>|string,
}

const wrapperClassName = cmz(`
  & {
    overflow: hidden
    position: relative
  }

  & > .roadmap-level {
    position: relative
    margin-top: 2rem
  }

  & > .roadmap-level:nth-child(even) {
    float: right
    width: 45%
    margin-top: 16rem
  }

  & > .roadmap-level:nth-child(odd) {
    float: left
    width: 45%
  }

  & > .roadmap-level > div:nth-of-type(1) {
    position: absolute
    top: 0
  }

  & > .roadmap-level:nth-child(even) > div:nth-of-type(1) {
    left: -12%
    right: auto
  }

  & > .roadmap-level:nth-child(odd) > div:nth-of-type(1) {
    right: -10%
    left: auto
  }
`)

class Roadmap extends PureComponent<Props> {
  static defaultProps = {
    children: null
  }

  render () {
    return (
      <div className={wrapperClassName}>{this.props.children}</div>
    )
  }
}

export default Roadmap
