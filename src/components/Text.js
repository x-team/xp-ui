// @flow

import { PureComponent } from 'react'

import elem from '../utils/elem'

import typo from '../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Type = 'mainHeading' | 'headline' | 'heading' | 'subheading'

type Props = {
  heading?: Element<*>|string,
  subHeading?: Element<*>|string,
  level?: Element<*>|string,
  content?: Element<*>|string,
  isCentered: ?boolean,
  hasDivider: ?boolean,
  headingType?: Type,
  subHeadingType?: Type
}

const Root = elem.section(cmz(`
  white-space: pre-line
  margin: 0
  clear: both
  overflow: hidden
`))

const Heading = elem.h1(cmz(`
  padding-bottom: 20px
`))

const SubHeading = elem.h2()

const Level = elem.p()

const Content = elem.div(cmz(
  typo.baseText,
  `
    margin: 30px 0
  `
))

const centerAlign = cmz(`
  & {
    text-align: center;
  }
`)

const contentDividerLeft = cmz(typo.divider, `
  &:after {
    left: 3%;
    top: -30px;
  }
`)

const contentDividerCenter = cmz(typo.divider, `
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
      headingType = 'headline',
      subHeadingType = 'heading',
      level,
      content,
      isCentered,
      hasDivider
    } = this.props

    return Root(isCentered ? {className: centerAlign} : {},

      heading && Heading({ className: typo[`${headingType}`] }, heading),

      subHeading && SubHeading({ className: typo[subHeadingType] }, subHeading),

      level && Level({ className: typo.subheading }, level),

      Content(hasDivider ? { className: (isCentered ? contentDividerCenter : contentDividerLeft) } : {}, content)
    )
  }
}

export default Text
