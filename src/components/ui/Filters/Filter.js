// @flow

import React, { Fragment } from 'react'

import Label from './Label'

import type { Element } from 'react'

export type Props = {
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  filter: cmz(`
    padding: 0 20px 20px
  `)
}

const Filter = (props) => (
  <Fragment>
    <Label>{props.label}</Label>
    <div className={cx.filter}>{props.children}</div>
  </Fragment>
)

export default Filter
