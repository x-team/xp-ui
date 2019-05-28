// @flow

import { PureComponent } from 'react'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Type = 'mainHeading' | 'headline' | 'heading' | 'subheading'

type ContentType = Element<*>|string

type Props = {
  heading?: Element<*>|string,
  subHeading?: Element<*>|string,
  level?: Element<*>|string,
  content?: ContentType,
  isMarkdown: ?boolean,
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

const Divider = elem.span(cmz(typo.divider))

const Content = elem.div(cmz(
  typo.baseText,
  `
    & {
      margin: 15px 0

      box-sizing: content-box
      text-rendering: optimizeLegibility
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale

      font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
      font-weight: 300
      font-size: 20px
      color: rgb(52, 50, 59)
      line-height: 30px
    }

    & h1,
    & h2 {
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
      font-weight: 800
      text-transform: uppercase
      color: rgb(52, 50, 59)
    }

    & h1 {
      font-size: 36px
      margin: 0 0 16px
      letter-spacing: -1px
      line-height: 49px
    }

    & h2 {
      font-size: 22px
      margin: 0 0 .5rem
      padding: 37px 0 0 0
      letter-spacing: -.61px
      line-height: 30px
    }

    & a {
      color: ${theme.typoAnchor}
      text-decoration: none
    }

    & a:hover {
      color: ${theme.typoAnchorHover}
    }
  `
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
    isMarkdown: false,
    isCentered: false,
    hasDivider: false,
    isPureContent: false,
    required: false
  }

  htmlContent = (content?: ContentType) => {
    try {
      return markdownCompiler(content)
    } catch (err) {
      return content
    }
  }

  render () {
    const {
      heading,
      subHeading,
      headingType = 'headline',
      subHeadingType = 'heading',
      level,
      content,
      isMarkdown,
      isCentered,
      hasDivider,
      isPureContent,
      required
    } = this.props
    const requiredProps = required ? { className: contentRequired } : {}
    const contentRender = isMarkdown ? this.htmlContent(content) : content

    if (isPureContent) {
      return PureContent(requiredProps, contentRender)
    }

    return Root(isCentered ? { className: centerAlign } : {},
      heading && Heading({ className: typo[headingType] }, heading),
      subHeading && SubHeading({ className: typo[subHeadingType] }, subHeading),
      level && Level({ className: typo.subheading }, level),
      hasDivider && Divider(isCentered ? { className: contentDividerCenter } : {}),
      Content(requiredProps, contentRender)
    )
  }
}

export default Text
