// @flow

import React, { Component } from 'react'

import type { Element } from 'react'

import theme from '../../../styles/theme'
import typo from '../../../styles/typo'

import elem from '../../../utils/elem'

const cmz = require('cmz')

const tabsStyles: Object = {
  root: cmz(typo.formText, `
    position: relative;
    margin: 1em 0 1.5em;
    background-color: ${theme.baseBrighter};
    border-radius: 3px;
  `),

  tabnav: cmz(`
    padding: .5em .625em 0 0;
    background: ${theme.baseBrighter};
    margin-bottom: 20px;
    position: relative;
  `),

  tabnavTabs: cmz(`
    list-style: none;
    margin: 0 0 -1px;
    padding-left: 0;
    border: 0 solid ${theme.baseSilver};
    border-bottom-width: 1px;
  `),

  line: cmz(`
    & {
      border: 0 solid ${theme.baseRed}
      width: 100%;
      position: absolute;
      bottom: -1px;
    }

    &.active {
      border-bottom-width: 2px;
      width: 100%;
    }
  `),

  tabnavTab: cmz(`
    & {
      position: relative;
      display: inline-block;
      border-color: ${theme.baseSilver};
      border-style: solid;
      user-select: none;
      border-width: 0;
      padding: 0 0 .6rem 0;
      margin-right: 1rem;
    }

    & > a {
      position: relative;
      display: block;
      color: ${theme.sliderToggle};
      outline: none;
      font-weight: 600;
      text-decoration: none;
    }

    & > a:hover,
    & > a:focus {
      text-decoration: none;
      background-color: transparent;
    }

    & > a:hover {
      color: ${theme.formText};
    }

    &:hover {
      cursor: pointer;
      transition: all 1s ease-out;
      transition-property: background-color, color;
    }

    &.active {
      cursor: default;
      transition-property: none;
    }

    &.active > a,
    &.active > a:hover,
    &.active > a:focus {
      cursor: default;
    }

    &.active > a {
      background-color: transparent;
      color: ${theme.formText};
    }
  `)
}

tabsStyles.tab = {
  content: cmz(typo.formText, `
    background-color: ${theme.baseBrighter};
  `),

  pane: cmz(`
    margin: 0 .5em .5em 0;
  `)
}

const Root = elem.section(tabsStyles.root)

type Props = {
  children?: Element<*>,
  defaultActiveTabKey: number,
  className: string
}

type State = {
  activeTabKey: number
}

class Tabs extends Component<Props, State> {
  static defaultProps = {
    defaultActiveTabKey: 0
  }

  state = {
    activeTabKey: this.props.defaultActiveTabKey || 0
  }

  handleTabClick = (index: number) => (event: Object) => {
    event.preventDefault()
    this.setState({ activeTabKey: index })
  }

  _renderTab = (child: Element<*>, index: number) => {
    const isActiveTab = this.state.activeTabKey === index
    const activeClassName = isActiveTab ? 'active' : ''

    if (!child) {
      return null
    }

    return (
      <li key={index} role='presentation' className={`${tabsStyles.tabnavTab} ${activeClassName}`}>
        <a
          href=''
          onClick={this.handleTabClick(index)}
          role='tab'
          aria-controls={`tabs-pane-${index}`}
          aria-selected={isActiveTab}
          tabIndex={index}
        >
          {child.props.title}
        </a>
        <div className={`${tabsStyles.line} ${activeClassName}`} />
      </li>
    )
  }

  _renderTabs () {
    return (
      <nav className={tabsStyles.tabnav}>
        <ul className={tabsStyles.tabnavTabs} role='tablist'>
          {React.Children.map(this.props.children, this._renderTab)}
        </ul>
      </nav>
    )
  }

  _renderTabContent () {
    const children = React.Children.toArray(this.props.children)
    return (
      <div className={tabsStyles.tab.content}>
        <div
          className={tabsStyles.tab.pane}
          role='tabpanel'
          aria-labelledby={`tabs-tab-${this.state.activeTabKey}`}
          aria-hidden='false'
        >
          {children[this.state.activeTabKey]}
        </div>
      </div>
    )
  }

  render () {
    const { className } = this.props
    return Root(
      { className },
      this._renderTabs(),
      this._renderTabContent()
    )
  }
}

export default Tabs
