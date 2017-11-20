// @flow

import React, { PureComponent } from 'react'
import type { Element } from 'react'

import { breakpoints } from '../styles/theme'
import elem from '../utils/elem'

import Text from './Text'

const cmz = require('cmz')

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string,
}

const Root = elem.div(cmz(`
  & {
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    align-items: center
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      margin: 0 0 35px 0
    }
  }
`))

const HeroHeading = elem.div(cmz('width: 60%'))
const HeroImage = elem.img()

class RoadmapHero extends PureComponent<Props> {
  render () {
    const { heading, content } = this.props

    return Root(
      HeroHeading(<Text {... { heading, content }} />),
      HeroImage({
        src: require('../assets/x-roadmap.png'),
        alt: 'X-Team Roadmap'
      })
    )
  }
}

export default RoadmapHero
