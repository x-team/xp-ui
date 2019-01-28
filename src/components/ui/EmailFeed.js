// @flow

import React, { PureComponent, Fragment } from 'react'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import Button from './Button'
import Email from './Email'
import InputField from '../forms/InputField'
import TruncatedList from './TruncatedList'
import Text from './Text'

import { timeSince } from '../../utils/helpers'

import type { Props as EmailPropsType } from './Email'

import { textRendering, typeface } from '../../styles/typo'
import theme, { mediaQueries } from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  header: cmz(
    textRendering,
    typeface.text,
    `
      color: ${theme.typoHighlightOnDarkBackground};
      font-size: 1.0625rem;
      margin-bottom: 20px;
    `
  ),

  headerRow: cmz(`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
  `),

  headerRefreshRow: cmz(`
    & {
      margin-top: 50px;
    }

    ${mediaQueries.mobile} {
      & {
        margin-top: 15px;
      }

      & > div {
        margin-bottom: 15px;
      }

      & > div:last-child {
        margin-bottom: 0;
      }
    }

    & button {
      border: 1px solid ${theme.lineSilver2};
      display: inline-block;
      margin-left: 20px;
      padding: 8px 20px;
      width: auto;
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
      text-transform: uppercase;
      font-size: 1.0625rem
    }
  `),

  headerTitle: cmz(
    typeface.extraHeading,
    `
      color: ${theme.typoHighlightOnDarkBackground};
      text-transform: uppercase;
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
    background-color: ${theme.baseBright};
    border: 1px solid ${theme.lineSilver2};
    color: ${theme.typoLabel};
  `),

  viewMore: cmz(`
    & {
      border: 1px solid ${theme.lineSilver2};
    }

    & span {
      color: ${theme.typoLabel};
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
      font-size: 0.875rem;
      font-weight: 700
      text-transform: uppercase;
      letter-spacing: 1.75px;
    }
  `),

  loadIndicator: cmz(`
    font-weight: 600;
  `),

  endButtonLink: cmz(
    typeface.semiHeading,
    `
      color: ${theme.typoLabel};
      font-size: 0.875rem;
      text-decoration: none;
    `
  )
}

const visibleItems = 3
const incrementItems = 3

const getInitialNumberItemsShowed = emails => {
  return emails.length > 0 && emails.length < visibleItems ? emails.length : visibleItems
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

  state = {
    expandAll: this.props.initialExpandedAll,
    numberItemsShowed: getInitialNumberItemsShowed(this.props.emails)
  }

  onRefreshEmails = () => {
    const { onRefreshEmails } = this.props
    if (onRefreshEmails) {
      onRefreshEmails()
      this.setState({ numberItemsShowed: getInitialNumberItemsShowed(this.props.emails) })
    }
  }

  toggleExpandAll = () => {
    this.setState((prevState: State) => ({ expandAll: !prevState.expandAll }))
  }

  getLoadIndicator = () => `1-${this.state.numberItemsShowed} of ${this.props.emails.length}`

  render () {
    const { expandAll } = this.state
    const { emails, isRefreshing, lastSyncRefresh, endButtonUrl, errorMessage } = this.props

    const htmlErrorMessage = (() => {
      try {
        return markdownCompiler(errorMessage)
      } catch (err) {
        return errorMessage
      }
    })()

    if (errorMessage !== '') {
      return (
        <Fragment>
          <span className={cx.headerTitle}>Email History</span>
          <Text hasDivider content={htmlErrorMessage} isCentered />
        </Fragment>
      )
    }

    const renderEmail = (email: EmailPropsType) => (
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
            <span className={cx.headerTitle}>Email History</span>
            <InputField
              type='sliding-checkbox'
              label='Expand All'
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
              {emails.length > 0 && <span className={cx.loadIndicator}>{this.getLoadIndicator()}</span>}
              <Button
                wide
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
          visible={visibleItems}
          increment={incrementItems}
          items={emails.map(renderEmail)}
          endListElement={endButtonUrl && (
            <a href={endButtonUrl} target='_blank' rel='noreferrer' className={cx.endButtonLink}>
              <Button
                wide
                outlined
                color='silver'
                className={cx.viewMore}
              >
                Go to front for more details
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
