// @flow

import React, { PureComponent, Fragment } from 'react'

import { size } from '../../utils/helpers'

const cmz = require('cmz')

const cx = {
  log: cmz(`
    & {
      cursor: pointer
      position: relative
    }

    &::after {
      content: ''
      position: absolute
      right: -15px
      top: 10px
      width: 0
      height: 0
      border-left: 4px solid transparent
      border-right: 4px solid transparent
    }
  `),

  logCollapsed: cmz(`
    &::after {
      border-top: 4px solid currentColor
    }
  `),

  logExpanded: cmz(`
    &::after {
      border-bottom: 4px solid currentColor
    }
  `),

  details: cmz(`
    padding: 0 0 0 1.2em
    margin: 0.5em 0
  `),

  detail: cmz(`
    line-height: 1.5
  `),

  collapsed: cmz(`
    display: none
  `)
}

export type ActivityLogType = {
  label: string,
  value: string,
  info?: string
}

export type ActivityLogPropsType = {
  label: string,
  value: string | Array<ActivityLogType>,
  info: string,
  groupValues: string
}

type Props = ActivityLogPropsType

type State = {
  collapsed: boolean
}

class ActivityLog extends PureComponent<Props, State> {
  state = {
    collapsed: true
  }

  toggleItem = () => this.setState((prevState: State) => ({ collapsed: !prevState.collapsed }))

  render () {
    const { label, value, info, groupValues } = this.props
    const logClasses = []
    if (size(value) > 0) {
      logClasses.push(cx.log)
      logClasses.push(this.state.collapsed ? cx.logCollapsed : cx.logExpanded)
    }
    return Array.isArray(value) ? (
      <div
        className={logClasses.join(' ')}
        onClick={this.toggleItem}
      >
        <span>{label}</span>
        {size(value) > 0 && (
          <Fragment>
            <span>: </span>
            <b>{groupValues}</b>
            <ul className={[cx.details, this.state.collapsed ? cx.collapsed : ''].join(' ')}>
              {value.map((item, i) => (
                <li className={cx.detail} key={i}>
                  {item.label && (
                    <span>{item.label}</span>
                  )}
                  {item.label && item.value && (
                    <span>: </span>
                  )}
                  {item.value && (
                    <b>{item.value}</b>
                  )}
                  {item.value && item.info && (
                    <span> - </span>
                  )}
                  {item.info && (
                    <span>{item.info}</span>
                  )}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    ) : (
      <Fragment>
        <span>{label}</span>
        {value && label ? (
          <Fragment>
            <span>: </span>
            <b>{value}</b>
            {info && (
              <span> - {info}</span>
            )}
          </Fragment>
        ) : value}
      </Fragment>
    )
  }
}

export default ActivityLog
