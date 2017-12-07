// @flow

import React, { PureComponent, Children } from 'react'
import elem from '../utils/elem'
import Milestones from './Milestones'

import type { Element } from 'react'

const cmz = require('cmz')

const Root = elem.div()

const Content = elem.div(cmz(`
  & > *:only-child,
  & > *:first-child {
    border-top: none
  }

  & > *:only-child,
  & > *:last-child {
    padding-bottom: 65px
  }
`))

const Block = elem.div(cmz(`
  max-width: 920px
  margin: 0 auto
  padding: 65px 60px 130px
  border-top: 1px solid #e0e0e0
`))

const Cta = elem.div(cmz(`
  max-width: 920px
  margin: 0 auto
  padding: 0 60px
`))

type Props = {
  level: number,
  children?: Element<*>,
  cta?: Element<*>
}

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

    const childrens = Children.map(children, (child, index) => {
      return Block({ key: index }, child)
    })

    return Root(milestones, Content(childrens), Cta(cta))
  }
}

export default MilestonesScreen
