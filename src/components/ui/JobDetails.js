// @flow

import React from 'react'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import JobSkills from './JobSkills'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      font-size: 24px
      font-weight: normal
    `
  ),

  name: cmz(`
    color: ${theme.typoHeading}
    font-size: 1.75em
    line-height: 1.55
    letter-spacing: -.05em
    margin: 0 0 .57144em
  `),

  h2: cmz(`
    margin: 1.33333em 0 1em
    font-size: 1em
    letter-spacing: -.02em
  `),

  h3: cmz(`
    margin: 1.2em 0 1em
    font-size: .833333em
    letter-spacing: -.02em
  `),

  a: cmz(`
    & {
      color: ${theme.typoAnchor}
    }

    &:hover {
      color: ${theme.typoAnchorHover}
    }
  `),

  p: cmz(`
    margin: 1em 0
    line-height: 1.4
  `),

  blockquote: cmz(``),

  ul: cmz(`
    margin: 1em 0 1em .5em
    padding: 0
    list-style: none
  `),

  ol: cmz(`
    margin: 1em 0 1em .5em
    padding: 0
    list-style: none
    counter-reset: job-details
  `),

  li: cmz(`
    & {
      font-size: .833333em
      line-height: 1.25
      counter-increment: job-details
    }

    &::before {
      color: ${theme.typoSubheading}
      margin: 0 .6em 0 0
    }

    ul &::before {
      content: '▪'
    }

    ol &::before {
      content: counter(job-details) '.'
    }
  `),

  code: cmz(`
    background: ${theme.baseBright}
    padding: 4px .5em
    border-radius: 4px
    margin: 1em 0
  `),

  pre: cmz(`
    & {
      background: ${theme.baseBright}
      padding: .3em .6em
      font-size: .833333em
      border-radius: 4px
      overflow-x: auto
    }

    & > code {
      font-size: inherit
      padding: 0
    }
  `)
}

type Props = {
  name?: string,
  skills?: string,
  description?: string
}

const JobDetails = ({ name = '', description = '', skills = '' }: Props) => {
  const Heading2 = ({ children, ...props }) => (
    <h2 {...props}>{children}</h2>
  )

  const Heading3 = ({ children, ...props }) => (
    <h3 {...props}>{children}</h3>
  )

  const htmlContent = () => {
    try {
      return markdownCompiler(description, {
        overrides: {
          h1: {
            component: Heading2,
            props: {
              className: cx.h2
            }
          },
          h2: {
            component: Heading3,
            props: {
              className: cx.h3
            }
          },
          h3: {
            props: {
              className: cx.h3
            }
          },
          a: {
            props: {
              className: cx.a
            }
          },
          p: {
            props: {
              className: cx.p
            }
          },
          blockquote: {
            props: {
              className: cx.blockquote
            }
          },
          ul: {
            props: {
              className: cx.ul
            }
          },
          ol: {
            props: {
              className: cx.ol
            }
          },
          li: {
            props: {
              className: cx.li
            }
          },
          code: {
            props: {
              className: cx.code
            }
          },
          pre: {
            props: {
              className: cx.pre
            }
          }
        }
      })
    } catch (err) {
      return description
    }
  }

  return name ? (
    <div className={cx.wrapper}>
      <h1 className={cx.name}>{name}</h1>
      {skills && (
        <JobSkills skills={skills} />
      )}
      {htmlContent()}
    </div>
  ) : null
}

export default JobDetails
