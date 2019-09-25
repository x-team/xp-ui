// @flow

import React, { PureComponent } from 'react'

import { size } from '../../utils/helpers'

import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'
import CopyToClipboardButton from './CopyToClipboardButton'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

const cmz = require('cmz')

const cx = {
  shortcutsLabel: cmz(`
    padding: 0 7px 0 10px
  `),

  shortcutsModal: cmz(`
    & {
      background: ${theme.baseBrighter}
      box-shadow: 0 0 20px 0 rgba(0,0,0,.1)
      min-width: 200px
      padding: 0 20px
      border: 1px solid ${theme.lineSilver1}
      box-sizing: border-box
      position: relative
      margin-top: 18px
    }

    &:before, &:after {
      content: ''
      position: absolute
      right: 7px
      display: block
      border-left: 10px solid transparent
      border-right: 10px solid transparent
    }

    &:before {
      border-bottom: 10px solid ${theme.lineSilver1}
      bottom: 100%
    }

    &:after {
      border-bottom: 10px solid ${theme.baseBrighter}
      bottom: calc(100% - 1px)
    }
  `),

  link: cmz(`
    & {
      display: flex
      align-items: center
      border-bottom: 1px solid ${theme.lineSilver1}
      padding: 14px 0
    }

    &:last-child {
      border-bottom: none
    }

    &:hover .shortcuts__showCopy {
      visibility: visible
    }
  `),

  anchor: cmz(
    typeface.strongHeading,
    `
      & {
        display: flex
        align-items: center
        text-transform: uppercase
        text-decoration: none
        color: ${theme.typoParagraphOnDarkBackground}
        letter-spacing: 1px
        font-size: 0.8125rem
        white-space: nowrap
        line-height: 30px
      }

      &:hover {
        color: ${theme.typoHighlightOnDarkBackground}
      }

      &:hover .shortcuts__external path {
        fill: ${theme.iconGrayScarpaFlow}
      }
    `
  ),

  external: cmz(
    'shortcuts__external',
    `
      margin-right: 5px
      flex-shrink: 0
    `
  ),

  showCopy: cmz(
    'shortcuts__showCopy',
    `
      visibility: hidden
      flex-shrink: 0
      line-height: 1
    `
  )
}

type Link = {
  label: string,
  value: string,
  external?: boolean
}

type Props = {
  links?: { [key: string]: Link }
}

class Shortcuts extends PureComponent<Props, void> {
  renderLinks = () => {
    const { links = {} } = this.props
    return Object.keys(links).map(key => this.renderItemState(links[key]))
  }

  renderItemState = ({ value, label, external }: Link) => (
    <div key={value} className={cx.link}>
      <a href={value} className={cx.anchor} target='_blank'>
        {external && (
          <SvgIcon icon='redirect' color='grayscale' className={cx.external} />
        )}
        {label}
      </a>
      {!external && (
        <div className={cx.showCopy}>
          <CopyToClipboardButton key={value} text={value} color='text' />
        </div>
      )}
    </div>
  )

  render () {
    const { links } = this.props
    return size(links) ? (
      <Dropdown
        label={
          <div className={cx.shortcutsLabel}>
            <SvgIcon icon='link' color='text' />
          </div>
        }
        children={
          <div className={cx.shortcutsModal}>
            {this.renderLinks()}
          </div>
        }
        targetXOrigin='right'
      />
    ) : null
  }
}

export default Shortcuts
