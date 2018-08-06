// @flow

import React, { Component } from 'react'

import SvgIcon from './SvgIcon'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  close: Function,
  children?: Element<*>|string
}

type State = {
  open: boolean
}

const cx = {
  modal: cmz(`
    & {
      background: rgba(0, 0, 0, 0.3)
      height: 100%
      width: 100%
      position: absolute
      display: flex
      overflow: auto
      padding: 30px
      box-sizing: border-box
      z-index: 9999
      transition: opacity 0.3s ease-in, visibility 0.3s ease-in
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

  componentDidUpdate () {
    const { open } = this.state
    const { isClosing } = this.props
    if (open && isClosing) {
      this.handleClose()
    }
  }

  componentWillUnmount () {
    clearTimeout(this.closeWithTimer)
  }

  noClick = (event: any) => {
    event && event.stopPropagation()
  }

  closeWithTimer = () => setTimeout(() => {
    const { close } = this.props
    close && close()
  }, 300)

  handleClose = () => {
    this.setState({ open: false }, this.closeWithTimer)
  }

  handleKeyPress = (e: any) => {
    const evt = e || window.event
    evt.stopPropagation()
    if (evt.keyCode === 27) { // Esc
      this.handleClose()
    }
  }

  render () {
    const { children } = this.props
    const modalClasses = [cx.modal, this.state.open && 'open'].join(' ')
    return children ? (
      <div className={modalClasses} onClick={this.handleClose} onKeyDown={this.handleKeyPress} tabIndex={0}>
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
