// @flow
/* global React$StatelessFunctionalComponent */

import React from 'react'

import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
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
        margin: 25px 0 25px 6px
        text-decoration: none
        display: flex
        align-items: center
        font-size: 12px
      }

      &:hover {
        color: ${theme.typoAnchorHover}
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 16px
          margin: 25px 0
        }
      }
    `
  ),

  label: cmz(`
    & {
      margin-left: 12px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin-left: 16px
      }
    }
  `)
}

type Props = {
  label?: string,
  link?: React$StatelessFunctionalComponent<*>
}

const JobsPageBreadcrumbs = ({ label = 'Browse all jobs', link: AppLink }: Props) => AppLink ? (
  <AppLink className={cx.breadcrumb}>
    <SvgIcon icon='arrowleft' />
    <span className={cx.label}>{label}</span>
  </AppLink>
) : null

export default JobsPageBreadcrumbs
