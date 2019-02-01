// @flow

import React, { PureComponent } from 'react'
import formatDate from 'date-fns/format'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import SvgIcon from './SvgIcon'

import { timeSince } from '../../utils/helpers'

import { textRendering, typeface } from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  root: cmz(`
    box-sizing: border-box;
    position: relative;
    border: 1px solid ${theme.lineSilver2};
    border-radius: 2px;
  `),

  headerContainer: cmz(`
    cursor: pointer;
    padding: 30px 30px 30px 50px;
  `),

  triangleIcon: cmz(`
    left: 20px;
    position: absolute;
  `),

  header: cmz(`
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `),

  headerInfo: cmz(
    textRendering,
    typeface.extraHeading,
    `
      & {
        font-size: 1.0625rem;
        font-weight: normal;
        max-width: calc(100% - 190px);
        min-width: 250px;
      }

      & > div {
        margin-bottom: 8px;
      }
    `
  ),

  subject: cmz(
    textRendering,
    typeface.extraHeading,
    `
      text-transform: uppercase;
    `
  ),

  toEmail: cmz(`
    color: ${theme.typoLabel};
  `),

  emailDate: cmz(
    textRendering,
    typeface.text,
    `
      line-height: 1.35;
      font-size: 0.9375rem;
      color: ${theme.typoLabel};
      text-align: right;
      margin-left: auto;
    `
  ),

  dateAgo: cmz(`
    font-weight: bold;
    margin-top: 3px;
  `),

  body: cmz(
    textRendering,
    typeface.text,
    `
      padding-top: 30px;
      margin: 0 30px 30px 50px;
      font-size: 1.0625rem;
      line-height: 1.59;
      border-top: 1px solid ${theme.lineSilver2};
      word-break: break-word;
      white-space: pre-line;
    `
  )
}

export type Props = {
  subject?: string,
  from?: string,
  to: string | string[],
  body: string,
  createdAt?: Date,
  initialOpen: boolean
}

type State = {
  isOpen: boolean
}

class Email extends PureComponent<Props, State> {
  static defaultProps = {
    to: [],
    body: '',
    initialOpen: false
  }

  state = {
    isOpen: this.props.initialOpen
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.initialOpen !== this.props.initialOpen) {
      this.setState({ isOpen: this.props.initialOpen })
    }
  }

  toggleBody = () =>
    this.setState((prevState: State) => ({ isOpen: !prevState.isOpen }))

  render () {
    const { subject, from, to, body, createdAt } = this.props
    const { isOpen } = this.state
    const toText = Array.isArray(to) ? to.join(', ') : to

    const htmlBody = (() => {
      try {
        return markdownCompiler(body)
      } catch (err) {
        return body
      }
    })()

    return (
      <div className={cx.root}>
        <div className={cx.headerContainer} onClick={this.toggleBody}>
          <div className={cx.triangleIcon}>
            <SvgIcon
              icon={isOpen ? 'triangleup' : 'triangledown'}
              color='grayscarpaflow'
            />
          </div>

          <div className={cx.header}>
            <div className={cx.headerInfo}>
              {subject && <div className={cx.subject} title={subject}>{subject}</div>}
              {from && <div title={`From ${from}`}>From: {from}</div>}
              {toText !== '' && <div title={`To: ${toText}`}>To: <span className={cx.toEmail}>{toText}</span></div>}
            </div>

            {createdAt && (
              <div className={cx.emailDate}>
                <div className={cx.dateAgo}>{timeSince(createdAt, false, true)}</div>
                {formatDate(createdAt, 'Do MMM YYYY, HH:mm aa UTC')}
              </div>
            )}
          </div>
        </div>

        {isOpen && <div className={cx.body}>{htmlBody}</div>}
      </div>
    )
  }
}

export default Email
