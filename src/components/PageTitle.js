// @flow

import React, { PureComponent } from 'react'
import cmz from 'cmz'
import theme, { breakpoints } from '../styles/theme'

import type { Element } from 'react'

type Props = {
 heading: Element<*>|string,
 description?: Element<*>|string,
 subheading?: Element<*>|string,
 hasDivider: boolean,
 headingClassName: string
}

const styles = {
  root: cmz(`
    & {
      white-space: pre-line;
      margin: 0 0 35px 0;
      text-align: center;
    }
    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        margin: 0 0 35px 0;
      }
    }
  `),

  subheading: cmz(`
    margin: 0 0 35px 0;
    font-weight: 700;
  `),

  description: cmz(`
    & {
      margin-top: 35px;
    }
    &, & * {
      font-size: 24px;
      line-height: 1.3em;
    }
  `),

  withDivider: cmz(`
    & {
      margin-bottom: 60px;
      position: relative;
    }
    &:after {
      content: '';
      position: absolute;
      width: 3.5rem;
      height: 4px;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.red[0]};
    }
    @media screen and (max-width: ${breakpoints.sm}) {
      & {
        margin-bottom: 60px;
      }
    }
 `)
}

class PageTitle extends PureComponent<Props> {
  static defaultProps = {
    hasDivider: false,
    headingClassName: ''
  }

  render () {
    const { heading, subheading, description, hasDivider, headingClassName } = this.props
    const dividerStyle = hasDivider && styles.withDivider

    return (
      <div className={[ styles.root, dividerStyle ].join(' ')}>
        <h1 className={`heading ${headingClassName}`}>{heading}</h1>
        {subheading ? <h2 className={styles.subheading}>{subheading}</h2> : null }
        {description ? <div className={styles.description}>{description}</div> : null }
      </div>
    )
  }
}

export default PageTitle
