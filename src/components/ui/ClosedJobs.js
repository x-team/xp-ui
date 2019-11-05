// @flow
/* global React$StatelessFunctionalComponent */

import React, { Fragment } from 'react'
import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const description = cmz(
  typo.baseText,
  `
    color: #34323B
    font-style: normal
    font-weight: 300
    font-size: 16px
    line-height: 140%
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
    color: ${theme.typoGrayTitle}
    font-style: normal
    font-weight: bold
    font-size: 24px
    line-height: 33px
    letter-spacing: -0.02em
    text-transform: uppercase
  `),

  jobTitle: cmz(
    typo.badgeHeading,
    `
    color: #34323B
    font-style: italic
    font-weight: normal
    font-size: 18px
    line-height: 25px
    text-transform: none
  `),

  divider: cmz(`
    height: 1px
    background: #D6D6D8
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
  description?: string
}

type Props = {
  jobs?: Array<Job>,
  link?: React$StatelessFunctionalComponent<*>
}

const ClosedJobs = ({ jobs = [], link: AppLink }: Props) => (
  <Fragment>
    <h2 className={cx.title}>Closed</h2>
    <ul className={cx.closedJobsContainer}>
      {
        jobs.map(job => (
          <li key={job.title}>
            <h3 className={cx.jobTitle}>
              {AppLink && <AppLink>{job.title}</AppLink>}
            </h3>
            <p className={description}>
              {job.description}
            </p>
          </li>
        ))
      }
    </ul>
    <div className={cx.divider} />
    <p className={cx.archivedMessage}>Apllications older than 3 months are archived</p>
  </Fragment>
)

export default ClosedJobs
