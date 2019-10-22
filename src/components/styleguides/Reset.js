// @flow

import React, { PureComponent } from 'react'

import reset from '../../styles/reset'

type Props = {
  theme: string
}

class Reset extends PureComponent<Props> {
  getThemeClassName = () => {
    const { theme } = this.props
    switch (theme) {
      case 'admin':
        return reset.admin
      case 'applicant':
        return reset.applicant
      default:
        return ''
    }
  }

  render () {
    return (
      <div className={this.getThemeClassName()}>
        <h1>Heading H1</h1>
        <p>Paragraph</p>
        <h2>Heading H2</h2>
        <p>Paragraph</p>
        <h3>Heading H3</h3>
        <p>Paragraph</p>
        <h4>Heading H4</h4>
        <p>Paragraph</p>
        <h5>Heading H5</h5>
        <p>Paragraph</p>
        <h6>Heading H6</h6>
        <p>Paragraph</p>
        <hr />
        <ul>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
        </ul>
        <ol>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
        </ol>
        <hr />
        <a href='/'>This is an anchor</a>
      </div>
    )
  }
}

export default Reset
