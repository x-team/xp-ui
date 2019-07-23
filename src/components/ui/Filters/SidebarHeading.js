// @flow
/* global SyntheticEvent, HTMLInputElement */

import React, { PureComponent } from 'react'
import QuickSearchButton from './QuickSearchButton'

import SvgIcon from '../SvgIcon'
import InputField from '../../forms/InputField'
import type { Icon } from '../SvgIcon'
import theme from '../../../styles/theme'

const cmz = require('cmz')

const cx = {
  container: cmz(`
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
    border: 0px
    padding-left: 4px
    margin: 0 0 0 0
  `)
}

type Props = {
  sidebarIcon: Icon,
  text: string,
  isQuickSearching?: boolean,
  onToggleQuickSearch?: Function,
  onQuickSearchChangeValue?: Function,
  quickSearchValue?: string,
  onQuickSearchSubmit?: Function
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
  handleChangeValue = (input: Object): void => this.setState({ inputValue: input.target.value })

  handleQuickSearchSubmit = (event: SyntheticEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const value = this.props.quickSearchValue || this.state.inputValue
    this.props.onQuickSearchSubmit && this.props.onQuickSearchSubmit(value)
  }

  render () {
    const { isSearching, inputValue } = this.state
    const { isQuickSearching, onToggleQuickSearch, onQuickSearchChangeValue, quickSearchValue, sidebarIcon, text } = this.props

    // component can be either fully controlled or self-controlled
    const shouldRenderInput = isQuickSearching || isSearching
    const onToggleInput = onToggleQuickSearch || this.toggleQuickSearch
    const onChangeValue = onQuickSearchChangeValue || this.handleChangeValue
    const value = quickSearchValue || inputValue || ''

    return shouldRenderInput ? (
      <div className={[cx.container, cx.inputContainer].join(' ')}>
        <div className={cx.sidebarHeadingIcon}>
          <SvgIcon icon={'magnifier'} color='frenchGrayDarker' />
        </div>
        <form style={{ flex: 1 }} onSubmit={this.handleQuickSearchSubmit}>
          <InputField
            autoFocus
            value={value}
            onChange={onChangeValue}
            name='input'
            className={cx.input}
            placeholder='Search by Full name or Email Address' />
        </form>
        <div className={cx.sidebarHeadingIconRight} onClick={() => onToggleInput(false)} >
          <SvgIcon icon={'x'} color='grayscarpaflow' />
        </div>
      </div>
    ) : (
      <div className={cx.container}>
        {sidebarIcon && (
          <div className={cx.sidebarHeadingIcon}>
            <SvgIcon icon={sidebarIcon} color='frenchGrayDarker' />
          </div>
        )}
        { text }
        <QuickSearchButton onClick={() => onToggleInput(true)} />
      </div>
    )
  }
}
