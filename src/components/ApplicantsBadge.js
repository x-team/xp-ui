import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

const cmz = require('cmz')

const containerStyles = cmz(`
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  display: inline-block;
  vertical-align: middle;
  margin: .5em;
`)

const applicantsContainer = cmz(`
  display: inline-block
  vertical-align: top
  margin: 0 1em
`)

export type Applicant = {
  firstName: ?string,
  lastName: ?string,
  email: ?string
}

type Props = {
  applicant: Applicant
}

class ApplicantsBadge extends PureComponent<Props> {
  getApplicantsFieldsValues: Function

  getApplicantsFieldsValues (applicant: Applicant) {
    const firstName = applicant.firstName || 'No first name provided.'
    const lastName = applicant.lastName || 'No last name provided.'
    const email = applicant.email || 'No e-mail provided.'
    return { firstName, lastName, email }
  }

  render () {
    const { applicant } = this.props

    if (!applicant) { return null }

    const { firstName, lastName, email } = this.getApplicantsFieldsValues(applicant)

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

export default ApplicantsBadge
