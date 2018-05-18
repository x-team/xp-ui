import { PureComponent } from 'react'

import elem from '../../utils/elem'

type Props = {
  src: string,
  alt: ?string
}

const cmz = require('cmz')

// Size options
const sizeStyles = {
  small: cmz(`
    width: 32px
    height: 32px
  `),
  normal: cmz(`
    width: 64px
    height: 64px
  `)
}

const Root = elem.div(cmz(`
  border-radius: 50%
  display: inline-block
  overflow: hidden
`))

const Image = elem.img(cmz(`
  width: 100%
  height: 100%
`))

class Avatar extends PureComponent<Props> {
  static defaultProps = {
    size: 'normal',
    alt: ''
  }

  render () {
    const {
      alt,
      src,
      size
    } = this.props

    const sizeClassName = sizeStyles[size] || ''

    return Root(
      { className: sizeClassName },
      Image({
        alt,
        src
      })
    )
  }
}

export default Avatar
