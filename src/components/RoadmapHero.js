// @flow

import React, { PureComponent } from 'react'
import { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'
import Text from './Text'

import type { Element } from 'react'
const cmz = require('cmz')

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string,
}

const Root = elem.div(cmz(`
  & {
    white-space: pre-line;
    margin: 0 0 35px 0;
    clear: both;
    overflow: hidden;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      margin: 0 0 35px 0;
    }
  }
`))

const LeftBlock = elem.div(cmz(
  typo.family.leftBlock,
  `
  & {
    float: left;
    width: 60%;
  }
  `
))

const HeroImage = elem.img(cmz(`
  & {
    float: right;
  }
`), {
  src: require('../assets/x-roadmap.png'),
  alt: 'X-Team Roadmap'
})

class RoadmapHero extends PureComponent<Props> {
  render () {
    const {
      heading,
      content
    } = this.props

    return Root(
      LeftBlock(<Text {... { heading, content }} />),
      HeroImage()
    )
  }
}

export default RoadmapHero
