// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'

const cmz = require('cmz')

type Props = {}

const cx = {
  modal: cmz(`
    background: rgba(0, 0, 0, 0.3)
    height: 100%
    width: 100%
    position: absolute
    display: flex
    overflow: auto
    padding: 30px 20%
    box-sizing: border-box
  `),
  frame: cmz(`
    & {
      position: relative
      background: white
      margin: auto
      max-width: 100%
      min-width: 38px
      min-height: 36px
    }

    & > *:nth-child(2) {
      margin-top: 0
    }

    & > *:last-child {
      margin-bottom: 0
    }
  `),
  close: cmz('closemodal', `
    position: absolute
    right: 12px
    top: 12px
    cursor: pointer
  `)
}

class Modal extends PureComponent<Props> {
  render () {
    return (
      <div className={cx.modal} onClick={this.props.close}>
        <section className={cx.frame} onClick={this.noClick}>
          <a className={cx.close} onClick={this.props.close}>
            <SvgIcon icon="x" color="grayscale" />
          </a>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default Modal
