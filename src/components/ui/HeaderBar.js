// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'
import { xTeamLogo } from '../../styles/logo'

const cmz = require('cmz')

type Props = {}

const logoWrapper = cmz(`
  display: flex
  justify-content: center
  box-shadow: 0 0 2px rgba(0, 0, 0, .25)
  height: 58px
  padding-top: 28px
  width: 100%
`)

class HeaderBar extends PureComponent<Props> {
  render () {
    return (
      <div className={logoWrapper}>
        {xTeamLogo(84, 30, theme.typoHeading)}
      </div>
    )
  }
}

export default HeaderBar
