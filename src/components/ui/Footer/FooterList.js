// @flow

import React, { PureComponent } from 'react'

import typo, { typeface } from '../../../styles/typo'
import theme, { mediaQueries } from '../../../styles/theme'

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

const cx = {
  link: cmz(
    typeface.text,
    `
      & {
        font-size: 16px
        color: ${theme.baseDarker}
        opacity: .7
        text-decoration: none
      }

      &:hover {
        opacity: 1
      }
    `
  ),

  item: cmz(`
    & {
      margin-bottom: 11px
    }

    ${mediaQueries.medium} {
      & {
        margin-top: 11px
      }
    }
  `),

  list: cmz(`
    list-style: none
    margin: 0
    padding: 0
  `),

  title: cmz(
    typo.sectionHeading,
    `
      & {
        font-size: 19px
        text-transform: uppercase
        letter-spacing: normal
        margin: 0 0 30px
      }

      ${mediaQueries.medium} {
        &:not(:nth-child(2)) {
          display: none
        }
      }
    `
  ),

  mobile: cmz(`
    ${mediaQueries.desktop} {
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
