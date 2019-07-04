// @flow
import React from 'react'
import ReactAvatar from 'react-avatar'
import VisibilitySensor from 'react-visibility-sensor'

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
};

const Avatar = (props: Props) => {
  const { alt, src, size } = props
  let imgSrc = null
  let visibleCounter = 0

  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        if (isVisible && visibleCounter === 0) {
          imgSrc = src
          visibleCounter++
        }

        return (
          <ReactAvatar
            className={cx.avatarSizeConstraint}
            name={alt}
            color={theme.baseRed.toString()}
            maxInitials={3}
            alt={alt}
            src={imgSrc}
            size={size}
            round
          />
        )
      }}
    </VisibilitySensor>
  )
}

Avatar.defaultProps = {
  size: 64,
  alt: ''
}

export default Avatar
