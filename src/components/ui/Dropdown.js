// @flow

import React, { PureComponent } from 'react'
import ClickOutside from 'react-click-outside'
import SvgIcon from './SvgIcon'

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
      font-weight: 600
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
    transition: visibility 0s linear 0.2s, opacity 0.2s linear
    width: inherit
  `),
  contentvisible: cmz(`
    visibility: visible
    opacity: 1
    transition-delay: 0s
  `),
  contentright: cmz(`
    right: 0
  `)
}

type Props = {
  icon?: Icon | '',
  label?: Element<*> | string,
  children?: Element<*> | string,
  position?: string,
  indicator?: boolean,
  padded?: boolean,
  toggle?: boolean,
  className?: string
}

type State = {
  open: boolean
}

class Dropdown extends PureComponent<Props, State> {
  static defaultProps = {
    icon: '',
    label: '',
    children: null,
    position: 'left',
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
    const { icon, label, children, position, indicator, padded, toggle, className } = this.props
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
      open ? styles.contentvisible : '',
      position === 'right' ? styles.contentright : ''
    ].join(' ')

    return (children || label || icon) ? (
      <ClickOutside onClickOutside={this.close}>
        <div className={rootClasses}>
          <div className={labelClasses} onClick={() => toggle ? this.toggle() : this.open()}>
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
          <div className={contentClasses}>
            {children}
          </div>
        </div>
      </ClickOutside>
    ) : null
  }
}

export default Dropdown
