// @flow

import React from 'react'
import cmz from 'cmz'

import JobSkills from '../JobSkills'
import RichTextEditor from '../RichTextEditor'
import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

import type { Experience } from '../../../utils/types'
type Props = { experience: Experience }

const cx = {
  header: cmz(
    typo.subheading,
    `
      & {
        font-weight: normal
        color: ${theme.baseDark}
      }
    `
  ),

  at: cmz(
    typo.regularText,
    `
      & {
        font-weight: normal
        color: ${theme.baseGray}
      }
    `
  ),

  date: cmz(
    typo.regularText,
    `
      & {
        color: ${theme.baseGray}
        margin-top: 0.4em
        margin-bottom: 0.6em
      }
    `
  ),

  highlights: cmz(
    typo.regularText,
    `
      & .tui-editor-contents {
        font-size: 16px
        color: ${theme.typoParagraph}
        line-height: normal
      }
    `
  )
}

function formatDateMonthYear (date) {
  return date.toLocaleString('en-us', { year: 'numeric', month: 'long' })
}

function renderDates (startDate, endDate) {
  if (startDate && endDate) {
    return `${formatDateMonthYear(startDate)} - ${formatDateMonthYear(endDate)}`
  }
  if (startDate) {
    return `Since ${formatDateMonthYear(startDate)}`
  }
  if (endDate) { // shouldn't happen, but just in case
    return `Until ${formatDateMonthYear(endDate)}`
  }
}

export default function WorkExperienceEntryPresenter (props: Props) {
  if (!props.experience) {
    return null
  }

  const {
    experience: {
      role,
      company,
      start_date: startDate,
      end_date: endDate,
      highlights,
      skills
    }
  } = props

  return <div>
    <div className={cx.header}>
      <strong>{role || '[No role given]'}</strong> <em className={cx.at}>at</em> <strong>{company || '[No company given]'}</strong>
    </div>
    <div className={cx.date}>
      {renderDates(startDate, endDate)}
    </div>
    <JobSkills skills={(skills || []).join(',')} />
    <RichTextEditor mode='viewer' initialValue={highlights} className={cx.highlights} />
  </div>
}
