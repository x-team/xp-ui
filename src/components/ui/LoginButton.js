// @flow
/* global React$Node */

import React from 'react'

import Button from './Button'

const cmz = require('cmz')

type Props = {
  id?: string,
  children?: React$Node
}

const cx = {
  button: cmz(`
    border-radius: 3px
    border: 2px solid transparent
    cursor: pointer
    display: inline-block
    font-weight: 700
    line-height: 1.5
    outline: none
    min-width: 290px
    margin: .15em auto
    text-decoration: none
    text-transform: uppercase
    transition: all .3s ease-out
    white-space: nowrap
    font-family: 'Raleway', sans-serif
    border-width: 2px
    font-size: 1rem
    padding: .75em 2.4em
  `)
}

const LoginButton = ({ children, id, ...rest }: Props) => {
  return (
    <Button className={cx.button} id={id} size='large' {...rest}>
      {children == null ? 'Login' : children}
    </Button>
  )
}

export default LoginButton
