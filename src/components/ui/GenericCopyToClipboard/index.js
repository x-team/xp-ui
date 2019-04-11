// @flow

import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from './Tooltip'

import type { Element } from 'react'

const cmz = require('cmz')

const container = cmz(`
  cursor: pointer
`)

type Props = {
  children?: Element<*>
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

  handleCopy = (value: string) => () => {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut)
    }
    this.timeOut = setTimeout(() => this.setState({ showTooltip: false }), 2500)
    this.setState({ showTooltip: true })
  }

  render () {
    const { showTooltip } = this.state
    const { children } = this.props
    return children ? (
      <div className={container}>
        <Tooltip showTooltip={showTooltip} />
        <CopyToClipboard
          text={children.props.children}
          onCopy={this.handleCopy(children.props.children)}
        >
          {children}
        </CopyToClipboard>
      </div>
    ) : null
  }
}

export default GenericCopyToClipboard
