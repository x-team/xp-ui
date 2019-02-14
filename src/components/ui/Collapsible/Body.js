// @flow

import type { Element } from 'react'

export type Props = {
  isCollapsed: boolean,
  children: Element<*>,
}

const Body = (props: Props) => props.isCollapsed ? props.children : null

export default Body
