import React, { PureComponent } from 'react'
const cmz = require('cmz')
import Markdown from 'react-remarkable'

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

const MarkdownContainer = (props) => {
  return (
    <div className={textareaStyles}>
      {props.children}
    </div>
  )
}

class MarkdownTextarea extends PureComponent<Props> {
  state = {
    text: '',
    showTextarea: true
  }

  onChange = ({ target }) => {
    this.setState({
      text: target.value
    })
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

  handleTabChange = () => {
    const { showTextarea } = this.state
    this.setState({
      showTextarea: !showTextarea
    })
  }

  render () {
    const {
      placeholder = 'Enter your response here.',
      charLimit = 1000,
      onFocus,
      onUnfocus
    } = this.props
    const { text } = this.state

    const onChange = this.onChange
    const showingComponent = this.state.showTextarea ?
      Textarea({
        maxLength: charLimit,
        onChange,
        onFocus,
        onBlur: onUnfocus,
        value: text,
        placeholder
      }) : <Markdown source={text} container={MarkdownContainer}/>

    return (
      <div>
        <nav>
          <button onClick={this.handleTabChange}>Write</button>
          <button onClick={this.handleTabChange}>Preview</button>
        </nav>
        {Root(showingComponent)}
      </div>
    )
  }
}

export default MarkdownTextarea
