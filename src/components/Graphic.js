// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'
import theme, { breakpoints } from '../styles/theme'
import * as typo from '../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
 imgUrl: Element<*>|string,
 altText: string
}

const HeroImage = elem.img(cmz())

class Graphic extends PureComponent<Props> {

  render () {
    const {
      imgUrl,
      altText
    } = this.props

    return HeroImage({
      src: imgUrl,
      alt: altText
    })
  }

}

export default Graphic
