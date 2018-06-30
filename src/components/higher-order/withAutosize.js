// @flow

import React, { PureComponent } from 'react'

import { getComponentDisplayName } from '../../utils/helpers'

type Props = {
  value?: boolean | number | string | Object,
  linesLimit?: number
}

const withAutosize = (WrappedComponent: any) => {
  const WithAutosize = class extends PureComponent<Props> {
    elem: any

    static defaultProps = {
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
      const minLines = 2
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

      return <WrappedComponent ref={this.setAutosize} {...rest} />
    }
  }

  WithAutosize.displayName = `WithAutosize(${getComponentDisplayName(WrappedComponent)})`

  return WithAutosize
}

export default withAutosize
