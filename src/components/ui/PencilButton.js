// @flow
/* global SyntheticEvent, HTMLButtonElement */

import React, { Component } from 'react'

import SvgIcon from './SvgIcon'

import type { Color } from './SvgIcon'

const cmz = require('cmz')

const cx = {
  editButton: cmz(`
    background: transparent
    border: none
    opacity: 0
    padding: 5px
    transition: opacity .25s linear
    cursor: pointer
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
    const visibleClassName = visible ? cx.editButtonVisible : ''

    return (
      <span
        role='button'
        onClick={this.handleClick}
        className={`${cx.editButton} ${visibleClassName}`}
      >
        <SvgIcon icon='edit' color={color} hover={hover} />
      </span>
    )
  }
}

export default PencilButton
