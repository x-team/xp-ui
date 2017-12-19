// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'

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
  subHeadingType?: Type
}

const Root = elem.section(cmz(`
  white-space: pre-line
  margin: 0
  clear: both
  overflow: hidden
`))

const Heading = elem.h1()

const SubHeading = elem.h2()

const Level = elem.p()

const Divider = elem.span(cmz(typo.divider))

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

class Text extends PureComponent<Props> {
  static defaultProps = {
    isCentered: false,
    hasDivider: false,
    isPureContent: false
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
      isPureContent
    } = this.props

    if (isPureContent) {
      return PureContent(content)
    }

    return Root(isCentered ? {className: centerAlign} : {},
      heading && Heading({ className: typo[headingType] }, heading),
      subHeading && SubHeading({ className: typo[subHeadingType] }, subHeading),
      level && Level({ className: typo.subheading }, level),
      hasDivider && Divider({ className: (isCentered ? contentDividerCenter : '') }),
      Content(content)
    )
  }
}

export default Text
