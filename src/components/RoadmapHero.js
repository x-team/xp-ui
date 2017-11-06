// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string
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

const LeftBlock = elem.div(cmz([
  typo.family.leftBlock,
  `
  & {
    float: left;
    width: 60%;
  }
  `
]))

const Heading = elem.div(cmz([
  typo.family.heading,
  `
  & {
    text-align: left;
  }
`]))

const Content = elem.div(cmz([
  typo.family.base,
  `
  & {
    margin-top: 35px;
    text-align: left;
  }
  &, & * {
    font-size: 24px;
    line-height: 1.3em;
  }
`]))

const divider = cmz(`
  & {
    margin-bottom: 60px;
    position: relative;
  }
  &:after {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 4px;
    bottom: -30px;
    left: 6%;
    transform: translateX(-50%);
    background-color: ${theme.red};
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      margin-bottom: 60px;
      text-align: left;
    }
  }
`)


const HeroImage = elem.img(cmz(`
  float: right;
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

      LeftBlock(
        Heading({ className: divider }, heading),
        Content(content)
      ),

      HeroImage()
    )
  }
}

export default RoadmapHero
