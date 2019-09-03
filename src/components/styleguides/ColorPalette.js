// @flow

import React, { PureComponent } from 'react'

import GenericCopyToClipboard from '../ui/GenericCopyToClipboard'

import theme, {
  palette,
  baseColors,
  typoColors,
  formColors,
  lineColors,
  iconColors,
  miscColors
} from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

type Props = {}

const cx = {
  heading: cmz(
    typo.sectionHeading,
    `
      & {
        text-transform: uppercase
        margin: 20px 10px 15px
        cursor: pointer
        outline: none
      }

      &:hover {
        color: ${theme.typoHighlight}
      }
    `
  ),

  set: cmz(`
    & {
      display: flex
      flex-wrap: wrap
      margin: 0 0 50px
    }

    & > * {
      width: calc(25% - 20px)
      min-width: 300px
      box-shadow: 1px 1px 2px rgba(0, 0, 0, .1)
      margin: 10px
      border-radius: 2px
    }
  `),

  color: cmz(
    typo.baseText,
    `
      display: flex
      flex-direction: column
      justify-content: flex-end
      width: 100%
      height: 90px
      border-radius: 2px
    `
  ),

  colorName: cmz(`
    background-color: ${theme.baseBrighter}
    padding: 4px 2px
    text-align: center
    border-radius: 0 0 2px 2px
  `)
}

const COLOR_SETS = {
  'hex palette': palette,
  'base colors': baseColors,
  'typography colors': typoColors,
  'form colors': formColors,
  'line colors': lineColors,
  'icon colors': iconColors,
  'misc colors': miscColors
}

class ColorPalette extends PureComponent<Props> {
  renderColor = (name: string, set: string) => (
    <GenericCopyToClipboard text={name} key={`${set}-${name}`}>
      <div className={cx.color} style={{ backgroundColor: COLOR_SETS[set][name] }}>
        <div className={cx.colorName}>
          {name}
        </div>
      </div>
    </GenericCopyToClipboard>
  )

  renderSet = (set: string) => (
    <details key={set} open>
      <summary className={cx.heading}>{set}</summary>
      <div className={cx.set}>
        {Object.keys(COLOR_SETS[set]).map(name => this.renderColor(name, set))}
      </div>
    </details>
  )

  render () {
    return (
      <div>
        {Object.keys(COLOR_SETS).map(set => this.renderSet(set))}
      </div>
    )
  }
}

export default ColorPalette
