import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import Avatar from './Avatar'
import TruncatedList from './TruncatedList'
import Dropdown from './Dropdown'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

type Info = {
  value: string,
  label: string,
  tip?: string
}

type Action = {
  icon?: Function,
  onClick?: Function,
  render?: Function,
  dropdownClassName?: string,
  tooltipClassName?: string
}

type Props = {
  id: number,
  mode?: string,
  active?: boolean,
  name?: string,
  email: string,
  info: Array<Info>,
  tags: Array<string>,
  avatar?: Element<*>,
  children?: Element<*> | string,
  onClick?: Function,
  actions?: Array<Action>
}

const cmz = require('cmz')

const listTheme = {
  mode: cmz(
    typo.baseText,
    `
      & {
        transition: all 0.4s ease-out
        background: ${theme.baseBrighter}
        border: 1px solid ${theme.lineSilver2}
        padding: 30px
        display: grid
        grid-template: 'avatar name control' 'avatar infos infos' 'tags tags tags'
        grid-template-columns: 90px 1fr auto
        grid-template-rows: minmax(20px, auto) auto auto
        grid-gap: 15px
        margin: 0 10px
        cursor: pointer
      }

      &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)
      }
    `
  ),

  active: cmz(`
    transition: all 0.2s ease-in
    border: 1px solid ${theme.baseRed}
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)
    margin: 0
    padding: 30px 40px
  `),

  name: cmz(typo.badgeHeading,
    `
      grid-area: name
      display: flex
      align-items: flex-end
      font-size: 17px
    `
  ),

  avatar: cmz(`
    grid-area: avatar
    width: 90px
    height: 90px
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

  controls: cmz('controls', `
    grid-area: control
    display: flex
    visibility: hidden
  `),

  displayControlsOnHover: cmz(`
    &:hover .controls {
      visibility: visible
    }
  `),

  infos: cmz(`
    grid-area: infos
    width: 100%
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    margin: 0 0 -10px
  `),

  info: cmz(typo.baseText,
    `
      & {
        margin: 0 20px 10px 0
      }

      &:last-of-type {
        margin-right: 0
      }
    `
  ),

  moreinfos: cmz(`
    & {
      color: ${theme.typoLabel}
      font-size: 17px
      margin: 0 0 10px 0
      cursor: pointer
      align-self: flex-end
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  label: cmz(`
    display: block
    color: ${theme.typoLabel}
    white-space: nowrap
    line-height: 1.2
    font-size: 17px
  `),

  value: cmz(`
    display: block
    color: ${theme.typoParagraph}
    line-height: 1.2
    font-size: 17px
    white-space: normal
  `),

  tip: cmz(`
    font-size: 15px
    color: ${theme.typoParagraph}
    line-height: 1.4
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
    & {
      border: 1px solid ${theme.lineSilver2}
      border-radius: 3px
      padding: 0 10px
      text-transform: uppercase
      margin: 0 10px 10px 0
      white-space: nowrap
      color: ${theme.typoParagraph}
    }

    &:last-of-type {
      margin-right: 0
    }
  `),

  moretags: cmz(`
    & {
      border: none
      padding: 0 0 0 20px
      text-transform: initial
      margin: 0 0 10px 0
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  purelabel: cmz(`
    border: none
    color: ${theme.typoLabel}
    font-size: 17px
  `),

  children: cmz(`
    grid-column: 1 / -1
    grid-row: 4 / -1
  `)
}

const tabularTheme = {
  mode: cmz(
    typo.baseText,
    `
      & {
        background: ${theme.baseBrighter}
        display: flex
        cursor: pointer
        padding: 14px
        color: ${theme.typoParagraph}
        font-size: 17px
        width: 100%
        box-sizing: border-box
      }

      &:hover {
        background: ${theme.baseBright}
      }

      & > * {
        margin-right: 14px
        flex-shrink: 0
        display: flex
        align-items: center
        text-transform: initial
        box-sizing: border-box
      }
    `
  ),

  name: cmz(typo.badgeHeading,
    `
      width: 300px
      white-space: nowrap
      order: 2
      font-weight: normal
    `
  ),

  avatar: cmz(`
    width: 42px
    order: 1
  `),

  controls: cmz(`
    order: 6
  `),

  control: cmz(`
    margin-left: 10px
  `),

  infos: cmz(`
    order: 4
    flex: 1
    justify-content: space-evenly
  `),

  info: cmz(typo.baseText,
    `
      & {
        width: 80px
        font-size: 17px
        margin: 0 14px
        text-align: center
      }

      & > span {
        white-space: nowrap
      }
    `
  ),

  moreinfos: cmz(`
    & {
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  label: cmz(`
    display: none
  `),

  value: cmz(`
    display: block
    color: ${theme.typoParagraph}
    line-height: 1.2
    white-space: normal
    font-size: 17px
  `),

  tip: cmz(`
    font-size: 15px
    color: ${theme.typoParagraph}
    line-height: 1.4
  `),

  tags: cmz(`
    width: 260px
    flex-wrap: wrap
    order: 3
  `),

  tag: cmz(`
    & {
      margin: 0 10px 0 0
      white-space: nowrap
      color: ${theme.typoParagraph}
      font-size: 17px
    }

    &::after {
      content: ','
    }

    &:last-of-type {
      margin-right: 0
    }

    &:last-of-type::after {
      content: ''
    }
  `),

  moretags: cmz(`
    & {
      border: none
      text-transform: initial
      cursor: pointer
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  purelabel: cmz(`
    border: none
  `),

  children: cmz(`
    &:empty {
      display: none
      padding: 0
      margin: 0
    }

    &:not(:empty) {
      display: flex
      order: 5
    }
  `)
}

class ApplicantBadge extends PureComponent<Props> {
  static defaultProps = {
    mode: 'list',
    active: false,
    actions: []
  }

  render () {
    const {
      id,
      mode,
      active,
      name,
      email,
      info,
      tags,
      avatar,
      children,
      actions
    } = this.props

    const cx = mode === 'tabular' ? tabularTheme : listTheme

    const mapInfosToRender = (infos) => (
      <TruncatedList
        inserted
        visible={mode === 'list' ? 4 : infos.length}
        listClass={cx.infos}
        itemClass={cx.info}
        items={infos && infos.filter(info => info.value).map((info, i) => (
          <Dropdown
            key={i}
            tooltip
            hover
            targetYOrigin='top'
            label={(
              <span>
                <span className={cx.label}>{info.label}</span>
                <span className={cx.value}>{info.value}</span>
              </span>
            )}
          >
            {info.tip && <span className={cx.tip}>{info.tip}</span>}
          </Dropdown>
        ))}
        viewMore={(amount, action) => (
          <span className={[cx.info, cx.moreinfos].join(' ')} onClick={action}>
            {`+ ${amount} info`}
          </span>
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
          <span className={[cx.tag, cx.moretags, cx.purelabel].join(' ')} onClick={action}>
            {`+ ${amount} more`}
          </span>
        )}
      />
    )

    const handleClick = (e) => {
      e.stopPropagation()
      const { id, onClick } = this.props
      onClick && onClick(id)
    }

    return id ? (
      <div onClick={handleClick} className={[cx.mode, cx.displayControlsOnHover, active ? cx.active : ''].join(' ')}>
        {(name || email) && (
          <div className={cx.name}>{name || email}</div>
        )}
        {(avatar || email) && (
          <div className={cx.avatar}>
            {avatar || (
              <Avatar
                src={`https://www.gravatar.com/avatar/${md5(email)}?s=90`}
                email={name ? `${name}'s avatar` : 'avatar'}
                size={90}
              />
            )}
          </div>
        )}
        {actions.length > 0 && (
          <div className={cx.controls}>
            {actions.map(({ key, icon: Icon, onClick = null, render, dropdownClassName, tooltipClassName }) => (
              Icon && (
                <Dropdown
                  key={key}
                  tooltip
                  className={dropdownClassName}
                  tooltipClassName={tooltipClassName}
                  label={(
                    <span className={cx.control} onClick={onClick}>
                      <Icon />
                    </span>
                  )}
                >
                  {render && render()}
                </Dropdown>
              )
            ))}
          </div>
        )}
        {info && info.length > 0 && mapInfosToRender(info)}
        {tags && tags.length > 0 && mapTagsToRender(tags)}
        {children && (
          <div className={cx.children}>
            {children}
          </div>
        )}
      </div>
    ) : null
  }
}

export default ApplicantBadge
