// @flow

import React from 'react'
import isNumber from 'lodash.isnumber'

import { size } from '../../utils/helpers'

const cmz = require('cmz')

const cx = {
  result: cmz(`
    font-size: 1.0625rem;
  `),

  resultNumber: cmz(`
    font-weight: 600;
    margin-right: 5px;
  `)
}

type Props = {
  items?: number | Array<*>
}

const ResultCount = ({ items }: Props) => (
  <span className={cx.result}>
    <span className={cx.resultNumber}>{isNumber(items) ? items : size(items)}</span>
    Results
  </span>
)

export default ResultCount
