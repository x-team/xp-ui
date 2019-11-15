// @flow
/* global React$StatelessFunctionalComponent */

import React from 'react'

import TagsList from './TagsList'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(
    typo.baseText,
    `
      display: flex
      flex-direction: column
      background: ${theme.baseBrighter}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0px ${theme.baseBrightSilver}
    `
  ),

  name: cmz(
    typo.sectionHeading,
    `
      margin: 0
    `
  ),

  nameLink: cmz(
    typo.sectionHeading,
    `
      & {
        margin: 25px
        text-decoration: none
      }

      &:has(> h3):hover {
        text-decoration: underline
        cursor: pointer
      }
    `
  ),

  summary: cmz(
    typo.baseText,
    `
      margin: -15px 25px 25px
      height: 100%
    `
  ),

  message: cmz(
    typo.regularText,
    `
      background: ${theme.baseBrightSilver}
      margin: 0
      padding: 10px 25px
    `
  ),

  link: cmz(
    `
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
    `
  ),

  hasMarginLeft: cmz(
    `
      margin-left: 25px;
    `
  )
}

type Props = {
  name?: string,
  summary?: string,
  message?: string,
  link?: React$StatelessFunctionalComponent<*>,
  skills?: string,
  hasMarginLeft?: boolean
}

const JobCard = ({ name, summary, message, link: JobLink, skills, hasMarginLeft }: Props) => {
  const renderTitle = () => JobLink
    ? (
      <JobLink className={cx.nameLink}>
        <h3 className={cx.name}>{name}</h3>
      </JobLink>
    ) : (
      <h3 className={cx.nameLink}>{name}</h3>
    )

  const renderSummary = () => summary && (
    <div className={cx.summary}>
      {summary} {JobLink && <JobLink className={cx.link}>Learn more »</JobLink>}
    </div>
  )

  const renderMessage = () => message && (
    <div className={cx.message}>{message}</div>
  )

  return name ? (
    <div className={cx.card}>
      {renderTitle()}
      <div className={hasMarginLeft && (cx.hasMarginLeft)}>
        <TagsList skills={skills} />
      </div>
      {renderSummary()}
      {renderMessage()}
    </div>
  ) : null
}

export default JobCard
