// @flow

import React, { PureComponent } from 'react'

import Modal from './Modal'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  admin: cmz(`
    height: 100%
    position: relative
  `),

  header: cmz(`
    height: 86px
    position: relative
    z-index: 10000
  `)
}

type Props = {
  header?: Element<*>,
  children?: Element<*>,
  modal?: {
    onClose: Function,
    content: Element<*>
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

  render () {
    const { header, children, modal } = this.props
    return (
      <div className={cx.admin}>
        {modal && modal.content && (
          <Modal onClose={modal.onClose}>
            {modal.content}
          </Modal>
        )}
        <div className={cx.header}>{header}</div>
        {children}
      </div>
    )
  }
}

export default AdminScreen
