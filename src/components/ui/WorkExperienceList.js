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
  list: Array<any>,
  returnEditingCard?: (any) => void
}

type State = {
  editingCard: any
}

class WorkExperienceList extends PureComponent<Props, State> {
  static defaultProps = {
    list: []
  }

  state: State = {
    editingCard: {}
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    if (this.props.returnEditingCard) {
      this.props.returnEditingCard(this.state)
    }
  }

  getEditingCardId = (editingCardId: number) => {
    this.setState({
      editingCard: this.props.list.filter((workExperienceCard) => workExperienceCard.id === editingCardId)
    })
  }

  render () {
    const { list, returnEditingCard } = this.props

    return (
      (list && returnEditingCard)
        ? <div>
          {
            list.map((workExperienceCard) => {
              return (
                <div className={cx.item} key={workExperienceCard.id}>
                  <WorkExperienceCard {...workExperienceCard} returnEditingCardId={this.getEditingCardId} />
                </div>
              )
            })
          }
        </div>
        : null
    )
  }
}

export default WorkExperienceList
