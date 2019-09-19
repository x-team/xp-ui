// @flow

import React, { Fragment } from 'react'

import SvgIcon from '../SvgIcon'

import theme from '../../../styles/theme'

const cmz = require('cmz')

const cx = {
  container: cmz(`
    position: relative
    color: ${theme.typoHighlightOnDarkBackground}
  `),

  bubble: cmz(`
    & {
      position: absolute
      white-space: nowrap
      bottom: 100%
      box-shadow: 0 2px 17px rgba(171, 183, 193, 0.25)
      background: ${theme.baseBrighter}
      border: 1px solid ${theme.lineSilver2}
    }

    &:before, &:after {
      content: ''
      position: absolute
      left: 40px
      display: block
      border-left: 10px solid transparent
      border-right: 10px solid transparent
    }

    &:before {
      border-top: 10px solid ${theme.lineSilver2}
      top: 100%
    }

    &:after {
      border-top: 10px solid ${theme.baseBrighter}
      top: calc(100% - 1px)
    }
  `),

  message: cmz(`
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif
    font-size: .95rem
    line-height: 1
    display: flex
    align-items: center
    border-radius: 2px
    padding: 10px 15px
  `),

  copied: cmz(`
    padding: 0 0 0 5px
  `)
}

type Props = {
  copied: boolean
}

const Tooltip = ({ copied }: Props) => {
  return (
    <span className={cx.container}>
      <span className={cx.bubble}>
        <span className={cx.message}>
          {copied
            ? (
              <Fragment>
                <SvgIcon icon='check' />
                <span className={cx.copied}>Copied to clipboard</span>
              </Fragment>
            ) : 'Copy to clipboard'
          }
        </span>
      </span>
    </span>
  )
}

Tooltip.defaultProps = {
  copied: false
}

export default Tooltip
