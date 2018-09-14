import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import Avatar from './Avatar'
import TruncatedList from './TruncatedList'
import Dropdown from './Dropdown'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

type DisplayModes = {
  LIST: 'list',
  TABULAR: 'tabular'
}

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
  mode?: $Values<DisplayModes>, // eslint-disable-line no-undef
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

const DISPLAY_MODES: DisplayModes = {
  LIST: 'list',
  TABULAR: 'tabular'
}

const listTheme = {
  mode: cmz(
    typo.baseText,
    `
      & {
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
    margin: 0 0 -10px
    display: flex
    flex-wrap: wrap
    align-items: flex-start
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
    margin: 0 0 -10px
  `),

  tagsInner: cmz(`
    display: flex
    flex-wrap: wrap
    align-items: start
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
    width: 80px
  `),

  control: cmz(`
    margin-left: 10px
  `),

  infos: cmz(`
    order: 4
    flex: 1
    display: flex
    justify-content: space-between
  `),

  info: cmz(typo.baseText, `
    width: 80px
    font-size: 17px
    margin: 0 14px
    text-align: center
    display: block
  `),

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
    order: 3
  `),

  tagsInner: cmz(`
    display: flex
    flex-wrap: wrap
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
    mode: DISPLAY_MODES.LIST,
    active: false,
    actions: [],
    info: []
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

    const cx = mode === DISPLAY_MODES.TABULAR ? tabularTheme : listTheme

    const filteredInfos = mode === DISPLAY_MODES.TABULAR ? info : info.filter(each => each.value)

    const mapInfosToRender = (infos) => (
      <TruncatedList
        inserted
        visible={mode === DISPLAY_MODES.LIST ? 4 : infos.length}
        listClass={cx.infos}
        itemClass={cx.info}
        items={filteredInfos.map((info, i) => (
          <Dropdown
            key={i}
            tooltip
            hover
            targetYOrigin='top'
            label={(
              <div>
                <span className={cx.label}>{info.label}</span>
                <span className={cx.value}>{info.value}</span>
              </div>
            )}
          >
            {info.tip && <div className={cx.tip}>{info.tip}</div>}
          </Dropdown>
        ))}
        viewMore={(amount, action) => (
          <div className={[cx.info, cx.moreinfos].join(' ')} onClick={action}>
            {`+ ${amount} info`}
          </div>
        )}
      />
    )

    const mapTagsToRender = (tags) => (
      <TruncatedList
        inserted
        visible={5}
        items={tags}
        listClass={cx.tagsInner}
        itemClass={cx.tag}
        viewMore={(amount, action) => (
          <div className={[cx.tag, cx.moretags, cx.purelabel].join(' ')} onClick={action}>
            {`+ ${amount} more`}
          </div>
        )}
      />
    )

    const handleClick = (e: any) => {
      e && e.stopPropagation()
      const { id, onClick } = this.props
      onClick && onClick(id)
    }

    return id ? (
      <div onClick={handleClick} className={[cx.mode, cx.displayControlsOnHover, active ? cx.active : ''].join(' ')}>
        <div className={cx.name}>{name || email}</div>
        <div className={cx.avatar}>
          {avatar || (
            <Avatar
              src={`https://www.gravatar.com/avatar/${md5(email)}?s=90`}
              email={name ? `${name}'s avatar` : 'avatar'}
              size={90}
            />
          )}
        </div>
        <div className={cx.controls}>
          {actions.map(({ key, icon: Icon, onClick = null, render, dropdownClassName, tooltipClassName }) => (
            Icon && (
              <Dropdown
                key={key}
                tooltip
                className={dropdownClassName}
                tooltipClassName={tooltipClassName}
                onClick={onClick}
                label={(
                  <span className={cx.control}>
                    <Icon />
                  </span>
                )}
              >
                {render && render()}
              </Dropdown>
            )
          ))}
        </div>
        <div className={cx.infos}>
          {info && info.length > 0 && mapInfosToRender(info)}
        </div>
        <div className={cx.tags}>
          {tags && tags.length > 0 && mapTagsToRender(tags)}
        </div>
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
