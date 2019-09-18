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
  children: Node,
  text: string
}

type State = {
  isHover: boolean,
  copied: boolean
}

class GenericCopyToClipboard extends Component<Props, State> {
  timeOut: number

  static defaultProps = {
    children: null,
    text: ''
  }

  state = {
    isHover: false,
    copied: false
  }

  componentWillUnmount () {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
  }

  hideWithTimeout = () => {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => this.setState({ copied: false }), 2500)
  }

  handleCopy = () => {
    this.setState({ copied: true }, this.hideWithTimeout)
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false }, this.hideWithTimeout)
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
