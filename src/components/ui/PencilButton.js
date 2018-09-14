// @flow
/* global SyntheticEvent, HTMLButtonElement */

import React, { Component } from 'react'

import type { Color } from './SvgIcon'
import SvgIcon from './SvgIcon'

const cmz = require('cmz')

const styles = {
  editButton: cmz(`
    background: transparent
    border: none
    cursor: pointer
    opacity: 0
    padding: 5px
    transition: opacity .25s linear
  `),

  editButtonVisible: cmz(`
    opacity: 1
  `)
}

type Props = {
  onClick?: Function,
  visible?: boolean,
  color?: Color,
  hover?: Color
}

class PencilButton extends Component<Props, void> {
  static defaultProps = {
    visible: true,
    color: 'default',
    hover: 'default'
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { onClick } = this.props
    event.preventDefault()
    onClick && onClick(event)
  }

  render () {
    const { visible, color, hover } = this.props
    return (
      <span
        role='button'
        onClick={this.handleClick}
        className={`${styles.editButton} ${visible ? styles.editButtonVisible : ''}`}
      >
        <SvgIcon icon='edit' color={color} hover={hover} />
      </span>
    )
  }
}

export default PencilButton
