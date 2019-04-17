// @flow

import React, { PureComponent } from 'react'

import { getComponentDisplayName } from '../../utils/helpers'

type Props = {
  rows?: number,
  value?: boolean | number | string | Object,
  linesLimit?: number
}

const withAutosize = (Component: any) => {
  class WithAutosize extends PureComponent<Props, void> {
    elem: any

    static defaultProps = {
      rows: 2,
      linesLimit: 0
    }

    componentDidUpdate (prevProps: Props) {
      this.props.value !== prevProps.value && this.elem.oninput()
    }

    setAutosize = (elem: any) => {
      if (!elem) return

      this.elem = elem

      const value = this.elem.value
      this.elem.value = ''
      this.elem.baseScrollHeight = this.elem.scrollHeight
      this.elem.value = value

      const lineHeight = parseInt(window.getComputedStyle(this.elem).getPropertyValue('line-height'), 10) || 16
      const minLines = this.props.rows
      const maxLines = this.props.linesLimit

      this.elem.oninput = () => {
        this.elem.rows = minLines
        const hiddenLines = Math.ceil((this.elem.scrollHeight - this.elem.baseScrollHeight) / lineHeight)
        const lines = minLines + hiddenLines
        this.elem.rows = maxLines && lines >= maxLines ? maxLines : lines
      }

      this.elem.oninput()
    }

    render () {
      const { linesLimit, ...rest } = this.props
      return <Component ref={this.setAutosize} {...rest} />
    }
  }

  WithAutosize.displayName = `WithAutosize(${getComponentDisplayName(Component)})`

  return WithAutosize
}

export default withAutosize
