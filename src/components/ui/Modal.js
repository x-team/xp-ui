// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'

import type { Element } from 'react'

type Props = {
  onClose?: Function,
  children?: Element<*>|string,
  theme?: 'default' | 'white'
}

const cx = {
  modal: cmz(`
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
    margin: auto
    max-width: 100%
    min-width: 38px
    min-height: 40px
  `),

  content: cmz(`
    overflow-x: auto
  `),

  close: cmz(`
    position: absolute
    right: 12px
    top: 12px
    cursor: pointer
    z-index: 1
  `),

  theme: {
    default: {
      modal: cmz(`
        background: ${theme.baseDark.fade(0.7)}
      `),

      frame: cmz(`
        background: ${theme.baseBright}
      `)
    },

    white: {
      modal: cmz(`
        background: ${theme.baseBrighter.fade(0.1)}
      `),

      frame: cmz(`
        background: ${theme.baseBrighter}
        box-shadow: 0 24px 80px ${theme.baseDark.fade(0.88)}
      `)
    }
  }
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
    const { children, onClose, theme = 'default' } = this.props
    return children ? (
      <div
        className={[cx.modal, cx.theme[theme].modal].join(' ')}
        onClick={this.handleClose}
        onKeyDown={this.handleKeyPress}
        tabIndex={0}
      >
        <section
          className={[cx.frame, cx.theme[theme].frame].join(' ')}
          onClick={this.noClick}
        >
          {onClose && (
            <a className={cx.close} onClick={this.handleClose}>
              <SvgIcon icon='x' color='grayscale' />
            </a>
          )}
          <div className={cx.content}>
            {children}
          </div>
        </section>
      </div>
    ) : null
  }
}

export default Modal
