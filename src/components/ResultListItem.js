import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

const cmz = require('cmz')

const tagItem = {
  root: cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    text-align: left
    border-left: 3px solid #CCC
    padding: 0 .5rem
    margin: -.5rem 0 1.7rem 0
  `),
  heading: cmz(`
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 800
    line-height: 1rem
    text-transform: uppercase
    color: #777
    font-size: 1em;
    text-align: left;
    margin-bottom: 1em;
  `),
  body: cmz(`
    margin-bottom: 1rem;
    margin-top: 1rem;
  `)
}

const containerStyles = cmz(`
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
  display: inline-block;
  vertical-align: middle;
  margin: .5em;
`)

export type Portfolio = {
  id: ?number,
  body: ?string
}

export type Tag = {
  name: string,
  portfolios: Array<Portfolio>
}

export type Applicant = {
  id: ?number,
  baseId: ?string,
  firstName: ?string,
  lastName: ?string,
  email: ?string,
  tags: Array<Tag>
}

type Props = {
  applicant: Applicant
}

class ResultListItem extends PureComponent<Props> {
  cropBody: Function

  cropBody (text: string) {
    const MAX_CHAR_SIZE = 150
    if (text.length > MAX_CHAR_SIZE) {
      return `${text.substring(0, MAX_CHAR_SIZE)}...`
    }
    return text
  }

  render () {
    const { applicant } = this.props

    if (!applicant) { return <div className={containerStyles}> No applicants! </div> }

    const { firstName, lastName, email } = applicant

    const { tags } = applicant
    const tagitemStyles = tagItem

    return (
      <div className={containerStyles}>
        <img
          alt={`${firstName} ${lastName}'s avatar`}
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=64`}
        />

        <div>{`${firstName} ${lastName}`}</div>

        <div className={containerStyles}>
          {applicant.baseId && (
            <a
              href={`https://app.futuresimple.com/leads/${applicant.baseId}`}
              target='_blank'
            >
              &rarr; View in Base
            </a>
          )}
        </div>

        {tags && (
          <div>
            <div className={tagitemStyles.heading}>Tags</div>
            {tags.map((tag, key) => (
              <div key={key} className={tagitemStyles.root}>
                <div className={tagitemStyles.heading}>{tag.name}</div>
                {tag.portfolios &&
                  tag.portfolios.map(portfolio => (
                    <div key={portfolio.id} className={tagitemStyles.body}>
                      {this.cropBody(portfolio.body)}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default ResultListItem
