// @flow

import React, { PureComponent } from 'react'

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
    color: ${theme.typoHighlightOnDarkBackground}
    text-transform: uppercase
    font-size: 1.0625rem
    width: 100%
    height: 58px
    background-color: ${theme.baseBright}
    border-bottom: 1px solid ${theme.lineSilver2}
    display: flex
    align-items: center
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
    margin: 0 15px
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
  sidebarWidth: number,
  sidebarIcon: Icon,
  scrollableSidebar: boolean,
  content: Element<*>,
  contentHeading: string
}

class TwoColumnsLayout extends PureComponent<Props, void> {
  static defaultProps = {
    sidebar: null,
    sidebarHeading: '',
    sidebarWidth: 385,
    sidebarIcon: '',
    scrollableSidebar: true,
    content: null,
    contentHeading: ''
  }

  renderSidebar = () => {
    const { sidebar, sidebarHeading, sidebarWidth, sidebarIcon, scrollableSidebar } = this.props
    return (
      <div className={cx.sidebar} style={{ width: `${sidebarWidth}px` }}>
        {sidebarHeading && (
          <div className={cx.sidebarHeading}>
            {sidebarIcon && (
              <div className={cx.sidebarHeadingIcon}>
                <SvgIcon icon={sidebarIcon} color='frenchGrayDarker' />
              </div>
            )}
            <div className={cx.sidebarHeadingText}>
              {sidebarHeading}
            </div>
          </div>
        )}
        <div className={[cx.sidebarBody, scrollableSidebar ? cx.scrollableSidebar : cx.nonScrollableSidebar].join(' ')}>
          {sidebar}
        </div>
      </div>
    )
  }

  renderContent = () => {
    const { content, contentHeading } = this.props
    return (
      <div className={cx.content}>
        {contentHeading && (
          <div className={cx.contentHeading}>
            <div className={cx.contentHeadingText}>
              {contentHeading}
            </div>
          </div>
        )}
        <div className={cx.contentBody}>
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
