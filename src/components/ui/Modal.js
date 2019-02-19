// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  onClose: Function,
  children?: Element<*>|string
}

const cx = {
  modal: cmz(`
    background: rgba(0, 0, 0, .3)
    height: 100%
    width: 100%
    position: absolute
    display: flex
    overflow: auto
    padding: 30px
    box-sizing: border-box
    z-index: 99999
    outline: none
  `),

  frame: cmz(`
    position: relative
    background: ${theme.baseBright}
    margin: auto
    max-width: 100%
    min-width: 38px
    min-height: 40px
  `),

  content: cmz(`
    overflow-x: auto
  `),

  close: cmz('closemodal', `
    position: absolute
    right: 12px
    top: 12px
    cursor: pointer
    z-index: 1
    displa
  `)
}

class Modal extends PureComponent<Props, void> {
  noClick = (event: any) => {
    event && event.stopPropagation()
  }

  handleClose = () => {
    const { onClose } = this.props
    onClose && onClose()
  }

  handleKeyPress = (e: any) => {
    const event = e || window.event
    event.stopPropagation()

    // Esc
    if (event.keyCode === 27) {
      this.handleClose()
    }
  }

  render () {
    const { children } = this.props
    return children ? (
      <div
        className={cx.modal}
        onClick={this.handleClose}
        onKeyDown={this.handleKeyPress}
        tabIndex={0}
      >
        <section className={cx.frame} onClick={this.noClick}>
          <a className={cx.close} onClick={this.handleClose}>
            <SvgIcon icon='x' color='grayscale' />
          </a>
          <div className={cx.content}>
            {children}
          </div>
        </section>
      </div>
    ) : null
  }
}

export default Modal
