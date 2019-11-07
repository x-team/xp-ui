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
    font-size: 16px
    line-height: 1.4
    margin: 4px 0 0
`)

const cx = {
  closedJobsContainer: cmz(`
    display: flex
    flex-direction: column
    list-style: none
    padding: 0
  `),

  heading: cmz(
    typo.sectionHeading,
    `
    color: ${theme.typoParagraph.lighten(0.7)}
    font-weight: 700
    font-size: 24px
    letter-spacing: 0.48px
    text-transform: uppercase
  `),

  jobItem: cmz(`
    & {
      margin-bottom: 24px
    }

    &:last-child {
      margin-bottom: 14px
    }
  `),

  jobTitle: cmz(
    typo.badgeHeading,
    `
    color: ${theme.typoParagraph}
    font-style: italic
    font-weight: 400
    font-size: 18px
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

  message: cmz(
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
  message?: string
}

const ClosedJobs = ({ jobs = [], link: AppLink, message }: Props) => (
  <Fragment>
    <h2 className={cx.heading}>Closed</h2>
    <ul className={cx.closedJobsContainer}>
      {
        jobs.map(job => (
          <li key={job.title} className={cx.jobItem}>
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
    <p className={cx.message}>{message}</p>
  </Fragment>
)

export default ClosedJobs
