// @flow

import React, { PureComponent, Fragment } from 'react'

import Button from './Button'
import Email from './Email'
import InputField from '../forms/InputField'
import TruncatedList from './TruncatedList'
import Text from './Text'

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

  headerRowExpandEmails: cmz(`
    & label {
      color: ${theme.typoLabel};
    }
  `),

  headerTitle: cmz(
    typeface.extraHeading,
    `
    color: ${theme.typoHighlightOnDarkBackground};
    `
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
    border: 1px solid ${theme.lineSilver2};
    background-color: ${theme.baseBright}
  `),

  viewMore: cmz(`
    width: 100%;
  `),

  loadIndicator: cmz(`
    font-weight: bold;
  `),

  endButtonLink: cmz(
    typeface.semiHeading,
    `
    text-decoration: none;
    color: ${theme.typoLabel};
    font-size: 0.875rem;
    `
  )
}

type Props = {
  emails: Array<EmailPropsType>,
  initialExpandedAll: boolean,
  lastSyncRefresh?: Date,
  isRefreshing: boolean,
  onRefreshEmails?: () => void,
  endButtonUrl?: string,
  errorMessage?: string
}

type State = {
  expandAll: boolean,
  numberItemsShowed: number
}

class EmailFeed extends PureComponent<Props, State> {
  static defaultProps = {
    emails: [],
    initialExpandedAll: false,
    isRefreshing: false,
    errorMessage: ''
  }

  visibleItems = 3
  incrementItems = 3

  state = {
    expandAll: this.props.initialExpandedAll,
    numberItemsShowed: this.getInitialNumberItemsShowed()
  }

  getInitialNumberItemsShowed () {
    const { emails } = this.props
    return emails.length > 0 && emails.length < this.visibleItems ? emails.length : this.visibleItems
  }

  onRefreshEmails = () => {
    const { onRefreshEmails } = this.props
    if (onRefreshEmails) {
      onRefreshEmails()
      this.setState({ numberItemsShowed: this.getInitialNumberItemsShowed() })
    }
  }

  toggleExpandAll = () => {
    this.setState((prevState: State) => ({ expandAll: !prevState.expandAll }))
  }

  render () {
    const { expandAll, numberItemsShowed } = this.state
    const { emails, isRefreshing, lastSyncRefresh, endButtonUrl, errorMessage } = this.props

    if (errorMessage !== '') {
      return (
        <Fragment>
          <span className={cx.headerTitle}>EMAIL HISTORY</span>
          <Text hasDivider content={errorMessage} isCentered />
        </Fragment>
      )
    }

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
                  Lastest email sync: <span className={cx.syncDateAgo}>{timeSince(lastSyncRefresh, false)}</span>
                </span>}
            </div>
            <div>
              {emails.length > 0 && <span className={cx.loadIndicator}>1-{numberItemsShowed} of {emails.length}</span>}
              <Button
                wide
                outlined
                color='silver'
                icon='spin'
                iconProps={{ color: isRefreshing ? 'grayscale' : '' }}
                contentStyle='sourceSansPro'
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
        { emails.length > 0 && <TruncatedList
          visible={this.visibleItems}
          increment={this.incrementItems}
          items={emails.map(renderEmail)}
          endListElement={endButtonUrl && (
            <a href={endButtonUrl} target='_blank' rel='noreferrer' className={cx.endButtonLink} >
              <Button
                wide
                outlined
                color='silver'
                className={`${cx.viewMore}`}
              >
                GO TO FRONT FOR MORE DETAILS
              </Button>
            </a>
          )}
          viewMore={(amount, action, isFetching) => {
            return (<Button
              wide
              outlined
              color='silver'
              className={cx.viewMore}
              onClick={() => {
                action()
                this.setState(prevState => {
                  let newNumberItemsShowed = prevState.numberItemsShowed + amount
                  newNumberItemsShowed = emails.length < newNumberItemsShowed ? emails.length : newNumberItemsShowed
                  return {
                    numberItemsShowed: newNumberItemsShowed
                  }
                })
              }}
            >
              {`View more ${amount}`}
            </Button>)
          }}
        />}
      </Fragment>
    )
  }
}

export default EmailFeed
