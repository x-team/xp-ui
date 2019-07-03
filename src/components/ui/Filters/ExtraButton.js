// @flow

import React from 'react'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

export type Props = {
  text: string,
  onClick: (event: any) => void,
}

const cmz = require('cmz')

const cx = {
  button: cmz(typo.labelText,
    `
      & {
        color: ${theme.typoLabel}
        padding: 0
        margin-right: 20px
        border: 0
        border-bottom: 1px solid
        border-color: ${theme.typoLabel}
        background-color: transparent
        white-space: nowrap
        cursor: pointer
      }

      &:hover {
        color: ${theme.typoHeading}
        border-color: ${theme.typoHeading}
      }
    `
  )
}

const ExtraButton = (props: Props) => {
  const handleClick = (event) => {
    event.stopPropagation()
    props.onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={cx.button}
    >
      {props.text}
    </div>
  )
}

export default ExtraButton
