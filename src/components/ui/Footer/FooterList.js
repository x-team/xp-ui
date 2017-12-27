// @flow

import React, { PureComponent } from 'react'

import theme from '../../../styles/theme'

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
    margin-bottom: .5em;
  `,
  `
  @media screen and (max-width: 1024px) { & {
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
  @media screen and (max-width: 1024px) { &:not(:nth-child(2)) {
    display: none
  } }
  `),
}

export default class FooterList extends PureComponent<Props> {
  render () {
    const { items, title } = this.props
    return (
      <div>
        <h4 className={cx.title}>{title}</h4>
        <ul className={cx.list}>
          {items.map((item, id) => {
            return (
              <li key={id} className={cx.item}>
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
