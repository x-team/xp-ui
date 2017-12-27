// @flow

import React, { PureComponent } from 'react'

import theme, { breakpoints } from '../../../styles/theme'

const cmz = require('cmz')

type Props = {
  title: string,
  items: Array<{
    label: string,
    url: string
  }>
}

const cx = {
  link: cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: ${theme.baseDarker};
    text-decoration: none;
  `),
  item: cmz(`
    margin-bottom: 1em;
  `,
  `
  @media screen and (max-width: ${breakpoints.md}) { & {
    margin: 1em 0;
  } }
  `),
  list: cmz(`
    list-style: none;
    margin: 0;
    padding: 0;
  `),
  title: cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${theme.baseDarker}
    margin: 0 0 2em;
  `,
  `
  @media screen and (max-width: ${breakpoints.md}) { &:not(:nth-child(2)) {
    display: none
  } }
  `),
  mobile: cmz(`
    @media screen and (min-width: ${breakpoints.md}) { & {
      display: none
    } }
  `)
}

export default class FooterList extends PureComponent<Props> {
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
