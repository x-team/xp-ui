// @flow

import React, { PureComponent } from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  root: cmz(
    typo.regularText,
    `
      & {
        padding: 10px
        display: flex
        flex-wrap: wrap
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          padding: 20px
        }
      }

      @media screen and (min-width: ${breakpoints.md}) {
        & {
          padding: 50px 60px 20px 60px
        }
      }
    `
  ),

  rootForm: cmz(`
    width: 100%
    margin: 0
  `),

  shortDetailsContainer: cmz(`
    & > div:not(.overflow-visible) {
      padding-bottom: .6em
      overflow: hidden
    }
  `),

  section: cmz(`
    width: 100%
    margin-bottom: 3em
  `),

  profile: cmz(`
    width: 100%
  `),

  sectionLeft: cmz(`
    & {
      width: 60%
    }

    @media screen and (max-width: 1190px) {
      & {
        width: 100%
      }
    }
  `),

  sectionRight: cmz(`
    & {
      width: 40%
    }

    @media screen and (max-width: 1190px) {
      & {
        margin-top: 3em
      }
    }
  `),

  sectionHeading: cmz(`
    & {
      padding-top: 0
      padding-bottom: .6em
    }

    &:not(div) {
      font-size: 18px
      font-weight: 600
    }
  `),

  topLevelHeading: cmz(`
    margin-top: 0
  `),

  errorBox: cmz(`
    align-self: center
    max-width: 80%
    margin: 0 auto
  `),

  rowInput: cmz(`
    & {
      display: flex
      margin-bottom: 20px
      flex-wrap: wrap
    }

    &:last-of-type {
      margin-bottom: 0
    }
  `),

  portfolioLabel: cmz(`
    text-transform: capitalize
    margin-right: 15px
    color: ${theme.typoLabel}
    font-size: 1.0625rem
    min-width: 200px
  `),

  portfolioValue: cmz(`
    flex: 1
    min-width: 300px
  `),

  sectionHeaderPortfolio: cmz(`
    margin-bottom: 20px
  `),

  emailSection: cmz(`
    padding-top: 60px
  `)
}

type Props = {
  applicantTopProfile: Element<*>,
  skills: Element<*>,
  portfolioLabel: Element<*>,
  portfolio: { [key: string]: { label?: string, value: Element<*> } },
  details: Array<Element<*>>,
  fetching: Element<*>,
  error: Element<*>,
  invalid: Element<*>,
  sections: { [key: string]: { label?: Element<*>, value: Element<*> } }
}

class ApplicantProfileContentDisplay extends PureComponent<Props, void> {
  static defaultProps = {
    applicantTopProfile: null,
    skills: null,
    portfolioLabel: null,
    portfolio: {},
    details: [],
    fetching: null,
    error: null,
    invalid: null,
    sections: {}
  }

  renderInfo () {
    const { applicantTopProfile, skills, portfolioLabel, portfolio, details } = this.props
    return (
      <div className={cx.profile}>
        {applicantTopProfile}
        <div className={cx.shortDetailsContainer}>
          {skills}
          <div id='portfolio' className='overflow-visible'>
            <div className={cx.sectionHeaderPortfolio}>
              {portfolioLabel}
            </div>
            {Object.keys(portfolio).map(item => (
              <div key={`profile-top-portfolio-${item}`} className={cx.rowInput}>
                <span className={cx.portfolioLabel}>{portfolio[item].label}:</span>
                <span className={cx.portfolioValue}>{portfolio[item].value}</span>
              </div>
            ))}
          </div>
          {details}
        </div>
      </div>
    )
  }

  render () {
    const { fetching, error, invalid, sections } = this.props

    if (fetching) {
      return fetching
    }

    if (error) {
      return (
        <div className={cx.errorBox}>
          {error}
        </div>
      )
    }

    if (invalid) {
      return invalid
    }

    return (
      <div id='profile' className={cx.root}>
        <form className={cx.rootForm}>{this.renderInfo()}</form>

        {Object.keys(sections).map(section => (
          <section
            key={`profile-sections-${section}`}
            id={section}
            className={cx.section}
          >
            {sections[section].label}
            {sections[section].value}
          </section>
        ))}
      </div>
    )
  }
}

export default ApplicantProfileContentDisplay
