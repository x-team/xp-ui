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
  heading: cmz(typeface.extraHeading, `
    & {
      color: ${theme.typoHighlightOnDarkBackground}
      text-transform: uppercase
      font-size: 1rem
      display: flex
      align-items: center
      padding: 24px 20px
    }

    &:not(:first-of-type) {
      border-top: 1px solid ${theme.lineSilver2}
    }
  `)
}

const Heading = (props: Props) => (
  <div className={cx.heading}>{props.children}</div>
)

export default Heading
