// @flow

import React, { PureComponent } from 'react'

import type { CmzAtom } from 'cmz'
import type { Node } from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

export type Size = 'normal' | 'large' | 'small'
export type Color = 'normal' | 'monochrome' | 'silver' | 'gray' | 'grayPink'

type Props = {
  className: string | CmzAtom,
  size: Size,
  color: Color,
  outlined: boolean,
  rounded: boolean,
  smallRounded: boolean,
  raised: boolean,
  pseudolink: boolean,
  selected: boolean,
  disabled: boolean,
  block: boolean,
  wide: boolean,
  selectbox: boolean,
  component: string,
  children?: Node,
  tag?: string,
  readOnly: boolean
}

const baseStyles = {
  root: cmz(`
    display: inline-block
    border: 2px solid transparent
    background: transparent
    text-align: center
    outline: none
    margin: 2px auto
    padding: 10px 19px
    text-decoration: none
    cursor: pointer
    white-space: nowrap
    transition: all .3s ease-out
    position: relative
    font-size: 1rem
  `),

  content: cmz(typo.labelText, 'font-size: inherit')
}

// Color options
const colorStyles = {
  monochrome: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseDarker}
      border-color: ${theme.baseDarker}
      color: ${theme.baseBrighter}
    }

    &.outlined {
      color: ${theme.baseDarker}
    }

    &:not(.readOnly):hover {
      background-color: ${theme.baseDarker.lighten(0.5)}
      border-color: ${theme.baseDarker.lighten(0.5)}
      color: ${theme.baseBrighter}
    }
  `),

  normal: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseRed}
      border-color: ${theme.baseRed}
      color: ${theme.baseBrighter}
    }

    &.outlined {
      color: ${theme.baseRed}
    }

    &:not(.readOnly):hover {
      background-color: ${theme.baseRed.darken(0.2)}
      border-color: ${theme.baseRed.darken(0.2)}
      color: ${theme.baseBrighter}
    }
  `),

  silver: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.lineSilver2}
      border-color: ${theme.lineSilver2}
      color: ${theme.baseDark}
    }

    &.outlined {
      color: ${theme.baseDark}
    }

    &.outlined.raised:not(.readOnly):hover {
      background-color: transparent
      border-color: transparent
    }

    &:not(.readOnly):hover {
      background-color: ${theme.lineSilver2.darken(0.025)}
      border-color: ${theme.lineSilver2.darken(0.025)}
      color: ${theme.baseDark}
    }
  `),

  grayPink: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseBright}
      border-color: ${theme.baseBright}
      color: ${theme.typoParagraphOnDarkBackground}
    }

    &.outlined {
      color: ${theme.baseDark}
    }

    &.outlined.raised:not(.readOnly):hover {
      background-color: transparent
      border-color: transparent
    }

    &:not(.readOnly):hover {
      background-color: ${theme.baseFairPink}
      border-color: ${theme.baseFairPink}
      color: ${theme.baseRed}
    }
  `),

  gray: cmz(
    baseStyles.root, `
    & {
      background-color: ${theme.baseBombay}
      border-color: ${theme.baseBombay}
      color: ${theme.baseBrighter}
    }

    &.outlined {
      color: ${theme.baseDark}
    }

    &.outlined.raised:not(.readOnly):hover {
      background-color: transparent
      border-color: transparent
    }

    &:not(.readOnly):hover {
      background-color: ${theme.baseBombay.darken(0.025)}
      border-color: ${theme.baseBombay.darken(0.025)}
      color: ${theme.baseBrighter}
    }
  `)

}

// Size options
const sizeStyles = {
  small: cmz(`
    font-size: 10px !important
    padding: 8px 16px
  `),

  normal: cmz(`font-size: 12px !important`),

  large: cmz(`
    font-size: 16px !important
    padding: 14px 24px
  `)
}

