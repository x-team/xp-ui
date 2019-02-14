// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  isCollapsed: boolean,
  children: Element<*>,
  onClick: (isCollapsed: boolean) => void,
}

const Header = (props: Props) => {
  const { children, onClick, isCollapsed } = props

  const handleOnClick = (event: Object) => {
    event.preventDefault()
    onClick(!isCollapsed)
  }

  return React.isValidElement(children) ? React.cloneElement(
    children,
    { onClick: handleOnClick, isCollapsed }
  ) : null
}

export default Header
