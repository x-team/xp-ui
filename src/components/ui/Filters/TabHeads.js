// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  tabHeads: cmz(
    `
      padding: 0 40px 20px
      display: flex
      box-sizing: border-box
  `)
}

const TabHeads = (props: Props) => <div className={cx.tabHeads}>{props.children}</div>

export default TabHeads
