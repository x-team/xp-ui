import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import theme from '../styles/theme'

const cmz = require('cmz')

const cx = {
  container: cmz(`
  display: flex
  flex-direction: row
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  margin: .5em .5em .5em 0
`),

  isActive: cmz(`background-color: ${theme.lightGray}`),

  applicant: cmz(`
  margin: 0 1em
  padding-top: .5em
  padding-right: .5em
`)
}

type Props = {
  firstName: ?string,
  lastName: ?string,
  email: ?string,
  active: ?boolean
}

export default class ApplicantBadge extends PureComponent<Props> {
  static defaultProps = {
    firstName: '',
    lastName: '',
    active: false
  }

  render () {
    const {
      children,
      email,
      firstName,
      lastName,
      active
    } = this.props

    const shouldRenderName = firstName || lastName
    const fullName = `${firstName} ${lastName}`
    const avatarCaption = shouldRenderName ? `${fullName}'s avatar` : 'avatar'

    return (
      <div className={`${cx.container} ${active ? cx.isActive : ''}`}>
        <img
          alt={avatarCaption}
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=64`}
        />
        <div className={cx.applicant}>
          {shouldRenderName && <div>{fullName}</div>}
          <div>{email}</div>
          {children}
        </div>
      </div>
    )
  }
}
