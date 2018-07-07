// @flow

import React, { PureComponent } from 'react'
import uuidv4 from 'uuid/v4'

import elem from '../../utils/elem'
import FileLink from './FileLink'

const cmz = require('cmz')

type Props = {
  files?: Array<Object>,
}

const Root = elem.div()

const FileLinkWrapper = elem.div(cmz(`
  margin: 0 0 10px
`))

class FileLinks extends PureComponent<Props, null> {
  render () {
    const { files } = this.props

    return (
      Root(
        files && files
          .map(file => (
            FileLinkWrapper(
              { key: uuidv4() },
              <FileLink path={file.path} name={file.filename} />
            )
          )
        )
      )
    )
  }
}

export default FileLinks
