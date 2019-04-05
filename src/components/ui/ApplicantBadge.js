// @flow
/* global SyntheticEvent */

import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import Avatar from './Avatar'
import TruncatedList from './TruncatedList'
import Dropdown from './Dropdown'

import { size } from '../../utils/helpers'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'

type Info = {
  value: string,
  label: string,
  tip?: string
}

type Action = {
  key: string,
  icon: () => Element<*>,
  onClick: (?string) => void
}

type Status = 'accepted' | 'excluded' | ''

type Props = {
  id: number,
  active?: boolean,
  name?: string,
  email: string,
  info: Array<Info>,
  tags: Array<string>,
  avatar?: Element<*>,
  children?: Element<*> | string,
  onClick?: (number) => void,
  actions: Array<Action>,
  status: Status,
  applicantStatus?: string
}

const cmz = require('cmz')

const statusDotBaseStyle = cmz(`
  display: inline-block
  box-sizing: border-box
  width: 8px
  height: 8px
  margin: 3px 0 0
  border-radius: 50%
  flex-shrink: 0
`)

const statusDotStyles = {
  accepted: cmz(
    statusDotBaseStyle,
    `
      background-color: ${theme.statusAccepted}
    `
  ),
  excluded: cmz(
    statusDotBaseStyle,
    `
      background-color: ${theme.statusExluded}
    `
  )
}

