// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'
// import theme, { breakpoints } from '../../styles/theme'
// import * as typo from '../../styles/typo'
import elem from '../utils/elem'

import type { Element } from 'react'

type Props = {
  title?: string,
  isTwoColumns?: boolean,
  children?: Element<*>|string,
}

const Section = elem.section(cmz(`
  margin: 0
  padding: 1rem
`))

const Header = elem.h1(cmz(`
  margin: 0
  padding: 0.5rem
`))

const Content = elem.div(cmz(`
  border: 1px solid red
`))

const Section2 = cmz(`
  display: flex
`)

const Header2 = cmz(`
  border: 1px solid blue
`)

const Content2 = cmz(`
  border: 1px solid orange
`)

export default class CollapsibleSection extends PureComponent<Props> {
  static defaultProps = {
    title: '',
    isTwoColumns: false,
    children: null,
  }

  render () {
    const {
      title,
      isTwoColumns,
      children,
    } = this.props

    return Section({ className: isTwoColumns && Section2 },
      Header({ className: isTwoColumns && Header2 }, title),
      Content({ className: isTwoColumns && Content2 }, children)
    )
  }
}
