// @flow
/* global React$Node */

import React, { PureComponent } from 'react'

import StatusMarker from './StatusMarker'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { ApplicantStatusType } from './StatusMarker'

const cmz = require('cmz')

const MEDIA_QUERY_BREAKPOINT = 1400

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

      @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT}px) {
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
      grid-area: video
      margin-right: 55px
      align-items: left
    }

    @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT}px) {
      & {
        margin: 0 auto
        padding-bottom: 20px
        width: 100%
        align-items: center
        display: flex
        flex-direction: column
      }
    }
  `),

  addToList: cmz(`
    & {
      display: flex
    }

    @media screen and (max-width: ${MEDIA_QUERY_BREAKPOINT}px) {
      & {
        justify-content: center
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
      margin-left: 20px
    }
  `),

  applicantStatusSelector: cmz(`
    padding: 0
  `),

  activityHeader: cmz(`
    margin-left: 20px
    margin-bottom: 12px
  `),

  row: cmz(`
    display: flex
    margin-left: 20px
    padding-bottom: 1rem
  `),

  label: cmz(`
    color: ${theme.typoLabel}
    min-width: 200px
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

          <div className={cx.addToList} data-testid='xpui-applicantTopProfile-addToList'>
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
              data-testid={`xp-applicantTopProfile-${section}`}
              title={sections[section].title}
            >
              <div className={cx.label}>{sections[section].label}:</div>
              {sections[section].value}
            </div>
          ))}
        </section>
      </section>
    )
  }
}

export default ApplicantTopProfileDisplay
