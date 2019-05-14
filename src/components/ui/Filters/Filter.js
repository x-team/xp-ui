// @flow

import React, { Fragment } from 'react'

import Label from './Label'

import type { Element } from 'react'

export type Props = {
  label: Element<*>,
  children: Element<*>
}

const cmz = require('cmz')

const cx = {
  filter: cmz(`
    padding: 0 60px 20px
    box-sizing: border-box
  `)
}

const Filter = (props: Props) => (
  <Fragment>
    <Label>{props.label}</Label>
    <div className={cx.filter}>{props.children}</div>
  </Fragment>
)

export default Filter
