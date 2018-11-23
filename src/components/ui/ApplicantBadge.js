import React, { PureComponent } from 'react'
import md5 from 'crypto-js/md5'

import Avatar from './Avatar'
import TruncatedList from './TruncatedList'
import Dropdown from './Dropdown'
import SelectBox from './SelectBox'

import { size, stopPropagation } from '../../utils/helpers'
import { DISPLAY_MODES } from '../../utils/constants'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

import type { Element } from 'react'
import type { DisplayModes } from '../../utils/types'

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

type Status = 'accepted' | 'pending' | 'excluded'

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
  actions?: Array<Action>,
  status?: Status,
  applicantStatus?: string,
  disableRankingDropdown?: boolean,
  ranking?: number,
  handleRankingChange?: (ranking: number | null) => void,
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
  pending: cmz(
    statusDotBaseStyle,
    `
      background-color: ${theme.statusPending}
    `
  ),
  excluded: cmz(
    statusDotBaseStyle,
    `
      background-color: ${theme.statusExluded}
    `
  )
}

const listTheme = {
  mode: cmz(
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

const tabularTheme = {
  mode: cmz(
    typo.baseText,
    `
      & {
        font-size: 16px
        background: ${theme.baseBrighter}
        display: flex
        cursor: pointer
        padding: 14px
        color: ${theme.typoParagraph}
        min-width: 100%
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
      white-space: normal
      order: 2
      font-weight: normal
      position: relative
    `
  ),

  nameInner: cmz(`
    padding-right: 8px
  `),

  avatar: cmz(`
    width: 42px
    order: 1
  `),

  controls: cmz(`
    display: none
  `),

  control: cmz(`
    margin-left: 10px
  `),

  infos: cmz(`
    order: 4
    flex: 1
    display: flex
    justify-content: space-between
    margin: 0
  `),

  info: cmz(typo.baseText, `
    width: 100px
    font-size: 16px
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
    font-size: 16px
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
      font-size: 16px
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
      order: 7
    }
  `),

  applicantStatus: cmz(
    `
      width: 100px
      font-size: 16px
      order: 5
      justify-content: center
      margin: 0 14px
      text-align: center
    `
  ),

  ranking: cmz(
    typo.baseText,
    `
      & {
        font-size: 16px
        width: 100px;
        order: 6
        justify-content: center
        margin: 0 14px
      }

      & div, & span {
        font-size: 1.063rem
      }
    `
  ),

  disabledRanking: cmz(
    typo.baseText,
    `
      font-size: 1.063rem
      width: 100%
      height: 40px
      color: ${theme.logoGray}
      background: ${theme.lineSilver2}
      border: 1px solid ${theme.lineSilver2}
      border-radius: 2px
      box-sizing: border-box
      display: flex
      align-items: center
      padding: 0 1.25rem
    `
  ),

  rankingSelector: cmz(`
    width: 100%;
  `)
}

class ApplicantBadge extends PureComponent<Props> {
  static defaultProps = {
    mode: DISPLAY_MODES.LIST,
    active: false,
    actions: [],
    info: [],
    disableRankingDropdown: false
  }

  renderStatusIndicator = () => (
    <span className={statusDotStyles[this.props.status]} />
  )

  handleRankingChange = ({ id: ranking, value }: {id: number | null, value: string}) => {
    const { handleRankingChange } = this.props
    handleRankingChange && handleRankingChange(ranking)
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
      actions,
      status,
      applicantStatus,
      disableRankingDropdown,
      ranking
    } = this.props

    const isTabular = mode === DISPLAY_MODES.TABULAR
    const cx = isTabular ? tabularTheme : listTheme
    const filteredInfos = isTabular ? info : info.filter(each => each.value)

    const mapInfosToRender = (infos) => (
      <TruncatedList
        inserted
        visible={isTabular ? infos.length : 4}
        listClass={cx.infos}
        itemClass={cx.info}
        items={filteredInfos.map((info, i) => (
          <Dropdown
            key={i}
            tooltip
            hover
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
        visible={4}
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

    const handleClick = (event: Object) => {
      event.stopPropagation()
      const { id, onClick } = this.props
      onClick && onClick(id)
    }

    if (!id) {
      return null
    }

    const ranks = [
      { id: 1, value: '1' },
      { id: 2, value: '2' },
      { id: 3, value: '3' },
      { id: 4, value: '4' },
      { id: 5, value: '5' },
      { id: 6, value: '6' },
      { id: 7, value: '7' },
      { id: 8, value: '8' },
      { id: 9, value: '9' },
      { id: 10, value: '10' },
      { id: null, value: '-' }
    ].map(item => ({ ...item, selected: item.id === ranking }))

    return (
      <div onClick={handleClick} className={[cx.mode, cx.displayControlsOnHover, active ? cx.active : ''].join(' ')}>
        <div className={cx.name}>
          <div className={cx.nameInner} title={name || email}>{name || email}</div>
          {status && this.renderStatusIndicator()}
        </div>
        <div className={cx.avatar}>
          {avatar || (
            <Avatar
              src={`https://www.gravatar.com/avatar/${md5(email)}?s=65`}
              email={name ? `${name}'s avatar` : 'avatar'}
              size={65}
            />
          )}
        </div>
        <div className={cx.controls}>
          {!isTabular && actions.map(({ key, icon: Icon, onClick = null, render, dropdownClassName, tooltipClassName }) => (
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
          {size(info) > 0 && mapInfosToRender(info)}
        </div>
        <div className={cx.applicantStatus}>
          {applicantStatus}
        </div>
        {isTabular && (
          <div className={cx.ranking}>
            {disableRankingDropdown ? (
              <div className={cx.disabledRanking}>
                {ranking}
              </div>
            ) : (
              <div className={cx.rankingSelector} onClick={stopPropagation}>
                <SelectBox
                  size='small'
                  placeholder=' '
                  visibleItems={4}
                  hasSearch={false}
                  shouldSortItems={false}
                  onClick={this.handleRankingChange}
                  items={ranks}
                />
              </div>
            )}
          </div>
        )}
        <div className={cx.tags}>
          {size(tags) > 0 && mapTagsToRender(tags)}
        </div>
        {children && (
          <div className={cx.children}>
            {children}
          </div>
        )}
      </div>
    )
  }
}

export default ApplicantBadge
