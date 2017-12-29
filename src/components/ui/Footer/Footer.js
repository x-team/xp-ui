// @flow

import React, { PureComponent } from 'react'

import { xTeamLogo } from '../../../styles/logo'
import theme, { mediaQueries } from '../../../styles/theme'
import typo from '../../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  lists: Array<Element<*>>,
  brands: Element<*>,
  copyright: string
}

const cx = {
  footer: cmz(`
    padding: 6.5rem 0;
  `,
  `
  ${mediaQueries.medium} {
    & {
      border-top: 1px solid ${theme.lineSilver2}
      padding: 1.5rem 0;
    }
  }
  `),
  columnContainer: cmz(`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  `
  ${mediaQueries.medium} {
    & {
      justify-content: center;
    }
  }
  `),
  logoColumn: cmz(`
    width: 20%;
  `,
  `
  ${mediaQueries.medium} {
    & {
      display: none;
    }
  }
  `),
  column: cmz(`
    flex-grow: 1;
    max-width: 28%;
  `,
  `
  ${mediaQueries.medium} {
    &:not(:nth-child(2)) {
      display: none
    }

    & {
      text-align: center
      line-height: 1.75rem;
    }
  }
  `),
  colophon: cmz(`
    flex-grow: 1;
    max-width: 72%;
    margin-top: 3.125rem;
    padding-top: 2.5rem;
    border-top: 1px solid ${theme.lineSilver2}
  `,
  `
  ${mediaQueries.medium} {
    & {
      text-align: center;
    }
  }
  `),
  copyright: cmz(
    `
    font-size: 14px;
    opacity: 0.5;
    line-height: 0;
    color: ${theme.baseDarker}
  `,
    typo.baseText
  ),
  mobileLogo: cmz(
    `
    & {
      text-align: center
      margin-top: 50px
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
        <div className={cx.columnContainer}>
          <div className={cx.logoColumn}>{xTeamLogo(94, 32, theme.baseSilver)}</div>
          {lists.map((item, id) => {
            return (
              <div key={id} className={cx.column}>
                {item}
              </div>
            )
          })}
        </div>
        <div className={cx.columnContainer}>
          <div className={cx.logoColumn} />
          <div className={cx.colophon}>
            <div>{brands}</div>
            <div className={cx.copyright}>{copyright}</div>
          </div>
        </div>
        <div className={cx.mobileLogo}>{xTeamLogo(94, 32, theme.baseSilver)}</div>
      </div>
    )
  }
}

export default Footer
