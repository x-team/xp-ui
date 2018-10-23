// @flow

import React, { PureComponent } from 'react'

import elem from '../../utils/elem'
import Button from './Button'
import Note from './Note'

const cmz = require('cmz')

type Props = {
  notes?: Array<*>,
  showNoteType?: boolean,
  onNoteUpdate?: Function
}

type State = {
  page: number,
  perPage: number
}

const Root = elem.div()

const buttonClass = cmz(`
  width: 100%
`)

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

  handleNoteUpdate = (note: Object) => (updatedText: string) => {
    const { onNoteUpdate } = this.props
    onNoteUpdate && onNoteUpdate({ ...note, body: updatedText })
  }

  render () {
    const { page, perPage } = this.state
    const { notes, showNoteType } = this.props

    return Root(
      notes && notes
        .filter((note, i) => page * perPage > i)
        .map(note => <Note
          key={note.id}
          onNoteUpdate={this.handleNoteUpdate(note)}
          avatar={note.author_avatar}
          date={note.updated_at}
          name={note.author_name}
          text={note.body}
          files={note.files}
          noteType={note.target_type}
          showNoteType={showNoteType}
        />
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
