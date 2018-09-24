// @flow

import React, { PureComponent } from 'react'

import theme from '../../styles/theme'

const cmz = require('cmz')

const cx = {
  header: cmz(`
    position: relative
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
    margin: 0
    padding: 20px 0 10px
    background-color: ${theme.baseBright}
    border-bottom: 1px solid ${theme.lineSilver1}
    z-index: 3
  `),

  linkWrapper: cmz(`
    margin: 0 0 10px
    list-style-type: none
  `),

  link: cmz(`
    & {
      font-family: 'Open Sans', sans-serif
      font-size: 13px
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

  activeLink: cmz(`
    color: ${theme.typoParagraph}
  `)
}

type State = {
  activeLink: string
}

class ProfileHeaderLinks extends PureComponent<any, State> {
  links: Array<Object> = [
    { label: 'Profile', hash: '#profile' },
    { label: 'Portfolio', hash: '#portfolio' },
    { label: 'Notes', hash: '#notes' },
    { label: 'Contact', hash: '#contact' },
    { label: 'Ads', hash: '#ads' }
  ]

  state = {
    activeLink: ''
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

  headerLinks = (): any => {
    const { activeLink } = this.state

    return this.links.map(({ label, hash }) => {
      const linkClassName = [[cx.link], hash === activeLink && cx.activeLink].filter(Boolean).join(' ')

      return (
        <li key={hash} className={cx.linkWrapper}>
          <span className={linkClassName} onClick={this.scrollToHash(hash)}>
            {label}
          </span>
        </li>
      )
    })
  }

  render () {
    return (
      <ul className={cx.header}>{this.headerLinks()}</ul>
    )
  }
}

export default ProfileHeaderLinks
