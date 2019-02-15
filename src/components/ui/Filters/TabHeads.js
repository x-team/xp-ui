// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  tabHeads: cmz(`
    & {
      padding: 0 60px 20px
      display: flex
    }
  `)
}

const TabHeads = (props: Props) => <div className={cx.tabHeads}>{props.children}</div>

export default TabHeads
