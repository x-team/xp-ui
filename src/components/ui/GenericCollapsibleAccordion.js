// @flow

import React, { Component } from 'react'

import theme from '../../styles/theme'

import type { Element } from 'react'

export type Props = {
  children: Element<*>,
  controlled?: boolean,
  defaultActiveIndex?: number,
  onChange?: (index?: number) => void,
  activeIndex?: number
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
  isControlled: boolean,
  currentExpandedChild: number
}

class GenericCollapsibleAccordion extends Component<Props, State> {
  static defaultProps = {
    defaultActiveIndex: 0
  }

  state = {
    isControlled: this.props.controlled || false,
    currentExpandedChild: this.props.defaultActiveIndex || 0
  }

  componentDidMount = () => {
    if (!this.state.isControlled) {
      let { children } = this.props
      let childrenCount = React.Children.count(children)
      if (this.state.currentExpandedChild >= childrenCount) {
        this.setState({ currentExpandedChild: 0 })
      }
    }
  }

  handleExpandChild = (index: number) => {
    if (this.state.isControlled && this.props.onChange) {
      this.props.onChange(index)
    } else {
      this.setState({ currentExpandedChild: index })
    }
  }

  handleGenericCollapsibleContainerChild = (child: Element<*>, index: number) =>
    React.cloneElement(child, {
      isAccordion: true,
      initialExpanded: this.state.isControlled ? index === this.props.activeIndex : this.state.currentExpandedChild === index,
      onChange: () => this.handleExpandChild(index)
    })

  render () {
    const { children } = this.props
    return (
      <div className={cx.accordion}>
        {React.Children.map(children, this.handleGenericCollapsibleContainerChild)}
      </div>
    )
  }
}

export default GenericCollapsibleAccordion
