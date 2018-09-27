// @flow

import React, { PureComponent } from 'react'
import differenceInSeconds from 'date-fns/difference_in_seconds'
import differenceInMinutes from 'date-fns/difference_in_minutes'
import differenceInHours from 'date-fns/difference_in_hours'
import formatDate from 'date-fns/format'
import Markdown from 'markdown-to-jsx'

import Avatar from './Avatar'
import Text from './Text'
import FileLinks from './FileLinks'
import PencilButton from './PencilButton'
import InlineEditor from './InlineEditor'
import TextareaEditor from './TextareaEditor/TextareaEditor'

import typo from '../../styles/typo'
import theme from '../../styles/theme'
import elem from '../../utils/elem'

import type { EditorProps, PresenterProps } from './InlineEditor'

const cmz = require('cmz')

const Root = elem.div(cmz(`
  display: flex
`))

const AvatarWrapper = elem.div(cmz(`
  margin-right: 16px
  flex-shrink: 0
`))

const Body = elem.div(cmz(`
  display: flex
  flex-direction: column
`))

const Options = elem.div(cmz(`
  padding-top: 4px
  margin-left: auto
`))

const Name = elem.span(cmz(
  typo.headline,
  `
    font-size: 16px
    line-height: normal
    margin: 0
    text-transform: uppercase
  `
))

const Time = elem.span(cmz(
  typo.baseText,
  `
    font-size: 12px
    line-height: 12px
    margin-top: 8px
    margin-bottom: 10px
  `
))

const InlineEditorWrapper = elem.div(cmz(
  `
    margin-bottom: 24px
  `
))

const TextWrapper = elem.div(cmz(
  `
    & p:first-of-type {
      margin-top: 0
    }

    & p:last-of-type {
      margin-bottom: 0
    }

    & a {
      color: ${theme.baseRed}
      text-decoration: none
    }

    & a:hover {
      text-decoration: underline
    }
  `
))

const FileLinksWrapper = elem.div()

const timeFromNow = date => {
  const now = new Date()
  const hoursDelta = differenceInHours(now, date)

  if (hoursDelta >= 24) {
    return formatDate(date, 'DD MMM YY')
  }

  const minutesDelta = differenceInMinutes(now, date)

  if (minutesDelta >= 60) {
    return `${hoursDelta} h ago`
  }

  if (differenceInSeconds(now, date) >= 60) {
    return `${minutesDelta} m ago`
  }

  return 'just now'
}

type Props = {
  avatar?: string,
  date?: Date,
  name?: string,
  text?: string,
  files?: Array<Object>,
  onNoteUpdate: Function
}

type State = {
  isHover?: boolean
}

class Note extends PureComponent<Props, State> {
  interval: number
  activateEditingMode: Function

  state = {
    isHover: false
  }

  componentDidMount () {
    const { date } = this.props

    if (date) {
      const now = new Date()
      const hoursDelta = differenceInHours(now, date)
      if (hoursDelta < 1) {
        this.interval = window.setInterval(() => this.forceUpdate(), 60 * 1000) // 1 minute
      } else if (hoursDelta < 24) {
        this.interval = window.setInterval(() => this.forceUpdate(), 20 * 60 * 1000) // 20 minutes
      }
    }
  }

  componentWillUnmount () {
    if (this.interval) {
      window.clearInterval(this.interval)
    }
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true })
  }

  handleMouseLeave = () => {
    this.setState({ isHover: false })
  }

  renderPresenter = ({ value, activateEditingMode }: PresenterProps) => {
    this.activateEditingMode = activateEditingMode
    return TextWrapper({}, <Text content={<Markdown>{value}</Markdown>} isPureContent />)
  }

  renderEditor = ({ onValueChange, value }: EditorProps) =>
    <TextareaEditor onChange={onValueChange} text={value} />

  render () {
    const { isHover } = this.state
    const { avatar, name, date, files, text, onNoteUpdate } = this.props

    return (
      Root(
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        avatar && AvatarWrapper(
          <Avatar alt={name} src={avatar} size={40} />
        ),
        Body(
          name && Name(name),
          date && Time(timeFromNow(date)),
          text && InlineEditorWrapper(
            <InlineEditor
              value={text}
              onSave={onNoteUpdate}
              presenter={this.renderPresenter}
              editor={this.renderEditor}
            />
          ),
          FileLinksWrapper({}, <FileLinks files={files} />)
        ),
        Options(
          isHover && <PencilButton color='monochrome' onClick={this.activateEditingMode} />
        )
      )
    )
  }
}

export default Note
