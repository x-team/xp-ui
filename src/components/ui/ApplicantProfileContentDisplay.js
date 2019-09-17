// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  root: cmz(
    typo.regularText,
    `
      padding: 50px 60px 20px 60px
      display: flex
      flex-wrap: wrap
    `
  ),

  rootForm: cmz(`
    width: 100%
  `),

  labelValueRow: cmz(`
    margin-bottom: 1em
  `),

  inlineLabel: cmz(`
    float: left
    width: 192px
    font-weight: normal
    font-size: 1em
    text-transform: none
    color: #9a9a9a
  `),

  inlineValue: cmz(`
    overflow: hidden
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
    }

    &:last-of-type {
      margin-bottom: 0
    }
  `),

  labelInput: cmz(`
    text-transform: capitalize
    margin-right: 15px
    color: ${theme.typoLabel}
    font-size: 1.0625rem
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
  sections: { [key: string]: { label?: Element<*>, value: Element<*> } },
  ads: { label?: Element<*>, value: Array<{ label: string, value: string }> }
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
    sections: {},
    ads: {
      value: []
    }
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
                <span className={cx.labelInput}>{portfolio[item].label}:</span>
                {portfolio[item].value}
              </div>
            ))}
          </div>
          {details}
        </div>
      </div>
    )
  }

  render () {
    const { fetching, error, invalid, sections, ads } = this.props

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

        <section id='ads' className={cx.section}>
          {ads.label}
          {ads.value.map((param, i) => (
            <div key={`profile-ads-${i}`} className={cx.labelValueRow}>
              <label className={cx.inlineLabel}>
                {param.label}
              </label>
              <div className={cx.inlineValue}>
                {param.value || '—'}
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}

export default ApplicantProfileContentDisplay
