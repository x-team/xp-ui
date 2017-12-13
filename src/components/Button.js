// @flow

import React, { PureComponent } from 'react'

import type { CmzAtom } from 'cmz'
import type { Element } from 'react'

import theme from '../styles/theme'
import typo from '../styles/typo'

const cmz = require('cmz')

export type Size = 'normal' | 'large' | 'small'
export type Color = 'normal' | 'monochrome'

type Props = {
  className: string | CmzAtom,
  size: Size,
  color: Color,
  outlined: ?boolean,
  disabled: ?boolean,
  block: ?boolean,
  component: string,
  children?: Element<*> | string
}

const baseStyles = {
  root: cmz(`
    display: inline-block;
    border: 2px solid transparent;
    background: transparent;
    outline: none;
    margin: .15em auto;
    padding: 1.25em 3.5em;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all .3s ease-out;
  `),

  content: cmz(typo.labelText, 'font-size: inherit')
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
  small: cmz(`font-size: 10px !important`),

  normal: cmz(`font-size: 12px !important`),

  large: cmz(`font-size: 16px !important`)
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
  `),

  block: cmz(`
    display: block
    margin: 10px auto
    width: 200px
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
      block,
      component: CustomComponent,
      children,
      ...rest
    } = this.props

    const colorClassName = colorStyles[color] || ''
    const sizeClassName = sizeStyles[size] || ''
    const extraClassName = [
      outlined && extraStyles.outlined,
      outlined && 'outlined',
      block && extraStyles.block,
      disabled && extraStyles.disabled
    ].filter(Boolean).join(' ')
    const buttonClassName = `${colorClassName} ${sizeClassName} ${extraClassName}`

    return (
      <CustomComponent {...rest} className={`${String(customClassName)} ${buttonClassName}`}>
        <span className={baseStyles.content}>{children}</span>
      </CustomComponent>
    )
  }
}

export default Button
