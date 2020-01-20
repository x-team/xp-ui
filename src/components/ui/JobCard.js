// @flow
/* global React$StatelessFunctionalComponent */

import React from 'react'

import JobSkills from './JobSkills'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(
    typo.baseText,
    `
      & {
        display: flex
        flex-direction: column
        background: ${theme.baseBrighter}
        border: 1px solid ${theme.lineSilver5}
        box-shadow: 4px 4px 0 ${theme.baseBrightSilver}
        font-size: 16px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 20px
        }
      }
    `
  ),

  name: cmz(
    typo.sectionHeading,
    `
      & {
        margin: 0
        font-size: 20px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 24px
        }
      }
    `
  ),

  nameLink: cmz(
    typo.sectionHeading,
    `
      & {
        margin: 12px
        text-decoration: none
      }

      &:has(> h3):hover {
        text-decoration: underline
        cursor: pointer
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          margin: 24px
        }
      }
    `
  ),

  summary: cmz(
    typo.baseText,
    `
      & {
        margin: -12px 12px 12px
        height: 100%
        font-size: 16px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          margin: -12px 24px 24px
          font-size: 20px
        }
      }
    `
  ),

  message: cmz(
    typo.regularText,
    `
      & {
        background: ${theme.baseBrightSilver}
        margin: 0
        padding: 6px 12px
        font-size: 14px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 16px
          padding: 12px 24px
        }
      }
    `
  ),

  link: cmz(`
    & {
      color: ${theme.baseRed}
      text-decoration: none
      display: inline-flex
      align-items: center
    }

    &:hover {
      text-decoration: underline
      cursor: pointer
    }
  `),

  skills: cmz(`
    & {
      margin: 0 12px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: -12px 24px 0
      }
    }
  `)
}

type Props = {
  name?: string,
  summary?: string,
  message?: string,
  link?: React$StatelessFunctionalComponent<*>,
  skills?: string
}

const JobCard = ({ name, summary, message, link: AppLink, skills }: Props) => {
  const renderTitle = () => AppLink
    ? (
      <AppLink className={cx.nameLink}>
        <h3 className={cx.name}>{name}</h3>
      </AppLink>
    ) : (
      <h3 className={cx.nameLink}>{name}</h3>
    )

  const renderSkills = () => skills && (
    <div className={cx.skills}>
      <JobSkills skills={skills} />
    </div>
  )

  const renderSummary = () => summary && (
    <div className={cx.summary}>
      {summary} {AppLink && (
        <AppLink className={cx.link}>Learn more »</AppLink>
      )}
    </div>
  )

  const renderMessage = () => message && (
    <div className={cx.message}>{message}</div>
  )

  return name ? (
    <div className={cx.card}>
      {renderTitle()}
      {renderSkills()}
      {renderSummary()}
      {renderMessage()}
    </div>
  ) : null
}

export default JobCard
