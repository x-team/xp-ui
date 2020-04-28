// @flow

import React from 'react'
import { compiler as markdownCompiler } from 'markdown-to-jsx'

import JobSkills from './JobSkills'

import theme, { breakpoints } from '../../styles/theme'
import typo from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      & {
        font-size: 16px
        font-weight: normal
      }

      @media screen and (min-width: ${breakpoints.sm}) {
        & {
          font-size: 24px
        }
      }
    `
  ),

  content: cmz(`
    & :last-child {
      margin-bottom: 0
    }
  `),

  name: cmz(`
    & {
      color: ${theme.typoHeading}
      font-size: 24px
      line-height: 1.55
      letter-spacing: -.05em
      margin: 0 0 16px
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 42px
        margin: 0 0 24px
      }
    }
  `),

  h2: cmz(`
    & {
      margin: 24px 0 16px
      font-size: 18px
      letter-spacing: -.02em
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 32px 0 24px
        font-size: 24px
      }
    }
  `),

  h3: cmz(`
    & {
      margin: 20px 0 14px
      font-size: 16px
      letter-spacing: -.02em
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 24px 0 20px
        font-size: 20px
      }
    }
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
    & {
      margin: 16px 0
      line-height: 1.4
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 24px 0
      }
    }
  `),

  blockquote: cmz(``),

  ul: cmz(`
    & {
      margin: 16px 0 16px 6px
      padding: 0
      list-style: none
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 24px 0 24px 12px
      }
    }
  `),

  ol: cmz(`
    & {
      margin: 16px 0 16px 6px
      padding: 0
      list-style: none
      counter-reset: job-details
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        margin: 24px 0 24px 12px
      }
    }
  `),

  li: cmz(`
    & {
      font-size: 16px
      line-height: 1.25
      counter-increment: job-details
    }

    &::before {
      color: ${theme.typoSubheading}
      margin: 0 6px 0 0
    }

    ul &::before {
      content: '▪'
    }

    ol &::before {
      content: counter(job-details) '.'
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        font-size: 20px
      }

      &::before {
        margin: 0 12px 0 0
      }
    }
  `),

  code: cmz(`
    & {
      background: ${theme.baseBright}
      padding: 6px 8px
      border-radius: 4px
      margin: 24px 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        padding: 4px 12px
        margin: 24px 0
      }
    }
  `),

  pre: cmz(`
    & {
      background: ${theme.baseBright}
      padding: 6px 8px
      font-size: 14px
      border-radius: 4px
      overflow-x: auto
      line-height: 1.4
    }

    & > code {
      font-size: inherit
      padding: 0
    }

    @media screen and (min-width: ${breakpoints.sm}) {
      & {
        padding: 6px 12px
        font-size: 20px
      }
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
      <h1 data-testid='xpui-jobDetails-heading' className={cx.name}>{name}</h1>
      {skills && (
        <JobSkills skills={skills} />
      )}
      <div className={cx.content}>
        {htmlContent()}
      </div>
    </div>
  ) : null
}

export default JobDetails
