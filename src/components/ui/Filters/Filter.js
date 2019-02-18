// @flow

import React, { Fragment } from 'react'

import Label from './Label'
import GenericCollapsible from '../GenericCollapsible'
import SvgIcon from '../SvgIcon'

import type { Element } from 'react'

export type Props = {
  label: Element<*>,
  children: Element<*>,
  isCollapsible: boolean
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

const Filter = (props: Props) => props.isCollapsible ? (
  <GenericCollapsible.Container initialExpanded>
    <GenericCollapsible.Header>
      <div className={cx.header}>
        <Label>{props.label}</Label>
        <div className={cx.triangle}>
          <SvgIcon
            icon={props.isExpanded ? 'triangleup' : 'triangledown'}
            color='grayscarpaflow'
          />
        </div>
      </div>
    </GenericCollapsible.Header>
    <GenericCollapsible.Body>
      <div className={cx.filter}>{props.children}</div>
    </GenericCollapsible.Body>
  </GenericCollapsible.Container>
) : (
  <Fragment>
    <Label>{props.label}</Label>
    <div className={cx.filter}>{props.children}</div>
  </Fragment>
)

export default Filter
