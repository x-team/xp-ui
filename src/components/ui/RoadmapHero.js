// @flow

import React, { PureComponent } from 'react'

import Text from './Text'

import { breakpoints } from '../../styles/theme'
import elem from '../../utils/elem'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string,
 imgUrl?: Element<*>|string,
 hasDivider?: boolean
}

type State = {
  isCentered: boolean
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

class RoadmapHero extends PureComponent<Props, State> {
  static defaultProps = {
    imgUrl: require('../../assets/x-roadmap.png'),
    hasDivider: true
  }

  state: State = {
    isCentered: false
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateAlignment)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateAlignment)
  }

  updateAlignment = () => {
    const mq = window.matchMedia(`(max-width: ${breakpoints.xs})`)
    this.setState({ isCentered: !!mq.matches })
  }

  render () {
    const { isCentered } = this.state
    const { heading, content, imgUrl, hasDivider } = this.props

    return Root(
      HeroHeading(<Text {... { heading, content, hasDivider, headingType: 'mainHeading', isCentered }} />),
      HeroImage({
        src: imgUrl,
        alt: 'X-Team Roadmap'
      })
    )
  }
}

export default RoadmapHero
