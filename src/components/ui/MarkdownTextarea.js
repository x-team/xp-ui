import React, { PureComponent } from 'react'
import Markdown from 'react-remarkable'
import type { Element } from 'react'

import elem from '../../utils/elem'
import typo from '../../styles/typo'
import theme from '../../styles/theme'

const cmz = require('cmz')

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
  currentButton: string,
  shouldShowTextLength: boolean
}

const mdContainerStyles = cmz(`
  & {
    min-height: 154px
    border: 1px solid ${theme.lineSilver3}
    padding: 0 20px
  }

  & p {
    padding: 10px 0px
    margin: 0
  }
`)

const textCountStyles = cmz(`
  text-align: right
  color: ${theme.lineRed}
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

const utilStyles = {
  maxWidth: cmz('max-width: 840px'),
  noOutline: cmz('outline: none')
}

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

const Root = elem.div([
  utilStyles.maxWidth,
  cmz(`
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    font-size: 18px
    text-align: left
    min-width: 320px
    margin: 0 auto
  `)
])

const Textarea = elem.textarea(textareaStyles)

const MarkdownContainer = (props: BaseProps) => {
  return (
    <div className={`${textareaStyles} ${mdContainerStyles}`}>
      {props.children}
    </div>
  )
}

class MarkdownTextarea extends PureComponent<Props> {
  WRITE_BUTTON_TEXT = 'Write'
  PREVIEW_BUTTON_TEXT = 'Preview'

  state: State = {
    text: '',
    currentButton: 'Write',
    shouldShowTextLength: false
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

  onFocus = ({ target }: Object) => {
    this.setState({
      shouldShowTextLength: true
    })
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(target)
    }
  }

  onBlur = ({ target }: Object) => {
    this.setState({
      shouldShowTextLength: false
    })
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(target)
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
      onUnfocus
    } = this.props

    const {
      text,
      currentButton,
      shouldShowTextLength
    } = this.state

    const showingComponent = currentButton === this.WRITE_BUTTON_TEXT
      ? Textarea({
        maxLength: charLimit,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        value: text,
        placeholder
      }) : <Markdown source={text || 'No preview available.'} container={MarkdownContainer} />

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
      <div>
        {showingComponent}
        {shouldShowTextLength ?
          <p className={textCountStyles}>
            {text.length}/{charLimit}
          </p>
        :
          null
        }
      </div>
    )
  }
}

export default MarkdownTextarea
