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
  padded: cmz(`
    padding: 10px
  `),
  triangle: cmz(`
    transform: translateY(-3px)
  `),
  content: cmz(`
    display: none
    z-index: 999
  `),
  contentvisible: cmz(`
    display: block
    position: absolute
  `),
  contentright: cmz(`
    right: 0
  `)
}

type Props = {
  icon?: Icon,
  label?: string,
  children?: Element<*>,
  position?: string,
  indicator?: boolean,
  padded?: boolean
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
    padded: false
  }

  state = {
    open: false
  }

  toggle = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  close = () => this.setState(() => ({ open: false }))

  render () {
    const { icon, label, children, position, indicator, padded } = this.props
    const { open } = this.state

    const labelClasses = [
      styles.label,
      padded && styles.padded
    ].join(' ')
    const contentClasses = [
      styles.content,
      open && styles.contentvisible,
      position === 'right' && styles.contentright
    ].join(' ')

    return children ? (
      <ClickOutside onClickOutside={this.close}>
        <div className={styles.dropdown}>
          <div className={labelClasses} onClick={this.toggle}>
            {icon && <SvgIcon icon={icon} color='text' />}
            {label && <span>{label}</span>}
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
