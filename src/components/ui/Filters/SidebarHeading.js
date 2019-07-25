// @flow
/* global SyntheticEvent, HTMLInputElement */

import React, { PureComponent } from 'react'
import QuickSearchButton from './QuickSearchButton'

import SvgIcon from '../SvgIcon'
import InputField from '../../forms/InputField'
import type { Icon } from '../SvgIcon'
import theme from '../../../styles/theme'
import { typeface } from '../../../styles/typo'

const cmz = require('cmz')

const cx = {
  container: cmz(typeface.extraHeading, `
    text-transform: uppercase
    color: ${theme.typoHighlightOnDarkBackground}
    font-size: 0.9375rem
    display: flex
    flex: 1
    width: 100%
    height: 100%
    align-items: center
    justify-content: stretch
  `),
  sidebarHeadingIcon: cmz(`
    & {
      margin: 0 10px 0 15px
    }

    & svg {
      display: block
    }
  `),
  sidebarHeadingLink: cmz(`
    cursor: pointer
  `),
  sidebarHeadingIconRight: cmz(`
    & {
      margin: 0 25px 0 auto
      cursor: pointer
    }

    & svg {
      display: block
    }
  `),
  inputContainer: cmz(`
    background-color: ${theme.baseBrighter}
  `),
  input: cmz(`
    align-self: stretch
    width: 100%
    height: 100%
    border: 0px !important
    padding-left: 4px
    margin: 0 0 0 0
  `),
  inputParent: cmz(`
    flex: 1
  `)
}

type Props = {
  sidebarIcon: Icon,
  text: string,
  isQuickSearching?: boolean,
  onToggleQuickSearch?: Function,
  onQuickSearchChangeValue?: Function,
  quickSearchValue?: string,
  onQuickSearchSubmit?: Function,
  sidebarHeadingLink?: string
}

type State = {
  isSearching: boolean,
  inputValue: string
}

export default class SidebarHeading extends PureComponent<Props, State> {
  state = {
    isSearching: false,
    inputValue: ''
  }

  toggleQuickSearch = (isSearching: boolean): void => this.setState({ isSearching, inputValue: '' })

  handleChangeValue = (input: Object): void => {
    const newValue = input.target.value
    if (this.props.onQuickSearchChangeValue) {
      this.props.onQuickSearchChangeValue(newValue)
    } else {
      this.setState({ inputValue: input.target.value })
    }
  }
  handleQuickSearchSubmit = (event: SyntheticEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const value = this.props.quickSearchValue || this.state.inputValue
    if (this.props.onQuickSearchSubmit) this.props.onQuickSearchSubmit(value)
  }

  render () {
    const { isSearching, inputValue } = this.state
    const { isQuickSearching, onToggleQuickSearch, quickSearchValue, sidebarIcon, sidebarHeadingLink, text } = this.props

    // component can be either fully controlled or self-controlled
    const shouldRenderInput = isQuickSearching || isSearching
    const onToggleInput = onToggleQuickSearch || this.toggleQuickSearch
    const value = quickSearchValue || inputValue || ''

    return shouldRenderInput ? (
      <div className={[cx.container, cx.inputContainer].join(' ')}>
        <div className={cx.sidebarHeadingIcon}>
          <SvgIcon icon={'magnifier'} color='frenchGrayDarker' />
        </div>
        <form className={cx.inputParent} onSubmit={this.handleQuickSearchSubmit}>
          <InputField
            autoFocus
            onBlur={() => onToggleInput(false)}
            value={value}
            onChange={this.handleChangeValue}
            name='input'
            className={cx.input}
            placeholder='Search by Full name or Email Address'
          />
        </form>
        <div className={cx.sidebarHeadingIconRight} onClick={() => onToggleInput(false)} >
          <SvgIcon icon={'x'} color='grayscarpaflow' />
        </div>
      </div>
    ) : (
      <div className={cx.container}>
        {sidebarIcon && (sidebarHeadingLink ? (
          <a onClick={sidebarHeadingLink} className={[cx.sidebarHeadingIcon, cx.sidebarHeadingLink].join(' ')}>
            <SvgIcon icon={sidebarIcon} color='frenchGrayDarker' />
          </a>
        ) : (
          <div className={cx.sidebarHeadingIcon}>
            <SvgIcon icon={sidebarIcon} color='frenchGrayDarker' />
          </div>
        ))}
        { text }
        <QuickSearchButton onClick={() => onToggleInput(true)} />
      </div>
    )
  }
}
