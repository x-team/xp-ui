// @flow
/* global React$Node */

import React, { Fragment } from 'react'

import Button from './Button'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

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
  message?: React$Node,
  isSaving?: boolean,
  onApply?: () => void,
  onWithdraw?: () => void
}

const JobApplicationCard = ({
  isApplied = false,
  message,
  isSaving,
  onApply,
  onWithdraw
}: Props) => {
  const renderApplyCard = () => (
    <Button wide disabled={isSaving} onClick={onApply} className={cx.button}>Apply For This Position</Button>
  )

  const renderWithdrawCard = () => (
    <Fragment>
      <Button wide color='monochrome' disabled={isSaving} onClick={onWithdraw} className={cx.button}>Withdraw Application</Button>
      {message && (
        <p className={cx.paragraph}>
          {message}
        </p>
      )}
    </Fragment>
  )

  return (
    <div className={cx.card}>
      {isApplied ? renderWithdrawCard() : renderApplyCard()}
    </div>
  )
}

export default JobApplicationCard
