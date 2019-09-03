// @flow

import React, { PureComponent } from 'react'

import GenericCopyToClipboard from '../ui/GenericCopyToClipboard'

import theme, {
  breakpoints,
  mediaQueries
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
      margin: 0 0 30px
    }

    & > * {
      width: 100%
      box-shadow: 1px 1px 2px rgba(0, 0, 0, .1)
      margin: 10px 10px 5px
      border-radius: 2px
    }
  `),

  item: cmz(typo.baseText),

  name: cmz(`
    width: 100px
    background-color: ${theme.baseBright}
    padding: 5px 10px
    text-align: right
  `),

  value: cmz(`
    padding: 5px 10px
  `)
}

const LAYOUT_SETS = {
  'breakpoints': breakpoints,
  'media queries': mediaQueries
}

class Layout extends PureComponent<Props> {
  renderItem = (name: string, set: string) => (
    <GenericCopyToClipboard text={name} key={`${set}-${name}`}>
      <div className={cx.item}>
        <span className={cx.name}>
          {name}
        </span>
        <span className={cx.value}>
          {LAYOUT_SETS[set][name]}
        </span>
      </div>
    </GenericCopyToClipboard>
  )

  renderSet = (set: string) => (
    <details key={set} open>
      <summary className={cx.heading}>{set}</summary>
      <div className={cx.set}>
        {Object.keys(LAYOUT_SETS[set]).map(name => this.renderItem(name, set))}
      </div>
    </details>
  )

  render () {
    return (
      <div>
        {Object.keys(LAYOUT_SETS).map(set => this.renderSet(set))}
      </div>
    )
  }
}

export default Layout
