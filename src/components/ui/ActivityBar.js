import React, { PureComponent } from 'react'
import SvgIcon from './SvgIcon'

import { timeSince } from '../../utils/helpers'

const cmz = require('cmz')

const cx = {
  container: cmz(`
    & {
      flex: 1 0 auto
      flex-flow: row
      display: flex
      align-items: center
      font-family: Source Sans Pro
      font-weight: 400
      font-size: 14px
      line-height: 1
      min-width: 0
    }
    
    & > * {
      flex-shrink: 0
    }
  `),
  activity: cmz(`
    flex-shrink: 1
    min-width: 0
    max-width: 300px
    padding: 0 8px
   
    white-space: nowrap
    overflow:hidden
    text-overflow: ellipsis
  `),
  time: cmz(`
    padding: 1px 8px
    color: #B2B6BC
    border-left: 1px solid #C4C4C4
  `)
}

type Props = {
  text: string,
  datetime: Date | string | number
}

class ActivityBar extends PureComponent<Props, void> {
  render () {
    const { text, datetime } = this.props

    return <div className={cx.container}>
      <SvgIcon icon='time' color='grayscale' />
      <div className={cx.activity} title={text}>{text}</div>
      <div className={cx.time}>{timeSince(datetime)}</div>
    </div>
  }
}

export default ActivityBar
