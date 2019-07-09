// @flow

import React, { Component, Fragment } from 'react'

import type { Element, ComponentType, ChildrenArray } from 'react'

import Header from './Header'
import Body from './Body'

import type { Props as HeaderProps } from './Header'
import type { Props as BodyProps } from './Body'

type Props = {
  initialExpanded: boolean,
  isAccordion?: boolean,
  children?: Element<*>,
  bodyWrapper: ComponentType<*>,
  headerWrapper: ComponentType<*>,
  onChange: (isExpanded: boolean) => void
}

type State = {
  isExpanded: boolean
}
class Container extends Component<Props, State> {
  static defaultProps = {
    initialExpanded: false,
    isAccordion: false,
    headerWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    bodyWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    onChange: () => {}
  }

  state = {
    isExpanded: this.props.initialExpanded
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.initialExpanded !== this.props.initialExpanded) {
      this.setState({ isExpanded: this.props.initialExpanded })
    }
  }

  toggleExpanded = (isExpanded: boolean) => {
    const { isAccordion } = this.props
    if (!isAccordion || (isAccordion && isExpanded)) {
      this.props.onChange(isExpanded)
      this.setState({ isExpanded })
    }
  }

  handleHeaderChild = (child: Element<*>) =>
    React.cloneElement(child, { isExpanded: this.state.isExpanded, onClick: this.toggleExpanded })

  handleBodyChild = (child: Element<*>) =>
    React.cloneElement(child, { isExpanded: this.state.isExpanded, isAccordion: this.props.isAccordion })

  getChildrenByType = (
    children: ChildrenArray<*>,
    componentType: ComponentType<HeaderProps> | ComponentType<BodyProps>
  ) => React.Children.toArray(children).find((child: Element<*>) => child.type === componentType)

  render () {
    const { children, headerWrapper: HeaderWrapper, bodyWrapper: BodyWrapper } = this.props
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
