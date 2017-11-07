import React from 'react'
import md5 from 'crypto-js/md5'

const progressItem = cmz('progress-item', {
  root: ['text-align: left', 'border-left: 3px solid #CCC', 'padding: 0 .5rem', 'margin: -.5rem 0 1.7rem 0'],
  heading: ['font-size: .7em', 'line-height: 1rem', 'text-transform: uppercase', `color: #777`]
})

const tagItem = cmz('tag-item', {
  root: [progressItem.root],
  subheading: [progressItem.heading],
  heading: [
    `
      & {
          font-size: 1em;
          text-align: left;
          margin-bottom: 1em;
      }
    `,
    progressItem.heading
  ],
  body: `
    & {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  `
})

const applicantsStyles = cmz('applicant', {
  section: `
    display: inline-block;
    vertical-align: middle;
    margin: 0 .5em;
  `
})

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
    const { applicant } = props

    if (!applicant) return null

    const { firstName, lastName, email } = applicant

    const { tags } = applicant
    const tagitemStyles = tagItem

    return (
      <div>
        <img
          alt={`${firstName} ${lastName}'s avatar`}
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=64`}
        />

        <div>{`${firstName} ${lastName}`}</div>

        <div className={`${applicantsStyles.section}`}>
          {applicant.baseId &&
            <a href={`https://app.futuresimple.com/leads/${applicant.baseId}`} target='_blank'>
              &rarr; View in Base
            </a>
          }
        </div>

        {tags && (
          <div>
            <div className={tagitemStyles.heading}>Tags</div>
            {tags.map((tag, key) => (
              <div key={key} className={tagitemStyles.root}>
                <div className={tagitemStyles.subheading}>{tag.name}</div>
                {tag.portfolios &&
                  tag.portfolios.map(portfolio => (
                    <div key={portfolio.id} className={tagitemStyles.body}>
                      {cropBody(portfolio.body)}
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
