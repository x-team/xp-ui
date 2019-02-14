// @flow

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  filters: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
  `)
}

const Container = (props: Props) => (
  <div className={cx.filters}>{props.children}</div>
)

export default Container
