// @flow

import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from './Tooltip'

import type { Node } from 'react'

const cmz = require('cmz')

const container = cmz(`
  cursor: pointer
`)

type Props = {
  children?: Node,
  text: string
}

type State = {
  showTooltip: boolean
}

class GenericCopyToClipboard extends Component<Props, State> {
  timeOut: number

  state = {
    showTooltip: false
  }

  componentWillUnmount () {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
  }

  handleCopy = () => () => {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => this.setState({ showTooltip: false }), 2500)
    this.setState({ showTooltip: true })
  }

  render () {
    const { showTooltip } = this.state
    const { children, text } = this.props
    return text ? (
      <div className={container}>
        <Tooltip showTooltip={showTooltip} />
        <CopyToClipboard text={text} onCopy={this.handleCopy()}>
          {children && children}
        </CopyToClipboard>
      </div>
    ) : null
  }
}

export default GenericCopyToClipboard
