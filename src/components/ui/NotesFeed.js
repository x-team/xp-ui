// @flow

import React, { PureComponent } from 'react'
import uuidv4 from 'uuid/v4'

import elem from '../../utils/elem'
import Note from './Note'
import Button from './Button'

const cmz = require('cmz')

type Props = {
  notes?: Array<*>,
}

type State = {
  page: number,
  perPage: number,
}

const Root = elem.div()

const NoteWrapper = elem.div(cmz(`
  margin: 0 0 40px
`))

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
    return (total / perPage) > page
  }

  render () {
    const { page, perPage } = this.state
    const { notes } = this.props

    return (
      Root(
        notes && notes
          .filter((note, i) => (page * perPage) > i)
          .map(note => (
            NoteWrapper(
              {
                key: uuidv4()
              },
              <Note
                avatar={note.author_avatar}
                date={note.updated_at}
                name={note.author_name}
                text={note.body}
                files={note.files}
              />
            )
          )),
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
    )
  }
}

export default NotesFeed
