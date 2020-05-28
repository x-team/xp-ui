// @flow

import React from 'react'
import cmz from 'cmz'

import SvgIcon from '../ui/SvgIcon'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cx = {
  message: cmz(
    typo.baseText,
    `
      color: ${theme.formErrorText}
      background: ${theme.formErrorBackground.alpha(0.06)}
      padding: 12px
      line-height: 18px
      display: flex
    `
  ),

  icon: cmz(`
    width: 18px
    height: 18px
    flex-shrink: 0
    margin-right: 10px
  `),

  text: cmz(`
    font-size: 13px
    line-height: 1.4
  `)
}

type Props = {
  message?: string
}

const InputError = ({ message }: Props) => message ? (
  <div className={cx.message}>
    <span className={cx.icon}>
      <SvgIcon icon='exclamation' />
    </span>
    <span className={cx.text}>
      {message}
    </span>
  </div>
) : null

export default InputError
