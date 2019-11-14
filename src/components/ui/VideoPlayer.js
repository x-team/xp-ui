// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'
import Button from './Button'

import theme from '../../styles/theme'

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
  overlay?: boolean
}

type State = {
  displayOverlay: boolean
}

const iframeStyles = cmz(`
  border: 0;
`)

const videoStyles = cmz(`
  text-align: center;
  margin: 0 auto 20px;
`)

const cx = {
  cover: cmz(`
    position: relative
  `),

  overlay: cmz(`
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
  `),

  play: cmz(`
    display: flex
    align-items: center
    justify-content: center
    width: 122px
    height: 72px
    background: ${theme.baseRed.fade(0.05)}
  `)
}

class VideoPlayer extends PureComponent<Props, State> {
  static defaultProps = {
    src: '',
    embedded: false,
    autoPlay: false,
    showControls: true,
    loop: false,
    muted: false,
    poster: '',
    preload: 'auto',
    overlay: false
  }

  state = {
    displayOverlay: !!this.props.overlay
  }

  getEmbeddedVideoSrc = () => {
    const {
      src,
      autoPlay,
      showControls,
      loop,
      muted,
      poster,
      preload,
      overlay
    } = this.props

    return Object.entries({
      autoplay: autoPlay || overlay,
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

  hideOverlay = () => {
    this.setState({
      displayOverlay: false
    })
  }

  renderEmbeddedVideo = () => {
    const { src, width, height } = this.props
    const { displayOverlay } = this.state

    const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i
    const match = src.match(regExp)

    if (!match) {
      return null
    }

    const videoID = match[1]

    return displayOverlay ? (
      <div
        className={cx.cover}
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto'
        }}
      >
        <div className={cx.overlay}>
          <Button className={cx.play} onClick={this.hideOverlay}>
            <SvgIcon icon='play' color='inverted' />
          </Button>
        </div>
        <img
          src={`https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`}
          width={width}
          height={height}
        />
      </div>
    ) : (
      <iframe
        className={iframeStyles}
        src={this.getEmbeddedVideoSrc()}
        width={width}
        height={height}
      />
    )
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
      ? this.renderEmbeddedVideo()
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
          src={src}
        >
          Video cannot be played in this browser.
        </video>
      )
  }
}

export default VideoPlayer
