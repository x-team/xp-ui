// @flow

import React from 'react'
import Markdown from 'markdown-to-jsx'

import JobSkills from '../JobSkills'
import type { Experience } from '.'

type Props = { experience: Experience }

function formatDateMonthYear (date) {
  return date.toLocaleString('en-us', { year: 'numeric', month: 'long' })
}

export default function WorkExperienceEntryPresenter (props: Props) {
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
    <div><strong>{role}</strong> <em>at</em> <strong>{company}</strong></div>
    <div>
      {endDate
        ? `${formatDateMonthYear(startDate)} - ${formatDateMonthYear(endDate)}`
        : `From ${formatDateMonthYear(startDate)}`}
    </div>
    <JobSkills skills={(skills || []).join(',')} />
    <Markdown children={highlights} />
  </div>
}
