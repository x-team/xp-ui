// @flow

import React, { PureComponent } from 'react'

import Label from './Label'
import CustomSelector from './CustomSelector'
import InputField from '../forms/InputField'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      & {
        display: flex
        align-items: center
        width: 100%
        flex-wrap: wrap
      }

      @media screen and (min-width: ${breakpoints.xs}) {
        & {
          flex-wrap: nowrap
        }
      }
    `
  ),

  startDate: cmz(`
    & {
      width: 100%
      margin: 0 0 8px
    }

    @media screen and (min-width: ${breakpoints.xs}) {
      & {
        margin: 0 8px 0 0
      }
    }
  `),

  startDateFields: cmz(`
    display: flex
    flex-wrap: nowrap
    width: 100%
  `),

  endDate: cmz(`
    width: 100%
  `),

  endDateFields: cmz(`
    display: flex
    flex-wrap: nowrap
    width: 100%
  `),

  month: cmz(`
    width: calc(60% - 8px)
    margin: 0 8px 0 0
  `),

  year: cmz(`
    width: 40%
  `),

  present: cmz(`
    line-height: 62px
  `),

  noEndDate: cmz(`
    & {
      display: flex
      justify-content: flex-end
      margin: 8px 0 0 0
    }

    & label {
      font-size: 16px !important
    }
  `)
}

type Option = {
  label: string,
  value: string | number
}

type Props = {
  startDate?: Date,
  endDate?: Date,
  noEndDate?: boolean,
  disabled?: boolean,
  onChange?: ({ startDate: Date, endDate: ?Date }) => void
}

type State = {
  startMonth: Option | null,
  startYear: Option | null,
  endMonth: Option | null,
  endYear: Option | null,
  noEndDate: boolean
}

const MONTHS: Array<Option> = [
  { label: 'January', value: 0 },
  { label: 'February', value: 1 },
  { label: 'March', value: 2 },
  { label: 'April', value: 3 },
  { label: 'May', value: 4 },
  { label: 'June', value: 5 },
  { label: 'July', value: 6 },
  { label: 'August', value: 7 },
  { label: 'September', value: 8 },
  { label: 'October', value: 9 },
  { label: 'November', value: 10 },
  { label: 'December', value: 11 }
]

const currentYear = (new Date()).getFullYear()
const YEARS: Array<Option> = Array.from(
  { length: (1960 - currentYear) / -1 },
  (_, i) => {
    const year = currentYear + (i * -1)
    return { label: String(year), value: year }
  }
)

class Timeframe extends PureComponent<Props, State> {
  state: State = {
    startMonth: null,
    startYear: null,
    endMonth: null,
    endYear: null,
    noEndDate: false
  }

  componentDidMount () {
    this.updateDateValues()
  }

  getOptionValue = (options: Array<Option> = [], value: ?string | ?number) => options.find(option => option.value === value)

  updateDateValues = () => {
    const { startDate = '', endDate = '', noEndDate = false } = this.props

    const startMonth = startDate ? startDate.getMonth() : undefined
    const startYear = startDate ? startDate.getFullYear() : undefined
    const endMonth = endDate ? endDate.getMonth() : undefined
    const endYear = endDate ? endDate.getFullYear() : undefined

    this.setState({
      startMonth: this.getOptionValue(MONTHS, startMonth),
      startYear: this.getOptionValue(YEARS, startYear),
      endMonth: this.getOptionValue(MONTHS, endMonth),
      endYear: this.getOptionValue(YEARS, endYear),
      noEndDate
    }, this.validateValues)
  }

  updateFieldValue = (field: string, options: Array<Option> = []) => ({ value }: { value: string }) => {
    this.setState({
      [field]: this.getOptionValue(options, value)
    }, this.validateValues)
  }

  validateValues = () => {
    const { startMonth, startYear, endMonth, endYear } = this.state
    this.setState({
      startMonth: this.getOptionValue(MONTHS, startMonth && startMonth.value),
      startYear: this.getOptionValue(YEARS, startYear && startYear.value),
      endMonth: this.getOptionValue(this.getValidEndMonthsList(), endMonth && endMonth.value),
      endYear: this.getOptionValue(this.getValidEndYearsList(), endYear && endYear.value)
    }, this.handleOnChange)
  }

  handleOnChange = () => {
    const { onChange } = this.props
    const { startMonth, startYear, endMonth, endYear, noEndDate } = this.state

    const startDate = startMonth && startYear ? new Date() : undefined
    if (startMonth && startYear && startDate) {
      startDate.setFullYear(Number(startYear.value))
      startDate.setMonth(Number(startMonth.value))
    }

    const endDate = endMonth && endYear ? new Date() : undefined
    if (endMonth && endYear && endDate) {
      endDate.setFullYear(Number(endYear.value))
      endDate.setMonth(Number(endMonth.value))
    }

    if (startDate) {
      onChange && onChange({
        startDate,
        endDate: noEndDate ? undefined : endDate,
        noEndDate
      })
    }
  }

  toggleNoEndDate = () => {
    const { endMonth, endYear, noEndDate } = this.state
    this.setState({
      endMonth: !noEndDate ? undefined : endMonth,
      endYear: !noEndDate ? undefined : endYear,
      noEndDate: !noEndDate
    }, this.validateValues)
  }

  getValidEndMonthsList = () => {
    const { startMonth, startYear, endYear } = this.state
    if (startMonth && startYear && startYear === endYear) {
      return MONTHS.filter(month => Number(month.value) >= Number(startMonth.value))
    }
    return MONTHS
  }

  getValidEndYearsList = () => {
    const { startYear } = this.state
    if (startYear) {
      return YEARS.filter(year => Number(year.value) >= Number(startYear.value))
    }
    return YEARS
  }

  render () {
    const { disabled = false } = this.props
    const { startMonth, startYear, endMonth, endYear, noEndDate } = this.state
    return (
      <div>
        <div className={cx.wrapper}>
          <div className={cx.startDate}>
            <Label description='Start Date' />
            <div className={cx.startDateFields}>
              <div className={cx.month}>
                <CustomSelector
                  placeholder={'Month'}
                  options={MONTHS}
                  value={startMonth}
                  onChange={this.updateFieldValue('startMonth', MONTHS)}
                  disabled={disabled}
                />
              </div>
              <div className={cx.year}>
                <CustomSelector
                  placeholder={'Year'}
                  options={YEARS}
                  value={startYear}
                  onChange={this.updateFieldValue('startYear', YEARS)}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
          <div className={cx.endDate}>
            <Label description='End Date' />
            {noEndDate ? (
              <div className={cx.present}>Present</div>
            ) : (
              <div className={cx.endDateFields}>
                <div className={cx.month}>
                  <CustomSelector
                    placeholder={'Month'}
                    options={this.getValidEndMonthsList()}
                    value={endMonth}
                    onChange={this.updateFieldValue('endMonth', this.getValidEndMonthsList())}
                    disabled={disabled}
                  />
                </div>
                <div className={cx.year}>
                  <CustomSelector
                    placeholder={'Year'}
                    options={this.getValidEndYearsList()}
                    value={endYear}
                    onChange={this.updateFieldValue('endYear', this.getValidEndYearsList())}
                    disabled={disabled}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={cx.noEndDate}>
          <InputField
            type='checkbox'
            label='Still working there'
            checked={noEndDate}
            onChange={this.toggleNoEndDate}
            disabled={disabled}
          />
        </div>
      </div>
    )
  }
}

export default Timeframe
