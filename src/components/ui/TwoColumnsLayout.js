// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

const dimensions = {
  screenHeight: '100vh',
  screenHeaderHeight: '56px',
  sidebarWidth: '385px',
  mainHeadingHeight: '58px'
}

const cx = {
  layout: cmz(`
    height: calc(${dimensions.screenHeight} - ${dimensions.screenHeaderHeight})
    min-height: 100%
    position: relative
    display: flex
  `),

  sidebar: cmz(`
    box-sizing: border-box
    height: 100%
    width: ${dimensions.sidebarWidth}
    background-color: ${theme.baseBright}
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15)
    z-index: 1
  `),

  sidebarHeading: cmz(typeface.extraHeading, `
    color: ${theme.typoHighlightOnDarkBackground}
    text-transform: uppercase
    font-size: 1.0625rem
    height: ${dimensions.mainHeadingHeight}
    background-color: ${theme.baseBright}
    border-bottom: 1px solid ${theme.lineSilver2}
    display: flex
    align-items: center
  `),

  sidebarHeadingIcon: cmz(`
    & {
      padding: 0 27px 0 16px
    }
    & svg {
      display: block
    }
  `),

  sidebarBody: cmz(`
    height: calc(100% - ${dimensions.mainHeadingHeight})
    overflow: auto
    padding: 40px
    box-sizing: border-box
  `),

  content: cmz(`
    height: 100%
    flex: 1
    overflow: auto
  `),

  contentHeading: cmz(typeface.extraHeading, `
    color: ${theme.typoHeading}
    font-size: 1.5rem
    height: ${dimensions.mainHeadingHeight}
    background-color: ${theme.baseBright}
    display: flex
    align-items: center
    padding: 0 0 0 60px
  `),

  contentBody: cmz(`
    height: calc(100% - ${dimensions.mainHeadingHeight})
    overflow: auto
    padding: 40px 60px
    box-sizing: border-box
  `)
}

type Props = {
  sidebar?: Element<*>,
  sidebarHeading?: string,
  content?: Element<*>,
  contentHeading?: string
}

class TwoColumnsLayout extends PureComponent<Props, void> {
  static defaultProps = {
    sidebar: null,
    sidebarHeading: '',
    content: null,
    contentHeading: ''
  }

  render () {
    const { sidebar, sidebarHeading, content, contentHeading } = this.props

    return (
      <div className={cx.layout}>
        <div className={cx.sidebar}>
          <div className={cx.sidebarHeading}>
            <div className={cx.sidebarHeadingIcon}>
              <SvgIcon icon='filters' color='frenchGrayDarker' />
            </div>
            {sidebarHeading}
          </div>
          <div className={cx.sidebarBody}>
            {sidebar}
          </div>
        </div>
        <div className={cx.content}>
          <div className={cx.contentHeading}>
            {contentHeading}
          </div>
          <div className={cx.contentBody}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default TwoColumnsLayout
