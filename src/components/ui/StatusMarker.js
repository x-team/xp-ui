// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  base: cmz(`
    display: inline-block
    box-sizing: border-box
    margin-right: 10px
    width: 10px
    height: 10px
    border-radius: 50%
  `),

  accepted: cmz(`
    & {
      border: 2px solid ${theme.iconBrightGreen}
    }

    &[data-filled=true] {
      background: ${theme.iconBrightGreen}
    }
  `),

  'accepted-disabled': cmz(`
    & {
      border: 2px solid ${theme.iconFrenchGrayDarker}
    }

    &[data-filled=true] {
      background: ${theme.iconFrenchGrayDarker}
    }
  `),

  excluded: cmz(`
    & {
      border: 2px solid ${theme.iconRed}
    }

    &[data-filled=true] {
      background: ${theme.iconRed}
    }
  `),

  'excluded-disabled': cmz(`
    & {
      border: 2px solid ${theme.iconDarkerGray}
    }

    &[data-filled=true] {
      background: ${theme.iconDarkerGray}
    }
  `)
}

export type ApplicantStatusType = 'accepted' | 'excluded' | null

type Props = {
  filled?: boolean,
  status?: ApplicantStatusType,
  disabled?: boolean
}

class StatusMarker extends PureComponent<Props, void> {
  static defaultProps = {
    filled: true,
    status: null,
    disabled: false
  }

  render () {
    const { filled, status, disabled } = this.props

    if (!status) {
      return null
    }

    const iconClassName = disabled ? cx[`${status}-disabled`] : cx[status]

    return (
      <i
        data-filled={disabled || filled}
        className={[cx.base, iconClassName].join(' ')}
      />
    )
  }
}

export default StatusMarker
