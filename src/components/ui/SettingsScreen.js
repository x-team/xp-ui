// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

const cmz = require('cmz')

const cx = {
  main: cmz(`
    height: calc(100vh - 86px)
    position: relative
    display: flex
  `),

  navigation: cmz(`
    box-sizing: border-box
    height: 100%
    width: 315px
    overflow: auto
    background-color: ${theme.baseBright}
    border-right: 2px solid ${theme.lineSilver1}
    padding: 65px 50px 65px 70px
  `),

  heading: cmz(typo.sectionHeading, `
    text-transform: uppercase
    margin: 0 0 40px
    color: ${theme.typoHighlightOnDarkBackground}
  `),

  menu: cmz(typo.baseText, `
    font-size: 16px
    line-height: 1.6
    text-transform: uppercase
    list-style: none
    padding: 0
    margin: 0
    color: ${theme.typoParagraphOnDarkBackground}
  `),

  menuItem: cmz(`
    & {
      margin: 20px 0
    }

    & a {
      text-decoration: none
      color: ${theme.typoParagraphOnDarkBackground}
    }

    & a:hover,
    & a.activeLink {
      color: ${theme.typoHighlightOnDarkBackground}
    }
  `),

  content: cmz(`
    box-sizing: border-box
    height: 100%
    flex: 1
    overflow: auto
    padding: 65px 100px
  `)
}

type Props = {
  menu: Array<*>,
  children?: Element<*>
}

class SettingsScreen extends PureComponent<Props, void> {
  static defaultProps = {
    menu: [],
    children: null
  }

  render () {
    const { menu, children } = this.props
    return (
      <div className={cx.main}>
        <div className={cx.navigation}>
          <h1 className={cx.heading}>Settings</h1>
          <ul className={cx.menu}>
            {menu.map((item, i) => (
              <li key={i} className={cx.menuItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={cx.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default SettingsScreen
