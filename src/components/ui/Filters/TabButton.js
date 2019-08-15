// @flow

import React from 'react'

import Button from '../Button'

import theme from '../../../styles/theme'

export type Props = {
  text: string,
  onClick: (event: any) => void,
}

const cmz = require('cmz')

const cx = {
  button: cmz(`
    & {
      color: ${theme.typoHighlightOnDarkBackground}
      background: ${theme.baseBrighter}
      border-color: ${theme.lineSilver2}
      border-width: 0
      border-radius: 2px
      padding-left: 0.3rem
      padding-right: 0.3rem
      text-align: center
    }

    &:first-of-type {
      border-top-right-radius: 0
      border-bottom-right-radius: 0
      border-width: 2px 0 2px 2px
    }

    &:last-of-type {
      border-top-left-radius: 0
      border-bottom-left-radius: 0
      border-width: 2px 2px 2px 0
    }
  `),

  active: cmz(`
    background: ${theme.lineSilver4}
    border-color: ${theme.lineSilver2}
  `)
}

const TabButton = (props: Props) => (
  <Button
    wide
    outlined
    color='silver'
    smallRounded
    onClick={props.onClick}
    className={props.isActive ? `${cx.button} ${cx.active}` : cx.button}
    data-testid='xpui-filters-tabButton'
  >
    {props.text}
  </Button>
)

export default TabButton
