// @flow

import { PureComponent } from 'react'
import { compose, withState, onlyUpdateForKeys } from 'recompose'
import elem from '../utils/elem'
import theme from '../styles/theme'
import * as typo from '../styles/typo'

const cmz = require('cmz')

type Props = {}

const Root = elem.section(cmz(``))

class RoadmapLevel extends PureComponent<Props> {
  static defaultProps = {}
  render () {
    const {} = this.props
    return Root()
  }
}

export default compose(
  onlyUpdateForKeys(['isActive'])
)(RoadmapLevel)
