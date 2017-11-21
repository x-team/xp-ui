// @flow

import React, { PureComponent } from 'react'
import type { Element } from 'react'

import RoadmapHero from './RoadmapHero'

type Props = {
 heading: Element<*>|string,
 content?: Element<*>|string
}

class NextSteps extends PureComponent<Props> {
  render () {
    const { heading, content } = this.props

    return <RoadmapHero
      heading={heading}
      content={content}
      imgUrl={require('../assets/next-steps.png')}
    />
  }
}

export default NextSteps
