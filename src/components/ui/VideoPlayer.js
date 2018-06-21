// @flow

import React, { PureComponent } from 'react'

const cmz = require('cmz')

type Props = {
  src: string,
  embedded?: boolean,
  width?: number,
  height?: number,
  autoPlay?: boolean,
  showControls?: boolean,
  loop?: boolean,
  muted?: boolean,
  poster?: string,
  preload?: 'auto' | 'metadata' | 'none',
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
    embedded: false,
    autoPlay: false,
    showControls: true,
    loop: false,
    muted: false,
    poster: '',
    preload: 'auto'
  }

  getEmbeddedVideoSrc = () => {
    const {
      src,
      autoPlay,
      showControls,
      loop,
      muted,
      poster,
      preload
    } = this.props

    return Object.entries({
      autoplay: autoPlay,
      controls: showControls,
      loop,
      muted,
      poster,
      preload
    }).reduce((result, [key, val]) => {
      const value = typeof val !== 'boolean'
        ? val
        : val === true ? 1 : 0

      return `${result}&${key}=${String(value)}`
    }, `${src}?showinfo=0`)
  }

  render () {
    const {
      src,
      embedded,
      width,
      height,
      autoPlay,
      showControls,
      loop,
      muted,
      poster,
      preload
    } = this.props

    return embedded
      ? (
        <iframe
          className={iframeStyles}
          src={this.getEmbeddedVideoSrc()}
          width={width}
          height={height}
        />
      )
      : (
        <video
          className={videoStyles}
          width={width}
          height={height}
          autoPlay={autoPlay}
          controls={showControls}
          loop={loop}
          muted={muted}
          poster={poster}
          preload={preload}
        >
          <source src={src} />
          Video cannot be played in this browser.
        </video>
      )
  }
}

export default VideoPlayer
