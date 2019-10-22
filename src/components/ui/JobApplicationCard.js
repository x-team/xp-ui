// @flow

import React from 'react'
import theme from '../../styles/theme'
import typo from '../../styles/typo'
import Button from './Button'

import { getMonthName, getMonthDayWithOrdinal } from '../../utils/helpers'

const cmz = require('cmz')

const cx = {
  card: cmz(`
    max-width: 220px
    padding: 20px
    display: inline-block
    background: ${theme.baseBrighter}
    border: 1px solid ${theme.lineSilver5}
    box-shadow: 4px 4px 0px ${theme.baseBrightSilver}
  `),

  paragraph: cmz(
    typo.regularText,
    `
      line-height: 22px
      font-size: 14px
      margin: 18px 0 0 0
    `
  ),

  button: cmz(`
    width: 100%
  `)
}

type Props = {
  hasApplied?: boolean,
  applicationDate?: Date,
  onApply?: () => void,
  onWithdraw?: () => void
}

const JobApplicationCard = ({
  hasApplied = false,
  applicationDate = null,
  onApply = () => {},
  onWithdraw = () => {}
}: Props) => {
  const date = () => {
    const month = getMonthName(applicationDate)
    const day = getMonthDayWithOrdinal(applicationDate)
    return `${month} ${day}`
  }
  const applyCard = () => (
    <Button className={cx.button} onClick={onApply}>Apply For This Position</Button>
  )
  const withdrawCard = () => (
    <>
      <Button className={cx.button} color='monochrome' onClick={onWithdraw}>Widthdraw Application</Button>
      <p className={cx.paragraph}>
        You've already applied for this position{ applicationDate && ` on ${date()}` }.
        <b> Check your email for next steps.</b>
      </p>
    </>
  )
  return (
    <div className={cx.card}>
      { hasApplied ? withdrawCard() : applyCard() }
    </div>
  )
}

export default JobApplicationCard
