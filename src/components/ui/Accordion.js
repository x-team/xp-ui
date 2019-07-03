// @flow

import React, { Component } from 'react'

import theme from '../../styles/theme'

import GenericCollapsible from './GenericCollapsible'

import type { Element, ComponentType, ChildrenArray } from 'react'
import type { Props as GenericCollapsibleContainerProps } from './GenericCollapsible/Container'

export type Props = {
  children: Element<*>,
  initialExpandedChild: number,
}

const cmz = require('cmz')

const cx = {
  accordion: cmz(`
    width: 100%
    background-color: ${theme.baseBright}
    display: flex
    flex-direction: column
    height: 100%
  `)
}

type State = {
  currentExpandedChild: number
}

class Accordion extends Component<Props, State> {
  static defaultProps = {
    initialExpandedChild: 0
  }

  state = {
    currentExpandedChild: this.props.initialExpandedChild
  }

  handleExpandChild = (index: number) => {
    this.setState({ currentExpandedChild: index })
  }

  getChildrenByType = (
    children: ChildrenArray<*>,
    componentType: ComponentType<GenericCollapsibleContainerProps>
  ) => React.Children.toArray(children).filter((child: Element<*>) => child.type === componentType)

  handleGenericCollapsibleContainerChild = (child: Element<*>, index: number) =>
    React.cloneElement(child, {
      isAccordion: true,
      initialExpanded: this.state.currentExpandedChild === index,
      onChange: () => this.handleExpandChild(index)
    })

  render () {
    const { children } = this.props
    return (
      <div className={cx.accordion}>
        {React.Children.map(this.getChildrenByType(children, GenericCollapsible.Container), this.handleGenericCollapsibleContainerChild)}
      </div>
    )
  }
}

export default Accordion
