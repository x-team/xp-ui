// @flow

import React, { PureComponent } from 'react'
import type { Element } from 'react'

type Props = {
  heading: Element<*>|string,
  description?: Element<*>|string,
  subheading?: Element<*>|string,
  hasDivider: boolean,
  headingClassName: string
}

const styles = {
  root: 'root',
  withDivider: 'withDivider'
}

class PageTitle extends PureComponent {
  static defaultProps = {
    hasDivider: false
  }

  props: Props

  render () {
    const { heading, subheading, description, hasDivider, headingClassName } = this.props
    const rootStyles = hasDivider ? styles.withDivider : styles.root

    return (
      <div className={rootStyles}>
        <h1 className={`heading ${headingClassName}`}>{heading}</h1>
        {subheading ? <h2 className={styles.subheading}>{subheading}</h2> : null }
        {description ? <div className={styles.description}>{description}</div> : null }
      </div>
    )
  }
}

export default PageTitle
