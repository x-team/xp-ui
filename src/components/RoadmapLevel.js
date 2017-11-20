// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'
import Text from './Text'
import Button from './Button'

import elem from '../utils/elem'
import theme from '../styles/theme'

import type { Element } from 'react'
import type { Icon } from './SvgIcon'

const cmz = require('cmz')

type Props = {
  icon: ?Icon,
  heading?: Element<*>|string,
  level?: number,
  body?: Element<*>|string,
  isActive?: Boolean,
  isCentered?: Boolean,
  cta: {
    label?: Element<*>|string,
    handle?: Function,
  }
}

const Root = elem.section(cmz(`
  & {
    border: 1px solid ${theme.lightBorder};
    padding: 2rem;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`))

const active = cmz(`border: 1px solid ${theme.defaultBorder}`)
const centered = cmz(`
  text-align: center;
  border: none;
`)
const ctaButtonStyles = cmz(`margin-top: 3rem`)

class RoadmapLevel extends PureComponent<Props> {
  static defaultProps = {
    heading: '',
    level: 0,
    body: '',
    isActive: false,
    isCentered: false,
    cta: {
      label: '',
      handle: () => {}
    }
  }

  render () {
    const { icon, heading, level, body, isActive, isCentered, cta } = this.props

    if (!icon && !heading && !level && !body) {
      return null
    }

    const buttonCTA = cta.label && <Button className={ctaButtonStyles} size='block' onClick={cta.handle}>{cta.label}</Button>
    const levelLabel = level ? `Level ${level}` : ''

    return Root(
      {
        className: [
          isActive && active,
          isCentered && centered
        ]
      },
      <SvgIcon
        icon={icon}
      />,
      <Text
        subHeading={heading}
        level={levelLabel}
        content={body}
        isCentered={isCentered}
      />,
      buttonCTA
    )
  }
}

export default RoadmapLevel
