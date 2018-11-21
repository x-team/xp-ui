// @flow
/* globals SyntheticEvent HTMLSpanElement */

import * as React from 'react'
import Button from './Button'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  tabularFilter: cmz(`
    & {
      margin-right: 10px;
      margin-top: 10px;
      cursor: default;
      padding: 10px 10px 10px 19px;
    }

    & > span {
      display: flex;
      align-items: center;
    }
  `),

  removeTabularFilter: cmz(`
    color: ${theme.baseRed};
    cursor: pointer;
    margin-left: 10px;
    line-height: 15px;
    font-size: 1.75rem;
  `)
}

type Props = {
  children: React.Node,
  onClickRemove: (event: SyntheticEvent<HTMLSpanElement>) => void
}

export default function FilterTag ({ children, onClickRemove }: Props) {
  return (
    <Button className={cx.tabularFilter} color='silver' component='span' selected outlined rounded raised>
      <span>{children}</span>
      <span className={cx.removeTabularFilter} onClick={onClickRemove}>
        ×
      </span>
    </Button>
  )
}
