// @flow
/* global SyntheticEvent, HTMLInputElement */

import React, { PureComponent } from 'react'

import QuickSearchButton from './QuickSearchButton'
import SvgIcon from './SvgIcon'
import InputField from '../forms/InputField'

import theme from '../../styles/theme'
import { typeface } from '../../styles/typo'

import type { Icon } from './SvgIcon'

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

  leftIconAction: cmz(`
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
    border: 0 !important
    padding-left: 4px
    margin: 0 0 0 0
  `),

  inputParent: cmz(`
    flex: 1
  `)
}

type Props = {
  leftIcon: Icon,
  text: string,
  isQuickSearching?: boolean,
  quickSearchValue?: string,
  onToggleQuickSearch?: (isEnabled: boolean) => void,
  onQuickSearchChangeValue?: (value: string) => void,
  onQuickSearchSubmit?: (value: string) => void,
  leftIconAction?: () => void
}

type State = {
  isSearching: boolean,
  inputValue: string
}

export default class HeadingWithQuickSearch extends PureComponent<Props, State> {
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

  handleToggleQuickSearch = (isSearching: boolean) : (() => void) => {
    return () => {
      if (this.props.onToggleQuickSearch) {
        this.props.onToggleQuickSearch(isSearching)
      } else {
        this.setState({ isSearching, inputValue: '' })
      }
    }
  }

  renderLeftIcon = (icon: Icon, action?: () => void) => {
    return icon && (action ? (
      <a onClick={action} className={[cx.sidebarHeadingIcon, cx.leftIconAction].join(' ')}>
        <SvgIcon icon={icon} color='frenchGrayDarker' />
      </a>
    ) : (
      <div className={cx.sidebarHeadingIcon}>
        <SvgIcon icon={icon} color='frenchGrayDarker' />
      </div>
    ))
  }

  renderInput = () => {
    const value = this.props.quickSearchValue || this.state.inputValue || ''
    return (
      <form className={cx.inputParent} onSubmit={this.handleQuickSearchSubmit}>
        <InputField
          autoFocus
          value={value}
          onChange={this.handleChangeValue}
          name='input'
          className={cx.input}
          placeholder='Search by Full name or Email Address'
        />
      </form>
    )
  }

  render () {
    const { isQuickSearching, leftIcon, leftIconAction, text } = this.props

    const isQuickSearchActive = isQuickSearching || this.state.isSearching

    return isQuickSearchActive ? (
      <div className={[cx.container, cx.inputContainer].join(' ')}>
        {this.renderLeftIcon('magnifier')}
        {this.renderInput()}
        <div className={cx.sidebarHeadingIconRight} onClick={this.handleToggleQuickSearch(false)} >
          <SvgIcon icon={'x'} color='grayscarpaflow' />
        </div>
      </div>
    ) : (
      <div className={cx.container}>
        {this.renderLeftIcon(leftIcon, leftIconAction)}
        {text}
        <QuickSearchButton onClick={this.handleToggleQuickSearch(true)} />
      </div>
    )
  }
}
