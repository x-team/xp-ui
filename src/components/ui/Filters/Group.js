// @flow

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  group: cmz(`
    margin-top: 25px
    border-bottom: 1px solid ${theme.lineSilver2}
  `)
}

const Group = (props: Props) => (
  <div className={cx.group}>
    {props.children}
  </div>
)

export default Group
