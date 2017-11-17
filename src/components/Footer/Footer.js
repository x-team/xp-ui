// @flow

import React, { PureComponent } from 'react'
import type FooterList from './FooterList'
import { xTeamLogo } from '../../styles/logo'
import type FooterBrands from './FooterBrands'
const cmz = require('cmz')

type Props = {
  lists: Array<FooterList>,
  brands: FooterBrands
}

const cx = {
  columnContainer: cmz(`
    display: flex;
  `),
  column: cmz(`
    flex-grow: 1;
    max-width: 28%;
  `),
  fullWidth: cmz(`
    flex-grow: 1;
  `)
}

export default class Footer extends PureComponent<Props> {
  static defaultProps = {}

  render () {
    const { lists, brands } = this.props
    return (
      <div>
        <div className={cx.columnContainer}>
          <div className={cx.column}>{xTeamLogo(94, 32, '#b3b3b3')}</div>
          {lists.map((item, id) => {
            return (
              <div key={id} className={cx.column}>
                {item}
              </div>
            )
          })}
        </div>
        <div className={cx.columnContainer}>
          <div className={cx.column} />
          <div className={cx.fullWidth}>{brands}</div>
        </div>
      </div>
    )
  }
}
