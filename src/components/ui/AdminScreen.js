// @flow

import React, { PureComponent } from 'react'

import Modal from './Modal'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  admin: cmz(`
    height: 100vh
    min-height: 100vh
    overflow-y: hidden
    position: relative
    display: flex
    flex-direction: column
  `),

  header: cmz(`
    width: 100%
    height: 56px
    z-index: 10000
  `),

  content: cmz(`
    flex: 1 0 0
    overflow: auto
    height: 100%
  `)
}

type Props = {
  header?: Element<*>,
  children?: Element<*>,
  modal?: {
    onClose?: Function,
    content?: Element<*>
  }
}

class AdminScreen extends PureComponent<Props, void> {
  static defaultProps = {
    header: null,
    children: null,
    modal: {
      content: null
    }
  }

  handleModalClose = () => {
    const { modal } = this.props
    modal && modal.onClose && modal.onClose()
  }

  render () {
    const { header, children, modal } = this.props
    return (
      <div className={cx.admin}>
        {modal && modal.content && (
          <Modal onClose={this.handleModalClose}>
            {modal.content}
          </Modal>
        )}
        <div className={cx.header}>{header}</div>
        <div className={cx.content}>{children}</div>
      </div>
    )
  }
}

export default AdminScreen
