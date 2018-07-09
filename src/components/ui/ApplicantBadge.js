import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import Avatar from './Avatar'
import SvgIcon from './SvgIcon'
import TruncatedList from './TruncatedList'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

type Props = {
  avatar?: Element<*>,
  email: ?string,
  active: ?boolean,
  children?: Element<*> | string
}

const cmz = require('cmz')

const cardTheme = {
  mode: cmz(
    typo.baseText,
    `
      border: 1px solid ${theme.lineSilver2}
      // max-width: 510px
      padding: 30px
      display: grid
      grid-template: 'avatar name name control' 'avatar infos infos infos' 'tags tags tags tags'
      grid-template-columns: 90px 2fr 1fr
      grid-template-rows: minmax(20px, auto) auto auto
      grid-gap: 20px
      margin: 0 10px
    `
  ),
  active: cmz(`
    border: 1px solid ${theme.baseRed}
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15)
    margin: 0
  `),
  name: cmz(typo.badgeHeading,
    `
      grid-area: name
      display: flex
      align-items: flex-end
    `
  ),
  avatar: cmz(`
    grid-area: avatar
    width: 90px
    height: 90px
  `),
  controls: cmz(`
    grid-area: control
    display: flex
    visibility: hidden
    opacity: 0
    transition: visibility 0s linear 0.2s, opacity 0.2s linear
  `),
  control: cmz(`
    & {
      display: inline-block
      padding: 0
      margin: 0 0 0 5px
      border: 0
      border-radius: 2px
      cursor: pointer
      width: 20px
      height: 20px
      text-align: center
      line-height: 1
    }

    &:hover {
      background: ${theme.baseRed}
    }

    &:hover svg g,
    &:hover svg polyline {
      stroke: white
    }
  `),
  infos: cmz(`
    grid-area: infos
    width: 100%
    display: flex
    flex-wrap: wrap
    align-items: flex-end
    margin: 0 0 -10px
  `),
  info: cmz(typo.baseText,
    `
      margin: 0 40px 10px 0
      white-space: nowrap
    `
  ),
  moreinfos: cmz(`
    & {
      font-size: 14px
      margin: 0 0 10px 0
      flex: 1
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),
  label: cmz(`
    display: block
    color: ${theme.typoLabel}
  `),
  value: cmz(`
    display: block
    color: ${theme.typoParagraph}
  `),
  tags: cmz(`
    font-size: 14px
    grid-area: tags
    width: 100%
    display: flex
    flex-wrap: wrap
    align-items: start
    margin: 0 0 -10px
  `),
  tag: cmz(`
    border: 1px solid ${theme.lineSilver2}
    border-radius: 3px
    padding: 0 10px
    text-transform: uppercase
    margin: 0 10px 10px 0
    white-space: nowrap
    color: ${theme.typoParagraph}
  `),
  moretags: cmz(`
    & {
      border: none
      padding: 0 0 0 20px
      text-transform: initial
      margin: 0 0 10px 0
      flex: 1
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),
  children: cmz(`
    grid-column: 2 / -1;
    grid-row: 2 / -1;
  `)
}

cardTheme.displayControlsOnHover = cmz(`
  &:hover .${cardTheme.controls} {
    visibility: visible
    opacity: 1
    transition-delay: 0s
  }
`)

const tabularTheme = {} // to do:

class ApplicantBadge extends PureComponent<Props> {
  static defaultProps = {
    mode: 'card',
    active: false
  }

  render () {
    const { mode, active, name, email, info, tags, children } = this.props
      // avatar,

    const cx = mode === 'card' ? cardTheme : tabularTheme

    const mapInfosToRender = (infos) => (
      <TruncatedList
        inserted
        visible={4}
        listClass={cx.infos}
        itemClass={cx.info}
        items={infos && info.map((info, i) => (
          <span>
            <span className={cx.label}>{info.label}</span>
            <span className={cx.value}>{info.value}</span>
          </span>
        ))}
        viewMore={(amount, action) => (
          <li className={[cx.info, cx.moreinfos].join(' ')} onClick={action}>
            {`+${amount} info`}
          </li>
        )}
      />
    )

    const mapTagsToRender = (tags) => (
      <TruncatedList
        inserted
        visible={5}
        items={tags}
        listClass={cx.tags}
        itemClass={cx.tag}
        viewMore={(amount, action) => (
          <li className={[cx.tag, cx.moretags].join(' ')} onClick={action}>
            {`+${amount} more`}
          </li>
        )}
      />
    )

    const handleClick = () => {
      const { id, onClick } = this.props
      onClick && onClick(id)
    }

    return (
      <div
        onClick={handleClick}
        className={[cx.mode, cx.displayControlsOnHover, active ? cx.active : ''].join(' ')}
      >
        <div className={cx.name}>{name || email}</div>
        <div className={cx.avatar}>
          <Avatar
            src={`https://www.gravatar.com/avatar/${md5(email)}?s=90`}
            email={name ? `${name}'s avatar` : 'avatar'}
            size={90}
          />
        </div>
        <div className={cx.controls}>
          <span className={cx.control}>
            <SvgIcon icon='check' />
          </span>
          <span className={cx.control}>
            <SvgIcon icon='x' />
          </span>
        </div>
        {mapInfosToRender(info)}
        {mapTagsToRender(tags)}
        <div className={cx.children}>
          {children}
        </div>
      </div>
    )
  }
}

export default ApplicantBadge
