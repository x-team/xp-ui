// @flow

import React, { PureComponent } from 'react'

import elem from '../../utils/elem'
import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  path: string
}

const Root = elem.div(cmz(`
  display: flex
`))

const LinkWrapper = elem.div(cmz(
  typo.baseText,
  ` & a {
      color: ${theme.baseRed}
      text-decoration: none
    }

    & a:hover {
      text-decoration: underline
    }
  `
))

class FileLink extends PureComponent<Props> {
  render () {
    const { path } = this.props

    return (
      Root(
        LinkWrapper(
          <a href={path} target='_blank'>
            View Attachment
          </a>
        )
      )
    )
  }
}

export default FileLink
