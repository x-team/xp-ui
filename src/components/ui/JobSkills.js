// @flow

import React from 'react'

import theme from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  skills: cmz(
    typo.baseText,
    `
      font-size: 24px
      font-weight: normal
      display: flex
      margin: 0 0 1em
      flex-wrap: wrap
  `),

  skill: cmz(
    typeface.extra,
    `
      font-size: .5em
      text-transform: uppercase
      background: ${theme.baseBrighter}
      border: 2px solid ${theme.lineSilver2}
      border-radius: 4px
      padding: 1.25em 1em
      display: inline-block
      margin: 0 .66666em .66666em 0
      line-height: 1
      font-weight: 300
    `
  )
}

type Props = {
  skills?: string,
}

const renderSkills = (skills: string) => skills.split(',').filter(Boolean).map(skill => (
  <div key={`jobskill-${skill}`} className={cx.skill}>{skill}</div>
))

const JobSkills = ({ skills = '' }: Props) => skills && (
  <div className={cx.skills}>
    {renderSkills(skills)}
  </div>
)

export default JobSkills
