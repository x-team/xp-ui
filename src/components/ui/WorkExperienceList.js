// @flow
import React, { PureComponent } from 'react'
import WorkExperienceCard from './WorkExperienceCard'

const cmz = require('cmz')

const cx = {
  item: cmz(
    `
      & {
        margin: 0 0 24px 0
      }

      &:last-child {
        margin: 0
      }
    `
  )
}

type Props = {
  list?: Array<{}>,
  onEditCard: (Props) => void
}

class WorkExperienceList extends PureComponent<Props> {
  static defaultProps = {
    list: []
  }

  render () {
    const { list, onEditCard } = this.props

    return (
      list &&
      <div>
        {
          list.map((experience, index) => {
            return (
              <div className={cx.item} key={index}>
                <WorkExperienceCard {...experience} onEditCard={onEditCard} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WorkExperienceList
