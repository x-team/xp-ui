// @flow

import React, { PureComponent, Fragment } from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import StatusMarker from './StatusMarker'

const cmz = require('cmz')

const cx = {
  option: cmz(
    typo.baseText,
    `
      margin: 0 15px
      padding: 5px 0
      font-size: 1rem
      font-weight: normal
      color: ${theme.baseGray}
      text-transform: capitalize
      cursor: pointer
    `
  ),

  statusFilterDisabled: cmz(`
    cursor: default
  `)
}

type ApplicantStatusType = 'accepted' | 'excluded'

type MembersStatus = {
  accepted: ?boolean,
  excluded: ?boolean
}

type Props = {
  handleCheck: (name: string) => void,
  checked: MembersStatus,
  disabled?: boolean
}

const STATUS_ACTIONS = {
  accepted: 'Accept',
  excluded: 'Exclude'
}

class StatusFilter extends PureComponent<Props, void> {
  static defaultProps = {
    disabled: true,
    checked: {
      accepted: false,
      excluded: false
    }
  }

  handleClick = (status: ApplicantStatusType) => () => {
    const { handleCheck, disabled } = this.props
    if (!disabled) {
      handleCheck(status)
    }
  }

  render () {
    const { checked, disabled } = this.props
    const labelClassName = [[cx.option], disabled && cx.statusFilterDisabled].filter(Boolean).join(' ')
    const types = Object.keys(STATUS_ACTIONS)
    return (
      <Fragment>
        {types.map(status => (
          <label
            key={`status-${status}`}
            className={labelClassName}
            onClick={this.handleClick(status)}
            data-checked={Boolean(checked[status])}
            data-testid={`xpui-statusFilter-${status}`}
          >
            <StatusMarker
              disabled={disabled}
              status={status}
              filled={Boolean(checked[status])}
            />
            {status}
          </label>
        ))}
      </Fragment>
    )
  }
}

export default StatusFilter
