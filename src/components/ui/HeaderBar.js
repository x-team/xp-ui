// @flow
/* global React$StatelessFunctionalComponent */

import React, { PureComponent } from 'react'

import GenericTooltip from './GenericTooltip'
import SvgIcon from './SvgIcon'

import { size } from '../../utils/helpers'
import theme, { breakpoints } from '../../styles/theme'
import { typeface } from '../../styles/typo'
import { xTeamLogo } from '../../styles/logo'

const cmz = require('cmz')

const gap = '32px'
const wrapper = '1100px'

type Link = {
  label: string,
  href?: string,
  to?: string
}

type Props = {
  links?: Array<Link>,
  appLink?: React$StatelessFunctionalComponent<*>
}

type State = {
  expanded: boolean
}

const cx = {
  wrapper: cmz(
    typeface.text,
    `
      & {
        display: flex
        justify-content: center
        align-items: center
        box-shadow: 0 0 2px rgba(0, 0, 0, .25)
        height: 50px
        width: 100%
        font-size: 14px
        font-weight: 600
        background: ${theme.baseBrighter}
        position: fixed
        top: 0
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          height: 80px
          font-size: 13px
          position: relative
        }
      }
    `
  ),

  expandedWrapper: cmz(`
    @media screen and (max-width: calc(${breakpoints.sm} - 1px)) {
      & {
        height: auto
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15), 0 5px 20px rgba(0, 0, 0, .05), 0 15px 75px rgba(0, 0, 0, .05)
      }
    }
  `),

  innerWrapper: cmz(`
    & {
      display: inherit
      flex-direction: column
      align-items: inherit
      height: inherit
      width: inherit
      max-width: calc(${wrapper} - 2 * ${gap})
      padding: 0 ${gap}
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        justify-content: space-between
        flex-direction: row
      }
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      & {
        max-width: ${wrapper}
        padding: 0
      }
    }
  `),

  hamburger: cmz(`
    & {
      position: absolute
      left: 16px
      top: 19px
      cursor: pointer
      user-select: none
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        display: none
      }
    }
  `),

  expandedHamburger: cmz(`
    left: 18px
    top: 18px
  `),

  logo: cmz(`
    & {
      display: inherit
      flex-shrink: unset
      margin: 13px 0
    }

    & svg {
      height: 24px
      width: 71px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 0
      }

      & svg {
        height: 32px
        width: 94px
      }
    }
  `),

  nav: cmz(`
    & {
      display: none
      justify-content: inherit
      align-items: inherit
      width: inherit
      text-align: center
      margin: 19px 0 32px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        display: inherit
        margin: 0
      }
    }
  `),

  expandedNav: cmz(`
    @media screen and (max-width: calc(${breakpoints.sm} - 1px)) {
      & {
        display: block
      }
    }
  `),

  menu: cmz(`
    & {
      display: inherit
      justify-content: space-around
      width: inherit
      padding: 0
      margin: 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        justify-content: center
        margin: 0
      }
    }
  `),

  profile: cmz(`
    & {
      white-space: nowrap
      text-decoration: none
      text-transform: uppercase
      cursor: pointer
      color: ${theme.typoAnchor}
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }
  `),

  link: cmz(`
    & {
      list-style: none
      margin: 0 0 32px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 0 24px
      }
    }
  `),

  anchor: cmz(`
    & {
      white-space: nowrap
      text-decoration: none
      text-transform: uppercase
      cursor: pointer
      color: ${theme.typoHeaderAnchor}
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }
  `),

  active: cmz(`
    text-decoration: underline
  `)
}

class HeaderBar extends PureComponent<Props, State> {
  state = {
    expanded: false
  }

  renderLinks = () => {
    const { links = [] } = this.props
    return links.map(link => this.renderLink(link))
  }

  renderLink = ({ label, href, to }: Link) => {
    const { appLink: AppLink } = this.props

    if (href) {
      return (
        <li key={label} className={cx.link}>
          <a href={href} target='_blank' className={cx.anchor}>{label}</a>
        </li>
      )
    }

    if (to && AppLink) {
      return (
        <li key={label} className={cx.link}>
          <AppLink to={to} className={cx.anchor} activeClassName={cx.active}>{label}</AppLink>
        </li>
      )
    }
  }

  handleHamburger = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    const { links } = this.props
    const { expanded } = this.state
    return (
      <div className={[cx.wrapper, expanded ? cx.expandedWrapper : ''].join(' ')}>
        {size(links) ? (
          <div className={cx.innerWrapper}>
            <div
              className={[cx.hamburger, expanded ? cx.expandedHamburger : ''].join(' ')}
              onClick={this.handleHamburger}
            >
              {expanded ? (
                <SvgIcon icon='x' color='grayscale' />
              ) : (
                <SvgIcon icon='hamburger' color='monochrome' />
              )}
            </div>
            <div className={cx.logo}>
              {xTeamLogo(78, 32, theme.typoHeading)}
            </div>
            <nav className={[cx.nav, expanded ? cx.expandedNav : ''].join(' ')}>
              <ul className={cx.menu}>
                {this.renderLinks()}
              </ul>
              <GenericTooltip
                message={
                  <span>
                    We currently heavily rely on LinkedIn
                    <br />
                    Profiles to match candidates with
                    <br />
                    potential roles.
                  </span>
                }
              >
                <a
                  className={cx.profile}
                  href='https://www.linkedin.com/in/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Update your profile
                </a>
              </GenericTooltip>
            </nav>
          </div>
        ) : xTeamLogo(78, 32, theme.typoHeading)}
      </div>
    )
  }
}

export default HeaderBar
