// @flow

import React, { PureComponent } from 'react'
import formatDate from 'date-fns/format'

import SvgIcon from './SvgIcon'

import { timeSince } from '../../utils/helpers'

import { typeface } from '../../styles/typo'
import theme, { mediaQueries } from '../../styles/theme'
import elem from '../../utils/elem'

const cmz = require('cmz')

const Root = elem.div(cmz(`
  position: relative;
  padding: 28px 29px 26px 49px;
  border: 1px solid  ${theme.lineSilver2};
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -ms-border-radius: 2px;
  -moz-border-radius: 2px;
  -o-border-radius: 2px;
`))

const TrinagulateIndicator = elem.div(cmz(`
  left: 20px;
  position: absolute;
`))

const Header = elem.div(cmz(`
  & {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  ${mediaQueries.mobile} {
    & {
      display: initial;
    }
  }
`))

const HeaderInfo = elem.div(cmz(
  typeface.extraHeading,
  `
  & {
    font-size: 1.0625rem;
    font-weight: normal;
  }

  & > div {
    margin-bottom: 8px;
  }
`))

const Subject = elem.div(cmz(
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
  typeface.text,
  `
  & {
    font-size: 0.9375rem;
    color: ${theme.typoLabel};
    text-align: right;

  }
  ${mediaQueries.mobile} {
    & {
      margin-top: 20px;
    }
  }
`))

const DateAgo = elem.div(cmz(`
  font-weight: bold;
  margin-top: 7px;
`))

const Body = elem.div(cmz(`
  border-top: 1px solid ${theme.lineSilver2};
  padding-top: 30px;
  margin-top: 30px;
`))

type Props = {
  subject?: string,
  from?: string,
  to?: string,
  body?: string,
  createdAt?: number,
  initialOpen?: boolean
}

type State = {
  open: boolean
}

class Email extends PureComponent<Props, State> {
  static defaultProps = {
    initialOpen: false,
    body: ''
  }

  state = {
    open: false
  }

  componentDidMount () {
    this.setState({ open: this.props.initialOpen || false })
  }

  handleOpenBody = () => this.setState((prevState: State) => ({ open: !prevState.open }))

  render () {
    const { subject, from, to, body, createdAt } = this.props
    const { open } = this.state
    const date = createdAt ? new Date(createdAt) : new Date()

    const renderHeaderInfo = () => (
      HeaderInfo(
        subject && Subject(subject),
        from && From(from),
        to && To(
          'To: ',
          ToEmail(to)
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
        { onClick: this.handleOpenBody },
        renderHeaderInfo(),
        renderHeaderDate()
      )
    )

    return (
      Root(
        TrinagulateIndicator(
          <SvgIcon
            icon={open ? 'triangleup' : 'triangledown'}
            color='grayscarpaflow'
          />
        ),
        renderHeader(),
        open && Body(body)
      )
    )
  }
}

export default Email
