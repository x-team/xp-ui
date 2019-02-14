// @flow

import React from 'react'

import type { Element } from 'react'

export type Props = {
  isExpanded: boolean,
  children: Element<*>,
  onClick: (isExpanded: boolean) => void,
}

const Header = (props: Props) => {
  const { children, onClick, isExpanded } = props

  if (!children) {
    return null
  }

  const handleOnClick = (event: Object) => {
    event.preventDefault()
    onClick(!isExpanded)
  }

  const childrenProps = typeof children.type === 'function' ? { isExpanded } : {}

  return React.isValidElement(children) ? React.cloneElement(
    children,
    { onClick: handleOnClick, ...childrenProps }
  ) : null
}

export default Header
