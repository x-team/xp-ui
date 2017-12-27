// @flow

import React, { PureComponent, Children } from 'react'

import elem from '../../utils/elem'

import Milestones from './Milestones'

import theme, { breakpoints } from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
  level: number,
  children?: Element<*>,
  cta?: Element<*>
}

const Root = elem.div()

const CTA = elem.div()

const Wrapper = elem.div(cmz(`
  & {
    max-width: 840px
    margin: 0 auto
    padding-left: 60px
    padding-right: 60px
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    & {
      padding-left: 30px
      padding-right: 30px
    }
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    & {
      padding-left: 15px
      padding-right: 15px
    }
  }
`))

const Content = elem.div(cmz(`
  & > *:only-child,
  & > *:first-child {
    border-top: none !important
  }

  & > *:only-child,
  & > *:last-child {
    padding-bottom: 27px
  }
`))

const Block = elem.div(cmz(`
  &:not(:empty) {
    padding: 80px 0 84px
    border-top: 1px solid ${theme.lineSilver2}
  }
`))

class MilestonesScreen extends PureComponent<Props> {
  static defaultProps = {
    level: 0,
    children: null,
    cta: null
  }

  render () {
    const { level, children, cta } = this.props

    const milestones = level > 0 && (
      <Milestones
        level={level}
        levels={[
          { icon: 'head' },
          { icon: 'webcam' },
          { icon: 'message' }
        ]}
      />
    )
    const childBlocks = Children.map(children, (child, index) => Block(
      { key: index },
      child,
      CTA(cta)
    ))

    return Root(
      milestones,
      Wrapper(Content(childBlocks))
    )
  }
}

export default MilestonesScreen
