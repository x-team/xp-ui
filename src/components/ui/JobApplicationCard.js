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
    typo.regularText,
    `
      line-height: 22px
      font-size: 14px
      margin: 18px 0 0 0
    `
  )
}

type Props = {
  hasApplied?: boolean,
  applicationDate?: Date,
  isSaving?: boolean,
  onApply?: () => void,
  onWithdraw?: () => void
}

const JobApplicationCard = ({
  hasApplied = false,
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
    <Button wide disabled={isSaving} onClick={onApply}>Apply For This Position</Button>
  )

  const renderWithdrawCard = () => (
    <Fragment>
      <Button wide color='monochrome' disabled={isSaving} onClick={onWithdraw}>Withdraw Application</Button>
      <p className={cx.paragraph}>
        You've already applied for this position{ applicationDate && ` on ${date()}` }.
        <b> Check your email for next steps.</b>
      </p>
    </Fragment>
  )

  return (
    <div className={cx.card}>
      {hasApplied ? renderWithdrawCard() : renderApplyCard()}
    </div>
  )
}

export default JobApplicationCard
