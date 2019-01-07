// @flow
/* global SyntheticEvent, HTMLInputElement */

import React, { PureComponent } from 'react'

import Button from './Button'
import SvgIcon from './SvgIcon'

import theme from '../../styles/theme'
import typo from '../../styles/typo'
import elem from '../../utils/elem'

const cmz = require('cmz')

type File = {
  id?: number | string,
  filename: string,
  path?: string,
  progress?: number
}

type Files = Array<File>

type Props = {
  files: Files,
  acceptedTypes: string,
  onFileUpload: Function,
  onCancel: Function,
  onDelete: Function
}

const Root = elem.div()

const FilesList = elem.div(cmz(`
  margin-top: 30px
`))

const FileItem = elem.div(cmz(`
  position: relative
  display: flex
  align-items: start
  height: 20px
  margin-bottom: 20px
  border-bottom: 2px solid ${theme.baseSilver}
`))

const FileName = elem.a(cmz(
  typo.baseText,
  `
    & {
      width: 100%
      font-size: 16px
      line-height: 20px
      text-align: left
      text-decoration: none
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    }

    &:hover {
      color: ${theme.typoParagraph}
    }

    &[href]:hover {
      color: ${theme.baseRed}
    }
  `
))

const FileAction = elem.div(cmz(`
  cursor: pointer
  line-height: normal
`))

const FileProgress = elem.div(cmz(`
  position: absolute
  bottom: -2px
  display: block
  height: 2px
  width: 0
  background-color: ${theme.baseRed}
  transition: width 0.5s
`))

const ButtonLabel = elem.span(cmz(`
  padding: 0 20px
`))

const HiddenInput = elem.input(cmz(`
  width: 0.1px
  height: 0.1px
  opacity: 0
  overflow: hidden
  position: absolute
  zIndex: -1
`))

class AttachFiles extends PureComponent<Props> {
  fileInput: HTMLInputElement

  static defaultProps = {
    files: [],
    acceptedTypes: '',
    onFileUpload: () => {},
    onCancel: () => {},
    onDelete: () => {}
  }

  triggerFileSelection = () => {
    this.fileInput.click()
  }

  onFileUpload = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.onFileUpload(event)
    this.fileInput.value = ''
  }

  render () {
    const {
      files,
      acceptedTypes,
      onCancel,
      onDelete
    } = this.props

    const renderButton = (file: File) => {
      if (!file.progress || file.progress === 100) {
        return (
          FileAction(
            {
              onClick: () => onDelete(file.id || file.filename),
              title: `Delete "${file.filename}" file`
            },
            <SvgIcon icon='trashcan' color='grayscale' />
          )
        )
      } else {
        return (
          FileAction(
            {
              onClick: () => onCancel(file.id || file.filename),
              title: `Cancel "${file.filename}" upload`
            },
            <SvgIcon icon='x' color='grayscale' />
          )
        )
      }
    }

    const renderProgress = (progress: number = 0) => {
      if (progress !== 100) {
        return FileProgress({
          style: {
            width: `${progress}%`
          }
        })
      }
    }

    const renderFiles = (files: Files) => {
      return files.length > 0 && (
        FilesList(
          files.map((file, index) => {
            return (
              FileItem(
                {
                  key: `${file.id || file.filename}_${index}`,
                  style: {
                    borderBottomColor: file.progress && file.progress !== 100 ? theme.baseSilver : 'transparent'
                  }
                },
                FileName({ href: file.path, target: '_blank', title: file.filename }, file.filename),
                renderButton(file),
                renderProgress(file.progress)
              )
            )
          })
        )
      )
    }

    return Root(
      HiddenInput({
        type: 'file',
        accept: acceptedTypes,
        onChange: this.onFileUpload,
        ref: node => { this.fileInput = node }
      }),
      <Button outlined onClick={this.triggerFileSelection}>
        {ButtonLabel('Attach a file')}
      </Button>,
      renderFiles(files)
    )
  }
}

export default AttachFiles
