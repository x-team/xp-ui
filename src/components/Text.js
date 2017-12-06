// @flow

import { PureComponent } from 'react'
import theme from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  heading?: Element<*>|string,
  subHeading?: Element<*>|string,
  level?: Element<*>|string,
  content?: Element<*>|string,
  isCentered: ?boolean,
  hasDivider: ?boolean
}

const Root = elem.section(cmz(`
  & {
    white-space: pre-line;
    margin: 0;
    clear: both;
    overflow: hidden;
  }
`))

const Heading = elem.h1(cmz(
  typo.family.heading,
  `
  & {
    padding-bottom: 20px;
  }
  `
))

const SubHeading = elem.h2(cmz(`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
`))

const Level = elem.p(cmz(`
  color: ${theme.typoSubheading};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: 500;
`))

const Content = elem.div(cmz(
  typo.family.base,
  `
  & {
    margin: 35px 0;
  }
  &, & * {
    font-size: 24px;
    line-height: 1.3em;
  }
`))

const centerAlign = cmz(`
  & {
    text-align: center;
  }
`)

const contentDividerLeft = cmz(typo.family.divider, `
  &:after {
    left: 3%;
    top: -30px;
  }
`)

const contentDividerCenter = cmz(typo.family.divider, `
  &:after {
    left: 50%;
    top: -30px;
  }
`)

class Text extends PureComponent<Props> {
  static defaultProps = {
    isCentered: false,
    hasDivider: false
  }

  render () {
    const {
      heading,
      subHeading,
      level,
      content,
      isCentered,
      hasDivider
    } = this.props

    return Root(isCentered ? {className: centerAlign} : {},

      heading && Heading(heading),

      subHeading && SubHeading(subHeading),

      level && Level(level),

      Content(hasDivider ? { className: (isCentered ? contentDividerCenter : contentDividerLeft) } : {}, content)
    )
  }
}

export default Text
