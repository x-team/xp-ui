// @flow

import { PureComponent } from 'react'

import elem from '../../../utils/elem'

import theme, { breakpoints } from '../../../styles/theme'
import typo from '../../../styles/typo'
import Text from '../../ui/Text'

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

class SolutionFormTitle extends PureComponent<Props> {
  static defaultProps = {
    hasAttempted: false,
    maxAttempts: 3
  }

  render () {
    const { hasAttempted, maxAttempts } = this.props

    return Root(
      <Text
        heading={hasAttempted ? 'Oops!' : 'Got it?'}
        content={hasAttempted
          ? `You haven’t submitted the right solution. Please try again.`
          : `Paste the solution below. You get ${maxAttempts} chances.`}
      />
    )
  }
}

export default SolutionFormTitle
