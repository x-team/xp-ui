// @flow

import React, { Component } from 'react'

import SvgIcon from './SvgIcon'
import GenericCopyToClipboard from './GenericCopyToClipboard'

import type { Color } from './SvgIcon'

const cmz = require('cmz')

const cx = {
  copyButton: cmz(
    'copyToClipboardButton',
    `
      position: relative
      background: transparent
      border: none
      opacity: 0
      margin: 0 5px
      transition: opacity .25s linear
      line-height: 16px
    `
  ),

  copyButtonVisible: cmz(`
    &.copyToClipboardButton {
      opacity: 1
    }
  `)
}

type Props = {
  text: string,
  visible: boolean,
  color: Color,
  hover: Color
}

class CopyToClipboardButton extends Component<Props, void> {
  static defaultProps = {
    text: '',
    visible: true,
    color: 'default',
    hover: 'default'
  }

  render () {
    const { text, visible, color, hover } = this.props
    const visibleClassName = visible ? cx.copyButtonVisible : ''

    return text ? (
      <span role='button' className={`${cx.copyButton} ${visibleClassName}`}>
        <GenericCopyToClipboard text={text} tooltipXOffset={-43}>
          <SvgIcon icon='copy' color={color} hover={hover} />
        </GenericCopyToClipboard>
      </span>
    ) : null
  }
}

export default CopyToClipboardButton
