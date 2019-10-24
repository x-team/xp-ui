// @flow
/* global React$StatelessFunctionalComponent */

import React from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  breadcrumb: cmz(
    typo.regularText,
    `
      & {
        color: ${theme.typoAnchor}
        font-weight: normal
        cursor: pointer
        margin: 25px 0
        text-decoration: none
        display: block
      }

      &:hover {
        color: ${theme.typoAnchorHover}
      }
    `
  ),

  label: cmz(`
    margin-left: 16px
  `)
}

type Props = {
  label?: string,
  link?: React$StatelessFunctionalComponent<*>
}

const JobsPageBreadcrumbs = ({ label = 'Browse all jobs', link: Link }: Props) => Link ? (
  <Link className={cx.breadcrumb}>
    <SvgIcon icon='arrowleft' />
    <span className={cx.label}>{label}</span>
  </Link>
) : null

export default JobsPageBreadcrumbs
