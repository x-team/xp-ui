// @flow

import React, { Fragment } from 'react'

import Button from './Button'
import TruncatedList from './TruncatedList'

import { size } from '../../utils/helpers'

import typo from '../../styles/typo'
import theme from '../../styles/theme'

import type { Node } from 'react'

const cmz = require('cmz')

const cx = {
  list: cmz(typo.baseText, `
    display: block
    font-size: 1rem
    line-height: 1.4
  `),

  item: cmz(`
    display: flex
    margin-bottom: 0.6rem
  `),

  date: cmz(`
    display: inline-block
    vertical-align: top
    margin-right: 2rem
    min-width: 80px
    color: ${theme.typoLabel}
  `),

  activity: cmz(`
    flex: 1
    word-break: break-word
    margin-right: 2rem
  `),

  user: cmz(`
    width: 200px
    max-width: 200px
    text-align: left
    white-space: nowrap
  `),

  button: cmz(`
    &.outlined {
      margin-top: 40px
      color: ${theme.typoLabel}
      border: 1px solid ${theme.lineSilver2}
    }

    &.outlined:hover {
      background: ${theme.baseBright}
    }
  `),

  detail: cmz(`
    margin-bottom: 0.5rem
    line-height: 1.2
  `)
}

type ActivityType = {
  date: string,
  activity: Node,
  user: string
}

type ActivityLogDetails = {
  label: string,
  value: string
}

type ActivityLogType = {
  label: string,
  value: string | Array<ActivityLogDetails>
}

type Props = {
  logs: Array<ActivityType>
}

const ActivityLog = ({ label, value }: ActivityLogType) => Array.isArray(value) ? (
  <div>
    <span>{label}</span>
    <span>: </span>
    {value && (
      <b>
        {value.map((detail, i) => detail.label).join(', ')}
      </b>
    )}
    {size(value) > 0 && (
      <div>
        {value.map((detail, i) => (
          <p className={cx.detail} key={i}>
            {detail.label}: <b>{detail.value}</b>
          </p>
        ))}
      </div>
    )}
  </div>
) : (
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

const RenderItem = ({ date, activity, user }: ActivityType) => (
  <div className={cx.item}>
    <div className={cx.date}>{date}</div>
    <div className={cx.activity}>{activity}</div>
    <div className={cx.user}>{user}</div>
  </div>
)

const ActivityLogsDisplay = (props: Props) =>
  <TruncatedList
    visible={4}
    increment={4}
    items={props.logs.map(log => <RenderItem {...log} />)}
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

ActivityLogsDisplay.Log = ActivityLog
ActivityLogsDisplay.defaultProps = {
  logs: []
}

export default ActivityLogsDisplay
