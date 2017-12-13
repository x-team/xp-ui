// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

import type { Element } from 'react'

type Props = {
  hasAttempted: boolean,
  maxAttempts: number
}

const Root = elem.div(cmz(`
  margin: 0 0 35px 0
  text-align: left
`))

const Heading = elem.h1(typo.headline)

const Subheading = elem.h2(cmz(
  typo.baseText,
  `
    margin: 0 0 35px 0
  `
))

export default class SolutionFormTitle extends PureComponent<Props> {
  static defaultProps = {
    hasAttempted: false,
    maxAttempts: 3
  }

  render () {
    const { hasAttempted, maxAttempts } = this.props

    return Root(
      Heading(
        hasAttempted
          ? 'Oops!'
          : 'Got it?'
      ),
      Subheading(
        hasAttempted
          ? `You haven’t submitted the right solution. Please try again.`
          : `Paste the solution below. You get ${maxAttempts} chances.`
      )
    )
  }
}
