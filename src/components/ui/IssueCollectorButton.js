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
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
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
