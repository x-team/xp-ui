// @flow
import React from 'react'
import cmz from 'cmz'

import SvgIcon from './SvgIcon'
import Avatar from './Avatar'

import theme from '../../styles/theme'

const cx = {
  avatar: cmz(`
    display: flex
  `),

  arrows: cmz(`
    & {
      display: flex
      flex-direction: column
      justify-content: center
      margin: 0 12px 0 0
    }

    & :first-child {
      margin-bottom: 2px
    }
  `),

  picture: cmz(`
    & {
      width: 32px
      height: 32px
    }

    & svg {
      filter: drop-shadow(4px 4px 0px ${theme.baseBrightSilver})
      width: 32px
      height: 32px
    }
  `),

  image: cmz(`
    display: block
    width: 32px
    height: 32px
    filter: drop-shadow(4px 4px 0px ${theme.baseBrightSilver})
    border-radius: 1px
    background-size: cover
  `)
}

type Props = {
  src?: string,
  name?: string
}

const ProfileAvatar = ({ src = '', name }: Props) => (
  <div className={cx.avatar}>
    <div className={cx.arrows}>
      <SvgIcon icon='triangleup' color='grayscale' />
      <SvgIcon icon='triangledown' color='grayscale' />
    </div>
    <div className={cx.picture}>
      {src ? (
        <div className={cx.image} style={{ backgroundImage: `url(${src})` }} />
      ) : (
        <Avatar alt={name} size={65} src={src} />
      )}
    </div>
  </div>
)

export default ProfileAvatar
