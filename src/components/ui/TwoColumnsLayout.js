// @flow
/* globals Event */

import React, { PureComponent, Fragment } from 'react'
import isEqual from 'lodash.isequal'

import SvgIcon from './SvgIcon'

import theme, { breakpoints } from '../../styles/theme'
import { typeface } from '../../styles/typo'

import type { Element } from 'react'
import type { Icon } from './SvgIcon'

const cmz = require('cmz')

const cx = {
  layout: cmz(`
    position: relative
    display: flex
    height: inherit
  `),

  sidebar: cmz(`
    box-sizing: border-box
    height: 100%
    background-color: ${theme.baseBright}
    z-index: 1
    position: relative
    display: flex
    flex-direction: column
    overflow: hidden
  `),

  sidebarHeading: cmz(typeface.extraHeading, `
    & {
      text-transform: uppercase
      font-size: 0.9375rem
      width: 100%
      height: 58px
      background-color: ${theme.baseBright}
      border-bottom: 1px solid ${theme.lineSilver2}
      display: flex
      align-items: center
    }

    &,
    &:hover {
      color: ${theme.typoHighlightOnDarkBackground}
      text-decoration: none
    }
  `),

  sidebarHeadingAction: cmz(`
    cursor: pointer
  `),

  sidebarHeadingIcon: cmz(`
    & {
      margin: 0 10px 0 15px
    }

    & svg {
      display: block
    }
  `),

  sidebarHeadingText: cmz(`
    margin: 0 10px
    overflow: hidden
    text-overflow: ellipsis
  `),

  sidebarBody: cmz(`
    max-height: 100%
    box-sizing: border-box
    flex: 1 0 0
  `),

  scrollableSidebar: cmz(`
    overflow: auto
  `),

  nonScrollableSidebar: cmz(`
    overflow: hidden
  `),

  content: cmz(`
    height: 100%
    flex: 1
    overflow: auto
    position: relative
    display: flex
    flex-direction: column
  `),

  contentHeading: cmz(typeface.extraHeading, `
    color: ${theme.typoHeading}
    font-size: 1.5rem
    width: 100%
    height: 58px
    background-color: ${theme.baseBright}
    display: flex
    align-items: center
    padding: 0 0 0 60px
    box-sizing: border-box
  `),

  contentHeadingText: cmz(typeface.extraHeading, `
    margin: 0 20px 0 0
    overflow: hidden
    text-overflow: ellipsis
  `),

  contentHeadingElement: cmz(typeface.extraHeading, `
    width: 100%
    height: auto
    background-color: ${theme.baseBright}
  `),

  contentBody: cmz(`
    max-height: 100%
    overflow: auto
    box-sizing: border-box
    flex: 1 0 0
  `),

  splitter: cmz(`
    & {
      border-right: 2px solid ${theme.lineSilver2}
      border-left: 2px solid ${theme.lineSilver2}
      background: ${theme.baseBright}
      width: 1px
      height: 100%
      cursor: pointer
      position: relative
    }

    &:hover {
      border-right-color: ${theme.lineSilver1}
      border-left-color: ${theme.lineSilver1}
      background: ${theme.baseHighlight}
    }

    &:after {
      position: absolute
      top: 41px
      left: calc(-100% - 15px)
      border-radius: 100%
      background: ${theme.baseBrighter}
      z-index: 9999
      width: 31px
      height: 31px
      text-align: center
      line-height: 30px
      border: 1px solid ${theme.lineSilver1}
      font-family: serif
      color: ${theme.typoGrayed}
      font-size: 16px
    }

    &.expanded:hover:after,
    &.expanded.mobile:after {
      content: '<'
    }

    &.collapsed:after {
      content: '>'
      width: 30px
      padding-left: 2px
    }

    &.collapsed:before {
      content: ''
      height: 100%
      background: ${theme.baseBright}
      position: absolute
      z-index: 1
      width: 20px
      left: -22px
    }

    &.collapsed:hover:before {
      background: ${theme.baseHighlight}
    }
  `)
}

type Props = {
  sidebar: Element<*>,
  sidebarHeading: string,
  sidebarHeadingAction?: () => void,
  sidebarWidth: number,
  sidebarIcon: Icon,
  scrollableSidebar: boolean,
  content: Element<*>,
  contentHeading: string,
  contentId: string
}

