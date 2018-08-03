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
    const { close } = this.props
    this.setState({ open: false },
      () => setTimeout(() => {
        close && close()
      }, 300)
    )
  }

  render () {
    const { children } = this.props
    const modalClasses = [cx.modal, this.state.open && 'open'].join(' ')
    return (
      <div className={modalClasses} onClick={this.handleClose}>
        <section className={cx.frame} onClick={this.noClick}>
          <a className={cx.close} onClick={this.handleClose}>
            <SvgIcon icon='x' color='grayscale' />
          </a>
          {children}
        </section>
      </div>
    )
  }
}

export default Modal
