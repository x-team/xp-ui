// @flow
/* globals TimeoutID */

import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import isEqual from 'lodash.isequal'

import { size } from '../../utils/helpers'

import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'

import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  shortcutsLabel: cmz(`
    padding: 0 7px 0 10px
  `),

  shortcutsModal: cmz(`
    & {
      background: ${theme.baseBrighter}
      text-transform: uppercase
      box-shadow: 0 0 20px 0 rgba(0,0,0,.1)
      text-align: left
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
      min-width: 200px
      font-weight: 600
      padding: 0 20px
      border: 1px solid ${theme.lineSilver1}
      box-sizing: border-box
      position: relative
      margin-top: 18px
    }

    &:before, &:after {
      content: ''
      position: absolute
      right: 7px
      display: block
      border-left: 10px solid transparent
      border-right: 10px solid transparent
    }

    &:before {
      border-bottom: 10px solid ${theme.lineSilver1}
      bottom: 100%
    }

    &:after {
      border-bottom: 10px solid ${theme.baseBrighter}
      bottom: calc(100% - 1px)
    }
  `),

  linkStyle: cmz(`
    & {
      cursor: pointer
      font-size: 0.8125rem
      font-weight: bold
      display: block
      color: ${theme.typoParagraphOnDarkBackground}
      letter-spacing: .06em
      border-bottom: 1px solid ${theme.lineSilver1}
      padding: 0.875rem 0
    }

    &:hover {
      color: ${theme.typoParagraph}
    }

    &:last-child {
      border-bottom: none
    }
  `),

  linkCopied: cmz(`
    & {
      padding: 14px 0
      font-size: 0.8125rem
      font-weight: 600
      letter-spacing: .06em
      text-transform: none
      border-bottom: 1px solid ${theme.lineSilver1}
    }

    &:last-child {
      border-bottom: none
    }
  `)
}

type Props = {
  links: { [key: string]: { label: string, value: string } }
}

type State = {
  shortcut: string,
  copied: boolean
}

class Shortcuts extends Component<Props, State> {
  // $FlowFixMe
  timeout: TimeoutID

  static defaultProps = {
    links: {}
  }

  state = {
    shortcut: '',
    copied: false
  }

  componentWillReceiveProps (nextProps: Props) {
    if (isEqual(nextProps, this.props)) {
      this.setState({
        shortcut: '',
        copied: false
      })
    }
  }

  handleCopy = (value: string) => () => {
    this.timeout && clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.setState({ copied: false }), 2500)
    this.setState({ shortcut: value, copied: true })
  }

  renderLinks = () => {
    const { links } = this.props
    return Object.keys(links).map(key => this.renderItemState(links[key]))
  }

  renderItemState = (item: { label: string, value: string }) => {
    const { value, label } = item
    const { copied, shortcut } = this.state
    const copiedState = copied && value === shortcut

    return (
      <CopyToClipboard key={value} text={value} onCopy={this.handleCopy(value)}>
        <div className={copiedState ? cx.linkCopied : cx.linkStyle}>
          {copiedState ? 'Copied to Clipboard' : label}
        </div>
      </CopyToClipboard>
    )
  }

  render () {
    const { links } = this.props
    return size(links) ? (
      <Dropdown
        label={
          <div className={cx.shortcutsLabel}>
            <SvgIcon icon='link' color='text' />
          </div>
        }
        children={
          <div className={cx.shortcutsModal}>
            {this.renderLinks()}
          </div>
        }
        targetXOrigin='right'
      />
    ) : null
  }
}

export default Shortcuts
