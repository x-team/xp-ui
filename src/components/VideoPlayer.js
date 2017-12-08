// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

type Props = {
  width?: number,
  height?: number,
  poster?: string,
  embedded?: boolean,
  showControls?: boolean,
  src: string,
}

const iframeStyles = cmz(`
  border: 0;
`)

const videoStyles = cmz(`
  text-align: center;
  margin: 0 auto 20px;
`)

class VideoPlayer extends PureComponent<Props> {
  static defaultProps = {
    showControls: true,
    embedded: false,
    poster: ''
  }

  render () {
    const {
      width,
      height,
      poster,
      src,
      embedded,
      showControls
    } = this.props

    const embeddedVideoSrc = showControls ? `${src}?showinfo=0` : `${src}?controls=0&showinfo=0`

    return embedded
      ? (
        <iframe
          className={iframeStyles}
          width={width}
          height={height}
          src={embeddedVideoSrc}
        />
      )
      : (
        <video
          className={videoStyles}
          controls={showControls}
          width={width}
          height={height}
          poster={poster}
        >
          <source src={src} />
          Video cannot be played in this browser.
        </video>
      )
  }
}

export default VideoPlayer
