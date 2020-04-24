// @flow

import React, { PureComponent } from 'react'

import CustomSelector from './CustomSelector'
import InputField from '../forms/InputField'

import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  component: cmz(`

  `),

  wrapper: cmz(`
    & {
      display: flex
      align-items: center
      width: 100%
    }

    & > div {
      margin: 0 8px 0 0
    }

    & > div:last-of-type {
      margin: 0
    }
  `),

  month: cmz(`
    width: 30%
  `),

  year: cmz(`
    width: 20%
  `),

  divider: cmz(
    typo.baseText,
    `
      font-size: 18px
      opacity: 0.5
    `
  ),

  noEndDate: cmz(`
    & {
      text-align: right
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

  getOptionValue = (set: Array<Option> = [], value: ?string | ?number) => set.find(option => option.value === value)

  updateDateValues = () => {
    const { startDate = '', endDate = '', noEndDate = false } = this.props

    const startMonth = Number(startDate.slice(5, 7))
    const startYear = Number(startDate.slice(0, 4))
    let endMonth = Number(endDate.slice(5, 7))
    let endYear = Number(endDate.slice(0, 4))

    if (startMonth && startYear && startYear === endYear) {
      endMonth = undefined
    }

    if (startYear > endYear) {
      endYear = undefined
    }

    this.setState({
      startMonth: isNaN(startMonth) ? undefined : this.getOptionValue(MONTHS, startMonth),
      startYear: isNaN(startYear) ? undefined : this.getOptionValue(YEARS, startYear),
      endMonth: isNaN(endMonth) ? undefined : this.getOptionValue(MONTHS, endMonth),
      endYear: isNaN(endYear) ? undefined : this.getOptionValue(YEARS, endYear),
      noEndDate
    })
  }

  updateFieldValue = (field: string) => ({ value }: { value: string }) => {
    const optionsSet = ['startMonth', 'endMonth'].includes(field) ? MONTHS : YEARS
    this.setState({
      [field]: this.getOptionValue(optionsSet, value)
    }, this.returnUpdatedValue)
  }

  returnUpdatedValue = () => {
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
    }, this.returnUpdatedValue)
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
      <div className={cx.component}>
        <div className={cx.wrapper}>
          <div className={cx.month}>
            <CustomSelector
              placeholder={'Month'}
              options={MONTHS}
              value={startMonth}
              onChange={this.updateFieldValue('startMonth')}
            />
          </div>
          <div className={cx.year}>
            <CustomSelector
              placeholder={'Year'}
              options={YEARS}
              value={startYear}
              onChange={this.updateFieldValue('startYear')}
            />
          </div>
          <div className={cx.divider}>–</div>
          <div className={cx.month}>
            <CustomSelector
              placeholder={'Month'}
              options={this.getEndMonthsList()}
              value={endMonth}
              onChange={this.updateFieldValue('endMonth')}
              disabled={noEndDate}
            />
          </div>
          <div className={cx.year}>
            <CustomSelector
              placeholder={'Year'}
              options={this.getEndYearsList()}
              value={endYear}
              onChange={this.updateFieldValue('endYear')}
              disabled={noEndDate}
            />
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
