// @flow

import React from 'react'
import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Node } from 'react'

const cmz = require('cmz')

const cx = cmz(
  typo.subheading,
  `
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: ${theme.baseRed};
    color: ${theme.baseBrighter};
    box-shadow: 0px 6px 30px -7px rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 9999;
    bottom: 15px;
    right: 15px;
  `
)

type Props = {
  className: string,
  children: Node,
}

const IssueCollectorButton = ({ className, children, ...props }: Props) => (
  <button className={[cx, className].join(' ')} {...props}>{children}</button>
)

IssueCollectorButton.defaultProps = {
  className: ''
}

export default IssueCollectorButton
