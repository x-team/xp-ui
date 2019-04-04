// @flow

import React, { PureComponent } from 'react'

import { getComponentDisplayName } from '../../utils/helpers'

type Props = {
  value?: boolean | number | string | Object,
  linesLimit?: number
}

const withAutosize = (Component: any) => {
  class WithAutosize extends PureComponent<Props, void> {
    elem: any

    static defaultProps = {
      linesLimit: 0
    }

    componentDidUpdate (prevProps: Props) {
      this.props.value !== prevProps.value && this.elem.oninput()
    }

    getElementLineHeight = () => parseInt(window.getComputedStyle(this.elem).getPropertyValue('line-height'), 10) || 30

    setAutosize = (elem: any) => {
      if (!elem) return

      this.elem = elem

      const savedValue = this.elem.value
      this.elem.value = ''
      let baseScrollHeight = this.elem.scrollHeight
      this.elem.value = savedValue

      let lineHeight = this.getElementLineHeight()
      const minLines = 2
      const maxLines = this.props.linesLimit

      this.elem.oninput = () => {
        if (baseScrollHeight === 0) {
          baseScrollHeight = this.elem.scrollHeight
          lineHeight = this.getElementLineHeight()
        }
        this.elem.rows = minLines
        const hiddenLines = Math.ceil((this.elem.scrollHeight - baseScrollHeight) / lineHeight)
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
