// @flow

import React, { PureComponent } from 'react'

import { xTeamLogo } from '../../../styles/logo'
import theme, { mediaQueries } from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  lists: Array<Element<*>>,
  brands: Element<*>,
  copyright: string
}

const cx = {
  footer: cmz(`
    & {
      position: relative
      width: calc(100% - 2rem)
      max-width: 1280px
      margin: 0 auto
    }

    ${mediaQueries.mediaQueries} {
      padding-bottom: 6.5rem
    }

    ${mediaQueries.desktop} {
      & {
        width: calc(100% - 4rem)
        padding: 6.5rem 0
      }
    }
  `),

  links: cmz(`
    ${mediaQueries.medium} {
      & {
        text-align: center
        padding: 1.5rem 0
        border-top: 1px solid ${theme.lineSilver2}
      }
    }

    ${mediaQueries.desktop} {
      & {
        display: flex
        justify-content: center
      }
    }
  `),

  column: cmz(`
    &:last-child {
      margin-left: auto
      width: 15%
    }

    ${mediaQueries.desktop} {
      & {
        flex-grow: 1
        max-width: 28%
      }

      &:last-child {
        max-width: 120px
      }
    }

    ${mediaQueries.medium} {
      &:nth-child(2) {
        display: block
      }

      & {
        display: none
      }
    }
  `),

  colophon: cmz(`
    & {
      font-family: 'Open Sans', sans-serif
      color: ${theme.baseDarker}
      font-size: 12px
      overflow: hidden
      margin-top: 3.125rem
      padding-top: 2.5rem
      border-top: 1px solid ${theme.lineSilver2}
    }

    ${mediaQueries.medium} {
      & {
        margin: auto
        text-align: center
        font-size: 14px
        position: relative
        margin-bottom: 4.5rem
      }
    }

    ${mediaQueries.desktop} {
      & {
        width: 80%
        margin-left: 20%
      }
    }
  `),

  copyright: cmz(
    typeface.semiHeading,
    `
      & {
        font-size: 12px
        font-weight: 400
        opacity: .5
        color: ${theme.baseDarker}
      }

      ${mediaQueries.medium} {
        & {
          font-size: 14px
        }
      }
    `
  ),

  mobileLogo: cmz(`
    & {
      text-align: center
      margin-top: 32px
    }

    ${mediaQueries.desktop} {
      & {
        display: none
      }
    }
  `)
}

class Footer extends PureComponent<Props> {
  render () {
    const { lists, brands, copyright } = this.props

    return (
      <div className={cx.footer}>

        <div className={cx.links}>
          <div className={cx.column}>
            {xTeamLogo(94, 32, theme.logoGray)}
          </div>
          {lists.map((item, id) => (
            <div key={id} className={cx.column}>
              {item}
            </div>
          ))}
        </div>

        <div className={cx.colophon}>
          <div>{brands}</div>
          <div className={cx.copyright}>{copyright}</div>
          <div className={cx.mobileLogo}>{xTeamLogo(94, 32, theme.logoGray)}</div>
        </div>
      </div>
    )
  }
}

export default Footer
