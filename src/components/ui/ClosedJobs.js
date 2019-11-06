// @flow
/* global React$StatelessFunctionalComponent */

import React, { Fragment } from 'react'

import typo from '../../styles/typo'

import theme from '../../styles/theme'

const cmz = require('cmz')

const description = cmz(
  typo.baseText,
  `
    color: ${theme.typoParagraph}
    font-weight: 300
    font-size: 1rem
    line-height: 1.4
    margin: 4px 0 24px 0
`)

const cx = {
  closedJobsContainer: cmz(`
    display: flex
    flex-direction: column
    list-style: none
    padding: 0
  `),

  title: cmz(
    typo.sectionHeading,
    `
    color: ${theme.typoParagraph.lighten(0.7)}
    font-weight: 700
    font-size: 1.5rem
    letter-spacing: 0.48px
    text-transform: uppercase
  `),

  jobTitle: cmz(
    typo.badgeHeading,
    `
    color: ${theme.typoParagraph}
    font-style: italic
    font-weight: 400
    font-size: 1.125rem
    line-height: 1.4
    text-transform: none
  `),

  divider: cmz(`
    height: 1px
    border: none
    background: ${theme.lineSilver5}
    opacity: 0.5
    width: 100%
  `),

  archivedMessage: cmz(
    description,
    `
      margin-top: 24px
  `)
}

type Job = {
  title?: string,
  description?: string,
  link?: string
}

type Props = {
  jobs?: Array<Job>,
  link?: React$StatelessFunctionalComponent<*>,
  arquivedMessage?: string
}

const ClosedJobs = ({ jobs = [], link: AppLink, arquivedMessage }: Props) => (
  <Fragment>
    <h2 className={cx.title}>Closed</h2>
    <ul className={cx.closedJobsContainer}>
      {
        jobs.map(job => (
          <li key={job.title}>
            <h3 className={cx.jobTitle}>
              {AppLink && <AppLink to={job.link}>{job.title}</AppLink>}
            </h3>
            <p className={description}>
              {job.description}
            </p>
          </li>
        ))
      }
    </ul>
    <hr className={cx.divider} />
    <p className={cx.archivedMessage}>{arquivedMessage}</p>
  </Fragment>
)

export default ClosedJobs
