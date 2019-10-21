// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoPlayer from './VideoPlayer'

const VIDEO_SOURCE = 'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'

storiesOf('Core Components|VideoPlayer', module)
  .add('basic usage', () => (
    <VideoPlayer src={VIDEO_SOURCE} />
  ))

storiesOf('Core Components|VideoPlayer/Use Cases', module)
  .add('embedded video', () => (
    <VideoPlayer src={'https://www.youtube.com/embed/R6NUFRNEai4'} embedded width={640} height={360} />
  ))

storiesOf('Core Components|VideoPlayer/States', module)
  .add('loop', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      loop
    />
  ))
  .add('muted', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      muted
    />
  ))
  .add('controls hidden', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      showControls={false}
    />
  ))

storiesOf('Core Components|VideoPlayer/Debug', module)
  .add('missing props (does component explodes?)', () => <VideoPlayer />)
  .add('custom height and width', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
    />
  ))
  .add('using poster', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      poster={'http://www.hdfbcover.com/randomcovers/covers/never-stop-dreaming-quote-fb-cover.jpg'}
    />
  ))
  .add('no preload, custom width and custom height set', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      preload={'none'}
    />
  ))
  .add('no controls, custom width and custom height set', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
      showControls={false}
    />
  ))
  .add('visible controls, custom width and custom height set', () => (
    <VideoPlayer
      src={VIDEO_SOURCE}
      width={640}
      height={360}
    />
  ))
  .add('visible controls, custom width set / auto height', () => (
    <VideoPlayer src={VIDEO_SOURCE} width={640} />
  ))
  .add('visible controls, custom height set / auto width', () => (
    <VideoPlayer src={VIDEO_SOURCE} height={360} />
  ))
