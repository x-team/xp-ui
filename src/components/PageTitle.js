// @flow

import React, { PureComponent } from 'react'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'
import Text from './Text'

import type { Element } from 'react'
const cmz = require('cmz')

type Props = {
 heading: Element<*>|string,
 subHeading?: Element<*>|string,
 content?: Element<*>|string,
 hasDivider: boolean
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

class PageTitle extends PureComponent<Props> {
  static defaultProps = {
    hasDivider: false,
  }

  render () {
    const {
      heading,
      subHeading,
      content,
      hasDivider
    } = this.props

    return Root(
      <Text {... { heading, subHeading, content, hasDivider }} />
    )
  }

}

export default PageTitle
