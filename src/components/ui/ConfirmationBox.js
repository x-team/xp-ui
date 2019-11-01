// @flow

import React from 'react'

import Button from './Button'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  title?: string,
  content?: string,
  action?: () => void,
  actionLabel?: string,
  dismissAction?: () => void
}

const WRAPPER_PADDING = '24px'
const cx = {
  wrapper: cmz(`
    display: flex
    align-items: center
    flex-direction: column
    font-size: 14px
    justify-content: center
    padding: ${WRAPPER_PADDING}
    width: calc(500px - ${WRAPPER_PADDING})
  `),

  title: cmz(
    typeface.semiHeading, `
    color: ${theme.baseDark}
    font-size: 24px
    font-weight: 500
    margin: 0
    width: 100%
  `),

  content: cmz(
    typeface.text,
    `
    color: ${theme.baseTuna}
    font-weight: normal
    font-size: 20px
    line-height: 140%
    margin: 24px 0
  `),

  ctaContainer: cmz(`
    display: flex
    justify-content: space-between
    width: 100%
  `),

  actionButton: cmz(`
    background-color: ${theme.baseRed}
    margin-right: auto
  `),

  dismissButton: cmz(`
    & {
      color: ${theme.baeBrightGray}
      margin-right: auto
      margin-left: 10px
    }

    &:only-child {
      margin: 0
    }
  `),

  dismissButtonLabel: cmz(`
    text-transform: uppercase
  `)
}

const ConfirmationBox = ({ title = 'Are you sure?', content, action, actionLabel, dismissAction }: Props) => (
  <div className={cx.wrapper}>
    <h2 className={cx.title}>{title}</h2>
    <p className={cx.content}>{content}</p>
    <div className={cx.ctaContainer}>
      {action && (
        <Button
          className={cx.actionButton}
          onClick={action}
        >
          {actionLabel}
        </Button>
      )}

      {dismissAction && (
        <Button
          pseudolink
          className={cx.dismissButton}
          onClick={dismissAction}
        >
          <span className={cx.dismissButtonLabel}>
              Dismiss
          </span>
        </Button>
      )}
    </div>
  </div>
)

export default ConfirmationBox