type State = {
  initial: boolean,
  mobile: boolean,
  expanded: boolean,
  sidebarWidth: number
}

class TwoColumnsLayout extends PureComponent<Props, State> {
  static defaultProps = {
    sidebar: null,
    sidebarHeading: '',
    sidebarWidth: 385,
    sidebarIcon: '',
    scrollableSidebar: true,
    content: null,
    contentHeading: '',
    contentId: ''
  }

  state: State = {
    initial: true,
    mobile: false,
    expanded: true,
    sidebarWidth: this.props.sidebarWidth
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (!isEqual(prevState, this.state)) {
      // This is required for recalculation of react-data-grid width
      window.dispatchEvent(new Event('resize'))
    }
  }

  componentDidMount () {
    this.updateDimensions()
  }

  updateDimensions = () => {
    const { sidebarWidth } = this.props
    const { initial, expanded } = this.state
    const { innerWidth } = window
    const mobileBreakpoint = Number.parseInt(breakpoints.md, 10)
    const maxSidebarWidth = innerWidth < sidebarWidth ? innerWidth - 25 : sidebarWidth
    if (innerWidth <= mobileBreakpoint) {
      this.setState({
        mobile: true,
        expanded: initial ? false : expanded,
        sidebarWidth: maxSidebarWidth
      })
    } else {
      this.setState({
        mobile: false,
        expanded: initial ? true : expanded,
        sidebarWidth: maxSidebarWidth
      })
    }
  }

  renderSidebar = () => {
    const { sidebar, sidebarHeading, sidebarHeadingAction, sidebarIcon, scrollableSidebar } = this.props
    const { expanded, sidebarWidth } = this.state

    const renderHeadingText = () => (
      <Fragment>
        {sidebarIcon && (
          <div className={cx.sidebarHeadingIcon}>
            <SvgIcon icon={sidebarIcon} color='frenchGrayDarker' />
          </div>
        )}
        <div className={cx.sidebarHeadingText}>
          {sidebarHeading}
        </div>
      </Fragment>
    )

    const renderHeadingTextComponent = () => sidebarHeadingAction ? (
      <a onClick={sidebarHeadingAction} className={[cx.sidebarHeading, cx.sidebarHeadingAction].join(' ')}>
        {renderHeadingText()}
      </a>
    ) : (
      <div className={cx.sidebarHeading}>
        {renderHeadingText()}
      </div>
    )

    return (
      <div
        className={cx.sidebar}
        style={{ width: `${expanded ? sidebarWidth : 20}px` }}
      >
        <div style={{ width: `${sidebarWidth}px` }}>
          {sidebarHeading && (typeof sidebarHeading === 'string' ? renderHeadingTextComponent() : (
            <div className={cx.sidebarHeading}>
              {sidebarHeading}
            </div>
          ))}
        </div>
        <div
          className={[cx.sidebarBody, scrollableSidebar ? cx.scrollableSidebar : cx.nonScrollableSidebar].join(' ')}
          style={{ width: `${sidebarWidth}px` }}
        >
          {sidebar}
        </div>
      </div>
    )
  }

  renderContent = () => {
    const { content, contentHeading, contentId } = this.props
    const contentIdAttr = contentId !== '' ? { id: contentId } : {}

    return (
      <div className={cx.content}>
        {contentHeading && typeof contentHeading === 'string' ? (
          <div className={cx.contentHeading}>
            <div className={cx.contentHeadingText}>
              {contentHeading}
            </div>
          </div>
        ) : (
          <div className={cx.contentHeadingElement}>
            {contentHeading}
          </div>
        )}
        <div className={cx.contentBody} {...contentIdAttr}>
          {content}
        </div>
      </div>
    )
  }

  toggleExpanded = () => {
    this.setState({
      initial: false,
      expanded: !this.state.expanded
    })
  }

  render () {
    const { expanded, mobile } = this.state
    return (
      <div className={cx.layout}>
        {this.renderSidebar()}
        <div
          className={[
            cx.splitter,
            expanded ? 'expanded' : 'collapsed',
            mobile ? 'mobile' : 'desktop'
          ].join(' ')}
          onClick={this.toggleExpanded}
        />
        {this.renderContent()}
      </div>
    )
  }
}

export default TwoColumnsLayout
