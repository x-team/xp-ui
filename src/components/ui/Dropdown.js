// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'
import type { Icon } from './SvgIcon'

const cmz = require('cmz')

const styles = {
  dropdown: cmz(
    typo.baseText,
    `
      position: relative
      display: inline-block
    `
  ),
  label: cmz(`
    & {
      font-weight: normal
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center
      line-height: 16px
    }

    & > * {
      margin: 0 0 0 6px
    }

    & > :first-child {
      margin: 0
    }
  `),
  labelElement: cmz(`
    width: 100%
    white-space: nowrap
  `),
  padded: cmz(`
    padding: 10px
  `),
  triangle: cmz(`
    transform: translateY(-3px)
  `),
  content: cmz(`
    position: absolute
    z-index: 999
    visibility: hidden
    opacity: 0
    transition: visibility 0s linear 0.1s, opacity 0.1s linear
    width: inherit
    top: 100%
  `),
  contentVisible: cmz(`
    visibility: visible
    opacity: 1
    transition-delay: 0s
  `),
  contentRight: cmz(`
    right: 0
  `),
  contentTop: cmz(`
    top: unset
    bottom: 100%
  `),
  tooltip: cmz(`
    & {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)
      box-sizing: border-box
      min-width: 190px
      border: 1px solid ${theme.lineSilver2}
      background: white
      padding: 0 10px
      white-space: nowrap
      position: relative
    }

    &:before, &:after {
      content: ''
      position: absolute
      left: 4px
      display: block
      border-left: 10px solid transparent
      border-right: 10px solid transparent
    }

    &:before {
      border-bottom: 10px solid ${theme.lineSilver2}
      bottom: 100%
    }

    &:after {
      border-bottom: 10px solid ${theme.baseBrighter}
      bottom: calc(100% - 1px)
    }
  `),
  tooltipTop: cmz(`
    &:before {
      border-top: 10px solid ${theme.lineSilver2}
      border-bottom: none
      bottom: -10px
    }

    &:after {
      border-top: 10px solid ${theme.baseBrighter}
      border-bottom: none
      bottom: -9px
    }
  `),
  contentTooltip: cmz(`
    padding-top: 10px
  `),
  contentTooltipTop: cmz(`
    padding-top: unset
    padding-bottom: 10px
  `)
}

type Props = {
  icon?: Icon | '',
  label?: Element<*> | string,
  children?: Element<*> | string,
  targetXOrigin?: string,
  targetYOrigin?: string,
  hover?: boolean,
  indicator?: boolean,
  padded?: boolean,
  toggle?: boolean,
  tooltip?: boolean,
  className?: string,
  tooltipClassName?: string,
  onClick?: Function
}

type State = {
  open: boolean
}

class Dropdown extends PureComponent<Props, State> {
  static defaultProps = {
    icon: '',
    label: '',
    children: null,
    targetXOrigin: 'left',
    targetYOrigin: 'bottom',
    hover: false,
    indicator: false,
    padded: false,
    toggle: true
  }

  state = {
    open: false
  }

  toggle = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  open = () => this.setState((prevState: State) => ({ open: true }))

  close = () => this.setState(() => ({ open: false }))

  render () {
    const {
      icon,
      label,
      children,
      targetXOrigin,
      targetYOrigin,
      hover,
      indicator,
      padded,
      toggle,
      tooltip,
      className,
      tooltipClassName,
      onClick
    } = this.props
    const { open } = this.state

    const rootClasses = [
      styles.dropdown,
      className || ''
    ].join(' ')
    const labelClasses = [
      styles.label,
      padded ? styles.padded : ''
    ].join(' ')
    const contentClasses = [
      styles.content,
      open ? styles.contentVisible : '',
      targetXOrigin === 'right' ? styles.contentRight : '',
      targetYOrigin === 'top' ? styles.contentTop : '',
      tooltip && children ? (
        targetYOrigin === 'top' ? styles.contentTooltipTop : styles.contentTooltip
      ) : '',
      tooltipClassName || ''
    ].join(' ')
    const tooltipClasses = [
      styles.tooltip,
      targetYOrigin === 'top' ? styles.tooltipTop : ''
    ].join(' ')

    const handleClick = (e: any) => {
      e && e.stopPropagation()
      onClick && onClick()
      return toggle ? this.toggle() : this.open()
    }

    const dropdownChildren = () =>
      React.Children.map(children, child => {
        const { props } = child
        const closeDropdown = props ? props.closeDropdown : false
        return closeDropdown
          ? React.cloneElement(child, { closeDropdown: this.close })
          : child
      })

    return (children || label || icon) ? (
      <ClickOutside onClickOutside={this.close}>
        <div
          className={rootClasses}
          onMouseEnter={hover && this.open}
          onMouseLeave={hover && this.close}
        >
          <div className={labelClasses} onClick={handleClick}>
            {icon && <SvgIcon icon={icon} color='text' />}
            {label && <span className={styles.labelElement}>{label}</span>}
            {indicator && (
              <span className={styles.triangle}>
                <SvgIcon
                  icon={open ? 'triangleup' : 'triangledown'}
                  color='text'
                />
              </span>
            )}
          </div>
          {children && (
            <div className={contentClasses}>
              {tooltip ? (
                <div className={tooltipClasses}>
                  {dropdownChildren()}
                </div>
              ) : dropdownChildren()}
            </div>
          )}
        </div>
      </ClickOutside>
    ) : null
  }
}

export default Dropdown