const cx = {
  wrapper: cmz(
    typo.baseText,
    `
      & {
        font-size: 16px
        background: ${theme.baseBrighter}
        border: 1px solid ${theme.lineSilver2}
        padding: 20px 20px 10px
        display: grid
        grid-template: 'avatar name status' 'avatar infos infos' 'tags tags tags'
        grid-template-columns: 50px 1fr auto
        grid-template-rows: minmax(10px, auto) auto auto
        grid-gap: 15px
        margin: 0 10px
        cursor: pointer
        position: relative
      }

      &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)
      }

      &::after {
        content: ''
        display: block
        width: calc(100% - 105px)
        height: 1px
        position: absolute
        top: 42px
        left: 85px
        background: ${theme.lineSilver2}
      }
    `
  ),

  active: cmz(`
    & {
      border: 1px solid ${theme.baseRed}
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)
      margin: 0
      padding: 30px 30px 20px
    }

    &::after {
      width: calc(100% - 125px)
      top: 52px
      left: 95px
    }
  `),

  name: cmz(typo.badgeHeading,
    `
      grid-area: name
      display: flex
      align-items: flex-start
      font-size: 15px
      line-height: 1
      position: relative
      overflow: hidden
    `
  ),

  nameInner: cmz(`
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    padding-right: 8px
  `),

  avatar: cmz(`
    & {
      grid-area: avatar
      width: 50px
      height: 50px
    }

    & > * {
      max-width: 50px
    }
  `),

  applicantStatus: cmz(`
    grid-area: status
    font-size: 16px
    line-height: 1
    text-align: center
  `),

  control: cmz(`
    & {
      display: flex
      padding: 0
      margin: 0 0 0 5px
      border: 0
      border-radius: 2px
      cursor: pointer
      width: 14px
      height: 14px
      text-align: center
      line-height: 0
      justify-content: center
      align-items: center
    }

    & svg {
      width: 12px
      height: 12px
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
    & {
      position: absolute
      right: -15px
      top: -15px
      display: flex
      grid-area: status
      visibility: hidden
      justify-content: flex-end
    }

    & > div {
      display: flex
    }
  `),

  displayControlsOnHover: cmz(`
    &:hover .controls {
      visibility: visible
    }
  `),

  infos: cmz(`
    grid-area: infos
    width: 100%
    margin: 0
    display: flex
    flex-wrap: wrap
    align-items: flex-start
  `),

  info: cmz(`
    & {
      margin: 0 10px 6px 0
      line-height: 1
    }

    &:last-of-type {
      margin-right: 0
    }
  `),

  moreinfos: cmz(`
    & {
      color: ${theme.typoLabel}
      margin: 0 0 6px 0
      cursor: pointer
      align-self: flex-end
      font-size: 14px
      line-height: 1
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  label: cmz(`
    display: inline-block
    color: ${theme.typoLabel}
    white-space: nowrap
    font-size: 14px
    line-height: 1
    margin-right: 4px
  `),

  value: cmz(`
    display: inline-block
    color: ${theme.typoParagraph}
    white-space: normal
    font-size: 14px
    line-height: 1
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
    margin: -10px 0 0
  `),

  tagsInner: cmz(`
    display: flex
    flex-wrap: wrap
    align-items: baseline
  `),

  tag: cmz(`
    & {
      font-size: 14px
      border: 1px solid ${theme.lineSilver2}
      border-radius: 3px
      padding: 4px 10px
      text-transform: uppercase
      margin: 0 10px 5px 0
      white-space: nowrap
      color: ${theme.typoParagraph}
      line-height: 1.3
    }

    &:first-of-type {
      margin-left: 0
    }

    &:last-of-type {
      margin-right: 0
    }
  `),

  moretags: cmz(`
    & {
      border: none
      padding: 0
      text-transform: initial
      margin: 0 10px
      cursor: pointer
      text-align: right
      flex: 1
    }

    &:hover {
      color: ${theme.typoHighlight}
    }
  `),

  purelabel: cmz(`
    border: none
    color: ${theme.typoLabel}
    font-size: 16px
  `),

  children: cmz(`
    grid-column: 1 / -1
    grid-row: 4 / -1
  `)
}

class ApplicantBadge extends PureComponent<Props> {
  static defaultProps = {
    active: false,
    actions: [],
    info: [],
    status: ''
  }

  renderStatusIndicator = () => {
    const { status } = this.props
    const style = status && statusDotStyles[status]
    return style && (
      <span className={style} />
    )
  }

  handleBadgeClick = (event: SyntheticEvent<>) => {
    event.stopPropagation()
    const { id, onClick } = this.props
    onClick && onClick(id)
  }

  handleActionClick = (onClick: (?string) => void, actionIdAttr: string) => () => {
    onClick && onClick(actionIdAttr)
  }

  infoLabel = (info: Info) => (
    <div>
      <span className={cx.label}>{info.label}</span>
      <span className={cx.value}>{info.value}</span>
    </div>
  )

  renderInfoLabelDropdown = (key: number, info: Info) => (
    <Dropdown
      key={key}
      tooltip
      hover
      label={this.infoLabel(info)}
    >
      {info.tip && <div className={cx.tip}>{info.tip}</div>}
    </Dropdown>
  )

  renderInfoItems = () => {
    const filteredInfos = this.props.info.filter(each => each.value)
    return filteredInfos.map((info, key) => info.tip
      ? this.renderInfoLabelDropdown(key, info)
      : this.infoLabel(info)
    )
  }

  renderInfosViewMore = (amount: string, action: () => void) => (
    <div className={[cx.info, cx.moreinfos].join(' ')} onClick={action}>
      {`+ ${amount} info`}
    </div>
  )

  mapInfosToRender = () => {
    const { info } = this.props
    return size(info) > 0 && (
      <TruncatedList
        inserted
        visible={4}
        listClass={cx.infos}
        itemClass={cx.info}
        items={this.renderInfoItems()}
        viewMore={this.renderInfosViewMore}
      />
    )
  }

  renderTagsViewMore = (amount: string, action: () => void) => (
    <div className={[cx.tag, cx.moretags, cx.purelabel].join(' ')} onClick={action}>
      {`+ ${amount} more`}
    </div>
  )

  mapTagsToRender = () => {
    const { tags } = this.props
    return size(tags) > 0 && (
      <TruncatedList
        inserted
        visible={4}
        items={tags}
        listClass={cx.tagsInner}
        itemClass={cx.tag}
        viewMore={this.renderTagsViewMore}
      />
    )
  }

  renderActions = () => {
    const { id, actions } = this.props
    return actions.map(({ key, icon: Icon, onClick }) => {
      const actionIdAttr = `applicant${id}-${key}`
      return Icon && (
        <span
          id={actionIdAttr}
          key={key}
          className={cx.control}
          onClick={this.handleActionClick(onClick, actionIdAttr)}
        >
          <Icon />
        </span>
      )
    })
  }

  render () {
    const { id, active, name, email, avatar, children, applicantStatus } = this.props

    return id ? (
      <div onClick={this.handleBadgeClick} className={[cx.wrapper, cx.displayControlsOnHover, active ? cx.active : ''].join(' ')}>
        <div className={cx.name}>
          <div className={cx.nameInner} title={name || email}>{name || email}</div>
          {this.renderStatusIndicator()}
        </div>
        <div className={cx.avatar}>
          {avatar || (
            <Avatar
              src={`https://www.gravatar.com/avatar/${md5(email)}?s=65`}
              alt={name || 'avatar'}
              size={65}
            />
          )}
        </div>
        <div className={cx.controls}>
          {this.renderActions()}
        </div>
        <div className={cx.infos}>
          {this.mapInfosToRender()}
        </div>
        <div className={cx.applicantStatus}>
          {applicantStatus}
        </div>
        <div className={cx.tags}>
          {this.mapTagsToRender()}
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
