// @flow

import type { Element } from 'react'

export type Props = {
  activeTab: string,
  children: Element<*>,
  tabKey: string
}

const Pane = (props: Props) => {
  const { activeTab, tabKey, children } = props

  if (!props.children) {
    return null
  }

  return activeTab === tabKey ? children : null
}

export default Pane
