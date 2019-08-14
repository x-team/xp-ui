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
  label: cmz(
    typeface.semiHeading,
    `
    color: ${theme.typoHighlightOnDarkBackground}
    font-size: 1rem
    display: flex
    align-items: center
    padding: 0 40px 10px
    width: 100%
    box-sizing: border-box
  `
  )
}

const Label = (props: Props) => <div className={cx.label} data-testid='xpui-filters-label'>{props.children}</div>

export default Label
