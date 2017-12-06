// @flow

import React, { PureComponent } from 'react'
import type FooterList from './FooterList'
import { xTeamLogo } from '../../styles/logo'
const cmz = require('cmz')
import theme from '../../styles/theme'
import * as typo from '../../styles/typo'
import type { Element } from 'react'


type Props = {
  lists: Array<Element<*>>,
  brands: Element<*>,
  copyright: string
}

const cx = {
  footer: cmz(`
    padding: 6.5rem 0;
  `),
  columnContainer: cmz(`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  `),
  logoColumn: cmz(`
    width: 20%;
  `),
  column: cmz(`
    flex-grow: 1;
    max-width: 28%;
  `),
  colophon: cmz(`
    flex-grow: 1;
    max-width: 72%;
    margin-top: 3.125rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(0,0,0,.1)
  `),
  copyright: cmz(
    `
    font-size: 0.75rem;
    opacity: 0.5;
    line-height: 0;
    color: ${theme.black}
  `,
    typo.family.base
  )
}

export default class Footer extends PureComponent<Props> {
  render () {
    const { lists, brands, copyright } = this.props
    return (
      <div className={cx.footer}>
        <div className={cx.columnContainer}>
          <div className={cx.logoColumn}>{xTeamLogo(94, 32, '#b3b3b3')}</div>
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
