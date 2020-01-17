// @flow
/* global React$Node */

import React from 'react'
import PropTypes from 'prop-types'

import Loader from './Loader'
import ErrorBox from './ErrorBox'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const GAP = '32px'
const MOBILE_GAP = '12px'
const WRAPPER_WIDTH = '1100px'

const cx = {
  wrapper: cmz(`
    & {
      max-width: calc(${WRAPPER_WIDTH} - 2 * ${MOBILE_GAP})
      padding: 0 ${MOBILE_GAP}
      margin: 0 auto 150px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        max-width: calc(${WRAPPER_WIDTH} - 2 * ${GAP})
        padding: 0 ${GAP}
        margin: 0 auto 100px
      }
    }
  `),

  heading: cmz(
    typo.heading,
    `
      font-size: ${GAP}
      margin: ${GAP} 0
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
      order: 1
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      &:not(:only-child) {
        margin-right: ${GAP}
        max-width: calc(100% - 308px)
      }
    }

    @media screen and (min-width: ${breakpoints.md}) {
      &:not(:only-child) {
        margin-right: ${GAP}
      }
    }
  `),

  sidebar: cmz(`
    & {
      width: calc(100% + ${MOBILE_GAP} * 2)
      order: 2
      margin: ${GAP} 0 ${MOBILE_GAP} -${MOBILE_GAP}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        width: 100%
        max-width: 308px
        margin: 0
      }
    }
  `),

  static: cmz(`
    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin-bottom: ${GAP}
      }
    }
  `),

  sticky: cmz(`
    & {
      position: fixed
      bottom: 0
      left: 0
      width: 100%
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        position: relative
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
  actionsBar?: React$Node,
  isLoading?: boolean,
  error?: string
}

const JobsPageLayout = (props: Props) => {
  const { hero, heading, content, sidebar, actionsBar, isLoading, error } = props
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
          {(sidebar || actionsBar) && (
            <div className={cx.sidebar}>
              {sidebar && (
                <div className={cx.static}>{sidebar}</div>
              )}
              {actionsBar && (
                <div className={cx.sticky}>{actionsBar}</div>
              )}
            </div>
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
  actionsBar: PropTypes.node,
  isLoading: PropTypes.bool
}

export default JobsPageLayout
