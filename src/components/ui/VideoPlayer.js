// @flow

import React, { PureComponent } from 'react'

import SvgIcon from './SvgIcon'
import Button from './Button'

import theme from '../../styles/theme'

import { parseVideoUrl } from '../../utils/helpers'

const cmz = require('cmz')

type Props = {
  src: string,
  embedded?: boolean,
  width?: number,
  height?: number,
  autoplay?: boolean,
  showControls?: boolean,
  loop?: boolean,
  muted?: boolean,
  poster?: string,
  preload?: 'auto' | 'metadata' | 'none',
  overlay?: boolean
}

type State = {
  isOverlayHidden: boolean
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
    autoplay: false,
    showControls: true,
    loop: false,
    muted: false,
    poster: '',
    preload: 'auto',
    overlay: false
  }

  state = {
    isOverlayHidden: false
  }

  getEmbeddedVideoSrc = () => {
    const {
      src,
      autoplay,
      showControls,
      loop,
      muted,
      poster,
      preload,
      overlay
    } = this.props

    const shouldPlayed = autoplay || overlay

    return Object.entries({
      autoplay: shouldPlayed,
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

  handleHideOverlay = () => {
    this.setState({
      isOverlayHidden: true
    })
  }

  renderOverlay = (handlePlay: () => void, poster: string) => {
    const { width, height } = this.props
    return (
      <div
        className={cx.cover}
        style={{
          width: width ? `${width}px` : 'auto',
          height: height ? `${height}px` : 'auto'
        }}
      >
        <div className={cx.overlay}>
          <Button className={cx.play} onClick={handlePlay}>
            <SvgIcon icon='play' color='inverted' />
          </Button>
        </div>
        <img
          src={poster}
          width={width}
          height={height}
        />
      </div>
    )
  }

  renderEmbeddedVideo = () => {
    const { width, height } = this.props
    return (
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
      autoplay,
      showControls,
      loop,
      muted,
      poster,
      preload,
      overlay
    } = this.props
    const { isOverlayHidden } = this.state

    if (embedded) {
      const parsedVideoSrc = parseVideoUrl(src)
      const shouldRenderEmbeddedOverlay = overlay && !isOverlayHidden && parsedVideoSrc.poster
      return shouldRenderEmbeddedOverlay
        ? this.renderOverlay(this.handleHideOverlay, parsedVideoSrc.poster)
        : this.renderEmbeddedVideo()
    }

    return (
      <video
        className={videoStyles}
        width={width}
        height={height}
        autoplay={autoplay}
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
