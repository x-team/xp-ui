// @flow
/* global React$Node */

import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const gap = '32px'

const cx = {
  wrapper: cmz(`
    & {
      max-width: 1100px
      margin: 0 auto 100px
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        margin: 0 ${gap} 100px
      }
    }
  `),

  heading: cmz(
    typo.heading,
    `
      font-size: ${gap}
      margin: ${gap} 0
    `
  ),

  container: cmz(`
    & {
      display: flex
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        flex-wrap: nowrap
        flex-direction: column
      }
    }
  `),

  content: cmz(`
    & {
      width: 100%
      order: 2
    }

    @media screen and (min-width: ${breakpoints.md}) {
      &:not(:only-child) {
        margin-right: ${gap}
        max-width: 760px
        order: 1
      }
    }
  `),

  sidebar: cmz(`
    & {
      width: 100%
      order: 1
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        max-width: 308px
        order: 2
      }
    }
  `),

  loading: cmz(`
    text-align: center
  `)
}

type Props = {
  hero?: React$Node,
  heading?: React$Node,
  content?: React$Node,
  sidebar?: React$Node,
  isLoading?: boolean
}

const JobsPageLayout = (props: Props) => {
  const { hero, heading, content, sidebar, isLoading } = props
  const headingClassName = typeof heading === 'string' ? cx.heading : ''
  return (
    <div>
      {hero}
      <div className={cx.wrapper}>
        {heading && (
          <div className={headingClassName}>{heading}</div>
        )}
        <div className={cx.container}>
          {sidebar && (
            <div className={cx.sidebar}>{sidebar}</div>
          )}
          {isLoading ? (
            <div className={[cx.content, cx.loading].join(' ')}>
              <Loader />
            </div>
          ) : (
            <div className={cx.content}>{content}</div>
          )}
        </div>
      </div>
    </div>
  )
}

JobsPageLayout.propTypes = {
  hero: PropTypes.node,
  heading: PropTypes.node,
  content: PropTypes.node,
  sidebar: PropTypes.node,
  isLoading: PropTypes.bool
}

export default JobsPageLayout
