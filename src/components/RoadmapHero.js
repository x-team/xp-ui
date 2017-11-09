// @flow

import React, { PureComponent } from 'react'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'
import Copy from './Copy'
import Graphic from './Graphic'

import type { Element } from 'react'
const cmz = require('cmz')

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string,
 imgUrl: Element<*>|string,
 altText: string
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

const RightBlock = elem.div(cmz(
  `
  & {
    float: right;
  }
  `
))

class RoadmapHero extends PureComponent<Props> {

  render () {
    const {
      heading,
      content,
      imgUrl,
      altText
    } = this.props

    return Root(
      LeftBlock(<Copy {... { heading, content }} />),
      RightBlock(<Graphic {... { imgUrl, altText }} />)
    )
  }
}

export default RoadmapHero
