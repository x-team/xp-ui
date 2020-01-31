// @flow

import React from 'react'

import { xTeamLogo } from '../../styles/logo'
import theme, { breakpoints } from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  copyright: string
}

const cx = {
  footer: cmz(`
    & {
      margin: 45px auto 32px
      padding: 32px 0 0
      border-top: 1px solid ${theme.lineSilver4}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 90px auto 64px
        padding: 64px 0 0
      }
    }
  `),

  logo: cmz(`
    text-align: center
    margin: 0 0 24px
  `),

  copyright: cmz(
    typeface.text,
    `
      font-size: 13px
      font-weight: 400
      color: ${theme.typoParagraph.alpha(0.5)}
      text-align: center
    `
  )
}

const Footer = ({ copyright }: Props) => (
  <div className={cx.footer}>
    <div className={cx.logo}>{xTeamLogo(33, 32, theme.logoGray)}</div>
    <div className={cx.copyright}>{copyright}</div>
  </div>
)

export default Footer
