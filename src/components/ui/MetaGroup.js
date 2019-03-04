// @flow

import React, { PureComponent } from 'react'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  layout: cmz(`
    position: relative
    display: flex
    height: inherit
  `),

  leftSideColumn: cmz(`
    box-sizing: border-box
    flex: 1
    min-width: 60%
  `),

  rightSideColumn: cmz(`
    display: flex
    flex-wrap: wrap
    justify-content: flex-end
    align-items: flex-start
    height: 100%
    width: 300px
  `),

  rightSideColumns: cmz(`
    box-sizing: border-box
    flex-shrink: 0
  `)
}

type Props = {
  leftSideElement: Element<*>,
  rightSideElements: Array<Element<*>>,
}

class MetaGroup extends PureComponent<Props, void> {
  static defaultProps = {
    leftSideElement: null,
    rightSideElements: []
  }

  render () {
    const { leftSideElement, rightSideElements } = this.props
    return (
      <div className={cx.layout}>
        <div className={cx.leftSideColumn}>
          {leftSideElement}
        </div>
        <div className={cx.rightSideColumn}>
          {rightSideElements.map((element, i) => (
            <div className={cx.rightSideColumns} key={i}>
              {element}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default MetaGroup
