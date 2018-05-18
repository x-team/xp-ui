import { PureComponent } from 'react'

import elem from '../../utils/elem'

import type { Element } from 'react'

type Props = {
  src: string,
  alt: ?string
}

const cmz = require('cmz')

const Root = elem.div(cmz(`
  border-radius: 50%
  display: inline-block
  overflow: hidden
  width: 64px
  height: 64px
`))

const Image = elem.img(cmz(`
  width: 100%
  height: 100%
`))

class Avatar extends PureComponent<Props> {
  static defaultProps = {
    alt: ''
  }

  render () {
    const { alt, src } = this.props

    return Root(
      Image({
        alt,
        src
      })
    )
  }
}

export default Avatar
