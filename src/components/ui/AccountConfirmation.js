// @flow

import React, { PureComponent } from 'react'

import Avatar from './Avatar'
import Button from './Button'

import theme from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    padding: 48px
    display: flex
    align-items: center
    flex-direction: column
    line-height: 1.4
    color: ${theme.typoGrayedParagraph}
    width: 500px
    max-width: 100%
    box-sizing: border-box
    text-align: center
    word-break: break-word
  `),

  title: cmz(
    typeface.extraHeading,
    `
      margin: 0 0 32px
      font-size: 24px
    `
  ),

  avatar: cmz(`
    margin: 0 0 16px
  `),

  fullName: cmz(
    typeface.strongHeading,
    `
      margin: 0 0 8px
      font-size: 18px
    `
  ),

  email: cmz(
    typeface.text,
    `
      & {
        margin: 0 0 32px
        font-size: 16px
        color: ${theme.typoGrayedParagraph}
        text-decoration: none
      }

      &:hover {
        color: ${theme.typoGrayedParagraph}
      }
    `
  ),

  continue: cmz(`
    margin: 0 0 32px
    width: 256px
    max-width: 100%
  `),

  notYou: cmz(
    typeface.text,
    `
      margin: 0 0 4px
      font-size: 13px
    `
  ),

  signOut: cmz(
    typo.link,
    `
      margin: 0
      font-weight: normal
      font-size: 18px
      cursor: pointer
    `
  )
}

type Props = {
  avatar?: string,
  fullName?: string,
  email?: string,
  onContinue?: () => void,
  onSignOut?: () => void
}

class AccountConfirmation extends PureComponent<Props, void> {
  static defaultProps = {
    avatar: '',
    fullName: '',
    email: ''
  }

  handleContinue = () => {
    const { onContinue } = this.props
    onContinue && onContinue()
  }

  handleSignOut = () => {
    const { onSignOut } = this.props
    onSignOut && onSignOut()
  }

  render () {
    const { avatar, fullName, email } = this.props
    return (
      <div className={cx.wrapper}>
        <h1 className={cx.title}>Ready to continue<br />your sign up?</h1>
        {avatar && (
          <span className={cx.avatar}>
            <Avatar
              src={avatar}
              alt={fullName}
              size={80}
            />
          </span>
        )}
        {fullName && (
          <h2 className={cx.fullName}>{fullName}</h2>
        )}
        {email && (
          <a className={cx.email} href='mailto:'>{email}</a>
        )}
        <Button className={cx.continue} onClick={this.handleContinue}>Continue »</Button>
        <p className={cx.notYou}>It's not you?</p>
        <a className={cx.signOut} onClick={this.handleSignOut}>Sign out</a>
      </div>
    )
  }
}

export default AccountConfirmation
