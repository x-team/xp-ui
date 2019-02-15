// @flow

import React, { Fragment } from 'react'

import Label from './Label'
import Collapsible from '../Collapsible'
import SvgIcon from '../SvgIcon'

import type { Element } from 'react'

export type Props = {
  label: Element<*>,
  children: Element<*>,
  iscollapsible: boolean
}

const cmz = require('cmz')

const cx = {
  filter: cmz(`
    padding: 0 60px 20px
  `),

  header: cmz(`
    display: flex
    cursor: pointer
  `),

  triangle: cmz(`
    padding: 0 60px 10px 0
  `)
}

const Filter = (props: Props) => props.iscollapsible ? (
  <Collapsible.Container initialExpanded>
    <Collapsible.Header>
      <div className={cx.header}>
        <Label>{props.label}</Label>
        <div className={cx.triangle}>
          <SvgIcon
            icon={props.isExpanded ? 'triangleup' : 'triangledown'}
            color='grayscarpaflow'
          />
        </div>
      </div>
    </Collapsible.Header>
    <Collapsible.Body>
      <div className={cx.filter}>{props.children}</div>
    </Collapsible.Body>
  </Collapsible.Container>
) : (
  <Fragment>
    <Label>{props.label}</Label>
    <div className={cx.filter}>{props.children}</div>
  </Fragment>
)

export default Filter
