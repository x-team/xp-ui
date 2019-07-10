// @flow

import React from 'react'

import theme from '../../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  isCentred: boolean
}

const cmz = require('cmz')

const cx = {
  group: cmz(`
    & {
      padding: 20px 0
      box-sizing: border-box
      border-bottom: 1px solid ${theme.lineSilver2}
    }

    &:last-of-type,
    &:last-child {
      border-bottom: none
    }
  `),

  centred: cmz(`
    & {
      padding: 14px 12px
      display: flex
      justify-content: center
    }

    & > * {
      align-self: center
    }
  `)
}

const Group = (props: Props) => (
  <div className={props.isCentred ? [cx.group, cx.centred].join(' ') : cx.group}>
    {props.children}
  </div>
)

export default Group
