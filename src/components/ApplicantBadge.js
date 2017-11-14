import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

const cmz = require('cmz')

const containerStyles = cmz(`
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  vertical-align: middle;
  margin: .5em;
`)

const applicantsContainer = cmz(`
  display: inline-block
  vertical-align: top
  margin: 0 1em
`)

type Props = {
  firstName: ?string,
  lastName: ?string,
  email: ?string
}

export default class ApplicantBadge extends PureComponent<Props> {
  render () {
    const { firstName, lastName, email } = this.props

    return (
      <div className={containerStyles}>
        <img
          alt={`${firstName} ${lastName}'s avatar`}
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=64`}
        />
        <div className={applicantsContainer}>
          <div>{`${firstName} ${lastName}`}</div>
          <div>{`${email}`}</div>
        </div>
      </div>
    )
  }
}
