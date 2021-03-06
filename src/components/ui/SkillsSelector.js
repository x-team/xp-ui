// @flow

import React, { Component } from 'react'
import differenceBy from 'lodash.differenceby'

import SvgIcon from './SvgIcon'
import CustomSelector from './CustomSelector'

import type { SkillOption } from '../../utils/types'
import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
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

type Props = {
  options: Array<SkillOption>,
  applicantSkills: Array<SkillOption>,
  disabled?: boolean,
  isInvalid?: boolean,
  onChange?: (selectedSkills: Array<SkillOption>) => void
}

type State = {
  selectedSkills: Array<SkillOption>
}

class SkillsSelector extends Component<Props, State> {
  state: State = {
    selectedSkills: this.props.applicantSkills || []
  }

  handleSkillSelection = (selectedSkill: SkillOption) => {
    const updatedSelectedSkills = [ ...this.state.selectedSkills, selectedSkill ]
    this.setState(() => ({ selectedSkills: updatedSelectedSkills }), () => {
      const { onChange } = this.props
      onChange && onChange(updatedSelectedSkills)
    })
  }

  handleSkillRemove = (removedSkill: SkillOption) => {
    const selectedSkills = this.state.selectedSkills.filter(skill => skill.value !== removedSkill.value)
    this.setState(() => ({ selectedSkills }), () => {
      const { onChange } = this.props
      onChange && onChange(selectedSkills)
    })
  }

  renderTag = (skill: SkillOption) => {
    const { disabled = false } = this.props
    return (
      <div key={skill.value} className={cx.tag}>
        {skill.label}
        {!disabled && (
          <SvgIcon
            icon='x'
            color='grayscale'
            hover='default'
            className={cx.removeTag}
            onClick={() => this.handleSkillRemove(skill)}
          />
        )}
      </div>
    )
  }

  render () {
    const { options = [], disabled = false, isInvalid = false } = this.props
    const { selectedSkills = [] } = this.state
    const placeholder = selectedSkills.length > 0
      ? 'Select more skills...'
      : 'HTML, React, JavaScript, Postgres, SQL, ...'
    const availableOptions = differenceBy(options, selectedSkills, 'value')
    return (
      <div>
        <CustomSelector
          name='skillsSelector'
          placeholder={placeholder}
          options={availableOptions}
          removeSelected
          clearable={false}
          arrowRenderer={null}
          onChange={this.handleSkillSelection}
          disabled={disabled}
          isInvalid={isInvalid}
          searchable
        />
        {selectedSkills.length > 0 && (
          <div className={cx.tags}>
            {selectedSkills.map(this.renderTag)}
          </div>
        )}
      </div>
    )
  }
}

export default SkillsSelector
