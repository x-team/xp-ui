// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    & {
      background: ${theme.white}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0px ${theme.baseTuna.fade(0.95)}
      padding: 24px
      margin: 0 0 24px 0
    }

    &:last-child {
      margin: 0
    }
  `),

  label: cmz(
    typo.baseText,
    `
      margin-top: -6px
    `
  ),

  role: cmz(`
    font-weight: 500
  `),

  at: cmz(`
    font-style: italic
    margin: 0px 6px
  `),

  company: cmz(`
    font-weight: 400
  `),

  dates: cmz(
    typo.baseText,
    `
      font-size: 18px
      margin-top: 5px
    `
  ),

  buttons: cmz(
    typeface.extra,
    `
      & {
        margin: 12px 0 -2px 0
        display: flex
      }

      & div {
        text-transform: uppercase
        line-height: 18px
        font-size: 13px
        cursor: pointer
      }

      & div:hover {
        text-decoration: underline
      }
    `
  ),

  buttonEdit: cmz(`
    color: ${theme.baseRed}
  `),

  buttonDelete: cmz(`
    color: ${theme.typoHeaderAnchor}
    margin: 0 0 0 15px
  `)
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

type WorkExperienceCard = {
  id: number,
  role?: string,
  company?: string,
  startDate?: Date,
  endDate?: Date
}

type Props = {
  list: Array<WorkExperienceCard>,
  editEntry?: (number) => void,
  deleteEntry?: (number) => void
}

class WorkExperienceList extends PureComponent<Props> {
  static defaultProps = {
    list: []
  }

  formatDate = (date: Date): string => {
    return date && `${monthNames[date.getMonth()]} ${date.getFullYear()}`
  }

  handleEditEntry = (id: number) => (): void => {
    const { editEntry } = this.props
    editEntry && editEntry(id)
  }

  handleDeleteEntry = (id: number) => (): void => {
    const { deleteEntry } = this.props
    deleteEntry && deleteEntry(id)
  }

  render () {
    const { list, editEntry, deleteEntry } = this.props

    return (
      list
        ? list.map((workExperienceCard) => {
          const { id, role, company, startDate, endDate } = workExperienceCard

          return (
            <div className={cx.wrapper} key={id}>
              <div className={cx.label}>
                {role && <span className={cx.role}>{role}</span>}
                {(role && company) && <span className={cx.at}>at</span>}
                {company && <span className={cx.company}>{company}</span>}
              </div>
              {startDate && <div className={cx.dates}>{this.formatDate(startDate)} - {endDate ? this.formatDate(endDate) : 'Current'}</div>}
              {
                (editEntry && deleteEntry) &&
                <div className={cx.buttons}>
                  <div className={cx.buttonEdit} onClick={this.handleEditEntry(id)}>Edit Entry</div>
                  <div className={cx.buttonDelete} onClick={this.handleDeleteEntry(id)}>Delete</div>
                </div>
              }
            </div>
          )
        })
        : null
    )
  }
}

export default WorkExperienceList
