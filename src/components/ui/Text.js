// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

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
  isPureContent: ?boolean,
  headingType?: Type,
  subHeadingType?: Type,
  required?: boolean
}

const Root = elem.section(cmz(`
  white-space: pre-line
  margin: 0
  clear: both
`))

const Heading = elem.h1()

const SubHeading = elem.h2()

const Level = elem.p()

const Divider = elem.span(cmz(`
  & {
    display: block
    position: relative
    width: 3.5rem
    height: 2px
    margin: 40px 0 35px
    background-color: ${theme.lineRed}
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      width: 2rem
    }
  }
`))

const Content = elem.div(cmz(
  typo.baseText,
  'margin: 15px 0'
))

const PureContent = elem.span(cmz(typo.baseText))

const centerAlign = cmz(`text-align: center`)

const contentDividerCenter = cmz(`
  margin-left: auto
  margin-right: auto
`)

const contentRequired = cmz(`
  &::after {
    content: '*'
    margin-left: 5px
    font-weight: bold
    color: ${theme.baseRed}
  }
`)

class Text extends PureComponent<Props> {
  static defaultProps = {
    isCentered: false,
    hasDivider: false,
    isPureContent: false,
    required: false
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
      hasDivider,
      isPureContent,
      required
    } = this.props
    const requiredProps = required ? { className: contentRequired } : {}

    if (isPureContent) {
      return PureContent(requiredProps, content)
    }

    return Root(isCentered ? { className: centerAlign } : {},
      heading && Heading({ className: typo[headingType] }, heading),
      subHeading && SubHeading({ className: typo[subHeadingType] }, subHeading),
      level && Level({ className: typo.subheading }, level),
      hasDivider && Divider(isCentered ? { className: contentDividerCenter } : {}),
      Content(requiredProps, content)
    )
  }
}

export default Text
