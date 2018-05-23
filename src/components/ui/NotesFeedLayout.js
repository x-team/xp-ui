// @flow

import React, { PureComponent } from 'react'
import uuidv4 from 'uuid/v4'
import elem from '../../utils/elem'
import Note from './Note'
import Button from './Button'
import ErrorBox from './ErrorBox'
import Loader from './Loader'
const cmz = require('cmz')

type Props = {
  notes?: Array<*>,
  isFetching?: boolean,
  error?: string,
}

type State = {
  page: number,
  perPage: number,
}

const Root = elem.div()

const Loading = elem.div(cmz(`
  text-align: center
`))

const NoteWrapper = elem.div(cmz(`
  margin: 0 0 40px
`))

const buttonClass = cmz(`
  width: 100%
`)

class NotesFeedLayout extends PureComponent<Props, State> {
  state = {
    page: 1,
    perPage: 2
  }

  viewMore = () => this.setState({ page: this.state.page + 1 })

  showViewMore = (total: number) => (total / this.state.perPage) > this.state.page

  render () {
    const { notes, isFetching, error } = this.props
    return (
      Root(
        error && <ErrorBox errors={{ name: error }} />,
        isFetching && Loading(<Loader />),
        notes && notes
          .filter((note, i) => (this.state.page * this.state.perPage) > i)
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
              />
            )
          )
        ),
        this.showViewMore((notes && notes.length) || 0) && (
          <Button
            outlined
            block
            color='silver'
            onClick={this.viewMore}
            className={buttonClass}
          >
            View more
          </Button>
        )
      )
    )
  }
}

export default NotesFeedLayout
