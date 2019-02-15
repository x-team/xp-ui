// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  group: cmz(`
    margin-top: 25px
  `)
}

const Group = (props: Props) => (
  <div className={cx.group}>
    {props.children}
  </div>
)

export default Group
