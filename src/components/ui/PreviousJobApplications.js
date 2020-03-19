// @flow

import React from 'react'

import typo from '../../styles/typo'
import theme, { breakpoints } from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      & {
        color: ${theme.typoParagraph}
        font-weight: 300
        font-size: 14px
        line-height: 1.4
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 16px
        }
      }
    `
  ),

  list: cmz(`
    list-style: none
    padding: 0
    margin: 0 0 24px
  `),

  heading: cmz(
    typo.sectionHeading,
    `
      & {
        color: ${theme.typoHeading.fade(0.15)}
        font-weight: 700
        font-size: 18px
        letter-spacing: 0.48px
        text-transform: uppercase
        margin: 0 0 24px
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 24px
        }
      }
    `
  ),

  item: cmz(`
    margin: 0 0 24px
  `),

  name: cmz(`
    & {
      color: ${theme.typoHeading}
      font-style: italic
      font-weight: 400
      font-size: 16px
      line-height: 1.4
      text-transform: none
      margin: 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 18px
      }
    }
  `),

  info: cmz(`
    margin: 0
  `),

  message: cmz(`
    margin: 0
    padding: 24px 0 0
    border-top: 1px solid ${theme.lineSilver5.fade(0.5)}
  `)
}

type JobApplication = {
  name?: string,
  info?: string,
}

type Props = {
  applications?: Array<JobApplication>,
  message?: string
}

const PreviousJobApplications = ({ applications = [], message }: Props) => (
  <div className={cx.wrapper}>
    <h2 className={cx.heading}>Previous Applications</h2>
    <ul className={cx.list}>
      {applications.length > 0
        ? applications.map(application => application.name && (
          <li key={application.name} className={cx.item}>
            <h3 className={cx.name}>
              {application.name}
            </h3>
            <p className={cx.info}>
              {application.info}
            </p>
          </li>
        )) : 'You have no recent applications to show here.'
      }
    </ul>
    {message && (
      <p className={cx.message}>{message}</p>
    )}
  </div>
)

export default PreviousJobApplications
