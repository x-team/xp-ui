// @flow

import React, { PureComponent } from 'react'

import Button from './Button'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  card: cmz(
    typo.baseText,
    `
      display: flex
      flex-direction: column
      background: ${theme.baseBrighter}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0px ${theme.baseBrightSilver}
    `
  ),

  name: cmz(
    typo.sectionHeading,
    `
      & {
        margin: 25px 25px 10px
        text-decoration: none
      }

      &:hover {
        text-decoration: underline
        cursor: pointer
      }
    `
  ),

  summary: cmz(
    typo.baseText,
    `
      margin: 10px 25px
      height: 100%
    `
  ),

  actions: cmz(`
    margin: 10px 25px 25px
  `),

  message: cmz(
    typo.regularText,
    `
      background: ${theme.baseBrightSilver}
      margin: 0
      padding: 10px 25px
    `
  ),

  link: cmz(
    // typo.baseText,
    `
      & {
        color: ${theme.baseRed}
        text-decoration: none
        display: inline-flex
        align-items: center
      }

      &:hover {
        text-decoration: underline
        cursor: pointer
      }
    `
  )
}

type Props = {
  applied: boolean,
  name?: string,
  summary?: string,
  message?: string,
  link?: string,
  onApply?: () => void,
  onWithdraw?: () => void
}

class JobCard extends PureComponent<Props, void> {
  static defaultProps = {
    applied: false
  }

  render () {
    const { applied, name, summary, message, link, onApply, onWithdraw } = this.props
    return name ? (
      <div className={cx.card}>
        {
          link
            ? <a href={link} className={cx.name}><h3>{name}</h3></a>
            : <h3 className={cx.name}>{name}</h3>
        }
        {summary && (
          <div className={cx.summary}>{summary} { link && <a className={cx.link} href={link}>Learn more »</a> } </div>
        )}
        <div className={cx.actions}>
          {applied ? (
            <Button size='small' onClick={onWithdraw}>Withdraw application</Button>
          ) : (
            <Button size='small' onClick={onApply}>Apply for this position</Button>
          )}
        </div>
        {message && (
          <div className={cx.message}>{message}</div>
        )}
      </div>
    ) : null
  }
}

export default JobCard
