// @flow

import type { Element } from 'react'

export type Props = {
  isExpanded: boolean,
  children: Element<*>,
}

const Body = (props: Props) => props.isExpanded ? props.children : null

export default Body
