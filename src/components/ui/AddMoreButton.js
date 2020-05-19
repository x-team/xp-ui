// @flow

import React from 'react'
import cmz from 'cmz'

import SvgIcon from './SvgIcon'

import typo from '../../styles/typo'

const cx = {
  wrapper: cmz(`
    display: flex
    align-content: center
    cursor: pointer
  `),

  label: cmz(
    typo.baseText,
    `
      font-weight: 300
      font-size: 18px
      text-decoration: underline
      margin: 0 0 0 12px
    `
  )
}

type Props = {
  label?: string,
  onClick?: () => void
}

const AddMoreButton = ({ label, onClick }: Props) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <div className={cx.wrapper} onClick={handleClick}>
      <SvgIcon icon='circleplus' color='text' />
      {label && (
        <div className={cx.label}>
          {label}
        </div>
      )}
    </div>
  )
}

export default AddMoreButton
