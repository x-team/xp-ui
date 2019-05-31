// @flow

import React, { PureComponent } from 'react'
import TruncateMarkup from 'react-truncate-markup'
import differenceInHours from 'date-fns/difference_in_hours'

import Avatar from './Avatar'
import SvgIcon from './SvgIcon'
import FileLinks from './FileLinks'
import PencilButton from './PencilButton'
import InlineEditor from './InlineEditor'
import RichTextEditor from './RichTextEditor'

import typo from '../../styles/typo'
import theme from '../../styles/theme'
import elem from '../../utils/elem'
import { timeSince } from '../../utils/helpers'

import type { EditorProps, PresenterProps } from './InlineEditor'

const cmz = require('cmz')

const Root = elem.div(cmz(`
  position: relative
  display: flex
`))

const AvatarWrapper = elem.div(cmz(`
  margin-right: 16px
  flex-shrink: 0
`))

const Body = elem.div(cmz(`
  display: flex
  flex-direction: column
  flex-grow: 1
`))

const Options = elem.div(cmz(`
  position: absolute
  top: 4px
  right: 4px
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

const SubHeader = elem.div(cmz(
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

const ReadMoreWrapper = elem.div(cmz(
  `
    & * {
      display: flex
      flex-direction: column
      align-items: flex-end
      cursor: pointer
    }

    & div span span{
      color: ${theme.baseRed}
    }

    & div span {
      display: flex
      flex-direction: row
      align-items: center
    }

    & svg {
      margin-left: 10px
    }
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

const RichContentWrapper = elem.div(cmz(
  `
  & * {
    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: 300
    font-size: 1.25rem
    color: ${theme.typoParagraph}
    line-height: 1.5
  }
  `
))

const FileLinksWrapper = elem.div()

type Props = {
  avatar?: string,
  date?: Date,
  name?: string,
  text?: string,
  files?: Array<Object>,
  noteType?: string,
  showNoteType?: boolean,
  onNoteUpdate: Function
}

type State = {
  newValueIsValid: boolean,
  newValue: string,
  isHover: boolean,
  shouldTruncate: boolean
}

class Note extends PureComponent<Props, State> {
  interval: number
  activateEditingMode: Function

  state = {
    newValueIsValid: true,
    newValue: this.props.text || '',
    isHover: false,
    shouldTruncate: true
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

  componentDidUpdate (prevProps: Props) {
    if (prevProps.text !== this.props.text) {
      this.setState({ newValue: this.props.text })
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

  toggleTruncate = () => {
    this.setState(prevState => ({
      shouldTruncate: !prevState.shouldTruncate
    }))
  }

  renderPresenter = ({ activateEditingMode }: PresenterProps) => {
    this.activateEditingMode = activateEditingMode
    const { newValue, shouldTruncate } = this.state
    const readMore = (
      <span>
        {shouldTruncate && '...'}
        {ReadMoreWrapper(
          <div onClick={this.toggleTruncate}>
            {shouldTruncate ? (
              <span>
                <span>READ MORE</span>
                <SvgIcon icon='triangledown' />
              </span>
            ) : (
              <span>
                <span>SHOW LESS</span>
                <SvgIcon icon='triangleup' />
              </span>
            )}
          </div>)
        }
      </span>
    )

    return shouldTruncate ? TextWrapper(
      RichContentWrapper(
        <TruncateMarkup lines={3} ellipsis={readMore}>
          <div>{newValue}</div>
        </TruncateMarkup>
      )) : TextWrapper(
      RichContentWrapper(
        <div>
          <div>{newValue}</div>
          {readMore}
        </div>
      )
    )
  }

  handleEditorValueChange = (onValueChange: (value: any) => mixed) => ({ markdown: value }: { markdown: string }) => {
    this.setState({
      newValueIsValid: !!value.trim(),
      newValue: value
    })

    onValueChange(value)
  }

  renderEditor = ({ onValueChange }: EditorProps) => {
    const { newValue = '' } = this.state

    return (
      <RichTextEditor
        initialValue={newValue}
        handleChange={this.handleEditorValueChange(onValueChange)}
        characterLimit={5000}
      />
    )
  }

  handleCancel = () => {
    const { text = '' } = this.props

    this.setState({ newValue: text })
  }

  render () {
    const { isHover, newValueIsValid } = this.state
    const { avatar, name, date, files, text, onNoteUpdate, noteType, showNoteType } = this.props
    const capitalizedNoteType = noteType ? noteType.charAt(0).toUpperCase() + noteType.slice(1) : ''
    const noteTypeText = noteType ? `, in ${capitalizedNoteType} Notes` : ''

    return (
      Root(
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        avatar && AvatarWrapper(
          <Avatar alt={avatar || name} src={avatar} size={40} />
        ),
        Body(
          name && Name(name),
          SubHeader(
            date && timeSince(date),
            showNoteType && noteTypeText
          ),
          text && InlineEditorWrapper(
            <InlineEditor
              value={text}
              isValid={newValueIsValid}
              onSave={onNoteUpdate}
              onCancel={this.handleCancel}
              presenter={this.renderPresenter}
              editor={this.renderEditor}
              shouldSaveOnEnter={false}
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
