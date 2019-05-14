// @flow

import React from 'react'

import SvgIcon from '../SvgIcon'

import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  isExpanded: boolean,
  onClick: (event: any) => void
}

const cmz = require('cmz')

const cx = {
  heading: cmz(typeface.extraHeading, `
    & {
      align-items: center
      border-bottom: 1px solid ${theme.lineSilver2}
      color: ${theme.typoHighlightOnDarkBackground}
      cursor: pointer
      display: flex
      font-size: 1.0625rem
      padding: 24px 60px
      text-transform: uppercase
      display: flex
      box-sizing: border-box
    }

    &:last-of-type {
      border-bottom: none
    }
  `),

  text: cmz(`
    width: 100%
  `)
}

const Heading = (props: Props) => (
  <div onClick={props.onClick} className={cx.heading}>
    <div className={cx.text}>
      {props.children}
    </div>
    <SvgIcon
      icon={props.isExpanded ? 'triangleup' : 'triangledown'}
      color='grayscarpaflow'
    />
  </div>
)

export default Heading
