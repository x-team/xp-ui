// @flow

import React, { PureComponent } from 'react'
import { xTeamLogo } from '../styles/logo'

const cmz = require('cmz')

type Props = {}

const cx = {
  logoWrapper: cmz(`
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px -5px rgba(0,0,0,0.25);
    height: 58px;
    padding-top: 28px;
    width: 100%;
`)
}

export default class HeaderBar extends PureComponent<Props> {
  static defaultProps = {}

  render () {
    return (
      <div className={cx.logoWrapper}>
        {xTeamLogo(84, 30, '#231f20')}
      </div>
    )
  }
}
