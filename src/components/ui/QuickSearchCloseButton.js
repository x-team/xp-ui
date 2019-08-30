// @flow
/* global SyntheticEvent, HTMLButtonElement, React$Node */

import React from 'react'

import Button from './Button'

const cmz = require('cmz')

type Props = {
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  children?: React$Node,
  centralized?: boolean
}

const cx = {
  container: cmz(`
    padding: 10px 20px
    display: flex
    flex-direction: column
    place-content: center
  `),

  button: cmz(`
    text-transform: uppercase
  `),

  centralized: cmz(`
    height: 100%
  `)
}

const QuickSearchCloseButton = ({ onClick, children, centralized }: Props) => {
  const classNames = centralized
    ? [cx.container, cx.centralized].join(' ')
    : cx.container
  return (
    <div className={classNames}>
      <Button
        className={cx.button}
        outlined
        wide
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}

QuickSearchCloseButton.defaultProps = {
  centralized: false
}

export default QuickSearchCloseButton
