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

const ResultCount = ({ items }: Props) => {
  const countItems = isNumber(items) ? items : size(items)
  const resultText = parseInt(countItems, 10) > 1 ? 'results' : 'result'

  return (
    <span className={cx.result}>
      <span className={cx.resultNumber}>{countItems}</span>
      {resultText}
    </span>
  )
}

export default ResultCount
