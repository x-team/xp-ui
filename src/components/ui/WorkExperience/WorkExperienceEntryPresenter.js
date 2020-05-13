// @flow

import React from 'react'
import Markdown from 'markdown-to-jsx'
import cmz from 'cmz'

import JobSkills from '../JobSkills'
import theme from '../../../styles/theme'

import type { Experience } from '../../../utils/types'
type Props = {
  experience: Experience,
  headerDecoration: any
}

const cx = {
  header: cmz(`
    & {
      font-weight: normal
      color: ${theme.baseDark}
    }

    & * {
      margin: 0 0.1em
    }
  `),

  at: cmz(`
    font-weight: normal
    color: ${theme.baseGray}
  `),

  date: cmz(`
    color: ${theme.baseGray}
    margin-top: 0.4em
    margin-bottom: 0.6em
  `)
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

function WorkExperienceEntryPresenter (props: Props) {
  if (!props.experience) {
    return null
  }

  const {
    experience: {
      role,
      company,
      startDate,
      endDate,
      highlights,
      skills
    },
    headerDecoration
  } = props

  return <div>
    <div className={cx.header}>
      <strong>{role || '[No role given]'}</strong> <em className={cx.at}>at</em> <strong>{company || '[No company given]'}</strong>
      {headerDecoration}
    </div>
    <div className={cx.date}>
      {renderDates(startDate, endDate)}
    </div>
    <JobSkills skills={(skills || []).join(',')} />
    <Markdown children={highlights || ''} />
  </div>
}

export default WorkExperienceEntryPresenter
