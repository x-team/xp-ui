// @flow
/* globals SyntheticKeyboardEvent */

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  isAccordion?: boolean,
  onKeyPress?: (event: SyntheticKeyboardEvent<>) => void
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

const Container = ({ children, isAccordion, onKeyPress }: Props) => (
  <div
    className={`${cx.filters} ${isAccordion ? cx.accordion : ''}`}
    onKeyPress={onKeyPress}
  >
    {children}
  </div>
)

export default Container
