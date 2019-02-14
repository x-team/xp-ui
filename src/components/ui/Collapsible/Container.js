// @flow

import React, { Component, Fragment } from 'react'

import type { Element, ComponentType, ChildrenArray } from 'react'

import Header from './Header'
import Body from './Body'

import type { Props as HeaderProps } from './Header'
import type { Props as BodyProps } from './Body'

type Props = {
  initialCollapsed: boolean,
  children?: Element<*>,
  bodyWrapper: ComponentType<*>,
  headerWrapper: ComponentType<*>,
  onChange: (isCollapsed: boolean) => void
}

type State = {
  isCollapsed: boolean
}

class Container extends Component<Props, State> {
  static defaultProps = {
    initialCollapsed: false,
    headerWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    bodyWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    onChange: () => {}
  }

  state = {
    isCollapsed: this.props.initialCollapsed
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.initialCollapsed !== this.props.initialCollapsed) {
      this.setState({ isCollapsed: this.props.initialCollapsed })
    }
  }

  toggleCollapsed = (isCollapsed: boolean) => {
    this.props.onChange(isCollapsed)
    this.setState({ isCollapsed })
  }

  handleHeaderChild = (child: Element<*>) =>
    React.cloneElement(child, { isCollapsed: this.state.isCollapsed, onClick: this.toggleCollapsed })

  handleBodyChild = (child: Element<*>) =>
    React.cloneElement(child, { isCollapsed: this.state.isCollapsed })

  getChildrenByType = (
    children: ChildrenArray<*>,
    componentType: ComponentType<HeaderProps> | ComponentType<BodyProps>
  ) => React.Children.toArray(children).find((child: Element<*>) => child.type === componentType)

  render () {
    const { children, bodyWrapper: BodyWrapper, headerWrapper: HeaderWrapper } = this.props
    return (
      <Fragment>
        <HeaderWrapper>
          {React.Children.map(this.getChildrenByType(children, Header), this.handleHeaderChild)}
        </HeaderWrapper>
        <BodyWrapper>
          {React.Children.map(this.getChildrenByType(children, Body), this.handleBodyChild)}
        </BodyWrapper>
      </Fragment>
    )
  }
}

export default Container
