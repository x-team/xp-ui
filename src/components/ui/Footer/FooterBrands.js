// @flow

import React, { PureComponent } from 'react'

import theme, { mediaQueries } from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

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
    & {
      list-style: none
      margin: 0
      padding: 0
      display: flex
    }

    ${mediaQueries.medium} {
      & {
        display: block
      }
    }
  `),

  brand: cmz(`
    & {
      line-height: 3rem
      margin-right: 1rem
      display: inline-block
      vertical-align: middle
    }

    &:last-child {
      margin-right: 0
    }

    ${mediaQueries.desktop} {
      & {
        line-height: 4rem
        margin-right: 3rem
      }
    }
  `),

  image: cmz(`
    max-height: 4rem
    display: inline-block
    vertical-align: middle
    max-width: 100%
    opacity: 1
    transition: all .3s ease-in
  `),

  brandContainer: cmz(`
    ${mediaQueries.medium} {
      & {
        margin: 1.5rem auto
      }
    }

    ${mediaQueries.desktop} {
      & {
        margin: 1.25rem auto
      }
    }
  `),

  message: cmz(
    typeface.semiHeading,
    `
      & {
        font-size: 14px
        font-weight: 400
        color: ${theme.baseDarker}
        text-transform: uppercase
        opacity: .5
        margin: 0
      }

      ${mediaQueries.medium} {
        & {
          line-height: 1.715
        }
      }
    `
  )
}

class FooterBrands extends PureComponent<Props> {
  static defaultProps = {
    brands: []
  }

  render () {
    const { message, brands } = this.props

    return (
      <div>
        <h4 className={cx.message}>{message}</h4>
        <div className={cx.brandContainer}>
          <ul className={cx.logos}>
            {brands.map((item, id) => (
              <li className={cx.brand} key={id}>
                <a href={item.url}>
                  <img className={cx.image} src={item.image} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterBrands
