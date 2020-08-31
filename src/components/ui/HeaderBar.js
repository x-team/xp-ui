// @flow
/* global React$StatelessFunctionalComponent */

import React, { PureComponent, Fragment } from 'react'
import ClickOutside from 'react-click-outside'

import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'
import ProfileAvatar from './ProfileAvatar'

import { size } from '../../utils/helpers'
import theme, { breakpoints } from '../../styles/theme'
import { typeface } from '../../styles/typo'
import { xTeamBrand } from '../../styles/logo'

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
  appLink?: React$StatelessFunctionalComponent<*>,
  profileLink?: React$StatelessFunctionalComponent<*>,
  logout?: () => void,
  avatarUrl?: string
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

  link: cmz(`
    & {
      list-style: none
      margin: 0 0 32px
      line-height: 1
    }

    &:last-of-type {
      margin-bottom: 0
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
  `),

  profile: cmz(`
    & {
      display: none
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        display: block
      }
    }
  `),

  profileMenu: cmz(`
    & {
      font-size: 13px
      font-weight: 600
      padding: 24px 0
      margin: 0
      background: #FFFFFF
      border: 1px solid rgba(0, 0, 0, 0.15)
      box-sizing: border-box
      box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15)
    }

    & * {
      margin-bottom: 32px
    }

    & *:last-child {
      margin-bottom: 0
    }
  `),

  profileLink: cmz(`
    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        display: none
      }
    }
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

  handleCloseMenu = () => {
    this.setState({ expanded: false })
  }

  renderProfileMenuItems = (hideOnDesktop?: boolean) => {
    const { logout, profileLink: ProfileLink } = this.props
    const linkClassName = [cx.link, hideOnDesktop ? cx.profileLink : ''].join(' ')
    return (
      <Fragment>
        {ProfileLink && (
          <li className={linkClassName}>
            <ProfileLink className={cx.anchor}>Update your profile</ProfileLink>
          </li>
        )}
        {logout && (
          <li className={linkClassName}>
            <span
              onClick={logout}
              className={cx.anchor}
            >
              Logout
            </span>
          </li>
        )}
      </Fragment>
    )
  }

  render () {
    const { links, avatarUrl } = this.props
    const { expanded } = this.state
    return (
      <div className={[cx.wrapper, expanded ? cx.expandedWrapper : ''].join(' ')}>
        {size(links) ? (
          <ClickOutside className={cx.innerWrapper} onClickOutside={this.handleCloseMenu}>
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
              {xTeamBrand(78, 32, theme.typoHeading)}
            </div>
            <nav className={[cx.nav, expanded ? cx.expandedNav : ''].join(' ')} data-testid='xpui-headerBar-nav'>
              <ul className={cx.menu}>
                {this.renderLinks()}
                {this.renderProfileMenuItems(true)}
              </ul>

              <div className={cx.profile}>
                <Dropdown
                  label={<ProfileAvatar src={avatarUrl} />}
                  targetXOrigin='right'
                  padded
                >
                  <ul className={cx.profileMenu}>
                    {this.renderProfileMenuItems()}
                  </ul>
                </Dropdown>
              </div>
            </nav>
          </ClickOutside>
        ) : (
          <div className={cx.logo}>
            {xTeamBrand(78, 32, theme.typoHeading)}
          </div>
        )}
      </div>
    )
  }
}

export default HeaderBar
