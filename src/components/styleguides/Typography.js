// @flow

import React, { PureComponent } from 'react'

import GenericCopyToClipboard from '../ui/GenericCopyToClipboard'

import theme, { breakpoints } from '../../styles/theme'
import typo, { typeface } from '../../styles/typo'

const cmz = require('cmz')

type Props = {
  color: string,
  width: string,
  option: string,
  text: string,
  paragraphs: string
}

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
      width: 100%
      min-width: 300px
      box-shadow: 1px 1px 3px rgba(0, 0, 0, .2)
      margin: 10px 10px 20px
      border-radius: 2px
    }
  `),

  item: cmz(
    typo.baseText,
    `
      display: flex
      flex-direction: column
      justify-content: flex-end
      width: 100%
      border-radius: 2px
    `
  ),

  sampleText: cmz(`
    flex-grow: 1
    padding: 0 10px
  `),

  typoName: cmz(`
    background-color: ${theme.baseBright}
    padding: 10px
    border-top: 1px solid ${theme.lineSilver1}
    border-radius: 0 0 2px 2px
  `)
}

const TYPOGRAPHY_SETS = {
  'typography sets': typo,
  'typeface sets': typeface
}
class Typography extends PureComponent<Props> {
  renderText = (name: string, set: string) => {
    const { color, option, text, paragraphs } = this.props
    const newlineRegex = /(\r\n|\r|\n)/g
    const paragraphsRender = paragraphs
      .split(newlineRegex)
      .filter(val => !val.match(newlineRegex))
      .map((val, i) => (<p key={i}>{val}</p>))

    return (
      <GenericCopyToClipboard text={name} key={`${set}-${name}`}>
        <div className={cx.item}>
          <div
            className={`${cx.sampleText} ${TYPOGRAPHY_SETS[set][name]}`}
            style={{
              color: color ? theme[color] : theme.typoParagraph
            }}
          >
            {option !== 'paragraphs' ? text : paragraphsRender}
          </div>
          <div className={cx.typoName}>
            {name}
          </div>
        </div>
      </GenericCopyToClipboard>
    )
  }

  renderSet = (set: string) => {
    const { width } = this.props
    return (
      <details key={set} open>
        <summary className={cx.heading}>{set}</summary>
        <div
          className={cx.set}
          style={{
            width: width ? breakpoints[width] : '100%'
          }}
        >
          {Object.keys(TYPOGRAPHY_SETS[set]).map(name => this.renderText(name, set))}
        </div>
      </details>
    )
  }

  render () {
    return (
      <div>
        {Object.keys(TYPOGRAPHY_SETS).map(set => this.renderSet(set))}
      </div>
    )
  }
}

export default Typography
