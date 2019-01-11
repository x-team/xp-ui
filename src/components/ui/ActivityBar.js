// @flow

import React from 'react'
import SvgIcon from './SvgIcon'

import { timeSince } from '../../utils/helpers'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  container: cmz(`
    & {
      flex: 1 0 100%
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
    color: ${theme.typoLabel}
    border-left: 1px solid ${theme.silver}
  `)
}

type Props = {
  text?: string,
  datetime?: Date | string | number
}

export default function ActivityBar ({ text, datetime }: Props) {
  return <div className={cx.container}>
    <SvgIcon icon='time' color='grayscale' />
    <div className={cx.activity} title={text}>{text}</div>
    <div className={cx.time}>{timeSince(datetime)}</div>
  </div>
}
