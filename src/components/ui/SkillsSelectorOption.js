// @flow

import React from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  option: cmz(
    typo.baseText,
    `
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
    `
  ),

  optionLabel: cmz(`
    padding: 16px 0
    border-bottom: 1px solid ${theme.lineSilver2}
  `)
}

type Props = {
  label?: string
}

const SkillsSelectorOption = ({ label }: Props) => label ? (
  <div className={cx.option}>
    <div className={cx.optionLabel}>
      {label}
    </div>
  </div>
) : null

export default SkillsSelectorOption
