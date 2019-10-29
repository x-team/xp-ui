// @flow

import React from 'react'

import Button from './Button'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  title: string,
  content: string,
  action: () => void,
  actionLabel: string,
  dismissAction: () => void
}

const wrapperPadding = '24px'
const cx = {
  wrapper: cmz(`
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: calc(500px - ${wrapperPadding})
    font-size: 14px
    padding: ${wrapperPadding}
  `),

  title: cmz(
    typeface.semiHeading, `
    height: 33px
    font-size: 24px
    font-weight: 500
    line-height: 33px
    width: 100%
    margin: 0
    color: #000
  `),

  content: cmz(
    typeface.text, `
    font-weight: normal
    font-size: 20px
    line-height: 140%
    margin: 24px 0
  `),

  ctaContainer: cmz(`
    display: flex
    ustify-content: space-between;
    width: 100%
    height: 46px
  `),

  actionButton: cmz(`
    background-color: ${theme.baseRed}
    margin: 0
  `),

  dismissButton: cmz(`
    text-transform: uppercase
    background-color: transparent
    border: none
    color: #8E8D93
    margin-right: auto;
    margin-left: 10px;
  `)
}

const ConfirmationBox = ({ title = 'Are you sure?', content, action, actionLabel, dismissAction }: Props) => (
  <div className={cx.wrapper}>
    <h2 className={cx.title}>{title}</h2>
    <p className={cx.content}>{content}</p>
    {/* // if the childs are not defined don't show the container */}
    {dismissAction && action && (
      <div className={cx.ctaContainer}>
        <Button
          className={cx.actionButton}
          onClick={action}
        >
          {actionLabel}
        </Button>

        {dismissAction && (
          <Button
            raised
            color='grayPink'
            className={cx.dismissButton}
            onClick={dismissAction}
          >
            Dismiss
          </Button>
        )}
      </div>
    )}
  </div>
)

export default ConfirmationBox
// TODO: reflect about the default
// guard content and action as well
