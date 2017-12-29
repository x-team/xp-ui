// @flow

import React, { PureComponent } from 'react'

import { typeface } from '../../../styles/typo'
import theme, { breakpoints as brk } from '../../../styles/theme'

const cmz = require('cmz')

type MenuItem = {
  label: string,
  url: string,
  mobileOnly: ?boolean
}

type Props = {
  title: string,
  items: Array<MenuItem>
}

const breakpoints = {
  medium: `@media screen and (max-width: ${brk.md})`,
  desktop: `@media screen and (min-width: ${brk.md})`
}

const cx = {
  link: cmz(
    typeface.text,
    `
      font-size: 1rem
      font-weight: 400
      color: ${theme.baseDarker}
      text-decoration: none
    `
  ),

  item: cmz(`
    & {
      margin-bottom: 1em
    }

    ${breakpoints.medium} {
      & {
        margin: 1em 0
      }
    }
  `),

  list: cmz(`
    list-style: none
    margin: 0
    padding: 0
  `),

  title: cmz(
    typeface.text,
    `
      & {
        font-size: 1.25rem
        font-weight: 400
        text-transform: uppercase
        color: ${theme.baseDarker}
        margin: 0 0 2em
      }

      ${breakpoints.medium} {
        &:not(:nth-child(2)) {
          display: none
        }
      }
    `
  ),

  mobile: cmz(`
    ${breakpoints.desktop} {
      & {
        display: none
      }
    }
  `)
}

class FooterList extends PureComponent<Props> {
  render () {
    const { items, title } = this.props
    return (
      <div>
        <h4 className={cx.title}>{title}</h4>
        <ul className={cx.list}>
          {items.map((item, id) => {
            const mobile = item.mobileOnly ? cx.mobile : ''
            return (
              <li key={id} className={`${cx.item} ${mobile}`}>
                <a href={item.url} className={cx.link}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FooterList
