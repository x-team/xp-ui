// @flow

import React, { Component } from 'react'

import theme, { breakpoints } from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
    & {
      background: ${theme.white}
      border: 1px solid ${theme.lineSilver5}
      box-shadow: 4px 4px 0 ${theme.baseTuna.fade(0.95)}
      padding: 24px
      margin: 0 0 24px 0
      cursor: pointer
    }

    &:last-child {
      margin: 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      &:hover div div + div {
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
  `),

  buttonDelete: cmz(`
    & {
      color: ${theme.typoHeaderAnchor}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        opacity: 0
        transition: opacity 0.15s ease-in-out
      }
    }
  `)
}

type Props = {
  id?: number,
  role?: string,
  company?: string,
  startDate?: Date,
  endDate?: Date,
  editEntry?: (number) => void,
  deleteEntry?: (number) => void
}

class WorkExperienceCard extends Component<Props> {
  formatDate = (date: Date): string => date.toLocaleString('en-us', { year: 'numeric', month: 'long' })

  handleEditEntry = (id: number) => (): void => {
    const { editEntry } = this.props
    editEntry && editEntry(id)
  }

  handleDeleteEntry = (id: number) => (): void => {
    const { deleteEntry } = this.props
    deleteEntry && deleteEntry(id)
  }

  render () {
    const { id, role, company, startDate, endDate, editEntry, deleteEntry } = this.props

    return (
      (id && (role || company || startDate))
        ? <div className={cx.wrapper}>
          {
            (role || company)
              ? <div className={cx.label}>
                {role && <span className={cx.role}>{role}</span>}
                {(role && company) && <span className={cx.at}>at</span>}
                {company && <span className={cx.company}>{company}</span>}
              </div>
              : null
          }

          {startDate && <div className={cx.dates}>{this.formatDate(startDate)} - {endDate ? this.formatDate(endDate) : 'Current'}</div>}

          {
            (editEntry && deleteEntry)
              ? <div className={cx.buttons}>
                <div className={cx.buttonEdit} onClick={this.handleEditEntry(id)}>Edit Entry</div>
                <div className={cx.buttonDelete} onClick={this.handleDeleteEntry(id)}>Delete</div>
              </div>
              : null
          }
        </div>
        : null
    )
  }
}

export default WorkExperienceCard
