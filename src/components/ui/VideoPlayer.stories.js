// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import VideoPlayer from './VideoPlayer'

storiesOf('UI Components|VideoPlayer', module)
  .add('regular video, source is provided only, video is set to its original sizes', () => (
    <VideoPlayer src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'} />
  ))
  .add('loop set, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
      loop
    />
  ))
  .add('muted set, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
      muted
    />
  ))
  .add('poster set, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
      poster={'http://www.hdfbcover.com/randomcovers/covers/never-stop-dreaming-quote-fb-cover.jpg'}
    />
  ))
  .add('no preload, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
      preload={'none'}
    />
  ))
  .add('no controls, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
      showControls={false}
    />
  ))
  .add('visible controls, custom width and custom height set', () => (
    <VideoPlayer
      src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'}
      width={640}
      height={360}
    />
  ))
  .add('visible controls, custom width set / auto height', () => (
    <VideoPlayer src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'} width={640} />
  ))
  .add('visible controls, custom height set / auto width', () => (
    <VideoPlayer src={'https://files.slack.com/files-pri/T0257R0RP-F7SGYKZ5F/refactor.mp4'} height={360} />
  ))
  .add('embedded video, visible controls', () => (
    <VideoPlayer src={'https://www.youtube.com/embed/R6NUFRNEai4'} embedded width={640} height={360} />
  ))
  .add('embedded video, hidden controls', () => (
    <VideoPlayer
      src={'https://www.youtube.com/embed/R6NUFRNEai4'}
      embedded
      width={640}
      height={360}
      showControls={false}
    />
  ))

storiesOf('UI Components|VideoPlayer/Debug', module)
  .add('missing props (does component explodes?)', () => <VideoPlayer />)
