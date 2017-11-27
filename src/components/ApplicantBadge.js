import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

const cmz = require('cmz')

const containerStyles = cmz(`
  display: flex
  flex-direction: row
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  margin: .5em
`)

const applicantsContainer = cmz(`
  margin: 0 1em
`)

type Props = {
  firstName: ?string,
  lastName: ?string,
  email: ?string
}

export default class ApplicantBadge extends PureComponent<Props> {
  render () {
    const {
      children,
      email,
      firstName,
      lastName
    } = this.props

    console.log(this.props);
    console.log( this.props.lastName || '');

    return (
      <div className={containerStyles}>
        <img
          alt={`${firstName} ${lastName}'s avatar`}
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=64`}
        />
        <div className={applicantsContainer}>
          {
            (firstName || lastName) && 
            <div>{`${firstName || ''} ${lastName || ''}`}</div>
          }
          <div>{`${email}`}</div>
          {children}
        </div>
      </div>
    )
  }
}
