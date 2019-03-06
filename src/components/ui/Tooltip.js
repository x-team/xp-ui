// @flow

import React, { PureComponent } from 'react'
import ReactTooltip from 'react-tooltip'

const cmz = require('cmz')

const cx = {
  main: cmz(`
    & {
      pointer-events: auto
      background-color: white !important
      opacity: 1 !important
      padding: 0 !important
      max-height: 100vh
    }

    &.place-left:after {
      border-left-color: rgb(233, 237, 238) !important
      border-left-style: solid !important
      border-left-width: 10px !important
    }
  `)
}

type Props = {
  render: Function,
  tooltipId: string
}

class Tooltip extends PureComponent<Props, void> {
  static defaultProps = {
    render: null,
    tooltipId: ''
  }

  render () {
    const { tooltipId, render } = this.props
    return (
      <ReactTooltip
        id={tooltipId}
        place='right'
        type='dark'
        effect='solid'
        className={cx.main}
        globalEventOff='click'
        getContent={(dataTip) => render(dataTip)}
      />
    )
  }
}

export default Tooltip
