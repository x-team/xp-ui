// @flow

import React, { Component } from 'react'
import differenceBy from 'lodash.differenceby'
import Select from 'react-select'

import SvgIcon from './SvgIcon'
import SkillsSelectorOption from './SkillsSelectorOption'

import '../../assets/react-select.css'

import theme from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

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
        padding: 0
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

      & .Select-option {
        padding: 0
      }
    `
  ),

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
  applicantSkills?: Array<Option>,
  onChange?: (selectedSkills: Array<Option>) => void
}

type State = {
  selectedSkills: Array<Option>
}

class SkillsSelector extends Component<Props, State> {
  state: State = {
    selectedSkills: this.props.applicantSkills || []
  }

  handleSkillSelection = (selectedSkill: Option) => {
    const updatedSelectedSkills = [ ...this.state.selectedSkills, selectedSkill ]
    this.setState(() => ({ selectedSkills: updatedSelectedSkills }), () => {
      const { onChange } = this.props
      onChange && onChange(updatedSelectedSkills)
    })
  }

  handleSkillRemove = (removedSkill: Option) => {
    const selectedSkills = this.state.selectedSkills.filter(skill => skill.value !== removedSkill.value)
    this.setState(() => ({ selectedSkills }), () => {
      const { onChange } = this.props
      onChange && onChange(selectedSkills)
    })
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
          onClick={() => this.handleSkillRemove(skill)}
        />
      </div>
    )
  }

  render () {
    const { options = [] } = this.props
    const { selectedSkills = [] } = this.state
    const placeholder = selectedSkills.length > 0
      ? 'Add more...'
      : 'HTML, React, JavaScript, Postgres, SQL, ...'
    const availableOptions = differenceBy(options, selectedSkills, 'value')
    return (
      <div>
        <Select
          name='skillsSelector'
          placeholder={placeholder}
          className={cx.select.toString()}
          options={availableOptions}
          removeSelected
          clearable={false}
          arrowRenderer={null}
          onChange={this.handleSkillSelection}
          optionRenderer={SkillsSelectorOption}
        />
        <div className={cx.tags}>
          {selectedSkills.map(this.renderTag)}
        </div>
      </div>
    )
  }
}

export default SkillsSelector
