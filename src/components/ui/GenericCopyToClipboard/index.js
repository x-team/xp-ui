// @flow

import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from './Tooltip'

import type { Node } from 'react'

const cmz = require('cmz')

const container = cmz(`
  cursor: pointer
  display: inline-block
`)

type Props = {
  children?: Node,
  text?: string
}

type State = {
  isHover: boolean,
  copied: boolean
}

class GenericCopyToClipboard extends Component<Props, State> {
  timeOut: number

  state = {
    isHover: false,
    copied: false
  }

  componentWillUnmount () {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
  }

  handleCopy = () => {
    this.setState({ copied: true })
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => this.setState({ copied: false }), 2500)
    this.setState({ isHover: false })
  }

  render () {
    const { isHover, copied } = this.state
    const { children, text } = this.props
    return text ? (
      <div
        className={container}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {isHover || copied ? <Tooltip copied={copied} /> : null}
        <CopyToClipboard text={text} onCopy={this.handleCopy}>
          {children}
        </CopyToClipboard>
      </div>
    ) : null
  }
}

export default GenericCopyToClipboard
