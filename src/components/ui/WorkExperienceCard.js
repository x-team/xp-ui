// @flow

import React from 'react'

import theme from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    `
      background: ${theme.white}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0px ${theme.baseTuna.fade(0.95)}
      padding: 24px
    `
  ),

  label: cmz(
    typo.baseText,
    `
      margin-top: -6px
    `
  ),

  role: cmz(
    `
      font-weight: 500
    `
  ),

  at: cmz(
    `
      font-style: italic
      margin: 0px 6px
    `
  ),

  company: cmz(
    `
      font-weight: 400
    `
  ),

  dates: cmz(
    typo.baseText,
    `
      font-size: 18px
      margin-top: 5px
    `
  ),

  button: cmz(
    typeface.extra,
    `
      & {
        line-height: 18px
        text-transform: uppercase
        color: ${theme.baseRed}
        font-size: 13px
        cursor: pointer
        margin: 12px 0 -2px 0
      }

      &:hover {
        text-decoration: underline
      }
    `
  )
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

type Props = {
  id?: number,
  role?: string | null,
  company?: string | null,
  startDate?: Date | null,
  endDate?: Date | null,
  returnEditingCardId?: (number) => void
}

const WorkExperienceCard = (props: Props) => {
  const { role, company, startDate, endDate } = props

  const formatDate = (date: Date): string => {
    return date && `${monthNames[date.getMonth()]} ${date.getFullYear()}`
  }

  const returnEditingCardId = (): void => {
    if (props.id && props.returnEditingCardId) {
      props.returnEditingCardId(props.id)
    }
  }

  return (
    <div className={cx.wrapper}>
      <div className={cx.label}>
        {role && <span className={cx.role}>{role}</span>}
        {(role && company) && <span className={cx.at}>at</span>}
        {company && <span className={cx.company}>{company}</span>}
      </div>
      {startDate && <div className={cx.dates}>{formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Current'}</div>}
      <div className={cx.button} onClick={returnEditingCardId}>EDIT ENTRY</div>
    </div>
  )
}

export default WorkExperienceCard
