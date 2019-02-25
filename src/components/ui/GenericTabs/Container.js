// @flow

import React, { Component, Fragment } from 'react'
import get from 'lodash.get'

import type { Element, ComponentType, ChildrenArray } from 'react'

import Pane from './Pane'
import Head from './Head'

import type { Props as PaneProps } from './Pane'
import type { Props as HeadProps } from './Head'

type Props = {
  children?: Element<*>,
  contentWrapper: ComponentType<*>,
  defaultActiveKey: string,
  headWrapper: ComponentType<*>,
  onChange: (activeTab: string) => void
}

type State = {
  activeTab: string
}

class Container extends Component<Props, State> {
  static defaultProps = {
    headWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    contentWrapper: (props: { children: Element<*> }) => <Fragment>{props.children}</Fragment>,
    onChange: () => {}
  }

  paneChildren: ChildrenArray<*>

  constructor (props: Props) {
    super(props)

    const paneChildren = this.getChildrenByType(this.props.children, Pane)
    const [ firstPane ] = paneChildren

    this.state = {
      activeTab: props.defaultActiveKey || get(firstPane, 'props.tabKey', '')
    }
  }

  static getDerivedStateFromProps (props: Props, state: State) {
    if (props.defaultActiveKey !== state.activeTab) {
      return {
        activeTab: props.defaultActiveKey
      }
    }
    return null
  }

  handleOnChange = (activeTab: string) => {
    if (this.state.activeTab === activeTab) {
      return
    }

    this.props.onChange(activeTab)
    this.setState({ activeTab })
  }

  handleHeadChild = (child: Element<*>) => {
    return React.cloneElement(child, { activeTab: this.state.activeTab, onClick: this.handleOnChange })
  }

  handlePaneChild = (child: Element<*>) => {
    return React.cloneElement(child, { activeTab: this.state.activeTab })
  }

  getChildrenByType = (
    children: ChildrenArray<*>,
    componentType: ComponentType<HeadProps> | ComponentType<PaneProps>
  ) => {
    return React.Children.toArray(children).filter((child: Element<*>) => child.type === componentType)
  }

  render () {
    const { headWrapper: HeadWrapper, contentWrapper: ContentWrapper, children } = this.props

    return (
      <Fragment>
        <HeadWrapper>
          {React.Children.map(this.getChildrenByType(children, Head), this.handleHeadChild)}
        </HeadWrapper>
        <ContentWrapper>
          {React.Children.map(this.getChildrenByType(children, Pane), this.handlePaneChild)}
        </ContentWrapper>
      </Fragment>
    )
  }
}

export default Container
