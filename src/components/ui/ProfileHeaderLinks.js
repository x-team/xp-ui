// @flow

import React, { Children, PureComponent } from 'react'

import theme from '../../styles/theme'

import type { Node } from 'react'

const cmz = require('cmz')

const cx = {
  header: cmz(`
    position: relative
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
    margin: 0
    z-index: 3
  `),

  normal: cmz(`
    padding: 20px 0 10px
    background-color: ${theme.baseBright}
    border-bottom: 1px solid ${theme.lineSilver1}
  `),

  smaller: cmz(`
    padding: 10px 0 0
  `),

  itemWrapper: cmz(`
    margin: 0 0 10px
    list-style-type: none
  `),

  link: cmz(`
    & {
      font-family: 'Open Sans', sans-serif
      font-size: 12px
      font-weight: 400
      color: ${theme.baseHighlightBright}
      text-transform: uppercase
      letter-spacing: 1px
      transition: color .5s ease
      cursor: pointer
      padding: 0 20px
    }

    &:hover {
      color: ${theme.typoParagraph}
    }
  `),

  child: cmz(`
    display: inline-block
  `),

  activeLink: cmz(`
    color: ${theme.typoParagraph}
  `)
}

type Props = {
  links: Array<Object>,
  children?: Node
}

type State = {
  activeLink: string
}

class ProfileHeaderLinks extends PureComponent<Props, State> {
  state = {
    activeLink: ''
  }

  static defaultProps = {
    links: []
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.setActiveLink)
    this.setActiveLink()
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.setActiveLink)
  }

  setActiveLink = () => {
    this.setState({
      activeLink: window.location.hash
    })
  }

  scrollToHash = (hash: string) => () => {
    window.location.hash = hash
  }

  openURL = (url: string) => () => {
    window.open(url, '_blank')
  }

  renderLinks = (): any => {
    const { activeLink } = this.state
    const { links } = this.props

    return links.map(({ label, hash, url }) => {
      const linkClassName = [[cx.link], hash === activeLink && cx.activeLink].filter(Boolean).join(' ')
      const clickHandler = hash ? this.scrollToHash(hash) : this.openURL(url)

      return (
        <li key={hash || url} className={cx.itemWrapper}>
          <span className={linkClassName} onClick={clickHandler}>
            {label}
          </span>
        </li>
      )
    })
  }

  renderChildren = (): any => {
    const { children } = this.props

    return Children.map(children, (child, i) => (
      <li key={i} className={cx.itemWrapper}>
        <div className={cx.child}>
          {child}
        </div>
      </li>
    ))
  }

  render () {
    const classNames = [cx.header, this.props.smaller ? cx.smaller : cx.normal].join(' ')
    return (
      <ul className={classNames}>
        {this.renderLinks()}
        {this.renderChildren()}
      </ul>
    )
  }
}

export default ProfileHeaderLinks
