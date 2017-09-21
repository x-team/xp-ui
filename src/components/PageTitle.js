// @flow

import { PureComponent } from 'react'
import cmz from 'cmz'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
 heading: Element<*>|string,
 description?: Element<*>|string,
 subheading?: Element<*>|string,
 hasDivider: boolean,
 headingClassName: string
}

const Root = elem.div(cmz(`
  & {
    white-space: pre-line;
    margin: 0 0 35px 0;
    text-align: center;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      margin: 0 0 35px 0;
    }
  }
`))

const Heading = elem.h1(cmz([
  typo.family.heading, `
  font-size: 54px
  margin: 0
  text-transform: uppercase
  color: #272334
  letter-spacing: -3px
  line-height: .95em
`]))

const Subheading = elem.h2(cmz(`
  margin: 0 0 35px 0;
  font-weight: 700;
`))

const Description = elem.div(cmz([
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
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.red[0]};
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      margin-bottom: 60px;
    }
  }
`)

class PageTitle extends PureComponent<Props> {
  static defaultProps = {
    hasDivider: false,
    headingClassName: ''
  }

  render () {
    const {
      heading,
      subheading,
      description,
      hasDivider,
      headingClassName
    } = this.props

    return Root(
      { className: hasDivider && divider },

      Heading(
        { className: headingClassName },
        heading
      ),

      subheading && Subheading(subheading),

      description && Description(description)
    )
  }
}

export default PageTitle
