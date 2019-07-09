// @flow

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Color = 'red' | 'blue'

export type Props = {
  children: Element<*>,
  color: Color
}

const cmz = require('cmz')

const colorStyles = {
  red: cmz(`
    color: ${theme.typoSubheading}
  `),
  blue: cmz(`
    color: ${theme.typoCounter}
  `)
}

const Counter = (props: Props) => {
  let colorClassName = colorStyles[props.color] || ''
  return (<span className={colorClassName}>{props.children}</span>)
}

export default Counter
