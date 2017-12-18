// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'
import theme from '../../styles/theme'

const cmz = require('cmz')

type Props = {}

const Hr = elem.hr(cmz(`
  height: 1px
  background-color: ${theme.lineSilver4}
  border: 0
`))

export default class HorizontalRuler extends PureComponent<Props> {
  render () {
    return Hr()
  }
}
