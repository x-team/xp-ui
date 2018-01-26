import React, { PureComponent } from 'react'
const cmz = require('cmz')
import Markdown from 'react-remarkable'
import type { Element } from 'react'

import elem from '../../../utils/elem'
import typo from '../../../styles/typo'
import theme from '../../../styles/theme'

type Props = {
  placeholder: string,
  charLimit: number,
  onChange(): void,
  onFocus(): void,
  onUnfocus(): void
}

type BaseProps = {
  children?: Element<*> | string
}

type State = {
  text: string,
  currentButton: string
}

const utilStyles = {
  maxWidth: cmz('max-width: 840px'),
  noOutline: cmz('outline: none'),
}

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    text-align: left
    min-width: 320px
    margin: 0 auto
  `)
])

const textareaStyles = [
  utilStyles.noOutline,
  typo.formText,
  cmz(`
    & {
      display: block
      width: 100%
      height: 156px
      padding: 10px 20px
      margin-bottom: 20px
      resize: vertical
      border: 1px solid ${theme.lineSilver3}
      box-sizing: border-box
    }

    &::-webkit-input-placeholder {
      color: ${theme.formPlaceholder}
    }

    &::-moz-placeholder {
      color: ${theme.formPlaceholder}
    }
  `)
]

const Textarea = elem.textarea(textareaStyles)

const MarkdownContainer = (props: BaseProps) => {
  return (
    <div className={`${textareaStyles} ${mdContainerStyles}`}>
      {props.children}
    </div>
  )
}

const mdContainerStyles = cmz(`
  & {
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    font-size: 18px
    min-height: 154px
    border: 1px solid ${theme.lineSilver3}
  }

  & p {
    padding: 10px 20px
    margin: 0
  }
`)

const active = cmz(`
  border: 1px solid ${theme.lineSilver3} !important
  border-bottom: 0 !important
  background-color: ${theme.baseBrighter} !important
`)

const navStyles = cmz(`
  margin-bottom: -1px
  padding: 0 10px
`)

const navContainerStyles = cmz(`
  margin-bottom: 10px
  border-bottom: 1px solid ${theme.lineSilver3}
`)

const navButtonStyles = cmz(`
  background-color: transparent
  font-size: 14px;
  border-radius: 3px 3px 0 0
  border: 0
  padding: 8px 12px
  outline: none
  cursor: pointer
`)

class MarkdownTextarea extends PureComponent<Props> {
  WRITE_BUTTON_TEXT = 'Write'
  PREVIEW_BUTTON_TEXT = 'Preview'

  state = {
    text: '',
    currentButton: 'Write'
  }

  onChange = ({ target }: Object) => {
    this.setState({
      text: target.value
    })
    const { onChange } = this.props
    if (onChange) {
      onChange(target)
    }
  }

  handleTabChange = ({ target: { name } }: Object) => {
    const { currentButton } = this.state
    if (currentButton !== name) {
      this.setState({
        currentButton: name
      })
    }
  }

  render () {
    const {
      placeholder = 'Enter your response here.',
      charLimit = 1000,
      onFocus,
      onUnfocus
    } = this.props
    const { text, currentButton } = this.state

    const onChange = this.onChange
    const showingComponent = currentButton === this.WRITE_BUTTON_TEXT ?
      Textarea({
        maxLength: charLimit,
        onChange,
        onFocus,
        onBlur: onUnfocus,
        value: text,
        placeholder
      }) : <Markdown source={text || 'No preview available.'} container={MarkdownContainer}/>

    return Root(
      <div className={navContainerStyles}>
        <nav className={navStyles}>
          <button
            name='Write'
            className={`${navButtonStyles} ${currentButton === this.WRITE_BUTTON_TEXT ? active : ''}`}
            onClick={this.handleTabChange}>
              {this.WRITE_BUTTON_TEXT}
          </button>
          <button
            name='Preview'
            className={`${navButtonStyles} ${currentButton === this.PREVIEW_BUTTON_TEXT ? active : ''}`}
            onClick={this.handleTabChange}>
              {this.PREVIEW_BUTTON_TEXT}
          </button>
        </nav>
      </div>,
      showingComponent
    )
  }
}

export default MarkdownTextarea
