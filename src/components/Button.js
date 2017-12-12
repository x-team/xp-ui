// @flow

import React, { PureComponent } from 'react'

import type { CmzAtom } from 'cmz'
import type { Element } from 'react'

import theme from '../styles/theme'
import * as typo from '../styles/typo'

const cmz = require('cmz')

export type Size = 'normal' | 'large' | 'small' | 'block'
export type Color = 'normal' | 'monochrome'
type Props = {
  className: string | CmzAtom,
  size: Size,
  color: Color,
  outlined: ?boolean,
  disabled: ?boolean,
  component: string,
  children?: Element<*> | string
}

const baseStyles = {
  root: cmz(`
    & {
      background: transparent;
      border-radius: 0;
      border: 2px solid transparent;
      color: ${theme.baseBrighter};
      cursor: pointer;
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      outline: none;
      margin: .15em auto;
      padding: 1.25em 3.5em;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .3s ease-out;
      white-space: nowrap;
    }

    & span {
      font-family: 'Open Sans', sans-serif;
    }
  `)
}

// Color options
const colorStyles = {
  monochrome: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseDarker};
      border-color: ${theme.baseDarker};
      color: ${theme.baseBrighter};
    }

    &.outlined {
      color: ${theme.baseDarker}
    }

    &:hover {
      background-color: ${theme.baseDarker.lighten(0.5)};
      border-color: ${theme.baseDarker.lighten(0.5)};
      color: ${theme.baseBrighter};
    }
  `),

  normal: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseRed};
      border-color: ${theme.baseRed};
      color: ${theme.baseBrighter};
    }

    &.outlined {
      color: ${theme.baseRed}
    }

    &:hover {
      background-color: ${theme.baseRed.darken(0.2)};
      border-color: ${theme.baseRed.darken(0.2)};
      color: ${theme.baseBrighter};
    }
  `)
}

// Size options
const sizeStyles = {
  normal: cmz(`
    font-size: .75em;
    padding: .7em 2.3em;
  `),

  large: cmz(
    typo.family.action,
    `
      font-size: 1em;
    `
  ),

  small: cmz(`
    font-size: .65em;
  `),

  block: cmz(`
    display: block;
    margin: 10px auto;
    width: 200px;
  `)
}

// Button variations
const extraStyles = {
  disabled: cmz(`
    &, &:hover {
      background: ${theme.baseHighlight};
      border-color: transparent;
      color: ${theme.baseBrighter};
      pointer-events: none;
    }
  `),

  outlined: cmz(`
    & {
      background-color: transparent;
    }

    &.${colorStyles.normal} {
      color: ${theme.baseRed};
    }

    &.${colorStyles.monochrome} {
      color: ${theme.baseDarker};
    }
  `)
}

class Button extends PureComponent<Props> {
  static defaultProps = {
    className: '',
    component: 'button',
    color: 'normal',
    size: 'normal',
    outlined: false,
    disabled: false
  }

  render () {
    const {
      className: customClassName,
      size,
      color,
      outlined,
      disabled,
      component: CustomComponent,
      children,
      ...rest
    } = this.props

    const colorClassName = colorStyles[color] || ''
    const sizeClassName = sizeStyles[size] || ''
    const extraClassName = [
      outlined && extraStyles.outlined,
      outlined && 'outlined',
      disabled && extraStyles.disabled
    ].filter(Boolean).join(' ')
    const buttonClassName = `${colorClassName} ${sizeClassName} ${extraClassName}`

    return (
      <CustomComponent {...rest} className={`${String(customClassName)} ${buttonClassName}`}>
        <span>{children}</span>
      </CustomComponent>
    )
  }
}

export default Button
