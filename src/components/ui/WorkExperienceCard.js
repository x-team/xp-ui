// @flow
/* globals SyntheticEvent */

import React, { Component } from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    & {
      background: ${theme.baseBrighter}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0 ${theme.baseTuna.fade(0.95)}
      padding: 24px
    }

    &:hover {
      cursor: pointer
      box-shadow: 4px 4px 0 ${theme.baseTuna.fade(0.92)}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      &:hover .workExperienceCardButtonDelete {
        opacity: 1
      }
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
    margin: 0 6px
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
      }

      & div:hover {
        text-decoration: underline
      }

      & div + div {
        margin: 0 0 0 15px
      }
    `
  ),

  buttonEdit: cmz(`
    color: ${theme.baseRed}
    cursor: pointer
  `),

  buttonDelete: cmz(
    'workExperienceCardButtonDelete',
    `
      & {
        color: ${theme.typoHeaderAnchor}
        cursor: pointer
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          opacity: 0
          transition: opacity 0.15s ease-in-out
        }
      }
    `
  )
}

type Props = {
  role?: string,
  company?: string,
  startDate?: Date,
  endDate?: Date,
  editEntry?: () => void,
  deleteEntry?: () => void
}

class WorkExperienceCard extends Component<Props> {
  formatDate = (date: Date): string => date.toLocaleString('en-us', { year: 'numeric', month: 'long' })

  handleEditEntry = (event: SyntheticEvent<>) => {
    event && event.stopPropagation()
    const { editEntry } = this.props
    editEntry && editEntry()
  }

  handleDeleteEntry = (event: SyntheticEvent<>) => {
    event && event.stopPropagation()
    const { deleteEntry } = this.props
    deleteEntry && deleteEntry()
  }

  render () {
    const { role, company, startDate, endDate, editEntry, deleteEntry } = this.props

    return role || company || startDate ? (
      <div className={cx.wrapper} onClick={this.handleEditEntry}>
        {(role || company) && (
          <div className={cx.label}>
            {role && (
              <span className={cx.role}>{role}</span>
            )}
            {role && company && (
              <span className={cx.at}>at</span>
            )}
            {company && (
              <span className={cx.company}>{company}</span>
            )}
          </div>
        )}

        {startDate && (
          <div className={cx.dates}>
            {this.formatDate(startDate)} - {endDate ? this.formatDate(endDate) : 'Present'}
          </div>
        )}

        {(editEntry || deleteEntry) && (
          <div className={cx.buttons}>
            {editEntry && (
              <div className={cx.buttonEdit} onClick={this.handleEditEntry}>Edit Entry</div>
            )}
            {deleteEntry && (
              <div className={cx.buttonDelete} onClick={this.handleDeleteEntry}>Delete</div>
            )}
          </div>
        )}
      </div>
    ) : null
  }
}

export default WorkExperienceCard
