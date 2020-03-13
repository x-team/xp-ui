// @flow
/* global React$Node */

import React, { PureComponent } from 'react'

import StatusMarker from './StatusMarker'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

import type { ApplicantStatusType } from './StatusMarker'

const cmz = require('cmz')

const cx = {
  container: cmz(
    typo.regularText,
    `
      & {
        display: grid
        grid-template-columns: 255px calc(100% - 255px)
        grid-template-rows: auto auto
        grid-template-areas: "video name" "video fields"
        padding-bottom: 60px
        border-bottom: 1px solid ${theme.lineSilver2}
      }

      @media screen and (max-width: ${breakpoints.xl}) {
        & {
          grid-template-columns: 100%
          grid-template-areas: "name" "video" "fields"
        }

        & > section:not(:last-child) {
          border-bottom: 1px solid ${theme.lineSilver2}
          margin-bottom: 20px
        }
      }
    `
  ),

  video: cmz(`
    & {
      margin: 0 auto
      padding: 0 10px 20px
      width: 100%
      align-items: flex-start
      display: flex
      flex-direction: column
      box-sizing: border-box
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        align-items: center
        padding: 0 0 20px
      }
    }

    @media screen and (min-width: ${breakpoints.xl}) {
      & {
        grid-area: video
      }
    }
  `),

  name: cmz(`
    grid-area: name
    border-bottom: 1px solid ${theme.lineSilver2}
    margin-bottom: 20px
  `),

  fields: cmz(`
    grid-area: fields
  `),

  nameWrapper: cmz(`
    & {
      display: flex
      align-items: center
    }

    & > div:first-child {
      margin: 0 10px
      width: 100%
    }
  `),

  applicantStatusSelector: cmz(`
    padding: 0
  `),

  activityHeader: cmz(`
    & {
      margin: 0 10px 12px
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        margin: 0 20px 12px
      }
    }
  `),

  row: cmz(`
    & {
      display: flex
      flex-wrap: wrap
      margin-left: 10px
      padding-bottom: 1rem
    }

    @media screen and (min-width: ${breakpoints.md}) {
      & {
        margin-left: 20px
      }
    }
  `),

  label: cmz(`
    color: ${theme.typoLabel}
    min-width: 200px
    margin-bottom: 0.4rem
  `),

  value: cmz(`
    min-width: 300px
  `)
}

type Props = {
  videoPreview: React$Node,
  addToList: React$Node,
  applicantStatus: ApplicantStatusType,
  fullName: React$Node,
  applicantStatusSelector: React$Node,
  baseImported: React$Node,
  activityHeaderBar: React$Node,
  sections: { [key: string]: { title?: string, label?: string, value: React$Node } }
}

class ApplicantTopProfileDisplay extends PureComponent<Props, void> {
  static defaultProps = {
    videoPreview: null,
    addToList: null,
    applicantStatus: null,
    fullName: null,
    applicantStatusSelector: null,
    baseImported: null,
    activityHeaderBar: null,
    sections: {}
  }

  render () {
    const {
      videoPreview,
      addToList,
      applicantStatus,
      fullName,
      applicantStatusSelector,
      baseImported,
      activityHeaderBar,
      sections
    } = this.props

    return (
      <section className={cx.container}>
        <section className={cx.video} data-testid='xpui-applicantTopProfile-videoPreview'>
          {videoPreview}

          <div data-testid='xpui-applicantTopProfile-addToList'>
            {addToList}
          </div>
        </section>

        <section className={cx.name}>
          <div className={cx.nameWrapper} data-testid='xpui-applicantTopProfile-fullName'>
            <StatusMarker status={applicantStatus} filled />
            {fullName}
            <div className={cx.applicantStatusSelector} data-testid='xpui-applicantTopProfile-applicantStatusSelector'>
              {applicantStatusSelector}
            </div>
            {baseImported}
          </div>
          <div className={cx.activityHeader} data-testid='xpui-applicantTopProfile-activityHeaderBar'>
            {activityHeaderBar}
          </div>
        </section>

        <section className={cx.fields}>
          {Object.keys(sections).map(section => (
            <div
              key={`profile-top-${section}`}
              className={cx.row}
              data-testid={`xpui-applicantTopProfile-${section}`}
              title={sections[section].title}
            >
              <div className={cx.label}>{sections[section].label}:</div>
              <div className={cx.value}>{sections[section].value}</div>
            </div>
          ))}
        </section>
      </section>
    )
  }
}

export default ApplicantTopProfileDisplay
