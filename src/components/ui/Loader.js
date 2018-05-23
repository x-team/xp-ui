// @flow

import { PureComponent } from 'react'
import elem from '../../utils/elem'

type Props = {}

const Img = elem.img('', {
  src: require('../../assets/x-loader.gif'),
  alt: 'Loading...'
})

class Loader extends PureComponent<Props> {
  render () {
    return (
      Img()
    )
  }
}

export default Loader
