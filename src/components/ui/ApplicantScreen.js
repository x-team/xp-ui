// @flow

import React, { PureComponent } from 'react'

import elem from '../../utils/elem'

import HeaderBar from './HeaderBar'

import type { Element } from 'react'

const cmz = require('cmz')

const Root = elem.div()

const Content = elem.div(cmz(`
  max-width: 1280px
  margin: 93px auto 0
`))

type Props = {
  children?: Element<*>
}

class ApplicantScreen extends PureComponent<Props> {
  render () {
    return Root(<HeaderBar />, Content(this.props.children))
  }
}

export default ApplicantScreen
