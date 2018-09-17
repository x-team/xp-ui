// @flow

import React, { PureComponent } from 'react'
import uuidv4 from 'uuid/v4'

import elem from '../../utils/elem'
import Button from './Button'
import InlineEditor from './InlineEditor'
import Note from './Note'
import TextareaEditor from './TextareaEditor/TextareaEditor'

const cmz = require('cmz')

type Props = {
  notes?: Array<*>,
  onNoteUpdate?: Function
}

type State = {
  page: number,
  perPage: number
}

const Root = elem.div()

const NoteWrapper = elem.div(cmz(`
  margin: 0 0 40px
`))

const buttonClass = cmz(`
  width: 100%
`)

const InlineEditorWrapper = elem.div(cmz(`
  margin-bottom: 24px
`))

class NotesFeed extends PureComponent<Props, State> {
  state = {
    page: 1,
    perPage: 2
  }

  viewMore = () => this.setState((prevState: State) => ({ page: prevState.page + 1 }))

  showViewMore = (total: number = 0) => {
    const { page, perPage } = this.state
    return total / perPage > page
  }

  getNoteWrapper = (note: any, value: string, isHover: boolean, activateEditingMode: Function) =>
    NoteWrapper(
      {
        key: uuidv4()
      },
      <Note
        avatar={note.author_avatar}
        date={note.updated_at}
        name={note.author_name}
        text={value}
        files={note.files}
        isHover={isHover}
        onEditClick={activateEditingMode}
      />
    )

  render () {
    const { page, perPage } = this.state
    const { notes, onNoteUpdate } = this.props
    return Root(
      notes &&
        notes.filter((note, i) => page * perPage > i).map(note =>
          InlineEditorWrapper(
            <InlineEditor
              value={note.body}
              onSave={updatedText =>
                onNoteUpdate &&
                onNoteUpdate({
                  ...note,
                  ...{ body: updatedText }
                })
              }
              presenter={({ value, isHover, activateEditingMode }) =>
                this.getNoteWrapper(note, value, isHover, activateEditingMode)
              }
              editor={({ onValueChange, value }) => (
                <TextareaEditor onChange={text => onValueChange(text)} text={value} />
              )}
            />
          )
        ),
      this.showViewMore(notes && notes.length) && (
        <Button
          outlined
          block
          color='silver'
          onClick={this.viewMore}
          className={buttonClass}
          type='button'
        >
          View more
        </Button>
      )
    )
  }
}

export default NotesFeed
