// @flow
/* global React$Node */

import React, { Fragment } from 'react'

import Button from './Button'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(`
    & {
      width: 100%
      box-sizing: border-box
      padding: 12px 12px 0
      display: inline-block
      background: ${theme.baseBrighter}
      box-shadow: 0 -2px 3px rgba(0, 0, 0, .1)
    }

    &:after {
      content: ''
      background: ${theme.baseSilver}
      height: 5px
      width: 36%
      border-radius: 8px
      display: block
      margin: 15px auto 8px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        padding: 20px
        border: 1px solid ${theme.lineSilver5}
        box-shadow: 4px 4px 0 ${theme.baseBrightSilver}
      }

      &:after {
        display: none
      }
    }
  `),

  paragraph: cmz(
    typo.baseText,
    `
      & {
        line-height: 22px
        font-size: 14px
        margin: 18px 0 0 0
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 16px
        }
      }
    `
  ),

  button: cmz(`
    & {
      white-space: normal
      font-size: 11px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 12px
      }
    }
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
    <Button data-testid="xpui-jobApplicationCard-apply" wide disabled={isSaving} onClick={onApply}>
      <span className={cx.button}>Apply For This Position</span>
    </Button>
  )

  const renderWithdrawCard = () => (
    <Fragment>
      <Button data-testid="xpui-jobApplicationCard-withdraw" wide color='monochrome' disabled={isSaving} onClick={onWithdraw}>
        <span className={cx.button}>Withdraw Application</span>
      </Button>
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
