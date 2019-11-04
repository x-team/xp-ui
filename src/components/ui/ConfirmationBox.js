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
    & {
      padding: ${WRAPPER_PADDING}
      width: calc(500px - ${WRAPPER_PADDING} * 2)
    }

    @media screen and (max-width: 600px) {
      & {
        width: calc(100% - ${WRAPPER_PADDING} * 2)
      }
    }
  `),

  title: cmz(
    typeface.semiHeading, `
    color: ${theme.typoHeading}
    font-size: 24px
    font-weight: 500
    margin: 0
  `),

  content: cmz(
    typeface.text,
    `
    color: ${theme.typoParagraph}
    font-weight: normal
    font-size: 20px
    line-height: 140%
    margin: 24px 0
  `),

  dismissButton: cmz(`
    & {
      color: ${theme.typoLabel}
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
)

export default ConfirmationBox
