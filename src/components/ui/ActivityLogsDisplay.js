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
    margin-right: 2em
    min-width: 80px
  `),

  activity: cmz(`
    flex: 1
  `),

  author: cmz(`
    min-width: 200px
    text-align: left
  `),

  button: cmz(`
    margin-top: 40px
  `)
}

type Activity = {
  date: string,
  activity: Node,
  author: string
}

type Props = {
  logs: Array<Activity>
}

type ActivityValue = {
  label: string,
  children: Node
}

class ActivityLogsDisplay extends PureComponent<Props, void> {
  static defaultProps = {
    logs: []
  }

  render () {
    const { logs } = this.props

    const renderItem = ({ date, activity, author }) => (
      <div className={cx.item}>
        <div className={cx.date}>{date}</div>
        <div className={cx.activity}>{activity}</div>
        <div className={cx.author}>{author}</div>
      </div>
    )

    return (
      <TruncatedList
        visible={3}
        increment={3}
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
