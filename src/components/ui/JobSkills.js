// @flow

import React from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  skills: cmz(
    typo.baseText,
    `
      & {
        font-weight: normal
        display: flex
        margin: 0 0 12px
        flex-wrap: wrap
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          margin: 0 0 24px
        }
      }
  `),

  skill: cmz(
    typeface.extra,
    `
      & {
        font-size: 10px
        text-transform: uppercase
        background: ${theme.baseBrighter}
        border: 2px solid ${theme.lineSilver2}
        border-radius: 4px
        padding: 10px
        display: inline-block
        margin: 0 6px 6px 0
        line-height: 1
        font-weight: 300
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 12px
          padding: 15px 12px
          margin: 0 8px 8px 0
        }
      }
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
