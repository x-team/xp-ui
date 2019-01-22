// @flow

import React, { PureComponent } from 'react'
import formatDate from 'date-fns/format'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import SvgIcon from './SvgIcon'

import { timeSince } from '../../utils/helpers'

import { textRendering, typeface } from '../../styles/typo'
import theme from '../../styles/theme'
import elem from '../../utils/elem'

const cmz = require('cmz')

const Root = elem.div(cmz(`
  box-sizing: border-box;
  position: relative;
  border: 1px solid ${theme.lineSilver2};
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -ms-border-radius: 2px;
  -moz-border-radius: 2px;
  -o-border-radius: 2px;
`))

const HeaderContainer = elem.div(cmz(`
  cursor: pointer;
  padding: 30px 30px 30px 50px;
`))

const TriangleIcon = elem.div(cmz(`
  left: 20px;
  position: absolute;
`))

const Header = elem.div(cmz(`
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`))

const HeaderInfo = elem.div(cmz(
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
`))

const Subject = elem.div(cmz(
  textRendering,
  typeface.extraHeading,
  `
    text-transform: uppercase;
  `
))

const From = elem.div()

const To = elem.div()

const ToEmail = elem.span(cmz(`
  color: ${theme.typoLabel};
`))

const EmailDate = elem.div(cmz(
  textRendering,
  typeface.text,
  `
    line-height: 1.35;
    font-size: 0.9375rem;
    color: ${theme.typoLabel};
    text-align: right;
    margin-left: auto;
`))

const DateAgo = elem.div(cmz(`
  font-weight: bold;
  margin-top: 3px;
`))

const Body = elem.div(cmz(
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
))

type Props = {
  subject?: string,
  from?: string,
  to?: string | string[],
  body: string,
  createdAt?: number,
  initialOpen: boolean
}

type State = {
  open: boolean
}

class Email extends PureComponent<Props, State> {
  static defaultProps = {
    body: '',
    initialOpen: false
  }

  state = {
    open: this.props.initialOpen
  }

  toggleBody = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  render () {
    const { subject, from, to, body, createdAt } = this.props
    const { open } = this.state
    const date = createdAt ? new Date(createdAt) : new Date()
    const toText = Array.isArray(to) ? to.join(', ') : to

    const renderHeaderInfo = () => (
      HeaderInfo(
        subject && Subject({ title: subject }, subject),
        from && From({ title: `From: ${from}` }, 'From: ', from),
        to && To(
          { title: `To: ${to}` },
          'To: ',
          ToEmail(toText)
        )
      )
    )

    const renderHeaderDate = () => (
      createdAt && EmailDate(
        DateAgo(timeSince(createdAt, false, true)),
        (date instanceof Date) && formatDate(date, 'Do MMM YYYY, HH:mm aa UTC')
      )
    )

    const renderHeader = () => (
      Header(
        renderHeaderInfo(),
        renderHeaderDate()
      )
    )

    const htmlBody = (() => {
      try {
        return markdownCompiler(body)
      } catch (err) {
        return body
      }
    })()

    return (
      Root(
        HeaderContainer(
          { onClick: this.toggleBody },
          TriangleIcon(
            <SvgIcon
              icon={open ? 'triangleup' : 'triangledown'}
              color='grayscarpaflow'
            />
          ),
          renderHeader()
        ),
        open && Body(htmlBody)
      )
    )
  }
}

export default Email
