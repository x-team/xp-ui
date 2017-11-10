// @flow

import React, { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import elem from '../utils/elem'
import theme from '../styles/theme'
import * as typo from '../styles/typo'

import type { Element } from 'react'

import { SvgIcon, Text } from '../.'

const cmz = require('cmz')

type Props = {
  icon: string,
  heading: Element<*>|string,
  level: number,
  body: Element<*>|string,
  isActive: boolean,
}

const Root = elem.section(cmz(``))

class RoadmapLevel extends PureComponent<Props> {
  static defaultProps = {
    icon: '',
    heading: '',
    level: 1,
    body: '',
    isActive: false,
  }

  render () {
    const { icon, heading, level, body } = this.props

    return Root(
      <SvgIcon
        icon={icon}
      />,
      <Text
        subHeading={heading}
        level={`Level ${level}`}
        content={body}
      />
    )
  }
}

export default compose(
  onlyUpdateForKeys(['isActive'])
)(RoadmapLevel)
