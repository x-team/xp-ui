// @flow

import { PureComponent } from 'react'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import elem from '../../utils/elem'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

type Type = 'mainHeading' | 'headline' | 'heading' | 'subheading'

type ContentType = Element<*>|string

type Props = {
  heading?: Element<*>|string,
  headingClass?: string,
  subHeading?: Element<*>|string,
  level?: Element<*>|string,
  content?: ContentType,
  contentClass?: string,
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
  `
    margin: 15px 0
    box-sizing: content-box
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
    required: false,
    headingType: 'headline',
    subHeadingType: 'heading',
    contentClass: ''
  }

  htmlContent = (): ?ContentType => {
    const { content, headingType, subHeadingType } = this.props
    try {
      return markdownCompiler(content, {
        overrides: {
          h1: {
            props: {
              className: typo[headingType]
            }
          },
          h2: {
            props: {
              className: typo[subHeadingType]
            }
          },
          a: {
            props: {
              className: typo.link
            }
          }
        }
      })
    } catch (err) {
      return content
    }
  }

  render () {
    const {
      heading,
      subHeading,
      headingType,
      headingClass,
      subHeadingType,
      level,
      content,
      contentClass,
      isMarkdown,
      isCentered,
      hasDivider,
      isPureContent,
      required
    } = this.props
    const contentClassNames = [
      required ? contentRequired : '',
      contentClass
    ].join(' ')
    const contentRender = isMarkdown ? this.htmlContent() : content

    if (isPureContent) {
      return PureContent({ className: contentClassNames }, contentRender)
    }

    return Root(isCentered ? { className: centerAlign } : {},
      heading && Heading({ className: headingClass || typo[headingType] }, heading),
      subHeading && SubHeading({ className: typo[subHeadingType] }, subHeading),
      level && Level({ className: typo.subheading }, level),
      hasDivider && Divider(isCentered ? { className: contentDividerCenter } : {}),
      Content({ className: contentClassNames }, contentRender)
    )
  }
}

export default Text
