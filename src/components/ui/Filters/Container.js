// @flow

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  isAccordion?: boolean,
  onKeyPress?: Function
}

const cmz = require('cmz')

const cx = {
  filters: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
  `),

  accordion: cmz(`
    display: flex
    flex-direction: column
    height: 100%
  `)
}

const Container = (props: Props) => (
  <div
    className={`${cx.filters} ${props.isAccordion ? cx.accordion : ''}`}
    onKeyPress={props.onKeyPress}
  >
    {props.children}
  </div>
)

export default Container
