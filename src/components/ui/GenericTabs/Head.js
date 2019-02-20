// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  activeTab: string,
  children: Element<*>,
  onClick: (activeTab: string) => void,
  tabKey: string
}

const Head = (props: Props) => {
  const { tabKey, activeTab, onClick, children } = props

  if (!children) {
    return null
  }

  const validatedChild = React.Children.only(children)

  const callOnClickWithTabKey = (event: Object) => {
    event.preventDefault()

    onClick(tabKey)
  }

  return React.cloneElement(
    validatedChild,
    { onClick: callOnClickWithTabKey, isActive: tabKey === activeTab }
  )
}

export default Head
