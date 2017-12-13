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

const Item = elem.div(cmz(
  typo.baseText,
  `
    display: flex
    flex-direction: column
    justify-content: flex-end
    min-width: 170px
    max-width: 370px
    min-height: 90px
    margin: 30px 10px
    border-radius: 2px
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .3)
  `
))

const SampleText = elem.span(cmz(`
  text-align: center
  padding: 10px
  flex-grow: 1
`))

const TypoName = elem.div(cmz(`
  background-color: ${theme.baseHighlight}
  padding: 4px
  text-align: center
  border-top: 1px solid ${theme.typoParagraph}
`))

class Typography extends PureComponent<Props> {
  render () {
    const typoBlocks = []

    Object.keys(typo)
    .filter(key => key !== 'divider')
    .forEach((key, i) => {
      typoBlocks.push(
        Item(
          { key: i },
          SampleText({ className: typo[key] }, 'The quick brown fox jumps over the lazy dog'),
          TypoName(key)
        )
      )
    })

    return Root(typoBlocks)
  }
}

export default Typography