// Button variations
const extraStyles = {
  disabled: cmz('disabled', `
    &, &:hover {
      background: ${theme.baseHighlight}
      border-color: transparent
      color: ${theme.baseBrighter}
      pointer-events: none
    }
  `),

  outlined: cmz(`
    & {
      background-color: transparent
    }

    &.${colorStyles.normal} {
      color: ${theme.baseRed}
    }

    &.${colorStyles.monochrome} {
      color: ${theme.baseDarker}
    }

    &.disabled {
      color: ${theme.typoLabel}
    }
  `),

  block: cmz(`
    display: block
    margin: 10px auto
    width: 200px
  `),

  wide: cmz(`
    display: block
    margin: 0 auto
    width: 100%
  `),

  rounded: cmz(`
    border-radius: 4px
  `),

  smallRounded: cmz(`
    border-radius: 2px
  `),

  raised: cmz(`
    &:not(.readOnly):hover {
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .08)
    }
  `),

  pseudolink: cmz(`
    &.pseudolink {
      border-color: transparent
      color: ${theme.typoLabel}
    }

    &.pseudolink > span {
      text-transform: initial
    }

    &.pseudolink:not(.readOnly):hover {
      background-color: ${theme.baseBright}
      border-color: transparent
      color: ${theme.baseDark}
    }
  `),

  selected: cmz(`
    & {
      border-color: ${theme.baseRed}
    }

    &.outlined.raised:not(.readOnly):hover {
      box-shadow: none
      border-color: ${theme.baseRed}
    }
  `),

  tag: cmz(`
    & {
      border-top-left-radius: 0
    }

    &::before {
      position: absolute
      left: -2px
      bottom: calc(100% - 5px)
      content: attr(data-tag)
      padding: 0 .5rem
      background-color: ${theme.baseRed}
      font-weight: bold
      line-height: 2
      color: ${theme.baseBrighter}
      font-size: .5rem
      text-transform: uppercase
      transition: all .3s ease-out
    }
  `),

  selectbox: cmz(sizeStyles.large, `
    & {
      background-color: ${theme.baseBrighter}
      border-color: transparent
      color: ${theme.baseRed}
      padding: 20px
    }

    &:not(.readOnly):hover {
      background-color: ${theme.baseBright}
      border-color: transparent
      color: ${theme.baseRed.darken(0.025)}
    }

    & > span {
      display: flex
      justify-content: center
      align-items: center
      text-transform: initial
    }

    & > span > svg {
      margin-right: 10px
    }
  `),

  readOnly: cmz(`
    &:hover {
      cursor: initial
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
    disabled: false,
    rounded: false,
    smallRounded: false,
    raised: false,
    pseudolink: false,
    selected: false,
    block: false,
    wide: false,
    selectbox: false,
    readOnly: false
  }

  render () {
    const {
      className: customClassName,
      size,
      color,
      outlined,
      disabled,
      rounded,
      smallRounded,
      raised,
      pseudolink,
      selected,
      block,
      wide,
      selectbox,
      component,
      children,
      tag,
      readOnly,
      ...rest
    } = this.props

    const CustomComponent = readOnly ? 'span' : component
    const colorClassName = colorStyles[color] || ''
    const sizeClassName = sizeStyles[size] || ''
    const extraClassName = [
      outlined && extraStyles.outlined,
      outlined && 'outlined',
      rounded && extraStyles.rounded,
      rounded && 'rounded',
      smallRounded && extraStyles.smallRounded,
      smallRounded && 'smallRounded',
      raised && extraStyles.raised,
      raised && 'raised',
      pseudolink && [extraStyles.outlined, extraStyles.pseudolink].join(' '),
      pseudolink && 'outlined pseudolink',
      selected && extraStyles.selected,
      selected && 'selected',
      block && extraStyles.block,
      wide && extraStyles.wide,
      selectbox && [extraStyles.wide, extraStyles.selectbox].join(' '),
      disabled && extraStyles.disabled,
      tag && extraStyles.tag,
      readOnly && extraStyles.readOnly,
      readOnly && 'readOnly'
    ].filter(Boolean).join(' ')
    const buttonClassName = `${colorClassName} ${sizeClassName} ${extraClassName}`

    return (
      <CustomComponent
        {...rest}
        className={`${String(customClassName)} ${buttonClassName}`}
        data-tag={tag}
      >
        <span className={baseStyles.content}>{children}</span>
      </CustomComponent>
    )
  }
}

export default Button
