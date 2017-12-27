// @flow

import React, { PureComponent } from 'react'

import { xTeamLogo } from '../../../styles/logo'
import theme, { breakpoints } from '../../../styles/theme'
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
  @media screen and (max-width: ${breakpoints.md}) { & {
    border-top: 1px solid ${theme.lineSilver2}
    padding: 1.5rem 0;
  } }
  `),
  columnContainer: cmz(`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  `
  @media screen and (max-width: ${breakpoints.md}) { & {
    justify-content: center;
  } }
  `),
  logoColumn: cmz(`
    width: 20%;
  `,
  `
  @media screen and (max-width: ${breakpoints.md}) { & {
    display: none;
  } }
  `),
  column: cmz(`
    flex-grow: 1;
    max-width: 28%;
  `,
  `
  @media screen and (max-width: ${breakpoints.md}) { &:not(:nth-child(2)) {
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
  `),
  copyright: cmz(
    `
    font-size: 0.75rem;
    opacity: 0.5;
    line-height: 0;
    color: ${theme.baseDarker}
  `,
    typo.baseText
  )
}

export default class Footer extends PureComponent<Props> {
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
      </div>
    )
  }
}
