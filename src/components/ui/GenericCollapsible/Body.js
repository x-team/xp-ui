// @flow

import React from 'react'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  collapsed: cmz(`
    display: none
  `),

  accordion: cmz(`
    overflow-y: auto
    overflow-x: hidden
    height: 100%
  `)
}

export type Props = {
  isExpanded: boolean,
  isAccordion: boolean,
  children: Element<*>,
}

const Body = (props: Props) => {
  const classNames = [
    props.isExpanded ? '' : cx.collapsed,
    props.isAccordion ? cx.accordion : ''
  ].join(' ')
  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

export default Body
