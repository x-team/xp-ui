// @flow

import React, { PureComponent } from 'react'
import elem from '../utils/elem'
import HeaderBar from './HeaderBar'

import type { Element } from 'react'

const cmz = require('cmz')

const Root = elem.div()

const Content = elem.div(cmz(`
  max-width: 1180px
  margin: 93px auto
`))

type Props = {
  children?: Element<*>
}

class ApplicantScreen extends PureComponent<Props> {
  render () {
    const { children } = this.props
    return Root(<HeaderBar />, Content(children))
  }
}

export default ApplicantScreen
