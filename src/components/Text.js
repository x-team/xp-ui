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
  isCentered?: Boolean,
  hasDivider?: Boolean
}

const Root = elem.section(cmz(`
  & {
    white-space: pre-line;
    margin: 0;
    clear: both;
    overflow: hidden;
  }
`))

const Heading = elem.h1(cmz(typo.family.heading))

const SubHeading = elem.h2(cmz(`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
`))

const Level = elem.p(cmz(`
  color: ${theme.red};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: 500;
`))

const Content = elem.div(cmz(
  typo.family.base,
  `
  & {
    margin-top: 35px;
  }
  &, & * {
    font-size: 24px;
    line-height: 1.3em;
  }
`))

const dividerLeft = cmz(typo.family.divider, `
  &:after {
    left: 3%;
  }
`)

const dividerCenter = cmz(typo.family.divider, `
  &:after {
    left: 50%;
  }
`)

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

      heading && Heading({ className: isCentered ? dividerCenter : dividerLeft }, heading),

      subHeading && SubHeading(subHeading),

      level && Level(level),

      Content(hasDivider ? { className: (isCentered ? contentDividerCenter : contentDividerLeft) } : {}, content)
    )
  }
}

export default Text
