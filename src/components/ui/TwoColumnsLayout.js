// @flow

import React, { PureComponent, Fragment } from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
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
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15)
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

class TwoColumnsLayout extends PureComponent<Props, void> {
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

  renderSidebar = () => {
    const { sidebar, sidebarHeading, sidebarHeadingAction, sidebarWidth, sidebarIcon, scrollableSidebar } = this.props

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
      <div className={cx.sidebar} style={{ width: `${sidebarWidth}px` }}>
        {sidebarHeading && (typeof sidebarHeading === 'string' ? renderHeadingTextComponent() : (
          <div className={cx.sidebarHeading}>
            {sidebarHeading}
          </div>
        )) }
        <div className={[cx.sidebarBody, scrollableSidebar ? cx.scrollableSidebar : cx.nonScrollableSidebar].join(' ')}>
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

  render () {
    return (
      <div className={cx.layout}>
        {this.renderSidebar()}
        {this.renderContent()}
      </div>
    )
  }
}

export default TwoColumnsLayout
