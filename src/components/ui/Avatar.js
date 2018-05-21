// @flow

import { PureComponent } from 'react'

import elem from '../../utils/elem'

const cmz = require('cmz')

type Props = {
  alt?: string,
  src: string,
  size: number
}

const Root = elem.div(cmz(`
  display: inline-block
  border-radius: 50%
  overflow: hidden
`))

const Image = elem.img(cmz(`
  max-width: 100%
  display:block
  height: auto
`))

class Avatar extends PureComponent<Props, void> {
  static defaultProps = {
    size: 64,
    alt: ''
  }

  render () {
    const { alt, src, size } = this.props

    return Root(
      Image({
        alt,
        src,
        width: size,
        height: size
      })
    )
  }
}

export default Avatar
