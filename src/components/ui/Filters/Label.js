// @flow

import React from 'react'

import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  label: cmz(typeface.semiHeading, `
    color: ${theme.typoHighlightOnDarkBackground}
    font-size: 1rem
    display: flex
    align-items: center
    padding: 0 60px 10px
    width: 100%
  `)
}

const Label = (props: Props) => <div className={cx.label}>{props.children}</div>

export default Label
