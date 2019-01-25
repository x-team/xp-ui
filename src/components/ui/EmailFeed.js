// @flow

import React, { PureComponent, Fragment } from 'react'

import Button from './Button'
import Email from './Email'
import InputField from '../forms/InputField'
import TruncatedList from './TruncatedList'

import elem from '../../utils/elem'
import { timeSince } from '../../utils/helpers'

import type { EmailPropsType } from './Email'

import { textRendering, typeface } from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  header: cmz(
    textRendering,
    typeface.text,
    `
      margin-bottom: 20px;
      font-size: 1.0625rem;
      color: ${theme.typoHighlightOnDarkBackground};
    `
  ),

  headerRow: cmz(`
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `),

  headerRefreshRow: cmz(`
    & {
      margin-top: 50px;
    }

    & button {
      width: auto;
      display: inline-block;
      margin: initial;
      margin-left: 20px;
      padding: 5px 20px;
      border: 1px solid ${theme.lineSilver2};
    }

    & button span {
      font-size: 1.0625rem
    }

    & button svg {
      vertical-align: initial;
    }

  `),

  headerTitle: cmz(
    typeface.extraHeading
  ),

  singleEmailContainer: cmz(`
    margin-bottom: 30px;
  `),

  lastestEmailSync: cmz(`
    color: ${theme.typoLabel};
  `),

  syncDateAgo: cmz(`
    font-weight: bold;
    color: ${theme.typoHighlightOnDarkBackground};
  `),

  disabledButton: cmz(`
    border: 1px solid #E9EDEE;
    background-color: ${theme.baseBright}
  `),

  viewMore: cmz(`
    width: 100%;
  `),

  loadIndicator: cmz(`
    font-weight: bold;
  `),

  headerRowExpandEmails: cmz(`
    & label {
      color: ${theme.typoLabel};
    }
  `)

}

type Props = {
  emails: Array<EmailPropsType>,
  initialExpandedAll: boolean,
  lastSyncRefresh?: Date,
  isRefreshing: Boolean,
  onRefreshEmails?: () => void
}

type State = {
  expandAll: false,
  changeIncrease: boolean
}

class EmailFeed extends PureComponent<Props, State> {

  static defaultProps = {
    emails: [],
    initialExpandedAll: false,
    isRefreshing: false
  }

  firstShowMoreApplied = false

  state = {
    expandAll: this.props.initialExpandedAll,
    increment: 3
  }

  onRefreshEmails = () => this.props.onRefreshEmails && this.props.onRefreshEmails()


  toggleExpandAll = () => {
    this.setState((prevState: State) => ({ expandAll: !prevState.expandAll }))
  }

  render () {
    const { expandAll, increment } = this.state
    const { emails, isRefreshing, lastSyncRefresh } = this.props

    const renderEmail = email => (
      <div className={cx.singleEmailContainer}>
        <Email
          subject={email.subject}
          from={email.from}
          to={email.to}
          body={email.body}
          createdAt={email.createdAt}
          initialOpen={this.state.expandAll}
        />
      </div>
    )

    return (
      <Fragment>
        <div className={cx.header}>
          <div className={`${cx.headerRow} ${cx.headerRowExpandEmails}`}>
            <span className={cx.headerTitle}>EMAIL HISTORY</span>
            <InputField
              type='sliding-checkbox'
              label='EXPAND ALL'
              checked={expandAll}
              onChange={this.toggleExpandAll}
            />
          </div>

          <div className={`${cx.headerRow} ${cx.headerRefreshRow}`}>
            <div>
            {lastSyncRefresh &&
                <span className={cx.lastestEmailSync}>
                  Lastest email sync: <span className={cx.syncDateAgo}>{timeSince(new Date('1-24-2019'), false)}</span>
                </span>}
            </div>
            <div>
              {emails.length > 0 && <span className={cx.loadIndicator}>1-3 of {emails.length}</span>}
              <Button
                wide
                outlined
                color='silver'
                icon='spin'
                iconProps={{color: isRefreshing ? 'grayscale' : ''}}
                contentStyle='sourceSansPro'
                size=''
                smallRounded
                disabled={isRefreshing}
                className={isRefreshing ? cx.disabledButton : ''}
                onClick={this.onRefreshEmails}
              >
                {isRefreshing ? 'Loading...' : 'Refresh'}
              </Button>
            </div>
          </div>
        </div>
        <TruncatedList
          visible={3}
          increment={3}
          items={emails.map(renderEmail)}
          viewMore={(amount, action) => {
            const isFirstShowMoreApplied = this.firstShowMoreApplied && increment !== 10
            const viewMoreNumber = isFirstShowMoreApplied && amount < 10 ? 10 : amount

            return (<Button
              wide
              outlined
              color='silver'
              onClick={() => {
                action()
                if (isFirstShowMoreApplied) {
                  this.setState({increment: 10})
                }else {
                  this.firstShowMoreApplied = true
                }
              }}
              className={cx.viewMore}
            >
              {`View more ${viewMoreNumber}`}
            </Button>)
          }}
        />
      </Fragment>
    )
  }
}

export default EmailFeed
