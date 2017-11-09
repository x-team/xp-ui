// @flow

import React, { PureComponent } from 'react'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  heading?: Element<*>|string,
  subHeading?: Element<*>|string,
  level?: Element<*>|string,
  content: Element<*>|string,
  hasCenter?: Boolean,
  hasDivider?: Boolean
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
      margin: 0 0 20px 0;
    }
  }
`))

const Heading = elem.div(cmz([
  typo.family.heading
]))

const SubHeading = elem.h2(cmz(`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
`))

const Level = elem.h2(cmz(`
  color: ${theme.red};
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 22px;
  font-weight: 500;
`))

const Content = elem.div(cmz([
  typo.family.base,
  `
  & {
    margin-top: 35px;
  }
  &, & * {
    font-size: 24px;
    line-height: 1.3em;
  }
`]))

const dividerLeft = cmz([typo.family.divider, `
  &:after {
    left: 3%;
  }
`])

const dividerCenter = cmz([typo.family.divider, `
  &:after {
    left: 50%;
  }
`])

const centerAlign = cmz(`
  & {
    text-align: center;
  }
`)

const contentDividerLeft = cmz([typo.family.divider, `
  &:after {
    left: 3%;
    top: -30px;
  }
`])

const contentDividerCenter = cmz([typo.family.divider, `
  &:after {
    left: 50%;
    top: -30px;
  }
`])

class Copy extends PureComponent<Props> {

  render () {
    const {
      heading,
      subHeading,
      level,
      content,
      hasCenter,
      hasDivider
    } = this.props

    return Root(hasCenter ? {className: centerAlign} : {},

      heading && Heading({ className: hasCenter ? dividerCenter : dividerLeft }, heading),

      subHeading && SubHeading(subHeading),

      level && Level(level),

      Content(hasDivider ? { className: (hasCenter ? contentDividerCenter : contentDividerLeft) } : {}, content)
    )
  }
}

export default Copy
