// @flow
/* global React$StatelessFunctionalComponent */

import React, { PureComponent } from 'react'

import GenericTooltip from './GenericTooltip'

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
  to?: string,
  active?: boolean
}

type Props = {
  links?: Array<Link>,
  appLink?: React$StatelessFunctionalComponent<*>
}

const cx = {
  wrapper: cmz(
    typeface.text,
    `
      display: flex
      justify-content: center
      align-items: center
      box-shadow: 0 0 2px rgba(0, 0, 0, .25)
      height: 80px
      width: 100%
      font-size: 13px
      font-weight: 600
      background: ${theme.baseBrighter}
    `
  ),

  innerWrapper: cmz(`
    & {
      display: inherit
      justify-content: space-between
      align-items: inherit
      height: inherit
      width: inherit
      max-width: calc(${wrapper} - 2 * ${gap})
      padding: 0 ${gap}
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      & {
        max-width: ${wrapper}
        padding: 0
      }
    }
  `),

  logo: cmz(`
    display: inherit
    flex-shrink: unset
  `),

  nav: cmz(`
    display: inherit
    justify-content: inherit
    align-items: inherit
    width: inherit
  `),

  menu: cmz(`
    & {
      display: inherit
      justify-content: space-around
      width: inherit
      padding: 0
      margin: 0 12px
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
      margin: 0 6px
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

class HeaderBar extends PureComponent<Props> {
  renderLinks = () => {
    const { links = [] } = this.props
    return links.map(link => this.renderLink(link))
  }

  renderLink = ({ label, href, to, active }: Link) => {
    const { appLink: AppLink } = this.props
    const anchorClass = active ? [cx.anchor, cx.active].join(' ') : cx.anchor

    if (href) {
      return (
        <li key={label} className={cx.link}>
          <a href={href} className={anchorClass}>{label}</a>
        </li>
      )
    }

    if (to && AppLink) {
      return (
        <li key={label} className={cx.link}>
          <AppLink to={to} className={anchorClass}>{label}</AppLink>
        </li>
      )
    }
  }

  render () {
    console.log('###props', this.props)
    const { links } = this.props
    console.log('###links', links, size(links))
    return (
      <div className={cx.wrapper}>
        {size(links) ? (
          <div className={cx.innerWrapper}>
            <div className={cx.logo}>
              {xTeamLogo(78, 32, theme.typoHeading)}
            </div>
            <nav className={cx.nav}>
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
