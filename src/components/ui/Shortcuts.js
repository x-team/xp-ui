// @flow

import React, { PureComponent } from 'react'

import { size } from '../../utils/helpers'

import SvgIcon from './SvgIcon'
import Dropdown from './Dropdown'
import GenericCopyToClipboard from './GenericCopyToClipboard'

import theme from '../../styles/theme'
import typo from '../../styles/typo'

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
      padding: 20px 0
    }

    &:last-child {
      border-bottom: none
    }

    &:hover .shortcuts__showCopy {
      visibility: visible
    }
  `),

  anchor: cmz(
    typo.regularText,
    `
      & {
        display: flex
        align-items: center
        text-transform: uppercase
        text-decoration: none
        color: ${theme.typoParagraphOnDarkBackground}
        letter-spacing: 1px
        font-weight: 600
        white-space: nowrap
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

  copy: cmz(`
    width: 16px
    margin-left: 10px
  `),

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
      <GenericCopyToClipboard
        key={value}
        text={value}
        className={cx.showCopy}
        tooltipXOffset={-30}
      >
        <SvgIcon icon='copy' color='text' className={cx.copy} />
      </GenericCopyToClipboard>
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
