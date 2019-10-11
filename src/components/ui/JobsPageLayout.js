// @flow
/* global React$Node */

import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'
import ErrorBox from './ErrorBox'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const gap = '32px'
const wrapper = '1100px'

const cx = {
  wrapper: cmz(`
    & {
      max-width: calc(${wrapper} - 2 * ${gap})
      padding: 0 ${gap}
      margin: 0 auto 100px
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        padding: 0
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
      flex-wrap: nowrap
      flex-direction: column
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        flex-direction: row
      }
    }
  `),

  content: cmz(`
    & {
      width: 100%
      order: 2
    }

    @media screen and (min-width: ${breakpoints.sm}) {
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
      margin-bottom: ${gap}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        max-width: 200px
        order: 2
        margin-bottom: 0
      }
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        max-width: 308px
      }
    }
  `),

  centered: cmz(`
    text-align: center
  `)
}

type Props = {
  hero?: React$Node,
  heading?: React$Node,
  content?: React$Node,
  sidebar?: React$Node,
  isLoading?: boolean,
  error?: string
}

const JobsPageLayout = (props: Props) => {
  const { hero, heading, content, sidebar, isLoading, error } = props
  const headingClassName = typeof heading === 'string' ? cx.heading : ''

  const renderContent = () => {
    if (error) {
      return (
        <div className={cx.content}>
          <ErrorBox errors={{ name: error }} />
        </div>
      )
    }

    if (isLoading) {
      return (
        <div className={[cx.content, cx.centered].join(' ')}>
          <Loader />
        </div>
      )
    }

    return (
      <div className={cx.content}>{content}</div>
    )
  }

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
          {renderContent()}
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
