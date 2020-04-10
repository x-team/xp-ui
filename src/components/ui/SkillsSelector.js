// @flow

import React, { Component } from 'react'
import differenceBy from 'lodash.differenceby'

import '../../assets/react-select.css'

import Select from 'react-select'

import SvgIcon from './SvgIcon'

import typo, { typeface } from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  select: cmz(
    typo.baseText,
    `
      & {
        font-size: 18px
        text-rendering: optimizeLegibility
        -webkit-font-smoothing: antialiased
        color: ${theme.typoParagraph}
        border: 1px solid transparent
      }

      & .Select-control {
        display: flex
        border: 1px solid ${theme.lineSilver2}
        height: auto
        padding: 21px 16px
      }

      &:hover,
      &.is-focused .Select-control,
      &.is-focused:not(.is-open) > .Select-control {
        border: 1px solid ${theme.lineRed}
        box-shadow: 0 0 4px ${theme.lineRed}
      }

      & .Select-multi-value-wrapper {
        white-space: nowrap
        flex: 1
        overflow-x: auto
        overflow-y: hidden
        display: flex
        align-items: center
        height: 18px
      }

      & .Select-placeholder::after {
        content: '' !important
      }

      & .Select-placeholder {
        padding: 21px 16px
        line-height: 1
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      }

      & .Select-input {
        margin: 0 !important
        display: flex !important
        align-items: center
      }

      & .Select-input > input {
        border: none
        margin: 0
        font-weight: 300
      }

      & .Select-control > *:last-child {
        padding: 0
      }

      & .Select-menu-outer {
        top: calc(100% + 5px)
        max-height: 270px
        background: ${theme.baseBrighter}
        border: 1px solid rgba(0, 0, 0, 0.15)
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15)
        border-radius: 0
      }

      & .Select-menu {
        max-height: 270px
      }
    `
  ),

  option: cmz(`
    & {
      padding: 0 20px
      cursor: pointer
      font-size: 20px
    }

    &:hover {
      background: ${theme.baseBright}
    }

    &:last-of-type > div {
      border: none
    }
  `),

  selectedOption: cmz(`
    font-weight: 400
  `),

  optionLabel: cmz(`
    padding: 16px 0
    border-bottom: 1px solid ${theme.lineSilver2}
  `),

  tags: cmz(
    typeface.extra,
    `
      display: flex
      flex-wrap: wrap
      margin: 16px 0 0
      text-transform: uppercase
      font-size: 12px
      font-weight: 300
    `
  ),

  tag: cmz(`
    & {
      display: flex
      flex-wrap: nowrap
      align-items: center
      background: ${theme.baseBrighter}
      border: 2px solid ${theme.lineSilver2}
      border-radius: 4px
      padding: 15px 12px
      margin: 0 12px 12px 0
      white-space: nowrap
    }

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.02)
      margin: 1px 13px 13px 1px
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
    }
  `),

  removeTag: cmz(`
    margin: 0 0 0 8px
    cursor: pointer
  `)
}

type Option = {
  value: string | number,
  label: string
}

type Props = {
  options?: Array<Option>,
  values?: Array<Option>,
  onChange?: (values: Array<Option>) => void
}

type State = {
  values: Array<Option>
}

class SkillsSelector extends Component<Props, State> {
  static defaultProps = {
    options: [],
    values: []
  }

  state: State = {
    values: this.props.values || []
  }

  componentDidUpdate (prevProps: Props) {
    const { values } = this.props
    const { values: prevValues } = prevProps
    if (values !== prevValues) {
      this.setState(() => ({ values }))
    }
  }

  handleChange = (values: Array<Option>) => {
    const diff = differenceBy(values, this.state.values, 'value')
    if (diff.length > 0) {
      const newValues = [ ...this.state.values, ...diff ]
      this.setState(() => ({ values: newValues }), () => {
        const { onChange } = this.props
        onChange && onChange(newValues)
      })
    } else {
      this.handleRemove(values)
    }
  }

  handleRemove = (values: Array<Option>) => {
    const diff = differenceBy(this.state.values, values, 'value')
    this.setState(() => ({ values: diff }), () => {
      const { onChange } = this.props
      onChange && onChange(diff)
    })
  }

  optionComponent = (component: Object) => {
    const handleMouseDown = (event) => {
      event.preventDefault()
      event.stopPropagation()
      component.onSelect(component.option, event)
    }

    const handleMouseEnter = (event) => {
      component.onFocus(component.option, event)
    }

    const handleMouseMove = (event) => {
      if (component.isFocused) return
      component.onFocus(component.option, event)
    }

    return (
      <div
        className={cx.option}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
      >
        <div className={cx.optionLabel}>
          {component.children}
        </div>
      </div>
    )
  }

  renderTag = (skill: Option) => {
    return (
      <div key={skill.value} className={cx.tag}>
        {skill.label}
        <SvgIcon
          icon='x'
          color='grayscale'
          hover='default'
          className={cx.removeTag}
          onClick={() => this.handleRemove([skill])}
        />
      </div>
    )
  }

  render () {
    const { options } = this.props
    const { values } = this.state
    const placeholder = values.length > 0
      ? 'Add more...'
      : 'HTML, React, JavaScript, Postgres, SQL, ...'

    const availableOptions = differenceBy(options, values, 'value')

    return (
      <div>
        <Select
          name='skillsSelector'
          placeholder={placeholder}
          className={cx.select.toString()}
          options={availableOptions}
          multi
          removeSelected
          clearable={false}
          arrowRenderer={null}
          onChange={this.handleChange}
          optionComponent={this.optionComponent}
        />
        <div className={cx.tags}>
          {values.map(this.renderTag)}
        </div>
      </div>
    )
  }
}

export default SkillsSelector
