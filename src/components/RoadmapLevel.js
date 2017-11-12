// @flow

import React, { PureComponent } from 'react'
import elem from '../utils/elem'
import theme from '../styles/theme'

import type { Element } from 'react'

import SvgIcon from './SvgIcon'
import Text from './Text'

const cmz = require('cmz')

type Props = {
  icon?: string,
  heading?: Element<*>|string,
  level?: number,
  body?: Element<*>|string,
  isActive?: Boolean,
  isCentered?: Boolean,
  cta?: {
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

// To Do: rewrite the button bellow to use Button component when ready to use it
const Button = elem.button(cmz(`
  margin-top: 1rem;
`))

class RoadmapLevel extends PureComponent<Props> {
  static defaultProps = {
    icon: '',
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

    const ButtonCTA = (cta && cta.label !== '') && Button({ onClick: cta.handle }, cta.label)

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
      ButtonCTA
    )
  }
}

export default RoadmapLevel
