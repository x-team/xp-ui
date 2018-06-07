// @flow

import React, { PureComponent } from 'react'
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
    `
  ),
  label: cmz(`
    font-weight: 600
    cursor: pointer
    display: flex
    align-items: center
  `),
  text: cmz(`
    margin: 0 0 0 6px
  `),
  triangle: cmz(`
    transform: translateY(-3px)
    margin: 0 0 0 7px
  `),
  content: cmz(`
    display: none
  `),
  contentvisible: cmz(`
    display: block
    position: absolute
  `)
}

type Props = {
  icon?: Icon,
  label?: string,
  children?: Element<*>,
}

type State = {
  open: boolean,
}

class Dropdown extends PureComponent<Props, State> {
  static defaultProps = {
    icon: '',
    label: '',
    children: null
  }

  state = {
    open: false
  }

  toggle = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  render () {
    const { icon, label, children } = this.props
    const { open } = this.state
    return (label && children) ? (
      <div className={styles.dropdown}>
        <div className={styles.label} onClick={this.toggle}>
          {icon && <SvgIcon icon={icon} color='text' />}
          <span className={styles.text}>
            {label}
          </span>
          <span className={styles.triangle}>
            <SvgIcon
              icon={open ? 'triangleup' : 'triangledown'}
              color='text'
            />
          </span>
        </div>
        <div className={`${styles.content} ${open ? styles.contentvisible : ''}`}>
          {children}
        </div>
      </div>
    ) : null
  }
}

export default Dropdown
