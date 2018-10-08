// @flow

import { PureComponent, Children } from 'react'

import elem from '../../utils/elem'

import theme, { breakpoints } from '../../styles/theme'

import type { Element } from 'react'

const cmz = require('cmz')

type Props = {
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
      padding-left: 40px
      padding-right: 40px
    }
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    & {
      padding-left: 20px
      padding-right: 20px
    }
  }
`))

const Content = elem.div(cmz(`
  & > *:only-child,
  & > *:first-child {
    border-top: none !important
    padding-top: 0 !important
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
    children: null,
    cta: null
  }

  render () {
    const { children, cta } = this.props
    const childBlocks = Children.map(children, (child, index) => Block(
      { key: index },
      child,
      CTA(cta)
    ))

    return Root(Wrapper(Content(childBlocks)))
  }
}

export default MilestonesScreen
