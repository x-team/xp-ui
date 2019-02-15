// @flow

import React from 'react'

import SvgIcon from '../SvgIcon'

import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  isExpanded: boolean,
  onClick: (event: any) => void,
}

const cmz = require('cmz')

const cx = {
  heading: cmz(typeface.extraHeading, `
      align-items: center
      border-bottom: 1px solid ${theme.lineSilver2}
      border-top: 1px solid ${theme.lineSilver2}
      color: ${theme.typoHighlightOnDarkBackground}
      cursor: pointer
      display: flex
      font-size: 1.0625rem
      padding: 24px 20px
      text-transform: uppercase
      position: relative
  `),

  triangle: cmz(`
    position: absolute
    right: 15px
    margin: 0 auto
  `)
}

const Heading = (props: Props) => (
  <div onClick={props.onClick} className={cx.heading}>
    {props.children}
    <span className={cx.triangle}>
      <SvgIcon
        icon={props.isExpanded ? 'triangleup' : 'triangledown'}
        color='grayscarpaflow'
      />
    </span>
  </div>
)

export default Heading
