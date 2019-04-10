// @flow
/* globals TimeoutID */

import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const cmz = require('cmz')
import Tooltip from './Tooltip'

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
  timeout: TimeoutID

  state = {
    showTooltip: false
  }

  handleCopy = (value: string) => () => {
    this.timeout && clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.setState({ showTooltip: false }), 2500)
    this.setState({ showTooltip: true })
  }

  render() {
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
