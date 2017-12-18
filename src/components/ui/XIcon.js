// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'

const cmz = require('cmz')

type Props = {}

const Img = elem.img(cmz(`
  width: 55px
  margin: 0 0 56px 0
`), {
  src: require('../../assets/x-black.png'),
  alt: 'X-Team Logo'
})

export default class XIcon extends PureComponent<Props> {
  render () {
    return Img()
  }
}
