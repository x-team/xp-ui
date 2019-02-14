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

  adminWidModal: cmz(`
    height: 100vh
  `),

  header: cmz(`
    width: 100%
    height: 56px
    z-index: 10000
  `),

  content: cmz(`
    & {
      flex: 1 0 0
      overflow: auto
      height: 100%
    }

    & > div {
      height: inherit
    }
  `)
}

type Props = {
  header?: Element<*>,
  children?: Element<*>,
  modal: {
    onClose: Function,
    content: Element<*>
  }
}

type State = {
  isModalOpen: boolean
}

class AdminScreen extends PureComponent<Props, State> {
  static defaultProps = {
    header: null,
    children: null,
    modal: {
      content: null
    }
  }

  state = {
    isModalOpen: !!this.props.modal.content
  }

  componentDidUpdate (prevProps: Props) {
    const { content: prevContent } = prevProps.modal
    const { content } = this.props.modal
    if (prevContent !== content) {
      this.setState({ isModalOpen: !!this.props.modal.content })
    }
  }

  handleModalClose = () => {
    const { modal } = this.props
    this.setState(() => ({ isModalOpen: false }))
    modal.onClose && modal.onClose()
  }

  render () {
    const { header, children, modal } = this.props
    const { isModalOpen } = this.state
    const adminClassNames = isModalOpen ? [cx.admin, cx.adminWidModal].join(' ') : cx.admin
    return (
      <div className={adminClassNames}>
        {modal && modal.content && (
          <Modal onClose={this.handleModalClose} isOpen={isModalOpen}>
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
