// @flow

import React, { Fragment } from 'react'

import Button from './Button'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import { getMonthName, getDayWithOrdinal } from '../../utils/helpers'

const cmz = require('cmz')

const cx = {
  card: cmz(`
    width: 100%
    box-sizing: border-box
    padding: 20px
    display: inline-block
    background: ${theme.baseBrighter}
    border: 1px solid ${theme.lineSilver5}
    box-shadow: 4px 4px 0 ${theme.baseBrightSilver}
  `),

  paragraph: cmz(
    typo.baseText,
    `
      line-height: 22px
      font-size: 16px
      margin: 18px 0 0 0
    `
  ),

  button: cmz(`
    white-space: normal
  `)
}

type Props = {
  isApplied?: boolean,
  applicationDate?: Date,
  isSaving?: boolean,
  onApply?: () => void,
  onWithdraw?: () => void
}

const JobApplicationCard = ({
  isApplied = false,
  applicationDate,
  isSaving,
  onApply,
  onWithdraw
}: Props) => {
  const date = () => {
    const month = getMonthName(applicationDate)
    const day = getDayWithOrdinal(applicationDate)
    return `${month} ${day}`
  }

  const renderApplyCard = () => (
    <Button wide disabled={isSaving} onClick={onApply} className={cx.button}>Apply For This Position</Button>
  )

  const renderWithdrawCard = () => (
    <Fragment>
      <Button wide color='monochrome' disabled={isSaving} onClick={onWithdraw} className={cx.button}>Withdraw Application</Button>
      <p className={cx.paragraph}>
        You've already applied for this position{ applicationDate && ` on ${date()}` }.
        <b> Check your email for next steps.</b>
      </p>
    </Fragment>
  )

  return (
    <div className={cx.card}>
      {isApplied ? renderWithdrawCard() : renderApplyCard()}
    </div>
  )
}

export default JobApplicationCard
