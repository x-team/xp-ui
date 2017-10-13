// @flow

import { PureComponent } from 'react'
import cmz from 'cmz'
import theme, { breakpoints } from '../../styles/theme'
import * as typo from '../../styles/typo'
import elem from '../../utils/elem'

import type { Element } from 'react'

type Props = {
  hasAttempted: boolean,
  maxAttempts: number
}

const Root = elem.div(cmz(`
  margin: 0px 0px 35px 0px
  text-align: center
`))

const Heading = elem.h1(typo.family.heading)

const Subheading = elem.h2(cmz(`
  margin: 0 0 35px 0
  font-size: 24px
`))

export default class SolutionFormTitle extends PureComponent<Props> {
  static defaultProps = {
    hasAttempted: false,
    maxAttempts: 3
  }

  render () {
    const {
      hasAttempted,
      maxAttempts
    } = this.props

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
