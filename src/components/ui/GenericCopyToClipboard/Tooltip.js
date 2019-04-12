// @flow

import React from 'react'

import theme from '../../../styles/theme'

const cmz = require('cmz')

const container = cmz(`
  position: relative
`)

const bubble = cmz(`
  & {
    position: absolute
    min-width: 150px
    bottom: 100%
    margin-left: 80px
    padding-bottom: 8px
    transform: translateX(-50%)
  }

  &:after {
    content: ' '
    position: absolute
    top: 100%
    left: 50%
    margin-left: -10%
    border-width: 5px
    border-style: solid
    border-color: ${theme.baseDark} transparent transparent transparent
  }
`)

const message = cmz(`
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif
  background: ${theme.baseDark}
  border-radius: 3px
  color: ${theme.baseBrighter}
  font-size: .75rem
  line-height: 1.4
  padding: .75em
  text-align: center
`)

type Props = {
  showTooltip: boolean
}

export default function Tooltip ({ showTooltip }: Props) {
  return showTooltip ? (
    <span className={container}>
      <span className={bubble}>
        <span className={message}>Copied to Clipboard</span>
      </span>
    </span>
  ) : null
}
