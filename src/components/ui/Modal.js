// @flow

import React, { Component } from 'react'

import SvgIcon from './SvgIcon'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  onClose: Function,
  children?: Element<*>|string
}

type State = {
  open: boolean
}

const cx = {
  modal: cmz(`
    & {
      background: rgba(0, 0, 0, .3)
      height: 100%
      width: 100%
      position: absolute
      display: flex
      overflow: auto
      padding: 30px
      box-sizing: border-box
      z-index: 99999
      opacity: 0
      visibility: hidden
      outline: none
    }

    &.open {
      opacity: 1
      visibility: visible
    }
  `),

  frame: cmz(`
    position: relative
    background: white
    margin: auto
    max-width: 100%
    min-width: 38px
    min-height: 40px
  `),

  close: cmz('closemodal', `
    position: absolute
    right: 12px
    top: 12px
    cursor: pointer
  `)
}

class Modal extends Component<Props, State> {
  state = {
    open: false
  }

  componentDidMount () {
    this.setState({ open: true })
  }

  noClick = (event: any) => {
    event && event.stopPropagation()
  }

  handleClose = () => {
    const { onClose } = this.props
    this.setState({ open: false }, () => {
      onClose && onClose()
    })
  }

  handleKeyPress = (e: any) => {
    const evt = e || window.event
    evt.stopPropagation()

    // Esc
    if (evt.keyCode === 27) {
      this.handleClose()
    }
  }

  render () {
    const { children } = this.props
    const modalClassName = [cx.modal, this.state.open && 'open'].join(' ')

    return children ? (
      <div
        className={modalClassName}
        onClick={this.handleClose}
        onKeyDown={this.handleKeyPress}
        tabIndex={0}
      >
        <section className={cx.frame} onClick={this.noClick}>
          {children}
          <a className={cx.close} onClick={this.handleClose}>
            <SvgIcon icon='x' color='grayscale' />
          </a>
        </section>
      </div>
    ) : null
  }
}

export default Modal
