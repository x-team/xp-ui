// @flow

import { PureComponent } from 'react'

import elem from '../utils/elem'

import theme from '../styles/theme'
import typo from '../styles/typo'

const cmz = require('cmz')

type Props = {}

const Root = elem.section(cmz(`
  display: flex
  flex-wrap: wrap
  justify-content: center
`))

const Color = elem.div(cmz(
  typo.baseText,
  `
    display: flex
    flex-direction: column
    justify-content: flex-end
    width: 170px
    height: 90px
    margin: 10px
    border-radius: 6px
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .3)
  `
))

const ColorName = elem.div(cmz(`
  background-color: ${theme.baseBrighter}
  padding: 4px
  text-align: center
  border-radius: 0 0 6px 6px
`))

class ColorPalette extends PureComponent<Props> {
  render () {
    const colorBlocks = []

    Object.keys(theme).forEach((key, i) => {
      colorBlocks.push(
        Color({
          key: i,
          style: { backgroundColor: `rgb(${theme[key].color[0]}, ${theme[key].color[1]}, ${theme[key].color[2]})` }
        }, ColorName(key))
      )
    })

    return Root(colorBlocks)
  }
}

export default ColorPalette
