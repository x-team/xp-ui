// @flow

import React, { PureComponent } from 'react'

import CustomSelector from './CustomSelector'
import InputField from '../forms/InputField'

import { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(`
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
  `),

  startDate: cmz(`
    & {
      display: flex
      flex-wrap: nowrap
      width: 100%
      margin: 0 0 8px
    }

    @media screen and (min-width: ${breakpoints.xs}) {
      & {
        margin: 0
      }
    }
  `),

  endDate: cmz(`
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

  divider: cmz(
    typo.baseText,
    `
      & {
        font-size: 18px
        opacity: 0.5
        width: 20px
        text-align: center
        flex-shrink: 0
        display: none
      }

      @media screen and (min-width: ${breakpoints.xs}) {
        & {
          display: block
        }
      }
    `
  ),

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
  startDate?: string,
  endDate?: string,
  noEndDate?: boolean,
  onChange?: ({ startDate: string, endDate: ?string }) => void
}

type State = {
  startMonth: Option | null,
  startYear: Option | null,
  endMonth: Option | null,
  endYear: Option | null,
  noEndDate: boolean
}

const MONTHS: Array<Option> = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 }
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

    const startMonth = Number(startDate.slice(5, 7))
    const startYear = Number(startDate.slice(0, 4))
    let endMonth = Number(endDate.slice(5, 7))
    let endYear = Number(endDate.slice(0, 4))

    this.setState({
      startMonth: isNaN(startMonth) ? undefined : this.getOptionValue(MONTHS, startMonth),
      startYear: isNaN(startYear) ? undefined : this.getOptionValue(YEARS, startYear),
      endMonth: isNaN(endMonth) ? undefined : this.getOptionValue(MONTHS, endMonth),
      endYear: isNaN(endYear) ? undefined : this.getOptionValue(YEARS, endYear),
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
      startMonth: startMonth && this.getOptionValue(MONTHS, startMonth.value),
      startYear: startYear && this.getOptionValue(YEARS, startYear.value),
      endMonth: endMonth && this.getOptionValue(this.getEndMonthsList(), endMonth.value),
      endYear: endYear && this.getOptionValue(this.getEndYearsList(), endYear.value)
    }, this.handleOnChange)
  }

  handleOnChange = () => {
    const { onChange } = this.props
    const { startMonth, startYear, endMonth, endYear, noEndDate } = this.state

    const startDate = startMonth && startYear
      ? `${startYear.value}-${String(startMonth.value).padStart(2, '0')}-01`
      : undefined
    const endDate = endMonth && endYear
      ? `${endYear.value}-${String(endMonth.value).padStart(2, '0')}-01`
      : undefined

    if (startDate) {
      onChange && onChange({
        startDate,
        endDate: noEndDate ? undefined : endDate
      })
    }
  }

  toggleNoEndDate = () => {
    this.setState({
      noEndDate: !this.state.noEndDate
    }, this.validateValues)
  }

  getEndMonthsList = () => {
    const { startMonth, startYear, endYear } = this.state
    if (startMonth && startYear && startYear === endYear) {
      return MONTHS.filter(month => Number(month.value) >= Number(startMonth.value))
    }
    return MONTHS
  }

  getEndYearsList = () => {
    const { startYear } = this.state
    if (startYear) {
      return YEARS.filter(year => Number(year.value) >= Number(startYear.value))
    }
    return YEARS
  }

  render () {
    const { startMonth, startYear, endMonth, endYear, noEndDate } = this.state
    return (
      <div>
        <div className={cx.wrapper}>
          <div className={cx.startDate}>
            <div className={cx.month}>
              <CustomSelector
                placeholder={'Month'}
                options={MONTHS}
                value={startMonth}
                onChange={this.updateFieldValue('startMonth', MONTHS)}
              />
            </div>
            <div className={cx.year}>
              <CustomSelector
                placeholder={'Year'}
                options={YEARS}
                value={startYear}
                onChange={this.updateFieldValue('startYear', YEARS)}
              />
            </div>
          </div>
          <div className={cx.divider}>–</div>
          <div className={cx.endDate}>
            <div className={cx.month}>
              <CustomSelector
                placeholder={'Month'}
                options={this.getEndMonthsList()}
                value={endMonth}
                onChange={this.updateFieldValue('endMonth', this.getEndMonthsList())}
                disabled={noEndDate}
              />
            </div>
            <div className={cx.year}>
              <CustomSelector
                placeholder={'Year'}
                options={this.getEndYearsList()}
                value={endYear}
                onChange={this.updateFieldValue('endYear', this.getEndYearsList())}
                disabled={noEndDate}
              />
            </div>
          </div>
        </div>
        <div className={cx.noEndDate}>
          <InputField
            type='checkbox'
            label='Still working there'
            checked={noEndDate}
            onChange={this.toggleNoEndDate}
          />
        </div>
      </div>
    )
  }
}

export default Timeframe
