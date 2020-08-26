// @flow

import React from 'react'
import cmz from 'cmz'

import theme from '../../styles/theme'

const cx = {
  card: cmz(`
    border: 1px solid ${theme.lineSilver2}
    display: flex
    flex-direction: column
    max-width: 340px
    align-items: stretch
  `),

  poster: cmz(`
    width: 100%
  `),

  content: cmz(`
    & {
      padding: 24px
      display: flex
      flex: 1
      flex-direction: column
    }

    & *:last-child {
      margin: 0
    }
  `),

  category: cmz(`
    font-family: Open Sans
    font-weight: bold
    font-size: 12px
    line-height: 16px
    color: ${theme.typoGrayed}
    margin: 0 0 24px
    text-transform: uppercase
  `),

  title: cmz(`
    & {
      font-family: Open Sans
      font-weight: bold
      font-size: 18px
      line-height: 25px
      color: ${theme.typoHeading}
      margin: 0 0 12px
      text-transform: uppercase
    }

    & a,
    & a:hover {
      color: ${theme.typoHeading}
      text-decoration: none
    }
  `),

  excerpt: cmz(`
    font-family: Source Sans Pro
    font-weight: normal
    font-size: 15px
    line-height: 150%
    color: ${theme.typoGrayed}
    margin: 0
    flex: 1
    margin: 0 0 24px
    display: block
  `),

  url: cmz(`
    & {
      font-family: Source Sans Pro
      font-weight: 600
      font-size: 16px
      line-height: 150%
      color: ${theme.typoAnchor}
      text-decoration: none
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }
  `)
}

type Props = {
  poster?: string,
  category?: string,
  title?: string,
  excerpt?: string,
  url?: string
}

const ArticleCard = ({
  poster,
  category,
  title,
  excerpt,
  url
}: Props) => poster || category || title || excerpt || url ? (
  <section className={cx.card}>
    {poster && (
      <img src={poster} className={cx.poster} />
    )}
    {(category || title || excerpt || url) && (
      <div className={cx.content}>
        {category && (
          <div className={cx.category}>{category}</div>
        )}
        {title && (
          <h1 className={cx.title}>
            {url ? <a href={url}>{title}</a> : title}
          </h1>
        )}
        {excerpt && (
          <p className={cx.excerpt}>{excerpt}</p>
        )}
        {url && (
          <a href={url} className={cx.url}>Learn more &gt;</a>
        )}
      </div>
    )}
  </section>
) : null

export default ArticleCard
