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
    <div className={textareaStyles}>
      {props.children}
    </div>
  )
}

const active = cmz(`
  border-bottom: none
`)

const navStyles = cmz(`
  margin-bottom: 10px
  border-bottom: 1px solid ${theme.lineSilver3}
`)

const navButtonStyles = cmz(`
  background-color: transparent
  font-size: 14px;
  border-radius: 3px 3px 0 0
  border: 1px solid ${theme.lineSilver3}
  padding: 8px 12px
  cursor: pointer
`)

class MarkdownTextarea extends PureComponent<Props> {
  WRITE_BUTTON_TEXT = 'Write'
  PREVIEW_BUTTON_TEXT = 'Preview'

  state = {
    text: '',
    currentButton: 'Write'
  }

  onChange = ({ target: Object }) => {
    this.setState({
      text: target.value
    })
    const { onChange } = this.props
    if (onChange) {
      onChange(target)
    }
  }

  handleTabChange = ({ target: { name } }) => {
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
      }) : <Markdown source={text} container={MarkdownContainer}/>

    return Root(
      <div>
        <nav className={navStyles}>
          <button
            name='Write'
            className={`${currentButton === this.WRITE_BUTTON_TEXT ? active : ''} ${navButtonStyles}`}
            onClick={this.handleTabChange}>
              {this.WRITE_BUTTON_TEXT}
          </button>
          <button
            name='Preview'
            className={`${currentButton === this.PREVIEW_BUTTON_TEXT ? active : ''} ${navButtonStyles}`}
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
