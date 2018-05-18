import { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import elem from '../../utils/elem'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

type Props = {
  src: ?string,
  alt: ?stringZ
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
    src: 'https://www.gravatar.com/avatar/61a58e425da620d1f4839c6af03ce70f',
  }

  render () {
    const { src, alt } = this.props

    return Root(
      Image({
        alt,
        src
      })
    )
  }
}

export default Avatar
