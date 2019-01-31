// @flow
import React from 'react'
import ReactAvatar from 'react-avatar'

import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  avatarSizeConstraint: cmz(`
    max-width: 100%
    max-height: 100%
  `)
}

type Props = {
  alt?: string,
  src: string,
  size: number
}

const Avatar = (props: Props) => {
  const { alt, ...rest } = props

  return <ReactAvatar
    className={cx.avatarSizeConstraint}
    name={alt}
    color={`${theme.baseRed}`}
    maxInitials={3}
    round
    {...rest}
  />
}

Avatar.defaultProps = {
  size: 64,
  alt: ''
}

export default Avatar
