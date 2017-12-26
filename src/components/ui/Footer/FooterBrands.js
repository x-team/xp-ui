// @flow

import React, { PureComponent } from 'react'

import { breakpoints } from '../../../styles/theme'
import typo from '../../../styles/typo'

const cmz = require('cmz')

type Props = {
  message: string,
  brands: Array<{
    title: string,
    image: string,
    url: string
  }>
}

const cx = {
  logos: cmz(`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  `),
  brand: cmz(`
    line-height: 3rem;
    margin-right: 1rem;
    display: inline-block;
    vertical-align: middle;
  `,
  `&:last-child { margin-right: 0; }
  @media screen and (min-width: ${breakpoints.md}) { & {
    line-height: 4rem;
    margin-right: 3rem;
  } }
  `),
  image: cmz(`
    max-height: 4rem;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    opacity: 0.8;
    transition: all .3s ease-in;
  `),
  brandContainer: cmz(`
    margin: 1.25rem auto;
  `),
  message: cmz(
    `
    font-size: .875rem;
    font-weight: 400;
    text-transform: uppercase;
    opacity: .5;
    margin: 0;
  `,
    typo.baseText
  )
}

export default class FooterBrands extends PureComponent<Props> {
  render () {
    const { message, brands } = this.props
    return (
      <div>
        <h4 className={cx.message}>{message}</h4>
        <div className={cx.brandContainer}>
          <ul className={cx.logos}>
            {brands.map((item, id) => {
              return (
                <li className={cx.brand} key={id}>
                  <a href={item.url}>
                    <img className={cx.image} src={item.image} alt={item.title} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
