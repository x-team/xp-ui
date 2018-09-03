// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

const color = {}

const cx = {
  header: cmz(`
    position: relative
    display: flex
    justify-content: center
    width: 100%
    margin: 0
    padding: 20px 0
    background-color: ${color.gray7}
    border-bottom: 1px solid ${color.gray8}
  `),

  linkWrapper: cmz(`
    & {
      margin-right: 20px
      list-style-type: none
    }

    &:last-of-type {
      margin-right: 0
    }
  `),

  link: cmz(`
    & {
      font-family: 'Open Sans', sans-serif
      font-size: 13px
      font-weight: 400
      color: ${color.gray6}
      text-transform: uppercase
      letter-spacing: 1px
      transition: color .5s ease
      cursor: pointer
    }

    &:hover {
      color: ${color.tuna}
    }
  `),

  activeLink: cmz(`
    color: ${color.tuna}
  `)
}

type State = {
  activeLink: string
}

class ProfileHeaderLinks extends PureComponent<any, State> {
  links: Array<Object> = [
    { label: 'Profile', hash: '#profile' },
    { label: 'Portfolio', hash: '#portfolio' },
    { label: 'Contact', hash: '#contact' },
    { label: 'Notes', hash: '#notes' },
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

  get headerLinks (): any {
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
      <ul className={cx.header}>{this.headerLinks}</ul>
    )
  }
}

export default ProfileHeaderLinks
