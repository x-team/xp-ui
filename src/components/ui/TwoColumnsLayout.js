// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

import type { Element } from 'react'

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
    margin: 0 0 0 15px
  `),

  sidebarBody: cmz(`
    max-height: 100%
    overflow: auto
    padding: 40px
    box-sizing: border-box
    flex: 1 0 0
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
  `),

  contentBody: cmz(`
    max-height: 100%
    overflow: auto
    padding: 40px 60px
    box-sizing: border-box
    flex: 1 0 0
  `)
}

type Props = {
  sidebar?: Element<*>,
  sidebarHeading?: string,
  sidebarWidth?: number,
  sidebarIcon?: string,
  content?: Element<*>,
  contentHeading?: string
}

class TwoColumnsLayout extends PureComponent<Props, void> {
  static defaultProps = {
    sidebar: null,
    sidebarHeading: '',
    sidebarWidth: 385,
    sidebarIcon: '',
    content: null,
    contentHeading: ''
  }

  render () {
    const { sidebar, sidebarHeading, sidebarWidth, sidebarIcon, content, contentHeading } = this.props

    return (
      <div className={cx.layout}>
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
          <div className={cx.sidebarBody}>
            {sidebar}
          </div>
        </div>
        <div className={cx.content}>
          {contentHeading && (
            <div className={cx.contentHeading}>
              {contentHeading}
            </div>
          )}
          <div className={cx.contentBody}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default TwoColumnsLayout
