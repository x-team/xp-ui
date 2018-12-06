// @flow

import React, { PureComponent, Fragment } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'

import typo from '../../styles/typo'

import type { Node } from 'react'

const cmz = require('cmz')

const cx = {
  list: cmz(typo.baseText, `
    display: block
    font-size: 1rem
    line-height: 2
  `),

  item: cmz(`
    display: flex
  `),

  date: cmz(`
    display: inline-block
    vertical-align: top
    margin-right: 2rem
    min-width: 80px
  `),

  activity: cmz(`
    flex: 1
  `),

  user: cmz(`
    min-width: 200px
    text-align: left
  `),

  button: cmz(`
    margin-top: 40px
  `),

  grouped: cmz(`
    font-weight: bold
    line-height: 1.2
  `),

  group: cmz(`
    margin-bottom: .6rem
  `)
}

type ActivityType = {
  date: string,
  activity: Node,
  user: string
}

type ActivityLogType = {
  label: string,
  value: string
}

type Props = {
  logs: Array<ActivityType>
}

export const ActivityLog = ({ label, value }: ActivityLogType) => (
  <div>
    <span>{label}</span>
    {value && label ? (
      <Fragment>
        <span>: </span>
        <b>{value}</b>
      </Fragment>
    ) : value}
  </div>
)

class ActivityLogsDisplay extends PureComponent<Props, void> {
  static Log = ActivityLog
  static defaultProps = {
    logs: []
  }

  render () {
    const { logs } = this.props

    const renderItem = ({ date, activity, user }: ActivityType) => (
      <div className={cx.item}>
        <div className={cx.date}>{date}</div>
        <div className={cx.activity}>{activity}</div>
        <div className={cx.user}>{user}</div>
      </div>
    )

    return (
      <TruncatedList
        visible={4}
        increment={4}
        items={logs.map(log => renderItem(log))}
        listClass={cx.list}
        viewMore={(amount, action) => (
          <Button
            wide
            outlined
            color='silver'
            onClick={action}
            className={cx.button}
          >
            View more
          </Button>
        )}
      />
    )
  }
}

export default ActivityLogsDisplay
